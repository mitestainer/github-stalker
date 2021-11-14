import { render, screen } from 'utils/tests/helpers'

import BioCard from '.'

const mockData = {
  name: 'Org Name',
  avatar: 'https://via.placeholder.com/150',
  description: 'The description text',
  location: 'World',
  website: 'www.google.com'
}

describe('<BioCard />', () => {
  it('should render the component with its data', () => {
    const { container } = render(<BioCard {...mockData} />)

    expect(screen.getByText(/org name/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: mockData.name })).toHaveAttribute(
      'src',
      mockData.avatar
    )
    expect(screen.getByText(/the description text/i)).toBeInTheDocument()
    expect(screen.getByText(/world/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /website/i })).toHaveAttribute(
      'href',
      mockData.website
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
