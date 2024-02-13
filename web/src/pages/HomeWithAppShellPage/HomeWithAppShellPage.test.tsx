import { render } from '@redwoodjs/testing/web'

import HomeWithAppShellPage from './HomeWithAppShellPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeWithAppShellPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeWithAppShellPage />)
    }).not.toThrow()
  })
})
