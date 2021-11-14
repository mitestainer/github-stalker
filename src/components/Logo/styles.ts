import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: 'Indie Flower', cursive;
    font-size: ${theme.font.size.title};
    background: -webkit-linear-gradient(
      90deg,
      rgba(95, 73, 202, 1) 0%,
      rgba(147, 135, 225, 1) 85%,
      rgba(173, 165, 225, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      line-height: 1;
    }
  `}
`
