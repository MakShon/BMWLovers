import LogoImg from '../../assets/images/Logo.png';
import { LogoContainer } from './styles';

const Logo = ({ onClick }) => {
  return (
    <LogoContainer onClick={onClick}>
      <img src={LogoImg} alt="Logo" />
      <p>BMWLovers</p>
    </LogoContainer>
  );
};

export default Logo;
