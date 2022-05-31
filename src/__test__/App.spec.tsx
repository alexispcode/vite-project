import { render, screen } from '@testing-library/react';
import App from '../App';

// Tests
test('Renders main page correctly', () => {
  render(<App />);
  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
});
