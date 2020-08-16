import React from 'react'
import { render } from '@testing-library/react'

import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  className: 'test',
  
}

describe('test Menu and MenuItem component', () => {
  it('should render correct Menu and MenuItem based on default props', () => {

  })
  it('click item should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})