type WavesProps = {
  className?: string
}

type Wave = {
  left: string
  top: string
  width: string
  viewBox: string
  path: string
}

const WAVES: Wave[] = [
  { left: '10%', top: '25%', width: '10%', viewBox: '-2 -2 128 20', path: 'M3 8 C 22 2, 38 3, 60 9 S 104 12, 121 6' },
  { left: '25%', top: '40%', width: '10%', viewBox: '-2 -2 124 20', path: 'M3 6 C 22 1, 42 5, 62 9 S 104 11, 117 5' },
  { left: '15%', top: '55%', width: '5%', viewBox: '-2 -2 64 18', path: 'M3 9 C 12 3, 20 3, 30 8 S 48 11, 57 8' },
  { left: '45%', top: '55%', width: '15%', viewBox: '-2 -2 140 22', path: 'M3 6 C 32 16, 62 13, 92 7 S 126 3, 133 9' },
  { left: '60%', top: '40%', width: '15%', viewBox: '-2 -2 176 24', path: 'M3 16 C 38 3, 84 1, 122 9 S 158 13, 169 10' },
  { left: '80%', top: '25%', width: '10%', viewBox: '-2 -2 124 20', path: 'M3 7 C 20 1, 38 3, 58 9 S 100 12, 117 5' },
  { left: '75%', top: '60%', width: '5%', viewBox: '-2 -2 74 18', path: 'M3 9 C 14 3, 24 3, 36 8 S 58 11, 67 7' },
  { left: '5%', top: '70%', width: '5%', viewBox: '-2 -2 44 16', path: 'M3 8 C 9 3, 15 3, 21 6 S 32 9, 37 6' },
]

export default function Waves({ className = '' }: WavesProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full aspect-[1030/236] ${className}`}
    >
      {WAVES.map((wave, i) => (
        <svg
          key={i}
          viewBox={wave.viewBox}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          className="absolute overflow-visible"
          style={{ left: wave.left, top: wave.top, width: wave.width }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={wave.path} />
        </svg>
      ))}
    </div>
  )
}
