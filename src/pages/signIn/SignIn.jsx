import SignInImage from '../../assets/images/SignUp.png';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { SignInContainer, SignInForm } from './styles';

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInForm>
        <h1>Welcome Back</h1>
        <Input type="username" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button primary>Sign In</Button>
      </SignInForm>
      <img src={SignInImage} alt="Sign In" />
    </SignInContainer>
  );
};

export default SignIn;
