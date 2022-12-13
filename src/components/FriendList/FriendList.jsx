import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendsState } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsState>
      {friends.map(user => {
        return <FriendListItem key={user.id} friends={user} />;
      })}
    </FriendsState>
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
