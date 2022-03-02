import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
`

export const MagnifyImage = styled.img`
  width: 9px;
  height: 9px;
  position: absolute;
  left: 17.5px;
  top: 15.5px;
`

export const InputElement = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.textFieldBackground};
  opacity: 0.6;
  border-radius: 4px;
  border: none;
  padding: 11px 20px 11px 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.015em;
  margin-bottom: 50px;
  &::placeholder {
    color: ${({ theme }) => theme.placeHolder};
  }
`
