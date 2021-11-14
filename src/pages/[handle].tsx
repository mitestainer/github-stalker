import { GetServerSideProps } from 'next'
import Organization, { OrganizationProps } from 'templates/Organization'
import axios from 'axios'
import { fetchRepos } from 'utils/fetchers/helpers'

export default function OrganizationPage(props: OrganizationProps) {
  return <Organization {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const bioResponse = await axios.get(
    `https://api.github.com/orgs/${params?.handle}`
  )

  const reposResponse = await fetchRepos(params?.handle as string, 1)

  return {
    props: {
      handle: bioResponse.data.login,
      name: bioResponse.data.name,
      avatar: bioResponse.data.avatar_url,
      description: bioResponse.data.description,
      website: bioResponse.data.blog,
      location: bioResponse.data.location,
      reposCount: bioResponse.data.public_repos,
      repos: reposResponse
    }
  }
}
