export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  coverImage: string
  images: string[]
  url?: string
  github?: string
  featured: boolean
  order: number
}

export const projects: Project[] = [
  {
    slug: 'nono-today',
    title: 'nono.today',
    description: '個人開發者作品集，展示採樣器、語音合成、藥物提醒、AI 字幕等自製工具與應用程式。',
    longDescription: '以極簡復古風格打造的個人作品集，記錄自己從零開始製作的各種工具：16-pad 顆粒採樣器 GranSample、復古語音合成玩具 SpellSynth、藥物提醒 App GoodPill，以及離線 AI 字幕工具 SRTWhisper。整個網站用 Next.js App Router 搭配 Supabase 建立，承載台北、2026 的開發記憶。',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    coverImage: '/images/projects/nono-today-cover.jpg',
    images: [],
    url: 'https://nono.today/',
    featured: true,
    order: 1,
  },
  {
    slug: 'cacalabs',
    title: 'CacaLabs',
    description: '專為台灣中小企業設計的考勤薪資管理平台，GPS 打卡、請假審批、自動薪資計算，永久免費。',
    longDescription: 'CacaLabs 是一站式企業人力資源管理平台，分為 PunchLab（考勤模組）和 HRLab（薪資模組）。PunchLab 提供 GPS 電子圍欄打卡、8 種假別申請與審批、費用報銷管理；HRLab 則自動計算月薪、加班費、勞健保與所得稅，並內建 2026 年台灣最新費率表。整個平台用 Next.js + Tailwind CSS 打造，所有功能對中小企業永久免費開放。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/projects/cacalabs-cover.jpg',
    images: [],
    url: 'https://cacalabs.app/',
    featured: true,
    order: 2,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['Vue', 'Node.js', 'MongoDB'],
    coverImage: '/images/projects/project-three-cover.jpg',
    images: ['/images/projects/project-three-1.jpg'],
    featured: true,
    order: 3,
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    coverImage: '/images/projects/project-four-cover.jpg',
    images: ['/images/projects/project-four-1.jpg'],
    url: 'https://example.com',
    featured: true,
    order: 4,
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['Next.js', 'Prisma', 'Vercel'],
    coverImage: '/images/projects/project-five-cover.jpg',
    images: ['/images/projects/project-five-1.jpg'],
    featured: true,
    order: 5,
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    coverImage: '/images/projects/project-six-cover.jpg',
    images: ['/images/projects/project-six-1.jpg'],
    featured: true,
    order: 6,
  },
  {
    slug: 'extra-project-one',
    title: 'Extra Project One',
    description: 'Brief description of an additional project.',
    longDescription: 'More details about this extra project. Replace with your real project.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    coverImage: '/images/projects/extra-one-cover.jpg',
    images: ['/images/projects/extra-one-1.jpg'],
    featured: false,
    order: 7,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
