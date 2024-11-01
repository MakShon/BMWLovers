import AvatarDefault from '../../assets/images/avatarDefault.jpg';
import { ProfileDisplayContainer } from './styles';

const ProfileDisplay = ({ children }) => {
  return (
    <ProfileDisplayContainer data-cy={'profile-display'}>
      <img src={AvatarDefault} alt="Avatar" />
      <p>{children}</p>
    </ProfileDisplayContainer>
  );
};

export default ProfileDisplay;
