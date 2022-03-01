import React, { ReactElement } from 'react'
import { ListItem, PersonPicture } from './styledComponents'
import { PersonDetails } from '../../../pages/Home/typings'

interface PersonItemProps {
  person: PersonDetails
}

const PersonItem = ({ person }: PersonItemProps): ReactElement => {
  const { avatar, name, description } = person

  return (
    <ListItem role="listitem">
      <PersonPicture>
        <img src={avatar} alt={name} />
      </PersonPicture>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </ListItem>
  )
}
export default PersonItem
