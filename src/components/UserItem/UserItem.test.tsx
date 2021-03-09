import { render } from '@testing-library/react';
import { IUser } from 'types/user.interface';
import UserItem from './UserItem';

test('Should render user data', async () => {
  const user: IUser = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
  };
  const { getByText } = render(<UserItem user={user} />);
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('@johndoe')).toBeInTheDocument();
});
