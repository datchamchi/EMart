import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { useState } from 'react';

const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
function LinkNav({ children, path }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li>
      <StyleLink
        to={path}
        onMouseEnter={() => setIsHover((isHover) => !isHover)}
        onMouseLeave={() => setIsHover((isHover) => !isHover)}
      >
        {children}
        {!isHover ? <HiChevronDown /> : <HiChevronUp />}
      </StyleLink>
    </li>
  );
}

export default LinkNav;
