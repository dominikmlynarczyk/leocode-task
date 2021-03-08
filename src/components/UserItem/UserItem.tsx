import React from 'react';
import { IUser } from 'types/user.interface';
import { ListItem } from './UserItem.styles';

const UserItem = React.memo<{ user: IUser }>(
  ({ user: { id, name, username } }) => (
    <ListItem>
      <p>{id}</p>
      <p>{name}</p>
      <p>@{username}</p>
    </ListItem>
  ),
);

export default UserItem;
