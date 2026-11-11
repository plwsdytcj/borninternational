'use client';

/**
 * GlobalOfficesMap —— 官网「全球办公室 / Global offices」桌面端板块
 *
 * 特性
 *  - 真实底图：按访客网络与城市所在地区自动选择底图源，瓦片连续失败自动切换备用源
 *      中国三城（香港/成都/上海） → 高德审图栅格底图（免 Key，国内外网络均可加载）
 *      境外三城（圣彼得堡/莫斯科/雅典） → 国际网络走 OpenStreetMap 街道级；国内网络退化到天地图/高德粗图
 *  - 点击城市：卡片平移到主卡位放大，地图 flyTo 跟随
 *  - 主卡用玻璃面板（backdrop-blur）浮在地图上，其余五张保持扁平
 *  - 每张卡右上角是当地时间（Intl.DateTimeFormat + IANA 时区）
 *  - 无 npm 依赖：Leaflet 运行时从 CDN 载入（含国内镜像回退），不需要 npm install
 *
 * 依赖：React 18+、Tailwind（类名对齐 slate/cyan 色板）
 *
 * 接入方式（3 步，不需要 npm install）
 *  1) 放到 components/GlobalOfficesMap.tsx（或 app/components/），文件顶部的 'use client' 不要删；
 *  2) 在「全球办公室」板块位置渲染：
 *       <div className="hidden lg:block"><GlobalOfficesMap /></div>
 *  3) 移动端：如果已有手牌扇组件，给它的外层加 lg:hidden（<1024px 用手牌扇，≥1024px 用本组件）；
 *     如果旧的 Tailwind 三列网格（sm:grid-cols-2 xl:grid-cols-3）还在，删掉那段网格 JSX，
 *     避免两套内容重复渲染（数据已内置在本文件 OFFICES 中）。
 *
 * 验证：npm run build 通过；桌面主卡在左上占 2×2、背景为真实街道地图；点城市卡片平移+地图飞行；
 *      手机端布局不变；源码中能 grep 到全部 6 条地址（SEO）；控制台无报错。
 *
 * 已知边界（非 bug）：国内网络访问时，境外三城地图精度较低（高德无境外街道数据、OSM 国内不可达），
 *      组件会显示「境外细节受限」；主卡飞行时的轻微 rotateY 为有意设计，prefers-reduced-motion 下自动关闭。
 */

import { useEffect, useRef, useState } from 'react';

export type Region = 'cn' | 'intl';

export type OfficeData = {
  city: string;
  cn: string;
  country: string;
  role: string;
  addr: string;
  zone: string;
  lat: number;
  lng: number;
  region: Region;
  zoom: number;
};

/** 六个办公室：文案与官网现有内容保持一致，坐标为真实经纬度 */
export const OFFICES: OfficeData[] = [
  {
    city: 'Hong Kong', cn: '香港', country: 'Hong Kong SAR, China', role: 'Hong Kong Headquarters',
    addr: '703, T2, South Seas Centre, 75 Mody Rd., Hong Kong',
    zone: 'Asia/Hong_Kong', lat: 22.2988, lng: 114.1722, region: 'cn', zoom: 14,
  },
  {
    city: 'Chengdu', cn: '成都', country: 'China', role: 'Chengdu Office',
    addr: 'Room 12, 2/F, No. 71 Fuheyuan Heng Road, Jinniu District, Chengdu, Sichuan, China',
    zone: 'Asia/Shanghai', lat: 30.5728, lng: 104.0668, region: 'cn', zoom: 14,
  },
  {
    city: 'Shanghai', cn: '上海', country: 'China', role: 'Shanghai Office',
    addr: 'Building 10, No. 860 Xinyang Highway, Lin-gang Special Area, China (Shanghai) Pilot Free Trade Zone',
    zone: 'Asia/Shanghai', lat: 31.2304, lng: 121.4737, region: 'cn', zoom: 14,
  },
  {
    city: 'St. Petersburg', cn: '圣彼得堡', country: 'Russia', role: 'St. Petersburg Office',
    addr: '199178, 10-я линия В.О., д. 59 (Маркусь), офис 425',
    zone: 'Europe/Moscow', lat: 59.9311, lng: 30.3609, region: 'intl', zoom: 14,
  },
  {
    city: 'Moscow', cn: '莫斯科', country: 'Russia', role: 'Moscow Office',
    addr: 'Ул. Профсоюзная 56, офис 1203, г. Москва',
    zone: 'Europe/Moscow', lat: 55.7558, lng: 37.6173, region: 'intl', zoom: 14,
  },
  {
    city: 'Athens', cn: '雅典', country: 'Greece', role: 'Athens Office',
    addr: 'By appointment · address shared on request',
    zone: 'Europe/Athens', lat: 37.9838, lng: 23.7275, region: 'intl', zoom: 14,
  },
];

