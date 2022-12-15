import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.background};

  text-align: center;

  thead {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
    text-transform: uppercase;
  }

  th {
    padding: 0 ${p => p.theme.space[6]}px;
    height: 30px;
  }
  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.muted};
  }

  tr {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6]}px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  }
`;
