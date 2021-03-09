import { render } from '@testing-library/react';
import UserSearch from './UserSearch';

test('Should render "Search for user:" text', async () => {
  const { getByText } = render(<UserSearch setSearchTerm={() => {}} />);
  expect(getByText('Search for user:')).toBeInTheDocument();
});
