import { render, screen } from 'utils/tests/helpers'

import NotFound from '.'

jest.mock('components/SearchBar', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock SearchBar"></div>
    }
  }
})

describe('<NotFound />', () => {
  it('should render the 404 picture and the search bar', () => {
    const { container } = render(<NotFound />)

    expect(
      screen.getByRole('heading', {
        name: /it happens in the best of families/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /404 - not found/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/this organization doesn't exist/i)
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock SearchBar')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
