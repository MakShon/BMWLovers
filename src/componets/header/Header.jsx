import { CiCirclePlus } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { LuUserPlus2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import defaultAvatar from '../../assets/images/avatarDefault.jpg';
import { useAuthContext } from '../../providers/AuthProvider';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { ButtonsContainer, HeaderContainer } from './styles';

const Header = () => {
  const { isAuth, signOut } = useAuthContext();

  return (
    <HeaderContainer data-cy={'header-container'}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <ButtonsContainer>
        {isAuth ? (
          <>
            <Link to="/ask-a-question">
              <Button>
                <CiCirclePlus size={17} />
                Ask a question
              </Button>
            </Link>
            <Button primary={false} onClick={signOut}>
              <IoIosLogOut size={17} />
              Logout
            </Button>
            <img src={defaultAvatar} alt="User avatar" />
          </>
        ) : (
          <>
            <Link to="/sign-up">
              <Button>
                <LuUserPlus2 size={17} />
                Register
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button primary={false}>Login</Button>
            </Link>
          </>
        )}
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
