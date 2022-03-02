import React, {
  ReactElement,
  useState,
  useCallback,
  useRef,
  useEffect,
  memo
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
  const [filteredData, setFilteredData] = useState<People>([])

  const intersectionRation = 1.0
  const loadMoreRef = useRef(null)
  const { isInViewPort, resetIsInViewPort } = useInViewPort(
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
          setPeople(getPeopleChunk(mockData, peopleCounter))
          setLastChunkIndex(peopleCounter)
          resetIsInViewPort()
        } else {
          const filtered = filterPeople(value, mockData)
          setPeople(getPeopleChunk(filtered, peopleCounter))
          setFilteredData(filtered)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const loadMorePeope = useCallback(() => {
    const currentPeople = search === '' ? mockData : filteredData

    if (lastChunkIndex <= currentPeople.length - 1) {
      const newChunkIndex = lastChunkIndex + peopleCounter
      const newPeopleList = getPeopleChunk(currentPeople, newChunkIndex)
      setPeople(newPeopleList)
      setLastChunkIndex(newChunkIndex)
    }
  }, [filteredData, lastChunkIndex, search])

  useEffect(() => {
    if (isInViewPort) {
      loadMorePeope()
      resetIsInViewPort()
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
        <>
          <PeopleList people={people} />
          <LoadMore ref={loadMoreRef} type="button" onClick={loadMorePeope}>
            Load More People
          </LoadMore>
        </>
      ) : (
        <div>No results found 🙁 </div>
      )}
    </div>
  )
}
export default memo(Home)
