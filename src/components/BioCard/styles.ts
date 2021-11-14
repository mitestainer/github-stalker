import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.purple};
    padding: ${theme.gutter};
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    grid-template-rows: 1fr 1fr;
    column-gap: ${theme.gutter};
    justify-content: start;
    text-align: left;
    align-items: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto auto;
      row-gap: ${theme.gutter};
    }
  `}
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    box-shadow: 0 0 0 0.1rem ${theme.colors.lightgray};
    overflow: hidden;
    grid-row: 1 / -1;
    position: relative;

    @media screen and (max-width: 768px) {
      grid-row: 1 / 2;
    }
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.xxlarge};
    color: ${theme.colors.darkPurple};

    @media screen and (max-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    font-size: ${theme.font.size.small};

    @media screen and (max-width: 768px) {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
    }
  `}
`

const common = css`
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  > svg {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    justify-self: end;
  }
`

export const Location = styled.p`
  grid-column: 3 / 4;
  ${common};

  @media screen and (max-width: 768px) {
    grid-row: 3 / 4;
  }
`

export const Website = styled.p`
  grid-column: 4 / 5;

  ${common};

  @media screen and (max-width: 768px) {
    grid-row: 4 / 5;
  }

  > a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    column-gap: 0.2rem;

    > svg {
      font-size: 1rem;
    }
  }
`
