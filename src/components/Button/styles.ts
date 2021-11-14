import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: ${theme.borderRadius};
    padding: 1rem 1.5rem;
    cursor: pointer;
  `}
`
