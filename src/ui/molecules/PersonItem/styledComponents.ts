import styled from 'styled-components'
import query from '../../../const/mediaQueries'

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 24px;
  @media ${query.lessThanSmall} {
    flex-direction: column;
    align-items: center;
  }
`

export const PersonPicture = styled.div`
  width: 95.83px;
  height: 96px;
  background-color: ${({ theme }) => theme.avatarBackground};
  border-radius: 2px;
  margin-right: 24px;
  flex-shrink: 0;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  @media ${query.lessThanSmall} {
    margin-right: 0;
    margin-bottom: 24px;
  }
`

export const PersonInfo = styled.div`
  width: 100%;
`

export const PersonName = styled.p`
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: -0.025em;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.personDescription};
`
