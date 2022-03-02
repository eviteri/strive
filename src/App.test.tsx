import React from 'react'
import { render } from '@testing-library/react'
import TestWrapper from './setupTests'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('Should render without errors', () => {
    const { container } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )

    expect(container).toBeInTheDocument()
  })
})
