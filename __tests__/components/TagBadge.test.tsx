import { render, screen } from '@testing-library/react'
import { TagBadge } from '@/components/ui/TagBadge'

describe('TagBadge', () => {
  test('renders the tag text', () => {
    render(<TagBadge tag="React" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  test('applies a bg- color class from getTagColor', () => {
    const { container } = render(<TagBadge tag="TypeScript" />)
    const badge = container.firstChild as HTMLElement
    expect(badge.className).toMatch(/bg-/)
  })
})
