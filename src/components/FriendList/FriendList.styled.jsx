import styled from '@emotion/styled';

export const UserItem = styled.li`
  width: 200px;

  display: flex;
  align-items: center;

  background-color: chartreuse;
`;

export const FriendsState = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Chip = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => {
    if (props.type) {
      return 'green';
    }

    return 'red';
  }};
`;
