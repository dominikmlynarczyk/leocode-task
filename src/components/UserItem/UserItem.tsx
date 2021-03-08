import { IUser } from 'components/UsersList/UsersList';
import { ListItem } from './UserItem.styles';

const UserItem = ({ user }: { user: IUser }) => (
  <ListItem>
    <p>{user.id}</p>
    <p>{user.name}</p>
    <p>@{user.username}</p>
  </ListItem>
);

export default UserItem;
