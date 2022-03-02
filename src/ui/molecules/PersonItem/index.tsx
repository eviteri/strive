import React, { ReactElement, memo } from 'react'
import {
  ListItem,
  PersonPicture,
  PersonInfo,
  PersonName,
  Description
} from './styledComponents'
import { PersonDetails } from '../../../pages/Home/typings'

export interface PersonItemProps {
  person: PersonDetails
}

const PersonItem = ({ person }: PersonItemProps): ReactElement => {
  const { avatar, name, description } = person

  return (
    <ListItem role="listitem">
      <PersonPicture>
        <img src={avatar} alt={name} />
      </PersonPicture>
      <PersonInfo>
        <PersonName>{name}</PersonName>
        <Description>{description}</Description>
      </PersonInfo>
    </ListItem>
  )
}
export default memo(PersonItem)
