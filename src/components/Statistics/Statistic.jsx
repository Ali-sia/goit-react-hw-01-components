import PropTypes from 'prop-types';
import StatisticInfo from './StatisticInfo';
import { StatList, StatSection } from './Statistic.styled';

const Statistic = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(dataStats => {
          return <StatisticInfo key={dataStats.id} stats={dataStats} />;
        })}
      </StatList>
    </StatSection>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistic;
