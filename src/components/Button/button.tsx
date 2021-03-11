import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'

type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
  classname?: string;
  /** 设置Button是否禁用 */
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;

}

// 定义Button原始属性接口 | uni type联合类型返回的是A或者B
// 但是现在我们是两种类型都要，所以要用交叉类型，将多个类型合并为一个类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

// a链接的button的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

// 有些属性是button上必须但是在a链接上是可选的
// Partial可以把对应类型的所有属性都变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
  const { btnType, size, className, children, disabled, href, ...restProps } = props
  const classes = classNames('btn', className, { // ! 把用户传入的classname也加上去
    [`btn-${btnType}`]: btnType, // ! 这里意为如果传入了btnType，则加上btn-primary类名，否则无该类名
    [`btn-${size}`]: size,
    'disabled': (btnType === "link") && disabled
  })
  if (btnType === "link" && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >{children}</a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}


export default Button;