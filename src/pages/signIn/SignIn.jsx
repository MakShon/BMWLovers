import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import SignInImage from '../../assets/images/SignUp.png';
import Button from '../../componets/button/Button';
import Input from '../../componets/input/Input';
import { useAuthContext } from '../../providers/AuthProvider';
import { SignInContainer, SignInForm } from './styles';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, signIn } = useAuthContext();
  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSignIn = () => {
    signIn({ username, password });
  };
  return (
    <SignInContainer>
      <SignInForm>
        <h1>Welcome Back</h1>
        <Input onChange={(e) => setUsername(e.target.value)} value={username} type="username" placeholder="Username" />
        <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <Button onClick={handleSignIn}>Sign In</Button>
      </SignInForm>
      <img src={SignInImage} alt="Sign In" />
    </SignInContainer>
  );
};

export default SignIn;
