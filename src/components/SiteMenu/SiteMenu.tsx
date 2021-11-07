import React from 'react'

import Logo from './logo.svg'
import {SiteMenuProps} from './SiteMenu.props'

export const SiteMenu = ({className, ...props}: SiteMenuProps): JSX.Element => {

  return (
    <div>
      <Logo />
    </div>
  )
}