import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { value: users, setLocalStorage } = useLocalStorage('users', []);
  const { value: isAuth, setLocalStorage: setIsAuth } = useLocalStorage('isAuth', false);
  const signIn = ({ username, password }) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsAuth(true);
      alert('You are logged in');
      return user;
    }
    alert('Invalid username or password');
    return null;
  };

  const signUp = ({ email, password, username }) => {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert('User already exists');
      return null;
    }
    const newUser = { email, password, username };
    setLocalStorage([...users, newUser]);
    setIsAuth(true);
    alert('You are signed up');
    return newUser;
  };

  const signOut = () => {
    alert('You are logged out');
    setIsAuth(false);
  };

  return { users, signIn, signOut, signUp, isAuth };
};

export default useAuth;
