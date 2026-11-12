/**
 * PartnersWall — 合作伙伴 Logo 墙（四行交叉流动 · 深色芯片 · 悬停点亮）
 * 对应设计稿/原型：partners-logos.html v2
 *
 * ── 给接入者（GPT/开发者）的说明 ─────────────────────────────
 * 1. 把本文件放到 components/ 目录（如 components/PartnersWall.tsx）。
 * 2. 把 partners-logos/ 文件夹（33 个 png）整体拷到 Next.js 的 public/ 下，
 *    最终路径为 public/partners-logos/xx.png。组件默认从 /partners-logos/ 读取；
 *    若放别处，用 <PartnersWall logoBase="/其他路径/" /> 覆盖。
 * 3. 在首页引入（建议位置：核心服务之后、Global offices 之前）：
 *      import PartnersWall from '@/components/PartnersWall';
 *      <PartnersWall />
 *    板块自带深色背景（#020617），与站点现有 Global offices 板块同色系。
 * 4. 不需要 npm install 任何东西；不依赖 Tailwind（样式全部内联在本组件的
 *    <style> 中，类名 pw- 前缀，不会与站点样式冲突）。
 *
 * 设计要点（勿改坏）：
 * - 四行方向 交替 左/右/左/右，速度 28/34/26/38s，各行有速度差避免机械感。
 * - 每行语义分组：中国科技制造 / 中国品牌消费 / 俄罗斯企业 / 科研院校。
 * - 白底 Logo 通过 grayscale+invert+brightness 反相为浅色单色融入深色芯片；
 *   悬停时芯片闪白、Logo 恢复品牌原色（filter 过渡 0.35s）。
 * - 立体感来自【静态】perspective + rotateX(5deg)。不要加鼠标视差——
 *   动态 transform 会让远离轴心的行（第三四行）hover 目标漂移，悬停失效。
 * - 悬停暂停由纯 CSS :hover 实现（静态 transform 下 100% 可靠），无 JS。
 * - 无缝循环：轨道由两组相同内容组成，动画位移 -50%；组间隔用
 *   padding-right 实现（不能用 track 的 gap，否则每循环接缝跳 7px）。
 * - prefers-reduced-motion 时停止流动、去掉透视。
 *
 * 上线提醒：展示客户 Logo（ВТБ、Газпром 等大型机构）建议确认合作性质
 * 表述并尽量取得对方许可；Logo 源自 PPT 截图（~150px 宽），拿到 SVG/
 * 高清 PNG 后直接替换 public/partners-logos/ 下同名文件即可。
 */

'use client';

import React from 'react';

/* ── 可配置项 ── */
const LOGO_BASE_DEFAULT = '/partners-logos/';

type Item = { file: string; alt: string };
type Row = { dir: 'left' | 'right'; dur: string; tag: [string, string]; items: Item[] };

const ROWS: Row[] = [
  {
    dir: 'left', dur: '28s',
    tag: ['中国 · 科技与制造', 'Tech & Manufacturing'],
    items: [
      { file: '01.png', alt: 'cig 新意互动' },
      { file: '03.png', alt: '科大讯飞 iFLYTEK' },
      { file: '04.png', alt: 'UNRE 3D视觉智能' },
      { file: '05.png', alt: '烁范智能' },
      { file: '10.png', alt: '墙煜科技 Alucosuper' },
      { file: '11.png', alt: 'Boson 波色量子' },
      { file: '07.png', alt: 'Beta Three 贝塔斯瑞' },
      { file: '09.png', alt: 'G-POWER' },
    ],
  },
  {
    dir: 'right', dur: '34s',
    tag: ['中国 · 品牌与消费', 'Brands & Lifestyle'],
    items: [
      { file: '00-sinoruss.png', alt: 'SINORUSS' },
      { file: '02.png', alt: '正特焊接 CHD WELDING' },
      { file: '06.png', alt: 'SunWind 众成包装' },
      { file: '08.png', alt: 'ShopVidi' },
      { file: '12.png', alt: 'JOIN Digital Group' },
      { file: '13.png', alt: 'CAAC 中国商务广告协会' },
      { file: '14.png', alt: 'CBD家居' },
      { file: '15.png', alt: 'LifeStyles 乐福思' },
      { file: '16.png', alt: '泰和新材' },
      { file: '17.png', alt: 'PUSHKANG' },
    ],
  },
  {
    dir: 'left', dur: '26s',
    tag: ['俄罗斯 · 企业客户', 'Russia'],
    items: [
      { file: '23.png', alt: 'М.Видео' },
      { file: '24.png', alt: 'DNS' },
      { file: '25.png', alt: 'Всё инструменты' },
      { file: '26.png', alt: 'РУСТЕОКОМ' },
      { file: '27.png', alt: 'NLaiOn' },
      { file: '28.png', alt: 'ВТБ' },
      { file: '29.png', alt: 'Газпром' },
      { file: '30.png', alt: 'EFT GROUP' },
      { file: '31.png', alt: 'МЕДПРОМ' },
    ],
  },
  {
    dir: 'right', dur: '38s',
    tag: ['科研 · 院校与国际', "Academia & Int'l"],
    items: [
      { file: '18.png', alt: 'Сколково' },
      { file: '19.png', alt: 'Президентская академия' },
      { file: '20.png', alt: 'Российская академия наук' },
      { file: '21.png', alt: 'JOIST Innovation Park' },
      { file: '22.png', alt: 'University of Ioannina' },
      { file: '32.png', alt: 'EMC European Medical Center' },
    ],
  },
];

