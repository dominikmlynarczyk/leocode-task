import React from 'react';
import { SearchWrapper } from './UserSearch.styles';

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// Returning JSX with <label> element for a11y purposes
const UserSearch = React.memo<Props>(({ setSearchTerm }) => (
  <SearchWrapper>
    <label htmlFor="search">
      Search for user:
      <input
        id="search"
        name="search"
        placeholder="Enter name here..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const searchTerm: string = e.target.value.trim();
          setSearchTerm(searchTerm);
        }}
      />
    </label>
  </SearchWrapper>
));

export default UserSearch;
