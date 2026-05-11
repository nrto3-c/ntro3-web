import '@testing-library/jest-dom'

jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      div: ({ children, ...props }: any) => React.createElement('div', props, children),
      a: ({ children, ...props }: any) => React.createElement('a', props, children),
    },
    AnimatePresence: ({ children }: any) => children,
  }
})
