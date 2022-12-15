import PropTypes from 'prop-types';
import {
  // UserItem,
  UserImage,
  UserName,
  Chip,
} from './FriendList.styled';
import { Box } from '../Box';

const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline } = friends;

  return (
    <Box
      display="flex"
      alignItems="center"
      mb="20px"
      p="5px"
      width="250px"
      backgroundColor="wheat"
      borderRadius="10px"
      boxShadow="0 0 10px 5px rgba(221, 221, 221, 1)"
    >
      <Chip type={isOnline ? `true` : `false`}></Chip>
      <UserImage src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Box>
  );
};

FriendListItem.propTypes = {
  type: PropTypes.string,
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
