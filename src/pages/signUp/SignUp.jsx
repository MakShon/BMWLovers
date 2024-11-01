import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import SignUpImage from '../../assets/images/SignUp.png';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { useAuthContext } from '../../providers/AuthProvider';
import { SignUpContainer, SignUpForm } from './styles';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuth, signUp } = useAuthContext();
  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSignUp = () => {
    signUp({ username, password, email });
  };
  return (
    <SignUpContainer>
      <SignUpForm>
        <h1>Create an Account</h1>
        <Input onChange={(e) => setUsername(e.target.value)} value={username} type="username" placeholder="Username" />
        <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
        <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <Button onClick={handleSignUp}>Sign Up</Button>
      </SignUpForm>
      <img src={SignUpImage} alt="Sign Up" />
    </SignUpContainer>
  );
};

export default SignUp;