/* 每组内容复制份数：保证一组宽度 ≥ 1300px，轨道 ≥ 2 组即可无缝循环 */
function repeatsFor(items: Item[]): number {
  return Math.max(1, Math.ceil(1300 / (items.length * 215)));
}

export default function PartnersWall({ logoBase = LOGO_BASE_DEFAULT }: { logoBase?: string }) {
  return (
    <section className="pw" aria-label="Partners and clients">
      <style>{PW_CSS}</style>

      <div className="pw-head">
        <p className="pw-kicker">Trusted by</p>
        <h2>Partners &amp; Clients</h2>
      </div>

      <div className="pw-stage">
        <div className="pw-wall">
          {ROWS.map((row, i) => {
            const group = Array.from({ length: repeatsFor(row.items) }, () =>
              row.items.map((it) => (
                <div className="pw-logo" key={it.file}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${logoBase}${it.file}`} alt={it.alt} title={it.alt} draggable={false} />
                </div>
              )),
            );
            return (
              <div className="pw-lane" key={i}>
                <div className={`pw-row ${row.dir === 'right' ? 'pw-right' : ''}`} style={{ ['--dur' as string]: row.dur }}>
                  <div className="pw-track">
                    <div className="pw-grp">{group}</div>
                    <div className="pw-grp" aria-hidden="true">{group}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 组件样式（pw- 前缀，避免全局污染） ── */
const PW_CSS = `
.pw{background:#020617;color:#e2e8f0;padding:56px 0 64px;overflow:hidden;
  font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Helvetica Neue",Arial,sans-serif}
.pw *{box-sizing:border-box}
.pw-head{max-width:1180px;margin:0 auto 8px;padding:0 40px}
.pw-kicker{font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#64748b;margin:0}
.pw h2{font-family:Georgia,"Songti SC",serif;font-weight:400;font-size:40px;line-height:1.15;margin:10px 0 12px;color:#e2e8f0}

.pw-stage{max-width:1280px;margin:44px auto 0;padding:0 40px;perspective:1500px}
/* 静态透视：立体感保留。不要改成跟随鼠标的动态 transform（会破坏远端行 hover） */
.pw-wall{transform:rotateX(5deg);transform-style:preserve-3d;transform-origin:50% 40%}
.pw-lane{display:flex;align-items:stretch;margin-bottom:26px}

.pw-row{flex:1;overflow:hidden;position:relative;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%);
  mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)}
.pw-track{display:flex;width:max-content;animation:pw-go var(--dur) linear infinite}
.pw-right .pw-track{animation-direction:reverse}
.pw-row:hover .pw-track{animation-play-state:paused}
@keyframes pw-go{to{transform:translateX(-50%)}}
/* 无缝循环关键：组间隔用 padding-right，不能用 track gap（接缝会跳 7px） */
.pw-grp{display:flex;gap:14px;padding-right:14px}

/* 深色芯片：白底 Logo 经灰度+反相变成浅色单色；悬停闪白恢复品牌原色 */
.pw-logo{flex:none;height:66px;padding:0 20px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(175deg,#0e1930 0%,#0a1220 85%);
  border:1px solid #16233a;border-radius:12px;
  transition:transform .35s,border-color .35s,box-shadow .35s,background .35s}
.pw-logo img{height:42px;width:auto;max-width:168px;object-fit:contain;
  filter:grayscale(1) invert(1) brightness(1.42) contrast(1.05);opacity:.72;
  transition:filter .35s,opacity .35s;-webkit-user-drag:none;user-select:none}
.pw-logo:hover{transform:translateY(-3px);background:#fff;border-color:rgba(255,255,255,.6);
  box-shadow:0 12px 34px -12px rgba(148,197,255,.35)}
.pw-logo:hover img{filter:none;opacity:1}

@media (max-width:900px){
  .pw-lane{margin-bottom:16px}
  .pw-logo{height:56px;padding:0 15px}
  .pw-logo img{height:34px;max-width:140px}
  .pw h2{font-size:30px}
  .pw-wall{transform:none}
}
@media (prefers-reduced-motion:reduce){
  .pw-track{animation:none}
  .pw-wall{transform:none !important}
  .pw-logo,.pw-logo img{transition:none}
}
`;
