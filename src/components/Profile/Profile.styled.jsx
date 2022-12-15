import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 25px auto 30px auto;

  max-width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
`;

//not work because dont import to any file
// export const Description = styled.div`
//   // display: flex;
//   // flex-direction: column;
//   // justify-content: center;
//   // align-items: center;

//   // padding: 5px;

//   p {
//     margin: 5px;

//     color: darkgray;
//     font-size: 18px;
//   }
// `;

export const UserName = styled.span`
  margin: 10px;

  color: black;
  font-weight: bold;
  font-size: 24px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 50%;
  border: 4px solid gray;
`;

//not work because dont import to any file

// export const Stats = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: ghostwhite;
// `;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid darkgray;
  padding: 15px 26px;
`;

export const Label = styled.span`
  padding-bottom: 5px;
  color: darkgray;
`;

export const Quantity = styled.span`
  color: black;
  font-weight: 800;
`;