/** 可选：天地图 tk（lbs.tianditu.gov.cn 免费申请）。填入后国内网络访问时，境外三城可显示到城市级 */
const TIANDITU_TK = '';

/* ============================ 底图供应商 ============================ */

type ProvKey = 'amap' | 'osm' | 'tdt';

const PROV: Record<ProvKey, {
  name: string; cls: string; sub: string; maxNativeZoom: number; url: string; credit: string;
}> = {
  amap: {
    name: '高德地图', cls: 'go-tiles-dark', sub: '1234', maxNativeZoom: 18,
    url: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    credit: '&copy; 高德地图',
  },
  osm: {
    name: 'OpenStreetMap', cls: 'go-tiles-dark', sub: 'abc', maxNativeZoom: 19,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    credit: '&copy; OpenStreetMap contributors',
  },
  tdt: {
    name: '天地图', cls: 'go-tiles-dark', sub: '01234567', maxNativeZoom: 18,
    url: 'https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0'
      + '&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' + TIANDITU_TK,
    credit: '&copy; 国家地理信息公共服务平台 天地图',
  },
};

/* ============================ Leaflet 运行时 ============================ */

const LEAFLET_VER = '1.9.4';
const CDN_BASES = [
  `https://registry.npmmirror.com/leaflet/${LEAFLET_VER}/files/dist/`, // 国内镜像，最快
  `https://unpkg.com/leaflet@${LEAFLET_VER}/dist/`,
  `https://cdn.jsdelivr.net/npm/leaflet@${LEAFLET_VER}/dist/`,
];

function injectCss(href: string, timeout = 4000): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    const t = window.setTimeout(() => reject(new Error('css timeout')), timeout);
    link.onload = () => { window.clearTimeout(t); resolve(); };
    link.onerror = () => { window.clearTimeout(t); reject(new Error('css error')); };
    document.head.appendChild(link);
  });
}

function injectScript(src: string, timeout = 8000): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    const t = window.setTimeout(() => reject(new Error('js timeout')), timeout);
    s.onload = () => { window.clearTimeout(t); resolve(); };
    s.onerror = () => { window.clearTimeout(t); reject(new Error('js error')); };
    document.head.appendChild(s);
  });
}

let leafletPromise: Promise<any> | null = null;

function loadLeaflet(): Promise<any> {
  const w = window as any;
  if (w.L) return Promise.resolve(w.L);
  if (leafletPromise) return leafletPromise;
  leafletPromise = (async () => {
    for (const base of CDN_BASES) {
      try {
        await injectCss(base + 'leaflet.css');
        await injectScript(base + 'leaflet.js');
        if ((window as any).L) return (window as any).L;
      } catch { /* 换下一个 CDN */ }
    }
    throw new Error('Leaflet 加载失败');
  })();
  return leafletPromise;
}

/* ============================ 局部样式（不依赖 Tailwind 生成） ============================ */

