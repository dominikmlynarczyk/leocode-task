import { render } from '@testing-library/react';
import UsersList from './UsersList';

test('Should render "Fetching data..." text', async () => {
  const { getByText } = render(<UsersList searchTerm="" />);
  expect(getByText('Fetching data...')).toBeInTheDocument();
});
