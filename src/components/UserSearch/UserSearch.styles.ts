import styled from 'styled-components';

export const SearchWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 30px;
  text-align: center;

  input {
    min-height: 35px;
    padding: 6px 15px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    background: #cfb2b0;
    color: #fff;
    font-size: 14px;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const List = styled.ul`
  padding: 20px;
  border-radius: 3px;
  background-color: #f7c9b6;
  box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.15);
  list-style: none;
`;
