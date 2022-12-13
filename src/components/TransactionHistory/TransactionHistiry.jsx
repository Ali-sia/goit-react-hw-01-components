import PropTypes from 'prop-types';
import TransactionRow from './TransactionRow';
//styles

// function TransactionHistory({ transactions }) {
//   console.log('transactions :>> ', transactions);
// }

const TransactionHistory = transactions => {
  //   const { transactions } = transactions;
  return (
    <table>
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
    </table>
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
