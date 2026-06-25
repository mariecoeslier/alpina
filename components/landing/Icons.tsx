import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function IconDownload({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M12 3v13M7 12l5 5 5-5" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function IconPlay({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M6 4.5l13 7.5-13 7.5V4.5z" />
    </svg>
  );
}

export function IconPlaySolid({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, { ...p, fill: "currentColor", stroke: "none" })}>
      <path d="M6 4.5l13 7.5-13 7.5V4.5z" />
    </svg>
  );
}

export function IconMenu({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function IconClose({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconZap({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z" />
    </svg>
  );
}

export function IconCamera({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function IconSliders({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M4 21V14M4 10V3M12 21v-6M12 11V3M20 21v-3M20 14V3" />
      <path d="M1 14h6M9 11h6M17 14h6" />
    </svg>
  );
}

export function IconGift({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <path d="M4 12v9h16v-9" />
      <path d="M12 7V21" />
      <path d="M12 7a3 3 0 003-3 1.5 1.5 0 00-3 0 1.5 1.5 0 00-3 0 3 3 0 003 3z" />
    </svg>
  );
}

export function IconBell({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

export function IconHeart({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size, p)}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}
