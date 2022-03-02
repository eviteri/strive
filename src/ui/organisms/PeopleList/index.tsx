import React, { ReactElement, memo } from 'react'
import { People } from '../../../pages/Home/typings'
import PersonItem from '../../molecules/PersonItem'

export interface PeopleListProps {
  people: People
}

const PeopleList = ({ people }: PeopleListProps): ReactElement => {
  return (
    <div role="list">
      {people.map(person => (
        <PersonItem key={person.id} person={person} />
      ))}
    </div>
  )
}
export default memo(PeopleList)
