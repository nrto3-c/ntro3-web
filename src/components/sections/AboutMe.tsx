import { TagBadge } from '@/components/ui/TagBadge'

const SKILLS = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'HTML', 'CSS', 'Figma',
  'Node.js', 'Git', 'Vercel',
]

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-6">關於我</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Digital Designer，專注於打造視覺精緻、體驗流暢的網站。<br />
          從品牌官網到網頁應用，習慣從使用者角度出發，把客戶的想法做成真正好用的產品。
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {SKILLS.map((skill) => (
            <TagBadge key={skill} tag={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
