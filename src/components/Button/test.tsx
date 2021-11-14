import { render, screen } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button>Button text</Button>)

    expect(
      screen.getByRole('button', { name: /button text/i })
    ).toBeInTheDocument()
  })
})
