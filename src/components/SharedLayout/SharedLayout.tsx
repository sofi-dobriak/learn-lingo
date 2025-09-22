import { Outlet } from 'react-router-dom';
import Header from '../header/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
