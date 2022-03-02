import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  it('Should render without errors', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })

  it('Should render Logo', () => {
    render(<Header />)

    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
