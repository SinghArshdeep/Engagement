import { wedding } from '@/lib/wedding-data'

type Tone = 'dark' | 'light'

const palettes: Record<Tone, { line: string; letter: string; petal: string; leaf: string }> = {
  dark: { line: '#C5A15C', letter: '#E8D5A3', petal: '#F8F1E5', leaf: '#8E7B4A' },
  light: { line: '#B38D47', letter: '#26231F', petal: '#FFFFFF', leaf: '#9C8650' },
}

function Blossom({ x, y, r = 1, petal, rotate = 0 }: { x: number; y: number; r?: number; petal: string; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${r})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-5.2" rx="3.2" ry="5.4" fill={petal} stroke="#D8C9A6" strokeWidth="0.4" transform={`rotate(${a})`} />
      ))}
      <circle r="1.8" fill="#C5A15C" />
    </g>
  )
}

function Rose({ x, y, r = 1 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r})`}>
      <circle r="6.5" fill="#DDB8B8" />
      <circle r="4.4" fill="#D3A3A5" />
      <path d="M-2.6 0.4 C-2 -3, 2.6 -2.8, 2.4 0.4 C2.2 2.6, -0.8 2.8, -1 0.6" fill="none" stroke="#9F5E66" strokeWidth="0.7" />
    </g>
  )
}

function Leaf({ x, y, rotate, fill }: { x: number; y: number; rotate: number; fill: string }) {
  return <path d="M0 0 C3 -3, 8 -3, 11 0 C8 3, 3 3, 0 0 Z" fill={fill} transform={`translate(${x} ${y}) rotate(${rotate})`} />
}

export function FloralMonogram({
  tone = 'dark',
  className,
  decorative = false,
}: {
  tone?: Tone
  className?: string
  decorative?: boolean
}) {
  const p = palettes[tone]
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : wedding.monogram.label}
    >
      <circle cx="100" cy="100" r="88" fill="none" stroke={p.line} strokeWidth="2.2" />
      <circle cx="100" cy="100" r="82" fill="none" stroke={p.line} strokeWidth="0.6" opacity="0.7" />

      <path
        d="M100 66 C90 44, 56 42, 54 72 C52 100, 82 120, 100 142 C118 120, 148 100, 146 72 C144 42, 110 44, 100 66"
        fill="none"
        stroke={p.line}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <text
        x="86"
        y="116"
        textAnchor="middle"
        fontSize="50"
        fontWeight="600"
        fill={p.letter}
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        {wedding.monogram.first}
      </text>
      <text
        x="114"
        y="122"
        textAnchor="middle"
        fontSize="56"
        fontStyle="italic"
        fontWeight="500"
        fill={p.letter}
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
      >
        {wedding.monogram.second}
      </text>

      <g className="sway">
        <path d="M22 118 C26 150, 48 176, 84 186" fill="none" stroke={p.line} strokeWidth="1" />
        <Leaf x={28} y={140} rotate={60} fill={p.leaf} />
        <Leaf x={40} y={160} rotate={30} fill={p.leaf} />
        <Leaf x={58} y={176} rotate={10} fill={p.leaf} />
        <Blossom x={34} y={152} petal={p.petal} />
        <Rose x={48} y={166} r={0.9} />
        <Blossom x={66} y={180} r={0.75} petal={p.petal} rotate={20} />
      </g>
      <g className="sway">
        <path d="M178 82 C174 52, 152 26, 118 14" fill="none" stroke={p.line} strokeWidth="1" />
        <Leaf x={172} y={60} rotate={-120} fill={p.leaf} />
        <Leaf x={154} y={34} rotate={-150} fill={p.leaf} />
        <Blossom x={166} y={48} petal={p.petal} rotate={14} />
        <Rose x={150} y={30} r={0.75} />
        <Blossom x={136} y={20} r={0.7} petal={p.petal} />
      </g>
    </svg>
  )
}
