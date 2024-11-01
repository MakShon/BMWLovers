import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi';
import { IoIosList } from 'react-icons/io';
import { LuMessageCircle } from 'react-icons/lu';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { useSearch } from '../../providers/SearchProvider';
import { FixedContainer, ListContainer, ListItem, SearchContainer, SidebarContainer, SocialsContainer } from './styles';

const links = [
  {
    Icon: IoIosList,
    label: 'Questions',
    href: '/',
  },
  {
    Icon: LuMessageCircle,
    label: 'Your Questions',
    href: '/your-questions',
  },
  {
    Icon: AiOutlineQuestionCircle,
    label: 'Your Answers',
    href: '/your-answers',
  },
];

const Sidebar = () => {
  const { query, setQuery } = useSearch();

  const location = useLocation();
  const hideSidebarRoutes = ['/sign-in', '/sign-up'];

  if (hideSidebarRoutes.includes(location.pathname)) {
    return null;
  }

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const navLinks = links.map(({ href, label, Icon }) => (
    <ListItem key={href} data-cy={'menu-item'}>
      <NavLink to={href}>
        <Icon />
        {label}
      </NavLink>
    </ListItem>
  ));

  return (
    <SidebarContainer data-cy={'sidebar'}>
      <FixedContainer>
        <SearchContainer>
          <FaSearch size={20} />
          <input type="text" placeholder="Search" onChange={handleSearch} value={query} data-cy={'search-input'} />
        </SearchContainer>
        <span>MENU</span>
        <ListContainer>{navLinks}</ListContainer>
        <SocialsContainer>
          <Link to="https://github.com/MakShon" target="blank">
            <FiGithub size={20} />
          </Link>
          <Link to="https://www.instagram.com/__makran__" target="blank">
            <FiInstagram size={20} />
          </Link>
          <Link to="https://www.facebook.com" target="blank">
            <FiFacebook size={20} />
          </Link>
        </SocialsContainer>
      </FixedContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
