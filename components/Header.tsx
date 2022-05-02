import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <Wrapper fadeIn={scrollPosition < 50}>
      <LogoWrap>
        <Image
          src={
            scrollPosition < 50 ? '/images/logo.png' : '/images/logo-scroll.png'
          }
          width={150}
          height={50}
          alt="logo"
          priority
        />
      </LogoWrap>
      <nav>
        <MenuList>
          <Row>
            <MenuItem>도서 구매</MenuItem>
            <MenuItem>장바구니</MenuItem>
            <MenuItem>마이페이지</MenuItem>
            <Divider fadeIn={scrollPosition < 50}></Divider>
            <MenuItem>이용권 관리</MenuItem>
            <MenuItem>로그인/회원가입</MenuItem>
          </Row>
        </MenuList>
        <MenuGroup>
          <Row>
            <IconWrap>
              <IconImage
                src={
                  scrollPosition < 50
                    ? '/images/cart.png'
                    : '/images/cart-scroll.png'
                }
                alt="cart"
              />
            </IconWrap>
            <IconWrap>
              <IconImage
                src={
                  scrollPosition < 50
                    ? '/images/menu-btn.png'
                    : '/images/menu-btn-scroll.png'
                }
                alt="menu-btn"
              />
            </IconWrap>
          </Row>
        </MenuGroup>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled('header')<{ fadeIn: boolean }>`
  width: 100%;
  height: 60px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  transition: all 300ms ease-in;
  background: ${(props) => (props.fadeIn ? 'transparent' : '#ffffff')};
  color: ${(props) => (props.fadeIn ? '#ffffff' : '#333333')};
  z-index: 99;
`;

const LogoWrap = styled.div`
  height: 50px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: block;
  }
`;

const MenuItem = styled.li`
  margin-right: 50px;
  cursor: pointer;
`;

const Divider = styled('div')<{ fadeIn: boolean }>`
  width: 1.5px;
  height: 20px;
  margin-right: 50px;
  background: ${(props) => (props.fadeIn ? '#ffffff' : '#333333')};
`;

const MenuGroup = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  margin-left: -150px;
`;

const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:first-child {
    margin-right: 20px;
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default Header;
