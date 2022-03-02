import React from 'react'
import { render } from '@testing-library/react'
import AirLogo from '.'

describe('AirLogo', () => {
  it('Should render without errors', () => {
    const { container } = render(<AirLogo />)

    expect(container).toBeInTheDocument()
  })
})
