import { useState } from 'react'
import Image from 'next/image'
import BioCard from 'components/BioCard'
import Button from 'components/Button'
import Empty from 'components/Empty'
import RepoCard, { RepoCardProps } from 'components/RepoCard'
import SearchBar from 'components/SearchBar'
import * as S from './styles'

type cardsMockProps = {
  data: {
    id: number
  }
} & RepoCardProps

export type OrganizationProps = {
  data: {
    name: string
    description: string
    avatar: string
    location: string
    website: string
    cardsMock?: cardsMockProps[]
  }
}

const OrganizationTemplate = ({ data }: OrganizationProps) => {
  const [loading, setLoading] = useState(false)

  return (
    <S.Container>
      <S.Wrapper>
        <SearchBar withLogo />
        <S.Section>
          <BioCard
            name={data.name}
            description={data.description}
            avatar={data.avatar}
            location={data.location}
            website={data.website}
          />
          <S.Repositories>
            <h2>Repositories ({data.cardsMock!.length})</h2>
            <S.Grid empty={!data.cardsMock!.length}>
              {data.cardsMock!.length > 0 ? (
                data.cardsMock!.map((card: cardsMockProps) => (
                  <RepoCard key={card.data.id} {...card} />
                ))
              ) : (
                <Empty />
              )}
            </S.Grid>
            {data.cardsMock!.length > 0 && (
              <Button disabled={loading} onClick={() => setLoading(!loading)}>
                {loading ? (
                  <Image src="/img/loading.svg" height={20} width={20} />
                ) : (
                  'Load more'
                )}
              </Button>
            )}
          </S.Repositories>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  )
}

export default OrganizationTemplate
