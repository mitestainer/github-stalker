import { render, screen } from 'utils/tests/helpers'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the empty component and its content', () => {
    render(<Empty />)

    expect(screen.getByRole('img', { name: /empty box/i })).toBeInTheDocument()
    expect(
      screen.getByText('This organization has no repositories to show.')
    ).toBeInTheDocument()
  })
})
