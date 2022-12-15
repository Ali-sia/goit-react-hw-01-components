import PropTypes from 'prop-types';
import StatisticInfo from './StatisticInfo';
import {
  //  StatList,
  StatSection,
} from './Statistic.styled';
import { Box } from '../Box';

const Statistic = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}

      <Box display="flex" justifyContent="center">
        {stats.map(dataStats => {
          return <StatisticInfo key={dataStats.id} stats={dataStats} />;
        })}
      </Box>
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
