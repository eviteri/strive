import { useState, useEffect, useCallback } from 'react'

interface Entry {
  intersectionRatio: number
  isIntersecting: boolean
}

interface ObserverProps {
  root: Element | null
  rootMargin: string
  threshold: number | number[]
}

export default function useInViewPort(
  intersectionRation: number,
  wrapperRef: any
) {
  const [isInViewPort, setIsInViewPort] = useState(false)

  const observerCallBack = useCallback(
    (entries: Entry[], observer: any) => {
      let intersectionCounter = 0
      entries.forEach((entry: Entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= intersectionRation
        ) {
          intersectionCounter++
        }
      })

      if (intersectionCounter > 0) {
        setIsInViewPort(true)
      }
    },
    [intersectionRation]
  )

  const createObserver = useCallback(() => {
    const options: ObserverProps = {
      root: null,
      rootMargin: '0px',
      threshold: [intersectionRation]
    }

    const observer = new IntersectionObserver(observerCallBack, options)
    const target = wrapperRef.current

    if (target) {
      observer.observe(target)
    }
  }, [intersectionRation, observerCallBack, wrapperRef])

  useEffect(() => {
    createObserver()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isInViewPort, resetIsInViewPort: () => setIsInViewPort(false) }
}
