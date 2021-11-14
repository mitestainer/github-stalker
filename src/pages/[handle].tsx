import { GetServerSideProps } from 'next'
import Organization, { OrganizationProps } from 'templates/Organization'
import { fetchRepos } from 'utils/fetchers/helpers'

export default function OrganizationPage(props: OrganizationProps) {
  return <Organization {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const bioResponse = await fetch(
    `https://api.github.com/orgs/${params?.handle}`
  )
  if (bioResponse.status === 404) return { notFound: true }

  const bioData = await bioResponse.json()

  const reposResponse = await fetchRepos(params?.handle as string, 1)

  return {
    props: {
      handle: bioData.login,
      name: bioData.name,
      avatar: bioData.avatar_url,
      description: bioData.description,
      website: bioData.blog,
      location: bioData.location,
      reposCount: bioData.public_repos,
      repos: reposResponse
    }
  }
}
