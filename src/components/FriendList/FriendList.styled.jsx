import styled from 'styled-components';

// export const UserItem = styled.li`
//   // display: flex;
//   // align-items: center;

//   // margin-bottom: 20px;
//   // padding: 5px;

//   // width: 250px;

//   // background-color: white;
//   // border-radius: 10px;
//   // box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);

// `;

export const UserImage = styled.img`
  margin-right: 20px;

  width: 60px;
  height: 60px;

  border-radius: 10%;
  border: 1px solid darkgray;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

// export const FriendsState = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   margin: 25px auto 25px;
// `;

export const Chip = styled.span`
  margin-right: 15px;

  width: 15px;
  height: 15px;

  border-radius: 50%;

  background-color: ${props => {
    if (props.type === 'true') {
      return 'green';
    }
    return 'red';
  }};
`;
