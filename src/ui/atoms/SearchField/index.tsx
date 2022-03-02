import React, { ReactElement, memo } from 'react'
import { InputWrapper, MagnifyImage, InputElement } from './styledComponents'
import magnifyingIcon from '../../../assets/icons/magnifiying.png'

export interface SearchFieldProps {
  search: string
  placeHolder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField = ({
  search,
  placeHolder,
  onChange
}: SearchFieldProps): ReactElement => {
  return (
    <InputWrapper>
      <MagnifyImage src={magnifyingIcon} alt="Magnifiying Icon" />
      <InputElement
        type="text"
        value={search}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </InputWrapper>
  )
}
export default memo(SearchField)
