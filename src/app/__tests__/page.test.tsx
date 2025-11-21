import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders the welcome message', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to globalconnect/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Home />)

    const description = screen.getByText(/connect with professionals worldwide/i)

    expect(description).toBeInTheDocument()
  })

  it('renders get started button', () => {
    render(<Home />)

    const button = screen.getByRole('button', {
      name: /get started/i,
    })

    expect(button).toBeInTheDocument()
  })
})