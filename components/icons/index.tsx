type IconProps = {
  className?: string;
};

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v16H6.5A2.5 2.5 0 0 0 4 21.5V6.5Z" />
      <path d="M4 6.5V20" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2" />
      <path d="M21 19c0-2.2-1.6-4-4-4" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function VideoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="M17 10l4-2v8l-4-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
    </svg>
  );
}

export function BackIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M177.7 256l136-136c9.4-9.4 9.4-24.6 0-33.9l-1.4-1.4c-9.4-9.4-24.6-9.4-33.9 0L108.3 245.7c-9.4 9.4-9.4 24.6 0 33.9l170.1 170.1c9.4 9.4 24.6 9.4 33.9 0l1.4-1.4c9.4-9.4 9.4-24.6 0-33.9L177.7 256z" />
    </svg>
  );
}

export function InstructorIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function PriceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M 22.853516 6.0078125 C 20.164121 6.0816133 18.078828 6.8123281 16.048828 7.5175781 C 13.877828 8.2715781 11.828234 8.9827188 8.9902344 9.0117188 C 7.0932344 9.0417187 5.1931719 8.7143594 3.3261719 8.0683594 L 2 7.609375 L 2 24.691406 L 2.6660156 24.927734 C 4.4050156 25.542734 6.183125 25.897422 7.953125 25.982422 C 8.234125 25.995422 8.5092969 26.001953 8.7792969 26.001953 C 11.792297 26.001953 14.098938 25.202687 16.335938 24.429688 C 18.693937 23.613688 20.918125 22.843328 23.953125 22.986328 C 25.527125 23.061328 27.112016 23.379687 28.666016 23.929688 L 30 24.402344 L 30 7.3144531 L 29.341797 7.0742188 C 27.616797 6.4492188 25.834922 6.0945781 24.044922 6.0175781 C 23.634422 5.9993281 23.237715 5.9972695 22.853516 6.0078125 z" />
    </svg>
  );
}

export function LessonsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2H5zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z" />
    </svg>
  );
}

export function EnrolledIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
    </svg>
  );
}

export function CertificateIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M15 19H2V1h16v4m0 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-3 9v8l3-2 3 2v-8M5 8h6m-6 3h5m-5 3h2M5 5h2" />
    </svg>
  );
}

export function ListIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M412.2 32H35.8C16 32 0 48 0 67.8V444.2C0 464 16 480 35.8 480H412.2c19.8 0 35.8-16 35.8-35.8V67.8C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6z" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1z" />
    </svg>
  );
}

export function HelpIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8z" />
    </svg>
  );
}

export function UserPlusIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h3.5" />
      <path d="M19 22v.01" />
      <path d="M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483" />
    </svg>
  );
}

export function LeaderboardIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10l1 7H6l1-7z" />
      <path d="M6 11h12v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2z" />
      <path d="M9 7V4" />
      <path d="M15 7V4" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function MaximizeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function WideIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 7h20" />
      <path d="M2 17h20" />
      <path d="M6 7v10" />
      <path d="M18 7v10" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 10V7.5c0-.8.7-1.5 1.5-1.5H16V3h-2c-2.2 0-4 1.8-4 4v3H8v3.5h2V21h3v-7.5h2.5L16 10h-3Z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 4.5h3.2l-7 8 8.2 10.7h-6.4l-5-6.5-5.7 6.5H3.3l7.5-8.6L3 4.5h6.6l4.5 5.9 5.8-5.9Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5h3v11h-3v-11ZM8 4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM11 8.5h2.9v1.5h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v6.4h-3v-5.7c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.8H11V8.5Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9.2 2 12 2 12s0 2.8.4 4.8a2.5 2.5 0 0 0 1.8 1.8C6.2 19 12 19 12 19s5.8 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-2 .4-4.8.4-4.8s0-2.8-.4-4.8ZM10 15.5V8.5l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
