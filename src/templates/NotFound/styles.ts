import styled, { css } from 'styled-components'
import { Page as PageStyles } from 'templates/Home/styles'
import { Container } from 'components/Container'

export const Page = styled(PageStyles)`
  max-width: 75rem;
  width: 100%;

  ${Container} {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.gutter};
    background-color: ${theme.colors.white};
    padding: ${theme.gutter};
    text-align: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.darkPurple};
  `}
`
