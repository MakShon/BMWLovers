import { useLocation } from 'react-router-dom';

import { WrapperContainer } from './styles';

const Wrapper = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';
  return <WrapperContainer $isAuthPage={isAuthPage} children={children} />;
};

export default Wrapper;
