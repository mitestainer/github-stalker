import { render, screen } from 'utils/tests/helpers'

import RepoCard from '.'

const mockData = {
  name: 'React',
  description: 'The repository for React',
  stars: 1234,
  language: 'JavaScript',
  url: 'https://github.com/facebook/react',
  updatedAt: '2021-11-14T14:03:02Z'
}

describe('<RepoCard />', () => {
  it('should render the RepoCard component and its content', () => {
    const { container } = render(<RepoCard {...mockData} />)

    expect(container.firstChild).toHaveAttribute('href', mockData.url)
    expect(screen.getByText(mockData.name)).toBeInTheDocument()
    expect(screen.getByText(mockData.name)).toHaveStyleRule('color', '#8383a6')
    expect(screen.getByText(mockData.description)).toBeInTheDocument()
    expect(screen.getByLabelText(/stars/i)).toBeInTheDocument()
    expect(screen.getByText(mockData.stars)).toBeInTheDocument()
    expect(screen.getByLabelText(/language/i)).toBeInTheDocument()
    expect(screen.getByText(mockData.language)).toBeInTheDocument()
    expect(screen.getByText(mockData.language)).toHaveStyleRule(
      'background-color',
      '#9387e1'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render the language label if the repo has no language', () => {
    render(<RepoCard {...mockData} language="" />)

    expect(screen.queryByLabelText(/language/i)).not.toBeInTheDocument()
  })
})
