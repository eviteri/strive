import React, { ReactElement } from 'react'
import { HeaderWrapper, LogoWrapper } from './styledComponents'
import AirLogo from '../../atoms/AirLogo'
import { colors } from '../../../theme'

const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <AirLogo color={colors.darkBlue} />
      </LogoWrapper>
    </HeaderWrapper>
  )
}
export default Header
