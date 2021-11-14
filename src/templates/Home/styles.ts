import styled, { css } from 'styled-components'

export const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    padding: ${theme.gutter};
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xxlarge};
    text-align: center;
    margin-bottom: 2rem;
    font-weight: ${theme.font.weight.light};
  `}
`
