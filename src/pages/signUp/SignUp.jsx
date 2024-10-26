import SignUpImage from '../../assets/images/SignUp.png';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { SignUpContainer, SignUpForm } from './styles';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpForm>
        <h1>Create an Account</h1>
        <Input type="username" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button primary>Sign Up</Button>
      </SignUpForm>
      <img src={SignUpImage} alt="Sign Up" />
    </SignUpContainer>
  );
};

export default SignUp;
