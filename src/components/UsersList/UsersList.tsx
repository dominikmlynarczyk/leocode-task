import React, { useEffect, useState } from 'react';
import { api, endpoints } from 'api';
import UserItem from 'components/UserItem/UserItem';
import hasNameFilter from 'utils/hasNameFilter';
import { List, ListHeading } from './UsersList.styles';

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
        // setTimeout can be ommited, just to idicate for the user data fetching process
        setTimeout(() => setUsers(data), 1000);
      })
      .catch((error) => {
        throw new Error("Couldn't fetch the data from the external API.");
      });
  }, []);

  return (
    <>
      <ListHeading>Users list</ListHeading>
      <List>
        {users.length ? (
          users
            .filter((user: IUser) => hasNameFilter(user.name, searchTerm))
            .map((user: IUser) => <UserItem key={user.id} user={user} />)
        ) : (
          <p>Fetching data...</p>
        )}
      </List>
    </>
  );
});

export default UsersList;
