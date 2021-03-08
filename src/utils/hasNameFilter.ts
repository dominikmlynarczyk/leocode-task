const hasNameFilter = (name: string, searchTerm: string): boolean => {
  if (searchTerm === '') {
    return true;
  }
  return name.toLowerCase().includes(searchTerm.toLowerCase());
};

export default hasNameFilter;
