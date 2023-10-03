import { styled } from 'styled-components';
import LinkNav from './LinkNav';
import { HiMiniBars3 } from 'react-icons/hi2';
const Nav = styled.ul`
  align-items: center;
  gap: 1.2rem;
`;
function NavBar() {
  return (
    <div className="col-start-1 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3">
      <div className="inline-block text-2xl lg:hidden  ">
        <HiMiniBars3 />
      </div>

      <Nav className="hidden lg:flex">
        <LinkNav path={'/'}>Home</LinkNav>
        <LinkNav path={'/product'}>Product</LinkNav>
        <LinkNav>Contact</LinkNav>
      </Nav>
    </div>
  );
}

export default NavBar;
