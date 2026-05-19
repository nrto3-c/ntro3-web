import { projects } from '@/data/projects'

describe('projects data', () => {
  test('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  test('each project has required fields', () => {
    projects.forEach((p) => {
      expect(p.num).toBeDefined()
      expect(p.name).toBeDefined()
      expect(p.kind).toBeDefined()
      expect(p.year).toBeDefined()
      expect(p.desc).toBeDefined()
      expect(Array.isArray(p.tags)).toBe(true)
      expect(p.href).toBeDefined()
      expect(p.coverSvg).toBeDefined()
    })
  })

  test('project nums are unique', () => {
    const nums = projects.map((p) => p.num)
    expect(new Set(nums).size).toBe(nums.length)
  })
})
