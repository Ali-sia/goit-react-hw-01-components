import PropTypes from 'prop-types';
import TransactionRow from './TransactionRow';
import { TransactionTable } from './TransactionHistory.styled';

const TransactionHistory = transactions => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.items.map(data => {
          return <TransactionRow key={data.id} transactions={data} />;
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default TransactionHistory;
