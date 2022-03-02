import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchField, { SearchFieldProps } from '.'

const mockOnChange = jest.fn()
const mockProps: SearchFieldProps = {
  search: '',
  placeHolder: 'mock place holder',
  onChange: mockOnChange
}

describe('SearchField', () => {
  it('Should render without errors', () => {
    const { container } = render(<SearchField {...mockProps} />)

    expect(container).toBeInTheDocument()
  })

  it('Should handle onClick', () => {
    render(<SearchField {...mockProps} />)

    const inputText = screen.getByRole('textbox')

    userEvent.clear(inputText)
    userEvent.type(inputText, 'some value')

    expect(mockOnChange).toHaveBeenCalled()
  })
})