const STYLE_ID = 'go-map-styles';
const STYLE_CSS = `
.go-map .leaflet-container{background:#060d18;outline:none;font:inherit}
.go-tiles-dark{filter:invert(.93) hue-rotate(180deg) saturate(.72) brightness(.9) contrast(.96)}
.go-map .leaflet-control-attribution{background:rgba(2,6,23,.72)!important;color:#64748b!important;font-size:10px!important;padding:1px 6px}
.go-map .leaflet-control-attribution a{color:#94a3b8!important}
.go-pin{background:none;border:none}
.go-pin i{position:absolute;left:0;top:0;display:block;width:10px;height:10px;margin:5px;border-radius:50%}
.go-pin .dot{background:#0b1220;border:2px solid #67e8f9;transition:transform .3s,background .3s}
.go-pin .ring{border:1px solid #67e8f9;opacity:0}
.go-pin.on .dot{background:#67e8f9;transform:scale(1.35)}
.go-pin.on .ring{animation:go-ring 2.4s ease-out infinite}
@keyframes go-ring{0%{opacity:.8;transform:scale(1)}70%{opacity:0;transform:scale(3.2)}100%{opacity:0;transform:scale(3.2)}}
@media (prefers-reduced-motion:reduce){.go-pin.on .ring{animation:none}}
`;

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = STYLE_CSS;
  document.head.appendChild(s);
}

/* ============================ 工具 ============================ */

function mapLink(o: OfficeData) {
  return o.region === 'cn'
    ? `https://uri.amap.com/marker?position=${o.lng},${o.lat}&name=${encodeURIComponent(o.city + ' Office')}`
    : `https://www.openstreetmap.org/?mlat=${o.lat}&mlon=${o.lng}#map=15/${o.lat}/${o.lng}`;
}

function probeImage(url: string, timeout = 2800): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image();
    let done = false;
    const t = window.setTimeout(() => { if (!done) { done = true; img.src = ''; resolve(false); } }, timeout);
    img.onload = () => { if (!done) { done = true; window.clearTimeout(t); resolve(true); } };
    img.onerror = () => { if (!done) { done = true; window.clearTimeout(t); resolve(false); } };
    img.src = `${url}?_b=${Date.now()}`;
  });
}

/* ============================ 组件 ============================ */

