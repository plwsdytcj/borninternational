"use client"

type HomeSectionBackgroundProps = {
  mobileSrc: string
  desktopSrc: string
  className: string
  priority?: boolean
}

/**
 * Full-bleed section art: serves a downscaled asset below lg to cut mobile payload;
 * desktop keeps the high-res source. Uses native <picture> because next.config has images.unoptimized.
 */
export function HomeSectionBackground({ mobileSrc, desktopSrc, className, priority }: HomeSectionBackgroundProps) {
  return (
    <picture className="absolute inset-0 block">
      <source media="(max-width: 1023px)" srcSet={mobileSrc} />
      {/* Native img: next.config has images.unoptimized; <picture> needs a single fallback URL */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={desktopSrc}
        alt=""
        className={`absolute inset-0 h-full w-full ${className}`}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
      />
    </picture>
  )
}
