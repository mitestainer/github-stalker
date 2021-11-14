import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>
}

export default Button
