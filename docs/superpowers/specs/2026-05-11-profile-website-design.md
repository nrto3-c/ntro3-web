# Personal Profile Website — Design Spec

**Date:** 2026-05-11  
**Goal:** 建立個人 Profile 網站，向潛在外包客戶展示網頁作品，建立專業信任感。

---

## 1. 目標與受眾

- **目標觀眾：** 潛在外包客戶（想找人做專案的公司或個人）
- **核心訴求：** 讓訪客在 30 秒內看懂「你能做什麼」並產生信任
- **主要強調：** 前端視覺能力 + 通用問題解決能力

---

## 2. 技術選型

| 項目 | 選擇 | 理由 |
|------|------|------|
| 框架 | Next.js 14（App Router） | SEO 好、靜態生成、擴充彈性 |
| 語言 | TypeScript | 型別安全，資料結構明確 |
| 樣式 | Tailwind CSS | 快速實現彩色活潑風格 |
| 動效 | Framer Motion | 卡片 hover、頁面進場動畫 |
| 資料 | `src/data/projects.ts`（JSON-like TypeScript） | 零外部依賴，改檔案即更新 |
| 圖片 | `public/images/projects/` | Next.js `<Image>` 自動最佳化 |
| 部署 | Vercel | 免費、一鍵部署、自訂網域 |

---

## 3. 資料結構

```typescript
// src/data/projects.ts

type Project = {
  slug: string           // URL 路徑，如 "ecommerce-platform"
  title: string          // 專案名稱
  description: string    // 短描述（首頁卡片用，約 80 字以內）
  longDescription: string // 完整介紹（詳細頁用）
  tags: string[]         // 技術標籤，如 ["React", "TypeScript", "Stripe"]
  coverImage: string     // 封面圖路徑，如 "/images/projects/ecommerce-cover.jpg"
  images: string[]       // 詳細頁截圖列表
  url?: string           // 上線網址（選填）
  github?: string        // GitHub 連結（選填）
  featured: boolean      // true = 首頁精選（最多 6 個）
  order: number          // 排列順序（數字小的排前面）
}
```

---

## 4. 頁面路由

| 路由 | 頁面 | 說明 |
|------|------|------|
| `/` | 首頁 | Hero + 精選專案 + 關於我 + 聯絡 |
| `/projects` | 全部作品集 | 所有專案的網格瀏覽 |
| `/projects/[slug]` | 專案詳細頁 | 截圖、完整描述、技術、連結 |

---

## 5. 頁面設計

### 5.1 首頁（`/`）

區塊由上到下：

1. **Hero**
   - 大標題（姓名或工作室名稱）
   - 一句話定位語（如「打造讓人印象深刻的網頁體驗」）
   - CTA 按鈕：「查看作品」→ 捲動到精選專案區
   - 背景：彩色漸層 blob 動效（CSS + Framer Motion）

2. **精選作品**
   - 6 張卡片，2–3 欄 grid（RWD 自適應）
   - 每張卡片：封面圖、標題、短描述、技術標籤
   - Hover：卡片微浮起（translateY + box-shadow）、封面圖輕微放大
   - 點擊→ 導向 `/projects/[slug]`

3. **更多作品連結**
   - 一行文字 + 箭頭按鈕 → `/projects`

4. **關於我**
   - 一段簡短自我介紹（2–3 句）
   - 技能標籤列表（React、Next.js、TypeScript、Tailwind CSS 等）

5. **聯絡我**
   - Email `mailto:` 大按鈕
   - 社群媒體 icon 連結（GitHub、LinkedIn 等）

### 5.2 全部作品集（`/projects`）

- 所有 `featured: false` 和 `featured: true` 的專案全部列出
- 網格佈局（3–4 欄）
- 支援技術標籤篩選（選填，可後續加入）

### 5.3 專案詳細頁（`/projects/[slug]`）

- 大封面圖（全寬）
- 標題 + 技術標籤
- 完整描述文字
- 截圖輪播（多張圖片）
- 「查看網站」「GitHub」按鈕（依資料決定是否顯示）
- 返回按鈕 → `/projects`

---

## 6. 視覺風格

- **色調：** 明亮多彩，白底為主，彩色漸層作為點綴
- **技術標籤：** 每個 tag 有不同顏色（預設色盤，自動分配）
- **字體：** 大標題使用 Inter Black 或 Geist，內文使用 Inter Regular
- **卡片：** 白色圓角卡片（`rounded-2xl`），有 hover 動畫
- **間距：** 大量留白讓視覺呼吸

---

## 7. SEO

- 每頁有獨立 `metadata`（`title`、`description`、`og:image`）
- 專案詳細頁 metadata 自動從 `projects.ts` 資料生成
- `sitemap.xml` 透過 Next.js `app/sitemap.ts` 自動產生
- `robots.txt` 允許所有爬蟲

---

## 8. 聯絡方式

- 使用 `mailto:` 連結，不需要表單
- 顯示 Email 地址 + 一鍵寄信按鈕

---

## 9. 擴充路徑

| 需求 | 做法 |
|------|------|
| 加後台 CMS | 將 `src/data/projects.ts` 換成 Sanity / Notion API，頁面結構不動 |
| 加部落格 | 新增 `/blog` 路由，MDX 或 CMS 驅動 |
| 加多語言 | Next.js i18n，已預留結構空間 |
| 加標籤篩選 | `/projects` 頁加入前端 filter state |

---

## 10. 不在本次範圍

- 後台管理介面
- 表單送出功能（只用 mailto）
- 多語言
- 部落格
- 第三方 CMS 整合
