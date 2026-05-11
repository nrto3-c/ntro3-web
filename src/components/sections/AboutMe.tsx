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
        <h2 className="text-4xl font-black text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          I'm a frontend developer with a passion for building clean, performant,
          and visually engaging web experiences. I work closely with clients to
          understand their goals and turn ideas into polished digital products.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Whether it's a marketing site, a web app, or a complex dashboard — I bring
          attention to detail and user-first thinking to every project.
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
