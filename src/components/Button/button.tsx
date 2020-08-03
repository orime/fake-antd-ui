import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  classname?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;

}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, size, children, disabled, href } = props
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >{children}</a>
    )
  }
  return (
  <button
    className={classes}
    disabled={disabled}  
  >
    {children}
  </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button