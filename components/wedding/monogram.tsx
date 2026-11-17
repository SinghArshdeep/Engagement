
import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-auto w-full', className)}
      role="img"
      aria-label="Intertwined H and J wedding monogram"
    >
      {/* Outer circle */}
      <circle
        cx="170"
        cy="170"
        r="150"
        fill="none"
        stroke="#71394F"
        strokeWidth="6"
      />

      {/* H - classic serif letterform */}
      <g
        fill="#71394F"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
      >
        <text x="105" y="216" fontSize="112">H</text>
      </g>

      {/* Continuous heart-to-J flourish */}
      <path
        d="
          M 112 179
          C 91 160, 76 139, 84 112
          C 94 78, 137 76, 170 125
          C 202 76, 246 78, 256 112
          C 271 159, 224 195, 179 230
          C 150 253, 125 274, 143 300
          C 158 321, 184 309, 190 280
          C 194 257, 191 226, 191 208
        "
        fill="none"
        stroke="#71394F"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* J letterform */}
      <text
        x="171"
        y="253"
        fill="#71394F"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="112"
        fontWeight="400"
      >
        J
      </text>
    </svg>
  )
}
