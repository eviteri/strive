import { People } from './typings'

export const peopleCounter = 50

export const filterPeople = (search: string, people: People): People => {
  const filteredPeople = people.filter(person => {
    const { name } = person

    return name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })

  return filteredPeople
}

export const getPeopleChunk = (people: People, lastIndex: number): People => {
  const tmpPeople = [...people]
  return tmpPeople.splice(0, lastIndex)
}
