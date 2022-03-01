import styled from 'styled-components'
import query from '../../../const/mediaQueries'

export const HeaderWrapper = styled.header`
  height: 117px;
  position: relative;
  @media ${query.lessThanMedium} {
    height: 55px;
  }
`

export const LogoWrapper = styled.div`
  position: absolute;
  width: 58.85px;
  top: 33px;
  left: 13%;
  @media ${query.lessThanMedium} {
    left: unset;
    top: 25%;
    right: 2%;
  }
`
