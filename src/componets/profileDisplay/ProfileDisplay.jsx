import AvatarDefault from '../../assets/images/avatarDefault.jpg';
import { ProfileDisplayContainer } from './styles';

const ProfileDisplay = () => {
  console.log('Avatar URL:', AvatarDefault);
  return (
    <ProfileDisplayContainer>
      <img src={AvatarDefault} alt="Avatar" />
      <p>Profile Display</p>
    </ProfileDisplayContainer>
  );
};

export default ProfileDisplay;