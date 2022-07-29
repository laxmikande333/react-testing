import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // ----single elements----
  screen.getByLabelText();
  screen.getByRole();
  screen.getByTitle();
  // ----multiple elements----
  screen.getAllByLabelText();
  screen.getAllByRole();
  screen.getAllByTitle();

  expect(linkElement).toBeInTheDocument();
});
