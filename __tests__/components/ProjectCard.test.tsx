import { render } from '@testing-library/react'
import { ProjectCard } from '@/components/ui/ProjectCard'

describe('ProjectCard', () => {
  test('renders without errors', () => {
    expect(() => render(<ProjectCard />)).not.toThrow()
  })
})
