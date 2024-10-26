import { LuUserPlus2 } from 'react-icons/lu';

import Button from '../button/Button';
import Logo from '../logo/Logo';
import { ButtonsContainer, HeaderContainer } from './styles';

const Header = () => {
  const handleLoginClick = () => {
    window.location.href = '/sign-in';
  };

  const handleRegisterClick = () => {
    window.location.href = '/sign-up';
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick} />
      <ButtonsContainer>
        <Button onClick={handleRegisterClick}>
          <LuUserPlus2 size={17} />
          Register
        </Button>
        <Button primary={false} onClick={handleLoginClick}>
          Login
        </Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
