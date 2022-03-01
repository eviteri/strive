import styled from 'styled-components'

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const PersonPicture = styled.div`
  width: 95.83px;
  height: 96px;
  background: #c4c4c4;
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
`
