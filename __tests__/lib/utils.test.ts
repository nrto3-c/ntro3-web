import { getTagColor } from '@/lib/utils'

describe('getTagColor', () => {
  test('returns the known color class for React', () => {
    expect(getTagColor('React')).toBe('bg-blue-100 text-blue-800')
  })

  test('returns a Tailwind bg- class string for unknown tags', () => {
    const color = getTagColor('UnknownFramework2024')
    expect(typeof color).toBe('string')
    expect(color).toMatch(/^bg-/)
  })

  test('returns the same color for the same unknown tag on repeated calls', () => {
    expect(getTagColor('SomeUnknownTag')).toBe(getTagColor('SomeUnknownTag'))
  })
})
