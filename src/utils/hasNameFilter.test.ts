import hasNameFilter from 'utils/hasNameFilter';
import MOCK_USERS from 'utils/__mocks__/users';

test('Should return MOCK_DATA for empty searchTerm', () => {
  const data = MOCK_USERS.filter((user) => hasNameFilter(user.name, ''));
  expect(data).toStrictEqual(MOCK_USERS);
});

test('Should filter properly with searchTerm "a"', () => {
  const data = MOCK_USERS.filter((user) => hasNameFilter(user.name, 'a'));
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 3 }),
      expect.objectContaining({ id: 4 }),
      expect.objectContaining({ id: 7 }),
      expect.objectContaining({ id: 8 }),
      expect.objectContaining({ id: 9 }),
      expect.objectContaining({ id: 10 }),
    ]),
  );
});

test('Should filter properly with searchTerm "le"', () => {
  const data = MOCK_USERS.filter((user) => hasNameFilter(user.name, 'le'));
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 3 }),
      expect.objectContaining({ id: 4 }),
      expect.objectContaining({ id: 9 }),
      expect.objectContaining({ id: 10 }),
    ]),
  );
});

test('Should filter specific object with searchTerm "Leanne Graham"', () => {
  const data = MOCK_USERS.filter((user) =>
    hasNameFilter(user.name, 'Leanne Graham'),
  );
  expect(data).toEqual([
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: { lat: '-37.3159', lng: '81.1496' },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ]);
});

test('Should filter with searchTerm applicable to multiple objects', () => {
  const data = MOCK_USERS.filter((user) =>
    hasNameFilter(user.name, 'clementin'),
  );
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 3 }),
      expect.objectContaining({ id: 10 }),
    ]),
  );
});

test('Should return empy array for searchTerm "*"', () => {
  const data = MOCK_USERS.filter((user) => hasNameFilter(user.name, '*'));
  expect(data).toEqual([]);
});
