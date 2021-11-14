import { FiStar } from 'react-icons/fi'
import * as S from './styles'

export type RepoCardProps = {
  name: string
  description: string
  stars: number
  language?: string
  url: string
  updatedAt: string
}

const RepoCard = ({
  name,
  description,
  stars,
  language,
  url,
  updatedAt
}: RepoCardProps) => {
  return (
    <S.Wrapper href={url} target="_blank">
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.Footer>
        <S.UpdatedAt>Last update: {updatedAt}</S.UpdatedAt>
        <S.Star aria-label="stars">
          <FiStar />
          {stars}
        </S.Star>
        {!!language && <S.Badge aria-label="language">{language}</S.Badge>}
      </S.Footer>
    </S.Wrapper>
  )
}

export default RepoCard
