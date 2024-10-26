import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { IoIosList } from 'react-icons/io';
import { LuMessageCircle } from 'react-icons/lu';
import { NavLink, useLocation } from 'react-router-dom';

import { useSearch } from '../../providers/SearchProvider';
import { FixedContainer, ListContainer, ListItem, SearchContainer, SidebarContainer } from './styles';

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
    <ListItem key={href}>
      <NavLink to={href}>
        <Icon />
        {label}
      </NavLink>
    </ListItem>
  ));

  return (
    <SidebarContainer>
      <FixedContainer>
        <SearchContainer>
          <FaSearch size={20} />
          <input type="text" placeholder="Search" onChange={handleSearch} value={query} />
        </SearchContainer>
        <span>MENU</span>
        <ListContainer>{navLinks}</ListContainer>
        <div style={{ marginTop: 'auto', color: '#000', paddingBottom: '84px' }}>ХУЙ</div>
      </FixedContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
