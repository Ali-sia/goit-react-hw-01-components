import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0;
  padding: 0;

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

  p {
    margin: 0;
    padding: 0;
  }
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
  display: flex;
  justify-content: space-around;
  align-items: center;

  list-style: none;
  padding: 0;

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
