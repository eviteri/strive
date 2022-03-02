import React from 'react'
import { render, screen } from '@testing-library/react'
import PersonItem, { PersonItemProps } from '.'

const mockProps: PersonItemProps = {
  person: {
    id: 1,
    name: 'Dyanna Cullingford',
    email: 'dcullingford0@nba.com',
    avatar: 'https://robohash.org/rerumliberoamet.png?size=200x200&set=set1',
    description:
      'Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture'
  }
}

describe('PersonItem', () => {
  it('Should render without errors', () => {
    const { container } = render(<PersonItem {...mockProps} />)

    const avatar = screen.getByRole('img')
    const name = screen.getByText(mockProps.person.name)
    const descriptions = screen.getByText(mockProps.person.description)

    expect(container).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(descriptions).toBeInTheDocument()
  })
})