export function GlobalOfficesMap() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mapBoxRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const engineRef = useRef<{ activate: (i: number) => void } | null>(null);
  const [active, setActive] = useState(0);
  const [srcLabel, setSrcLabel] = useState('正在检测网络并选择底图…');
  const [clock, setClock] = useState<Record<string, string>>({});

  /* 时钟：每 30 秒刷新一次 */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const next: Record<string, string> = {};
      OFFICES.forEach(o => {
        try {
          next[o.zone] = new Intl.DateTimeFormat('en-GB', {
            timeZone: o.zone, hour: '2-digit', minute: '2-digit', hour12: false,
          }).format(now);
        } catch { next[o.zone] = ''; }
      });
      setClock(next);
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  /* 引擎：布局 + 地图 + 选源 + 切换 */
  useEffect(() => {
    let dead = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)); };

    ensureStyles();

    let map: any = null;
    let LF: any = null;              /* Leaflet 命名空间，加载完成后赋值 */
    const layers: Record<string, any> = {};
    let route: Array<{ prov: ProvKey; zoom: number }> = [];
    let routeIdx = 0;
    let errs = 0;
    let errTimer: number | null = null;
    let activeIdx = 0;
    const net = { global: false, checked: false };
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- 布局 ---- */
    function layout(invalidate = true) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const W = wrap.clientWidth;
      if (!W) return;
      let slots: Array<{ x: number; y: number; w: number; h: number }>;
      if (W < 860) {
        const heroH = 300, rowH = 140;
        slots = [{ x: 0, y: 0, w: W, h: heroH }];
        for (let k = 0; k < 4; k++) {
          slots.push({ x: (k % 2) * (W / 2), y: heroH + Math.floor(k / 2) * rowH, w: W / 2, h: rowH });
        }
        slots.push({ x: 0, y: heroH + rowH * 2, w: W, h: rowH });
        wrap.style.height = `${heroH + rowH * 3}px`;
      } else {
        const rowH = 186, colW = W / 3;
        slots = [
          { x: 0, y: 0, w: colW * 2, h: rowH * 2 },
          { x: colW * 2, y: 0, w: colW, h: rowH },
          { x: colW * 2, y: rowH, w: colW, h: rowH },
          { x: 0, y: rowH * 2, w: colW, h: rowH },
          { x: colW, y: rowH * 2, w: colW, h: rowH },
          { x: colW * 2, y: rowH * 2, w: colW, h: rowH },
        ];
        wrap.style.height = `${rowH * 3}px`;
      }

      const assign = new Map<number, { x: number; y: number; w: number; h: number }>();
      assign.set(activeIdx, slots[0]);
      OFFICES.map((_, i) => i).filter(i => i !== activeIdx)
        .forEach((idx, k) => assign.set(idx, slots[k + 1]));

      cardRefs.current.forEach((el, i) => {
        const s = assign.get(i);
        if (!el || !s) return;
        el.style.left = `${s.x}px`;
        el.style.top = `${s.y}px`;
        el.style.width = `${s.w}px`;
        el.style.height = `${s.h}px`;
      });

      const hero = slots[0];
      const box = mapBoxRef.current;
      if (box) { box.style.width = `${hero.w}px`; box.style.height = `${hero.h}px`; }

      if (invalidate && map) later(() => map.invalidateSize(), 680);
    }

    /* ---- 底图优先级 ---- */
    function routeFor(o: OfficeData) {
      const z = o.zoom, r: Array<{ prov: ProvKey; zoom: number }> = [];
      if (o.region === 'cn') {
        r.push({ prov: 'amap', zoom: z });
        if (TIANDITU_TK) r.push({ prov: 'tdt', zoom: z });
        if (net.global) r.push({ prov: 'osm', zoom: z });
      } else {
        if (net.global) r.push({ prov: 'osm', zoom: z });
        if (TIANDITU_TK) r.push({ prov: 'tdt', zoom: 12 });
        r.push({ prov: 'amap', zoom: 9 });
      }
      return r;
    }

    function getLayer(key: ProvKey) {
      if (layers[key]) return layers[key];
      const p = PROV[key];
      const opt = {
        subdomains: p.sub, maxNativeZoom: p.maxNativeZoom, maxZoom: 19,
        className: p.cls, attribution: p.credit, crossOrigin: true,
      };
      let layer = LF.tileLayer(p.url, opt);
      if (key === 'tdt') {
        const cva = LF.tileLayer(p.url.replace('LAYER=vec', 'LAYER=cva'), opt);
        layer = LF.layerGroup([layer, cva]);
      }
      layer.on('tileerror', () => {
        errs++;
        if (!errTimer) errTimer = window.setTimeout(() => { errTimer = null; errs = 0; }, 4000);
        if (errs >= 6) {
          errs = 0;
          if (errTimer) { window.clearTimeout(errTimer); errTimer = null; }
          if (routeIdx < route.length - 1) {
            routeIdx++;
            mount();
            const e = route[routeIdx], o = OFFICES[activeIdx];
            map.setView([o.lat, o.lng], e.zoom, { animate: false });
          }
        }
      });
      layers[key] = layer;
      return layer;
    }

    function updateChip(o: OfficeData, e?: { prov: ProvKey; zoom: number }) {
      if (!e) return;
      let t = `底图 · ${PROV[e.prov].name}`;
      if (net.checked) t += net.global ? ' · 国际网络' : ' · 国内网络';
      if (o.region === 'intl' && e.prov === 'amap') t += ' · 境外细节受限';
      setSrcLabel(t);
    }

    function mount() {
      Object.values(layers).forEach(l => { if (map.hasLayer(l)) map.removeLayer(l); });
      const e = route[routeIdx];
      map.setMaxZoom(e.zoom + 3);
      getLayer(e.prov).addTo(map);
      updateChip(OFFICES[activeIdx], e);
      markers.forEach((m: any, i: number) => {
        const el = m.getElement();
        if (el) el.classList.toggle('on', i === activeIdx);
      });
    }

    function applyRoute(i: number, fly: boolean) {
      activeIdx = i;
      layout(false);
      const o = OFFICES[i];
      route = routeFor(o);
      routeIdx = 0;
      mount();
      const e = route[0];
      if (REDUCED || !fly) {
        map.invalidateSize();
        map.setView([o.lat, o.lng], e.zoom, { animate: false });
      } else {
        /* 容器尺寸过渡期间不能飞行：先 invalidateSize，等过渡结束再 flyTo，飞行结束再补一次 */
        map.invalidateSize();
        later(() => {
          map.flyTo([o.lat, o.lng], e.zoom, { duration: 0.85, easeLinearity: 0.2 });
          later(() => map.invalidateSize(), 950);
        }, 660);
      }
    }

    function activate(i: number) {
      if (i === activeIdx) return;
      setActive(i);
      applyRoute(i, true);
      const el = cardRefs.current[i];
      if (el && !REDUCED) {
        el.style.transform = 'rotateY(-4deg) scale(.985)';
        later(() => { if (el) el.style.transform = 'rotateY(0) scale(1)'; }, 620);
      }
    }

    let markers: any[] = [];
    let ro: ResizeObserver | null = null;

    (async () => {
      try {
        const loadedL = await loadLeaflet();
        LF = loadedL;
        if (dead || !mapBoxRef.current || !wrapRef.current) return;

        layout();
        map = loadedL.map(mapBoxRef.current, {
          zoomControl: false, scrollWheelZoom: false, attributionControl: true,
          doubleClickZoom: true, touchZoom: true, fadeAnimation: true,
        });
        map.attributionControl.setPrefix(false);

        loadedL.polyline(
          OFFICES.map(o => [o.lat, o.lng]),
          { color: '#67e8f9', weight: 1, opacity: 0.3, dashArray: '4 9', interactive: false },
        ).addTo(map);

        markers = OFFICES.map(o => loadedL.marker([o.lat, o.lng], {
          icon: loadedL.divIcon({
            className: 'go-pin',
            html: '<i class="dot"></i><i class="ring"></i>',
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          }),
          interactive: false,
          keyboard: false,
        }).addTo(map));

        applyRoute(0, false);
        engineRef.current = { activate };

        probeImage('https://a.tile.openstreetmap.org/3/4/3.png').then(ok => {
          if (dead) return;
          net.global = ok;
          net.checked = true;
          if (OFFICES[activeIdx].region === 'intl') applyRoute(activeIdx, false);
          else updateChip(OFFICES[activeIdx], route[routeIdx]);
        });

        ro = new ResizeObserver(() => layout());
        if (wrapRef.current) ro.observe(wrapRef.current);
      } catch (e) {
        if (!dead) setSrcLabel('底图库加载失败，请检查网络后刷新');
      }
    })();

    return () => {
      dead = true;
      timers.forEach(t => window.clearTimeout(t));
      if (errTimer) window.clearTimeout(errTimer);
      if (ro) ro.disconnect();
      engineRef.current = null;
      if (map) { map.remove(); map = null; }
    };
  }, []);

  const heroRole = (role: string) => role.replace(' Office', '').replace(' Headquarters', '');

  return (
    <div className="go-map">
      <div ref={wrapRef} className="relative w-full">
        {/* 地图层：始终贴住主卡位置 */}
        <div
          ref={mapBoxRef}
          className="absolute left-0 top-0 z-[1] overflow-hidden rounded-tl-[14px] bg-[#060d18]"
          style={{ transition: 'width .62s cubic-bezier(.22,.8,.2,1), height .62s cubic-bezier(.22,.8,.2,1)' }}
          aria-hidden="true"
        />

        {/* 底图来源状态 */}
        <div className="pointer-events-none absolute left-3 top-3 z-[900] whitespace-nowrap rounded-full border border-cyan-400/25 bg-[#020617]/72 px-3 py-1 text-[10.5px] tracking-wide text-cyan-300 backdrop-blur-md">
          {srcLabel}
        </div>

        {OFFICES.map((o, i) => {
          const isHero = i === active;
          return (
            <article
              key={o.city}
              ref={el => { cardRefs.current[i] = el; }}
              role="button"
              tabIndex={0}
              aria-label={`${o.city}，${o.country}`}
              aria-current={isHero ? 'true' : undefined}
              onClick={() => engineRef.current?.activate(i)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  engineRef.current?.activate(i);
                }
              }}
              className={[
                'absolute z-[3] flex flex-col overflow-hidden rounded-[14px] border px-[22px] pb-[18px] pt-[22px]',
                'transition-[left,top,width,height,background,border-color,box-shadow] duration-[620ms]',
                'will-change-[left,top,width,height] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[3px] focus-visible:outline-cyan-300',
                isHero
                  ? 'z-[4] cursor-default border-cyan-400/30 bg-transparent shadow-[0_30px_60px_-40px_rgba(0,0,0,.9)]'
                  : 'cursor-pointer border-slate-800 bg-gradient-to-b from-[#0e1726] to-[#0a1220] hover:border-slate-700',
              ].join(' ')}
            >
              {/* 小卡内容 */}
              <div className={`flex h-full flex-col transition-opacity duration-300 ${isHero ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10.5px] tracking-[0.16em] text-cyan-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[11px] tabular-nums tracking-wide text-slate-500">{clock[o.zone] ?? ''}</span>
                </div>
                <h3 className="mb-0.5 mt-3 text-[16px] font-medium text-slate-100">{o.city}</h3>
                <p className="m-0 text-[11.5px] text-slate-500">{o.country}</p>
                <p className="mb-0 mt-2.5 text-[11.5px] text-slate-300">{o.role}</p>
                <address className="mb-0 mt-1 line-clamp-2 overflow-hidden text-[11.5px] not-italic leading-[1.55] text-slate-400">
                  {o.addr}
                </address>
              </div>

              {/* 主卡内容：玻璃面板浮在地图上 */}
              <div className={`absolute inset-0 flex flex-col justify-end transition-opacity duration-500 ${isHero ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                <div className="mx-3.5 mb-3.5 rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] px-6 pb-5 pt-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-[18px] backdrop-saturate-150">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[10.5px] tracking-[0.16em] text-cyan-300">
                      {String(i + 1).padStart(2, '0')} · {heroRole(o.role)}
                    </span>
                    <span className="text-[11px] tabular-nums tracking-wide text-slate-400">{clock[o.zone] ?? ''}</span>
                  </div>
                  <h3 className="mb-1 mt-1.5 font-serif text-[34px] font-normal leading-none text-white">{o.city}</h3>
                  <p className="m-0 text-[12px] text-slate-300">{o.country}</p>
                  <address className="mb-0 mt-2.5 max-w-[40em] text-[13px] not-italic leading-relaxed text-slate-200">{o.addr}</address>
                  <div className="mt-3.5 flex gap-4 text-[11.5px] text-slate-400">
                    <a
                      href={mapLink(o)}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isHero ? 0 : -1}
                      className="border-b border-cyan-400/40 text-cyan-300 no-underline"
                    >
                      View map
                    </a>
                    <span>{o.cn}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
