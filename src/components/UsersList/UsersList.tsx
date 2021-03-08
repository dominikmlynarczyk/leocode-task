import React, { useEffect, useState } from 'react';
import { api, endpoints } from 'api';
import UserItem from 'components/UserItem/UserItem';

type UsersListProps = {
  readonly searchTerm: string;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  key: number;
}

const UsersList = React.memo<UsersListProps>(({ searchTerm }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.users)
      .then(({ data }) => {
        setTimeout(() => setUsers(data), 1000);
      })
      .catch((error) => {
        throw new Error("Couldn't fetch the data from the external API.");
      });
  });

  return (
    <>
      <h1>Users list</h1>
      <ul>
        {users.length ? (
          users.map((user: IUser) => <UserItem key={user.id} user={user} />)
        ) : (
          <p>Fetching data...</p>
        )}
      </ul>
    </>
  );
});

export default UsersList;
