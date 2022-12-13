import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 25px auto;

  border-radius: 5%;
  background-color: white;

  text-align: center;

  thead {
    // padding-top: 25px;

    background-color: deepskyblue;
    color: white;
    text-transform: uppercase;
  }

  th {
    padding: 0 80px;
    height: 30px;
  }
  tr:nth-child(even) {
    background-color: lightgrey;
  }

  tr {
    padding: 18px 80px;
    border: 1px solid darkgray;
  }
`;
