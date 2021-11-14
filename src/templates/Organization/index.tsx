import { useEffect, useState } from 'react'
import Image from 'next/image'
import BioCard from 'components/BioCard'
import Button from 'components/Button'
import Empty from 'components/Empty'
import RepoCard, { RepoCardProps } from 'components/RepoCard'
import SearchBar from 'components/SearchBar'
import * as S from './styles'
import { fetchRepos } from '../../utils/fetchers/helpers'

type ReposProps = {
  id: number
} & RepoCardProps

export type OrganizationProps = {
  handle: string
  name: string
  description: string
  avatar: string
  location: string
  website: string
  reposCount: number
  repos: ReposProps[]
}

const OrganizationTemplate = ({
  handle,
  name,
  description,
  avatar,
  location,
  website,
  reposCount,
  repos
}: OrganizationProps) => {
  const [loading, setLoading] = useState(false)
  const [reposList, setReposList] = useState<ReposProps[]>([])
  const [nextPageIndex, setNextPageIndex] = useState(1)

  useEffect(() => {
    setReposList(repos)
  }, [repos])

  const pagesAmount = Math.ceil(reposCount / 12)

  const handleShowMore = async () => {
    setLoading(true)
    setNextPageIndex(reposList.length / 12 + 1)
    const newRepos = await fetchRepos(handle, nextPageIndex)
    setReposList([...reposList, ...newRepos])
    setLoading(false)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <SearchBar withLogo />
        <S.Section>
          <BioCard
            name={name}
            description={description}
            avatar={avatar}
            location={location}
            website={website}
          />
          <S.Repositories>
            <h2>Repositories ({reposCount})</h2>
            <S.Grid empty={!reposCount}>
              {reposCount > 0 ? (
                reposList.map((card: ReposProps) => (
                  <RepoCard key={card.id} {...card} />
                ))
              ) : (
                <Empty />
              )}
            </S.Grid>
            {reposCount > 0 && nextPageIndex < pagesAmount ? (
              <Button disabled={loading} onClick={handleShowMore}>
                {loading ? (
                  <Image src="/img/loading.svg" height={20} width={20} />
                ) : (
                  'Load more'
                )}
              </Button>
            ) : null}
          </S.Repositories>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  )
}

export default OrganizationTemplate
