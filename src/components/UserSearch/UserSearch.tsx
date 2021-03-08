import React from 'react';

type UserSearchProps = {
  readonly setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// Returning JSX with <label> element for a11y purposes
const UserSearch = React.memo<UserSearchProps>(({ setSearchTerm }) => (
  <div>
    <label htmlFor="search">
      Search for user:
      <input
        id="search"
        name="search"
        placeholder="Enter name here..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const searchTerm = e.target.value.trim();
          setSearchTerm(searchTerm);
        }}
      />
    </label>
  </div>
));

export default UserSearch;
