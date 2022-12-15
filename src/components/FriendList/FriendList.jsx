import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
// import { FriendsState } from './FriendList.styled';
import { Box } from '../Box';

const FriendList = ({ friends }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m={5}
    >
      {friends.map(user => {
        return <FriendListItem key={user.id} friends={user} />;
      })}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
