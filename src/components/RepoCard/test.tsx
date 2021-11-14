import { render, screen } from 'utils/tests/helpers'

import RepoCard from '.'

const mockData = {
  name: 'React',
  description: 'The repository for React',
  stars: 1234,
  tech: 'JavaScript',
  url: 'https://github.com/facebook/react'
}

describe('<RepoCard />', () => {
  it('should render the RepoCard component and its content', () => {
    const { container } = render(<RepoCard data={mockData} />)

    expect(container.firstChild).toHaveAttribute('href', mockData.url)
    expect(screen.getByText(mockData.name)).toBeInTheDocument()
    expect(screen.getByText(mockData.name)).toHaveStyleRule('color', '#8383a6')
    expect(screen.getByText(mockData.description)).toBeInTheDocument()
    expect(screen.getByText(mockData.stars)).toBeInTheDocument()
    expect(screen.getByText(mockData.tech)).toBeInTheDocument()
    expect(screen.getByText(mockData.tech)).toHaveStyleRule(
      'background-color',
      '#9387e1'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
