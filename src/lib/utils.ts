const TAG_COLORS: Record<string, string> = {
  React: 'bg-blue-100 text-blue-800',
  'Next.js': 'bg-gray-100 text-gray-800',
  TypeScript: 'bg-blue-200 text-blue-900',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
  Vue: 'bg-green-100 text-green-800',
  'Node.js': 'bg-green-200 text-green-900',
  PostgreSQL: 'bg-indigo-100 text-indigo-800',
  MongoDB: 'bg-emerald-100 text-emerald-800',
  Firebase: 'bg-orange-100 text-orange-800',
  Stripe: 'bg-purple-100 text-purple-800',
  Prisma: 'bg-teal-100 text-teal-800',
  Vercel: 'bg-gray-200 text-gray-900',
  'Chart.js': 'bg-pink-100 text-pink-800',
  HTML: 'bg-red-100 text-red-800',
  CSS: 'bg-blue-100 text-blue-700',
  Figma: 'bg-rose-100 text-rose-800',
  Git: 'bg-orange-200 text-orange-900',
}

const FALLBACK_COLORS = [
  'bg-pink-100 text-pink-800',
  'bg-purple-100 text-purple-800',
  'bg-amber-100 text-amber-800',
  'bg-teal-100 text-teal-800',
  'bg-rose-100 text-rose-800',
  'bg-violet-100 text-violet-800',
]

export function getTagColor(tag: string): string {
  if (TAG_COLORS[tag]) return TAG_COLORS[tag]
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = (hash + tag.charCodeAt(i)) % FALLBACK_COLORS.length
  }
  return FALLBACK_COLORS[hash]
}
