import PropTypes from 'prop-types';
import {
  ProfileCard,
  // Description,
  UserName,
  // Stats,
  Avatar,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

import { Box } from '../Box';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={3}
      >
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor=" profileAccent"
      >
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </Box>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
