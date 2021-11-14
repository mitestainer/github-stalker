import { render, screen } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the component and the child inside of it', () => {
    const { container } = render(
      <Container>
        <span data-testid="child">Child component</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '120rem')
    expect(screen.getByTestId('child')).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        background-color: #eff1fa;
        padding: 2rem;
        border-radius: 1rem;
      }

      @media screen and (max-width:768px) {
        .c0 {
          max-width: 100%;
        }
      }

      <div
        class="c0"
      >
        <span
          data-testid="child"
        >
          Child component
        </span>
      </div>
    `)
  })
})
