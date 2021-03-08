import React from 'react';
import { SearchWrapper } from './UserSearch.styles';

type UserSearchProps = {
  readonly setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// Returning JSX with <label> element for a11y purposes
const UserSearch = React.memo<UserSearchProps>(({ setSearchTerm }) => (
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
