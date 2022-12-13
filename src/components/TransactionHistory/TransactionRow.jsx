import PropTypes from 'prop-types';
//styles

const TransactionRow = ({ transactions }) => {
  const { type, amount, currency } = transactions;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionRow;
