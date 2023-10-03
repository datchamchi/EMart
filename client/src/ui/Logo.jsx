import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const Img = styled.img`
  display: inline-block;
  width: 8.6rem;
  height: auto;
  cursor: pointer;
`;
function Logo() {
  return (
    <Link
      to={'/'}
      className="col-start-2 col-end-3 justify-self-center lg:col-span-1"
    >
      <Img src="./img/logo.webp" />
    </Link>
  );
}

export default Logo;
