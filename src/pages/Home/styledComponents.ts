import styled from 'styled-components'
import query from '../../const/mediaQueries'

export const H1 = styled.h1`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 110%;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.pageTitleColor};
  @media ${query.lessThanMedium} {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`

export const Body = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  margin-bottom: 31px;
`

export const LoadMore = styled.button`
  visibility: hidden;
`
