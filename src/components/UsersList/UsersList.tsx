import React from 'react';
import UserItem from 'components/UserItem/UserItem';

type UsersListProps = {
  readonly searchTerm: string;
};

const UsersList = React.memo<UsersListProps>(({ searchTerm }) => (
  <>
    <h1>Users list</h1>
    <ul>
      <UserItem />
      <UserItem />
      <UserItem />
    </ul>
  </>
));

export default UsersList;
