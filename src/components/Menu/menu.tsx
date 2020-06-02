import React, { FC, Children, createContext, useState } from 'react'
import classNames from 'classnames'
import styles from './menu.module.css'

// 创建字符字面量
type MenuMode =  "horizontal" | "vertical"
// 创建onSelect函数类型
type onSelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: onSelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: onSelectCallback
}

// 创建context
export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props

  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const handleClick = (index: number) => {
    if(onSelect) {
      onSelect(index)
    }
    setCurrentActive(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }

  // const classes = classNames(styles.vikingMenu, className, {
  //   'menu-vertical': mode === 'vertical'
  // })

  const classes = [styles.vikingMenu, mode === 'vertical' && styles.menuVertical].join(' ')

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
      {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu