import { render, screen } from 'utils/tests/helpers'

import Organization from '.'
import { mock, cardsMock } from './mock'

jest.mock('components/SearchBar', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock SearchBar"></div>
    }
  }
})

jest.mock('components/BioCard', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock BioCard"></div>
    }
  }
})

jest.mock('components/RepoCard', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock RepoCard"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<Organization />', () => {
  it('should render the organization page', () => {
    const { container } = render(<Organization {...mock} repos={cardsMock} />)

    expect(screen.getByTestId('Mock SearchBar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BioCard')).toBeInTheDocument()
    expect(
      screen.getByText(`Repositories (${mock.reposCount})`)
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock RepoCard')).toHaveLength(13)
    expect(
      screen.getByRole('button', { name: /load more/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Empty component when there are no repos to show', () => {
    render(<Organization {...mock} repos={[]} reposCount={0} />)

    expect(screen.getByText('Repositories (0)')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })

  it('shouldn\'t render "Load more" button if there are less than 12 cards on screen', () => {
    render(
      <Organization
        {...mock}
        reposCount={3}
        repos={cardsMock.filter((item) => item.id < 4)}
      />
    )

    expect(screen.getAllByTestId('Mock RepoCard')).toHaveLength(3)
    expect(
      screen.queryByRole('button', { name: /load more/i })
    ).not.toBeInTheDocument()
  })
})
