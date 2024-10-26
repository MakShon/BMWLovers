import AvatarDefault from '../../assets/images/avatarDefault.jpg';
import { ProfileDisplayContainer } from './styles';

const ProfileDisplay = ({ children }) => {
  console.log('Avatar URL:', AvatarDefault);
  return (
    <ProfileDisplayContainer>
      <img src={AvatarDefault} alt="Avatar" />
      <p>{children}</p>
    </ProfileDisplayContainer>
  );
};

export default ProfileDisplay;
