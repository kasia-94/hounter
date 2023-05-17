import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from './Burger.styled';

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

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
    <BurgerMenu>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <ul>
          {menuList.map(({ name, path }) => (
            <li key={name}>
              <NavLink to={path} onClick={closeSideBar}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Menu>
    </BurgerMenu>
  );
};
