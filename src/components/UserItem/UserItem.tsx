import { IUser } from 'components/UsersList/UsersList';

const UserItem = ({ user }: { user: IUser }) => (
  <li>
    <p>{user.id}</p>
    <p>{user.name}</p>
    <p>@{user.username}</p>
  </li>
);

export default UserItem;
