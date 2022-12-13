import styled from '@emotion/styled';

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  border: 1px solid gray;

  padding: 10px 0;
  width: 70px;

  background-color: ${randomColor};
  span:not(:last-child) {
    padding-bottom: 5px;
  }
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const StatSection = styled.div`
  margin: 25px auto 25px;

  text-align: center;
  background-color: white;

  h2 {
    text-transform: uppercase;
  }
`;
