type FishingRodProps = {
  className?: string
  line?: 'Slack' | 'Taut'
  motion?: 'Still' | 'Breeze' | 'Bite'
  bgColor?: string
}

export default function FishingRod({
  className = '',
  line = 'Slack',
  motion = 'Still',
  bgColor = 'var(--color-background)',
}: FishingRodProps) {
  const isBreeze = motion === 'Breeze'
  const isBite = motion === 'Bite'

  return (
    <svg
      viewBox="0 0 480 822"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {isBreeze && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 332 728;-0.8 332 728;0 332 728;0.6 332 728;0 332 728"
            dur="5s"
            repeatCount="indefinite"
          />
        )}
        {isBite && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 332 728;-2.2 332 728;-0.4 332 728;-2.8 332 728;0 332 728;0 332 728"
            keyTimes="0;0.15;0.3;0.45;0.7;1"
            dur="1.6s"
            repeatCount="indefinite"
          />
        )}

        <path
          d="M350.4 593.6 L370 540 C392 480 400 420 398 367 C396 290 380 240 358 193 C335 145 300 108 264 98 C220 86 180 88 143 96 C110 105 88 125 70 158"
          strokeWidth="1.4"
        />

        <path d="M332 728 L372 600" strokeWidth="13" />
        <path d="M372 600 C395 530 412 460 414 390" strokeWidth="9" />
        <path d="M414 390 C418 300 392 200 330 130" strokeWidth="6" />
        <path d="M330 130 C290 92 240 76 190 80" strokeWidth="4" />
        <path d="M190 80 C140 86 100 115 70 158" strokeWidth="2.2" />

        <g strokeWidth="2.5">
          <ellipse cx="372" cy="541" rx="12" ry="7" transform="rotate(20 372 541)" />
          <ellipse cx="398" cy="367" rx="10" ry="7" />
          <ellipse cx="358" cy="193" rx="8" ry="5" transform="rotate(-30 358 193)" />
          <ellipse cx="264" cy="98" rx="4" ry="7" transform="rotate(20 264 98)" />
          <ellipse cx="144" cy="96" rx="2" ry="3.5" />
        </g>

        <rect
          x="354"
          y="592"
          width="22"
          height="64"
          rx="2"
          fill="currentColor"
          stroke="none"
          transform="rotate(18 365 624)"
        />

        <g transform="rotate(18 356 628)">
          <g fill="currentColor" stroke="none">
            <rect x="355" y="610" width="6" height="36" rx="2" />
            <path d="M334 624 L356 622 L356 634 L334 636 Z" />
            <path d="M310 636 C308 622 316 616 324 616 C334 616 340 624 338 636 C336 646 328 650 322 650 C314 650 311 644 310 636 Z" />
            <path d="M304 609 L340 609 L333 621 L311 621 Z" />
            <rect x="304" y="583" width="36" height="29" rx="5" />
            <rect x="254" y="651" width="26" height="11" rx="5" transform="rotate(-10 267 656.5)" />
          </g>
          <g stroke={bgColor}>
            <path d="M314 616 H332" strokeWidth="1" />
            <path d="M316 630 C318 624 326 624 330 628" strokeWidth="1" />
          </g>
          <path d="M303 584 Q299.5 585 299.5 589 L299.5 608 Q299.5 611 302 612.5 L310 617" strokeWidth="2.4" />
          <path d="M341 584 Q344.5 585 344.5 589 L344.5 608 Q344.5 611 342 612.5 L334 617" strokeWidth="2.4" />
          <circle cx="309" cy="638" r="5.5" fill="currentColor" stroke="none" />
          <path d="M309 638 L278 655" strokeWidth="5" />
        </g>

        <g>
          {isBreeze && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 70 158;2.5 70 158;0 70 158;-2.5 70 158;0 70 158"
              dur="5s"
              repeatCount="indefinite"
            />
          )}
          {isBite && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 70 158;5 70 158;-2 70 158;6 70 158;0 70 158;0 70 158"
              keyTimes="0;0.15;0.3;0.45;0.7;1"
              dur="1.6s"
              repeatCount="indefinite"
            />
          )}

          {line === 'Slack' ? (
            <path
              d="M70 158 C38 222 50 282 90 332 C130 382 128 440 106 470 C96 484 92 490 92 496"
              strokeWidth="2"
            />
          ) : (
            <path d="M70 158 C76 280 86 400 92 496" strokeWidth="2" />
          )}

          <circle cx="92" cy="499" r="4.5" strokeWidth="2" />
          <path d="M90 504 L78 544 A14 14 0 0 0 106 544 L106 541" strokeWidth="3.2" />
          <path
            d="M104.3 541.5 L107.7 541.5 L107.2 535 L104.2 526.5 Z M104.8 530 L99.2 539.8 L104.8 536.6 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <g strokeWidth="1.6">
            <ellipse cx="90" cy="504" rx="4.5" ry="1.7" transform="rotate(16.7 90 504)" />
            <ellipse cx="88.9" cy="507.7" rx="4.5" ry="1.7" transform="rotate(16.7 88.9 507.7)" />
            <ellipse cx="87.8" cy="511.4" rx="4.5" ry="1.7" transform="rotate(16.7 87.8 511.4)" />
            <ellipse cx="86.7" cy="515.1" rx="4.5" ry="1.7" transform="rotate(16.7 86.7 515.1)" />
            <ellipse cx="85.6" cy="518.8" rx="4.5" ry="1.7" transform="rotate(16.7 85.6 518.8)" />
          </g>
        </g>
      </g>
    </svg>
  )
}
