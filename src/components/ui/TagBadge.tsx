'use client'

import { getTagColor } from '@/lib/utils'

type Props = { tag: string }

export function TagBadge({ tag }: Props) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getTagColor(tag)}`}
    >
      {tag}
    </span>
  )
}
