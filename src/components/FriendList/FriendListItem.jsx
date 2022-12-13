import PropTypes from 'prop-types';
import { UserItem, Chip } from './FriendList.styled';

const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline } = friends;
  return (
    <UserItem>
      <Chip type={isOnline}></Chip>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </UserItem>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
