import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 300px;

  background-color: wheat;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;

  p:not(:last-child) {
    padding-bottom: 5px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;

  background-color: azure;

  border-radius: 50%;
`;

export const Stats = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 5px;
  }
`;

export const Label = styled.span`
  padding-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
