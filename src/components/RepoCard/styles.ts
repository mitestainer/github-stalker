import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: ${theme.gutter};
    border: 1px solid ${theme.colors.lightgray};
    height: 17rem;
    text-decoration: none;
  `}
`

export const Content = styled.div`
  text-align: left;
  flex: 1 1;
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray};
    margin-bottom: 10px;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    color: ${theme.colors.black};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: ${theme.font.size.xsmall};
    column-gap: 1rem;
  `}
`

export const UpdatedAt = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xxsmall};
    color: ${theme.colors.gray};
    flex: 1 0;
  `}
`

export const Star = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.gray};

    > svg {
      fill: ${theme.colors.lightgray};
      color: ${theme.colors.gray};
      margin-right: 0.3rem;
    }
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
    padding: 5px 10px;
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.darkPurple};
    color: ${theme.colors.darkPurple};
  `}
`
