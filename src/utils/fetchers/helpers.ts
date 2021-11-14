import { formatDate } from 'utils/formatters/helpers'

type RepoResponseProps = {
  id: number
  full_name: string
  description: string
  html_url: string
  watchers: number
  language: string
  updated_at: string
}

export const fetchRepos = async (handle: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/orgs/${handle}/repos?sort=updated&direction=desc&page=${page}&per_page=12`
  )
  const data = await response.json()

  return data.map((repo: RepoResponseProps) => ({
    id: repo.id,
    name: repo.full_name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.watchers,
    language: repo.language,
    updatedAt: formatDate(repo.updated_at)
  }))
}
