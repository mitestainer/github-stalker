import styled, { css } from 'styled-components'
import { Container as DefaultContainer } from 'components/Container'
import { Wrapper as BioCardWrapper } from 'components/BioCard/styles'
import { Button } from 'components/Button/styles'

export const Container = styled(DefaultContainer)`
  ${({ theme }) => css`
    margin: ${theme.gutter} auto;
    width: 100%;

    @media screen and (max-width: 768px) {
      margin: ${theme.gutter};
    }
  `}
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;

    ${BioCardWrapper} {
      margin: ${theme.gutter} 0;
    }
  `}
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`

export const Repositories = styled.div`
  ${({ theme }) => css`
    padding: ${theme.gutter};
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    flex: 1 1;
    display: flex;
    flex-direction: column;
    row-gap: ${theme.gutter};

    > h2 {
      font-size: ${theme.font.size.medium};
    }

    ${Button} {
      background-color: ${theme.colors.lightgray};
      color: ${theme.colors.gray};
      width: 10rem;
      height: 4rem;
      margin: 0 auto;

      &:hover,
      &:disabled {
        opacity: 0.8;
      }
    }
  `}
`

type GridProps = {
  empty: boolean
}

export const Grid = styled.div<GridProps>`
  ${({ theme, empty }) => css`
    display: ${empty ? 'flex' : 'grid'};

    ${empty
      ? css`
          flex: 1 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          row-gap: ${theme.gutter};
          color: ${theme.colors.gray};
        `
      : css`
          grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
          gap: ${theme.gutter};
        `}

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
  `}
`
