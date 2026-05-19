export type Project = {
  num: string
  name: string
  kind: string
  year: string
  desc: string
  tags: string[]
  href: string
  coverSvg: string
}

export const projects: Project[] = [
  {
    num: '01',
    name: 'GranSample',
    kind: 'iOS · AUv3',
    year: '2024',
    desc: '顆粒採樣器，把任何聲音切碎、重組成全新音景 — 完整支援 AUv3，可在 GarageBand、Logic Pro 中直接使用',
    tags: ['SwiftUI', 'AUv3', 'iOS'],
    href: 'https://www.gransample.xyz/',
    coverSvg: '/previews/01-gransample.svg',
  },
  {
    num: '02',
    name: 'CacaLabs',
    kind: 'Web App',
    year: '2024',
    desc: '台灣中小企業考勤薪資管理平台 — GPS 打卡、請假審批、自動薪資計算，永久免費',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    href: 'https://cacalabs.app/',
    coverSvg: '/previews/02-cacalabs.svg',
  },
  {
    num: '03',
    name: 'SpellSynth',
    kind: 'iOS · AUv3',
    year: '2023',
    desc: '向 1978 年復古拼字玩具致敬的音樂 App — 支援 AUv3 樂器外掛，可在各大 DAW 中演奏',
    tags: ['SwiftUI', 'AUv3', 'iOS'],
    href: 'https://nono-today.github.io/spellsynth/',
    coverSvg: '/previews/03-spellsynth.svg',
  },
  {
    num: '04',
    name: 'SRTWhisper',
    kind: 'macOS',
    year: '2024',
    desc: '把影片語音一鍵轉成字幕的 Mac App — 基於 Whisper AI，支援本地模型，完全離線運作',
    tags: ['Swift', 'Whisper AI', 'macOS'],
    href: 'https://nono-today.github.io/SRTWhisper/',
    coverSvg: '/previews/04-srtwhisper.svg',
  },
]
