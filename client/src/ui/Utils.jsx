import {
  HiMagnifyingGlass,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi2';
import styled from 'styled-components';
const StyledContain = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 1rem;
`;
const StyledIcon = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`;
function Utils() {
  return (
    <StyledContain className="col-start-3 ">
      <div className="hidden gap-3 lg:flex ">
        <StyledIcon>
          <HiMagnifyingGlass />
        </StyledIcon>
        <StyledIcon>
          <HiOutlineUser />
        </StyledIcon>
      </div>
      <StyledIcon>
        <HiOutlineHeart />
      </StyledIcon>
      <StyledIcon>
        <HiOutlineShoppingBag />
      </StyledIcon>
    </StyledContain>
  );
}

export default Utils;
