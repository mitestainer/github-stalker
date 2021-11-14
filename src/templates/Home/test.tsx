import { render, screen } from 'utils/tests/helpers'

import Home from '.'

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

jest.mock('components/SearchBar', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock SearchBar"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the logo and the search bar', () => {
    render(<Home />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock SearchBar')).toBeInTheDocument()
  })
})
