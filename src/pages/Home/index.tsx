import React, {
  ReactElement,
  useState,
  useCallback,
  useRef,
  useEffect
} from 'react'
import { H1, Body, LoadMore } from './styledComponents'
import mockData from '../../api/mock-data.json'
import { People } from './typings'
import PeopleList from '../../ui/organisms/PeopleList'
import SearchField from '../../ui/atoms/SearchField'
import { peopleCounter, filterPeople, getPeopleChunk } from './helpers'
import useInViewPort from '../../hooks/useInViewPort'

const Home = (): ReactElement => {
  const [search, setSearch] = useState<string>('')
  const [lastChunkIndex, setLastChunkIndex] = useState<number>(peopleCounter)
  const [people, setPeople] = useState<People>(
    getPeopleChunk(mockData, lastChunkIndex)
  )
  const [scrolledData, setScrolledData] = useState<People>(people)

  const intersectionRation = 1.0
  const loadMoreRef = useRef(null)
  const { isInViewPort, updateIsInViewPort } = useInViewPort(
    intersectionRation,
    loadMoreRef
  )

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const nameRegex = /^[a-zA-Z ]*$/

      if (nameRegex.test(value)) {
        setSearch(value)
        if (value === '') {
          setPeople(scrolledData)
          setLastChunkIndex(scrolledData.length)
          updateIsInViewPort()
        } else {
          setPeople(filterPeople(value, mockData))
        }
      }
    },
    [scrolledData, updateIsInViewPort]
  )

  const loadMorePeope = useCallback(() => {
    if (lastChunkIndex <= mockData.length - 1) {
      const newChunkIndex = lastChunkIndex + peopleCounter
      const newPeopleList = getPeopleChunk(mockData, newChunkIndex)
      setPeople(newPeopleList)
      setScrolledData(newPeopleList)
      setLastChunkIndex(newChunkIndex)
    }
  }, [lastChunkIndex])

  useEffect(() => {
    if (isInViewPort && search === '') {
      loadMorePeope()
      updateIsInViewPort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewPort])

  return (
    <div>
      <H1>The Person Finder</H1>
      <Body>
        If you just can’t find someone and need to know what they look like,
        you’ve come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </Body>
      <SearchField
        search={search}
        placeHolder="Search in Air HQ"
        onChange={handleOnChange}
      />
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <div>No results found 🙁 </div>
      )}
      <LoadMore ref={loadMoreRef}>Load More People</LoadMore>
    </div>
  )
}
export default Home
