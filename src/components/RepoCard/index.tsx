import { FiStar } from 'react-icons/fi'
import * as S from './styles'

export type RepoCardProps = {
  data: {
    name: string
    description: string
    stars: number
    tech: string
    url: string
  }
}

const RepoCard = ({ data }: RepoCardProps) => {
  return (
    <S.Wrapper href={data.url} target="_blank">
      <S.Content>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
      </S.Content>
      <S.Footer>
        <S.Star>
          <FiStar />
          {data.stars}
        </S.Star>
        <S.Badge>{data.tech}</S.Badge>
      </S.Footer>
    </S.Wrapper>
  )
}

export default RepoCard
