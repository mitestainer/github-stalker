import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    background-color: ${theme.colors.detail};
    padding: ${theme.gutter};
    border-radius: ${theme.borderRadius};

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  `}
`
