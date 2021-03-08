import UserSearch from 'components/UserSearch/UserSearch';
import UsersList from 'components/UsersList/UsersList';
import { useState } from 'react';
import { Root, Wrapper, GlobalStyles } from './App.styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Root>
        <GlobalStyles />
        <Wrapper>
          <UserSearch setSearchTerm={setSearchTerm} />
          <UsersList searchTerm={searchTerm} />
        </Wrapper>
      </Root>
    </>
  );
};

export default App;
