import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { peopleCounter } from './helpers'
import Home from '.'

describe('Home', () => {
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
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })

  it('Lazy loads people in sets of 100', () => {
    render(<Home />)

    const loadMoreElement = screen.getByText(/Load More People/i)

    // 100 People
    let listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter)

    // 200 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 2)

    // 300 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 3)

    // 400 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 4)

    // 500 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 5)

    // 600 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 6)

    // 700 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 7)

    // 800 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 8)

    // 900 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 9)

    // 1000 people
    userEvent.click(loadMoreElement)
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter * 10)
  })

  it('Should filter users', () => {
    render(<Home />)

    const searchFiled = screen.getByRole('textbox')

    // Should show 100 users
    let listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(peopleCounter)

    // Finding a specific user
    userEvent.clear(searchFiled)
    userEvent.type(searchFiled, 'Dyanna Cullingford')

    // Should show only one user
    listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(1)

    // Typing a non-existing user name
    userEvent.clear(searchFiled)
    userEvent.type(searchFiled, 'dddddd')

    const noResults = screen.getByText(/No results found/i, { exact: false })
    expect(noResults).toBeInTheDocument()
  })
})
