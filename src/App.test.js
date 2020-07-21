import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TeamsApp from './TeamsApp';

test('renders learn react link', () => {
  const { getByText } = render(<TeamsApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
