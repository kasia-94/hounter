import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
// import { Burger } from 'components/Burger/Burger';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <>Footer</>
    </Container>
  );
};

export default Layout;
