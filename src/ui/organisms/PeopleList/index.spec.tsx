import React from 'react'
import { render, screen } from '@testing-library/react'
import PeopleList, { PeopleListProps } from '.'

const mockProps: PeopleListProps = {
  people: [
    {
      id: 1,
      name: 'Dyanna Cullingford',
      email: 'dcullingford0@nba.com',
      avatar: 'https://robohash.org/rerumliberoamet.png?size=200x200&set=set1',
      description:
        'Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture'
    },
    {
      id: 2,
      name: 'Gunther Heinsen',
      email: 'gheinsen1@pen.io',
      avatar: 'https://robohash.org/teneturutenim.png?size=200x200&set=set1',
      description:
        'Diffuse large B-cell lymphoma, extranodal and solid organ sites'
    }
  ]
}

describe('PeopleList', () => {
  it('Should render without errors', () => {
    const { container } = render(<PeopleList {...mockProps} />)

    const peopleList = screen.getByRole('list')
    const personItems = screen.getAllByRole('listitem')

    expect(container).toBeInTheDocument()
    expect(peopleList).toBeInTheDocument()
    expect(personItems).toHaveLength(mockProps.people.length)
  })
})
