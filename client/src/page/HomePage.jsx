import { keyframes, styled } from 'styled-components';
import Header from '../ui/Header';
import Banner from '../ui/Banner';
import ListModel from '../ui/ListModel';

const HeaderContainer = styled.div`
  background-image: url('https://emart.wpthemedemos.com/bicycle/wp-content/uploads/sites/17/2023/01/Cycle-Banner-1-scaled.webp');
  background-repeat: no-repeat;
  height: 30rem;
  background-position: 50% 0%;
  position: relative;
  top: 0;
  left: 0;
`;

const StyledSlogan = styled.div`
  background-image: url('https://emart.wpthemedemos.com/bicycle/wp-content/uploads/sites/17/2023/01/xperia.png');
  height: 10rem;
  width: 40rem;
  opacity: 0.8;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 2;
  top: 62%;
  left: 55%;
  transform: translate(-50%, -50%);
`;
const fadeIn = keyframes`
  0%{
    transform: translate(-80%,-50%);
  }
  100%{
    transform: translate(-50%,-50%);
  }
`;
const BicycleStyled = styled.div`
  background-image: url('https://emart.wpthemedemos.com/bicycle/wp-content/uploads/sites/17/elementor/thumbs/Cycle-Banner-Image-1-q0vpp6zuppc9eya3bjyfkzb562t0vnbr5hhq4veh3c.webp');
  height: 30rem;
  width: 45rem;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 75%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 3;
  animation: 1s ease-in-out 0s ${fadeIn};
`;
function HomePage() {
  return (
    <>
      <Header />
      <HeaderContainer>
        <StyledSlogan className="hidden lg:block " />
        <BicycleStyled className="hidden lg:block " />
        <Banner />
      </HeaderContainer>
      <ListModel />
    </>
  );
}

export default HomePage;
