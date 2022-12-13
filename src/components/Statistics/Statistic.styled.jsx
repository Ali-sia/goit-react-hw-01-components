import styled from '@emotion/styled';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:not(:last-child) {
    padding-bottom: 5px;
  }
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const StatSection = styled.div`
  text-align: center;
`;
