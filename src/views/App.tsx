import UserSearch from 'components/UserSearch/UserSearch';
import UsersList from 'components/UsersList/UsersList';
import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <UserSearch setSearchTerm={setSearchTerm} />
      <UsersList searchTerm={searchTerm} />
    </>
  );
};

export default App;
