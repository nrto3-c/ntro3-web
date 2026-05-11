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
    slug: 'gransample',
    title: 'GranSample',
    description: 'iPhone & iPad 上的顆粒採樣器，支援 AUv3 外掛格式，可在 GarageBand、Logic Pro 中直接使用。',
    longDescription: 'GranSample 是一款為 iOS 打造的 16-pad 顆粒採樣器，內建顆粒合成引擎，讓你把任何聲音切碎、重組成全新的音景。完整支援 AUv3 外掛格式，可無縫整合進 GarageBand、Logic Pro、AUM 等專業 DAW。支援 MIDI 控制器、參數自動化，適合現場演出與錄音製作。',
    tags: ['iOS', 'Swift', 'AUv3'],
    coverImage: '/images/projects/gransample-cover.jpg',
    images: [],
    url: 'https://www.gransample.xyz/',
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
    slug: 'spellsynth',
    title: 'SpellSynth',
    description: '向 1978 年復古拼字玩具致敬的 iOS 音樂 App，支援 AUv3 樂器外掛，可在各大 DAW 中演奏。',
    longDescription: 'SpellSynth 是一封寫給 1978 年經典拼字玩具的情書——把那個教了整個世代拼字的老玩具，重新帶回 iPhone 與 iPad。內建復古語音合成引擎，每個字母都有自己的音色與個性。完整支援 AUv3 樂器外掛，可在 GarageBand、Logic Pro、Loopy Pro、Cubasis 中直接彈奏，支援 MIDI、參數自動化與 preset 管理。',
    tags: ['iOS', 'Swift', 'AUv3'],
    coverImage: '/images/projects/spellsynth-cover.jpg',
    images: [],
    url: 'https://nono-today.github.io/spellsynth/',
    featured: true,
    order: 3,
  },
  {
    slug: 'srtwhisper',
    title: 'SRTWhisper',
    description: '把影片語音一鍵轉成字幕的 Mac App，基於 Whisper AI，支援本地模型，完全離線運作。',
    longDescription: 'SRTWhisper 是一款原生 macOS App，讓你不用上傳影片就能把語音轉成字幕檔（.srt）。底層使用 OpenAI Whisper 語音辨識引擎，支援透過 Ollama 跑本地 LLM 模型，也可接 OpenAI API 進行翻譯。適合剪片師、Podcaster、或任何需要快速產生字幕的人，隱私優先、完全離線。',
    tags: ['macOS', 'Swift', 'Whisper AI'],
    coverImage: '/images/projects/srtwhisper-cover.jpg',
    images: [],
    url: 'https://nono-today.github.io/SRTWhisper/',
    featured: true,
    order: 4,
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
