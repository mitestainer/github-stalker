import { render, screen } from 'utils/tests/helpers'

import SearchBar from '.'

describe('<SearchBar />', () => {
  it('should render the SearchBar', () => {
    render(<SearchBar />)

    const inputField = screen.getByPlaceholderText(/type an org's name/i)
    expect(inputField).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
