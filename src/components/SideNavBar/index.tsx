import React from 'react';

import { useSideBar } from '../../hooks/SideBar';
import { Container } from './style';

import logoImg from '../../assets/logo.png';

import NavLink from './NavLink';

import { SideNavBarData } from '../../constants/sideNavBarData';

const AsideMenu: React.FC = () => {
  const { showSideBar } = useSideBar();

  return (
    <Container sideBar={showSideBar}>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        {SideNavBarData.map((item, index) => (
          <NavLink item={item} key={index.toString()} />
        ))}
      </ul>
    </Container>
  );
};

export default AsideMenu;
