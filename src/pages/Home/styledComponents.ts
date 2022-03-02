import styled from 'styled-components'
import query from '../../const/mediaQueries'

export const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.pageTitleColor};
  @media ${query.lessThanMedium} {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`

export const Body = styled.p`
  margin-bottom: 30px;
`

export const LoadMore = styled.div`
  visibility: hidden;
`
