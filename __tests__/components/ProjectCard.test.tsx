import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/data/projects'

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  description: 'A test project description.',
  longDescription: 'Longer description.',
  tags: ['React', 'TypeScript'],
  coverImage: '/images/test-cover.jpg',
  images: [],
  url: 'https://test.com',
  featured: true,
  order: 1,
}

describe('ProjectCard', () => {
  test('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  test('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test project description.')).toBeInTheDocument()
  })

  test('renders all tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  test('card wraps content in a link to the project detail page', () => {
    render(<ProjectCard project={mockProject} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/projects/test-project')
  })
})
