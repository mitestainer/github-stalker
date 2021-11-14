import { render, screen } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo correctly', () => {
    const { container } = render(<Logo />)

    expect(screen.getByLabelText('detective emoji')).toBeInTheDocument()

    const title = screen.getByRole('heading', { name: /github stalker/i })
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyleRule('font-family', /indie flower/i)

    expect(container.firstChild).toMatchSnapshot()
  })
})
