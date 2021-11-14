import styled, { css } from 'styled-components'
import { Button } from 'components/Button/styles'
import { SearchBarProps } from '.'

export const Wrapper = styled.div<SearchBarProps>`
  ${({ theme, withLogo }) => css`
    ${withLogo &&
    css`
      display: flex;
      align-items: center;
      column-gap: ${theme.gutter};

      > a {
        font-size: ${theme.font.size.logo};
        text-decoration: none;
      }
    `};

    > form {
      display: flex;
      width: 100%;
      column-gap: ${theme.gutter};

      ${Button} {
        background-color: ${theme.colors.darkPurple};
        color: ${theme.colors.white};

        & > svg {
          height: 1.8rem;
          width: 1.8rem;
        }

        &:hover {
          background-color: ${theme.colors.purple};
        }
      }
    }
  `}
`

export const InputField = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightgray};
    border-radius: ${theme.borderRadius};
    border: 0;
    width: 100%;
    color: ${theme.colors.darkPurple};
    padding-left: 2rem;

    &:hover,
    &:focus {
      outline: 0.2rem solid ${theme.colors.darkPurple};
    }

    &::placeholder {
      color: ${theme.colors.purple};
    }
  `}
`
