import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders calculator title', () => {
    render(<App />)

    expect(screen.getByText('Calculator')).toBeInTheDocument()
  })
})