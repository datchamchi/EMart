import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import Utils from './Utils';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`;
function Header() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Set the visibility of the animation based on your desired scroll position
      if (window.scrollY > 10) {
        setIsAnimationVisible(true);
      } else {
        setIsAnimationVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HeaderStyle
      className={`${
        styles['fixed-animation']
      } px-4 py-4 lg:grid-rows-1 lg:px-12 lg:py-6 ${
        isAnimationVisible ? styles['visible'] : ''
      } `}
    >
      <Logo />
      <NavBar />
      <Utils />
    </HeaderStyle>
  );
}

export default Header;
