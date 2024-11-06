import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { value: users, setLocalStorage } = useLocalStorage('users', []);
  const { value: isAuth, setLocalStorage: setIsAuth } = useLocalStorage('isAuth', false);
  const { value: currentUser, setLocalStorage: setCurrentUser } = useLocalStorage('currentUser', null);

  const signIn = ({ username, password }) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsAuth(true);
      setCurrentUser(user);
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
    const newUser = { email, password, username, questionIds: [], answerIds: [] };
    setLocalStorage([...users, newUser]);
    setIsAuth(true);
    setCurrentUser(newUser);
    alert('You are signed up');
    return newUser;
  };

  const signOut = () => {
    setIsAuth(false);
    setCurrentUser(null);
    alert('You are logged out');
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => (user.username === updatedUser.username ? updatedUser : user));
    setLocalStorage(updatedUsers);
    setCurrentUser(updatedUser);
  };

  return { users, signIn, signOut, signUp, isAuth, currentUser, updateUser };
};

export default useAuth;
