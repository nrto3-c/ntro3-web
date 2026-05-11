import { getFeaturedProjects, getAllProjects, getProjectBySlug } from '@/data/projects'

describe('projects data', () => {
  test('getFeaturedProjects returns at most 6 projects', () => {
    const featured = getFeaturedProjects()
    expect(featured.length).toBeLessThanOrEqual(6)
  })

  test('getFeaturedProjects returns only featured projects', () => {
    const featured = getFeaturedProjects()
    featured.forEach((p) => expect(p.featured).toBe(true))
  })

  test('getFeaturedProjects returns projects sorted by order ascending', () => {
    const featured = getFeaturedProjects()
    for (let i = 1; i < featured.length; i++) {
      expect(featured[i].order).toBeGreaterThanOrEqual(featured[i - 1].order)
    }
  })

  test('getAllProjects returns all projects sorted by order ascending', () => {
    const all = getAllProjects()
    expect(all.length).toBeGreaterThan(0)
    for (let i = 1; i < all.length; i++) {
      expect(all[i].order).toBeGreaterThanOrEqual(all[i - 1].order)
    }
  })

  test('getProjectBySlug returns the correct project for a valid slug', () => {
    const all = getAllProjects()
    const first = all[0]
    const found = getProjectBySlug(first.slug)
    expect(found).toBeDefined()
    expect(found?.slug).toBe(first.slug)
  })

  test('getProjectBySlug returns undefined for an unknown slug', () => {
    expect(getProjectBySlug('not-a-real-slug-xyz')).toBeUndefined()
  })
})
