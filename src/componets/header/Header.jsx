import { useState } from 'react'; // Import useState
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { LuUserPlus2 } from 'react-icons/lu'; // Uncommented this import

import defaultAvatar from '../../assets/images/avatarDefault.jpg';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { ButtonsContainer, HeaderContainer } from './styles';

const Header = () => {
  const [isAuthorized /*, setIsAuthorized*/] = useState(true);

  const handleLoginClick = () => {
    window.location.href = '/sign-in';
  };

  const handleRegisterClick = () => {
    window.location.href = '/sign-up';
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleAskAQuestionClick = () => {
    window.location.href = '/ask-a-question';
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick} />
      <ButtonsContainer>
        {isAuthorized ? (
          <>
            <Button onClick={handleAskAQuestionClick}>
              <CiCirclePlus size={17} />
              Ask a question
            </Button>
            <Button primary={false}>
              <IoIosLogOut size={17} />
              Logout
            </Button>
            <img src={defaultAvatar} alt="User avatar" />
          </>
        ) : (
          <>
            <Button onClick={handleRegisterClick}>
              <LuUserPlus2 size={17} />
              Register
            </Button>
            <Button primary={false} onClick={handleLoginClick}>
              Login
            </Button>
          </>
        )}
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
