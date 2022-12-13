import PropTypes from 'prop-types';
import { StatItem } from './Statistic.styled';

const StatisticInfo = ({ stats }) => {
  const { label, percentage } = stats;

  return (
    <StatItem>
      <span>{label}</span>
      <span>{percentage}</span>
    </StatItem>
  );
};

StatisticInfo.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticInfo;
