import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import styles from './menu.module.css'

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  // const classes = classNames(styles.menuItem, className, {
  //   isDisabled: Boolean(disabled),
  //   'is-active': context.index === index
  // })

  const classes = `${styles.menuItem} ${disabled && styles.isDisabled} ${className} ${context.index === index && styles.isActive}`


  const handleClick = () => {
    if(context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem