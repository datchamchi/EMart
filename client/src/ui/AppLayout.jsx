import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const AppStyled = styled.div``;
function AppLayout() {
  return (
    <AppStyled>
      <Header />
      <Outlet />
      <Footer />
    </AppStyled>
  );
}

export default AppLayout;
