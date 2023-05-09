import { NavLink } from 'react-router-dom';
import { Item, MenuList } from './Navigation.styled';

export const Navigation = () => {
  const menuList = [
    {
      name: 'About Us',
      path: '/',
    },
    {
      name: 'Article',
      path: '/article',
    },
    {
      name: 'Property',
      path: '/property',
    },
  ];
  return (
    <>
      <nav>
        <MenuList>
          {menuList.map(({ name, path }) => (
            <Item key={name}>
              <NavLink to={path}>{name}</NavLink>
            </Item>
          ))}
        </MenuList>
      </nav>
    </>
  );
};
