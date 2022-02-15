import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header = () => {
  return (
    <Wrapper>
      <LogoWrap>
        <Image src="/images/logo.png" width={150} height={50} alt="logo" />
      </LogoWrap>
      <MenuList>
        <MenuItem>도서 구매</MenuItem>
        <MenuItem>장바구니</MenuItem>
        <MenuItem>마이페이지</MenuItem>
        <Divider></Divider>
        <MenuItem>이용권 관리</MenuItem>
        <MenuItem>로그인/회원가입</MenuItem>
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 90px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

const LogoWrap = styled.div`
  height: 50px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 50px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1.5px;
  height: 20px;
  margin-right: 50px;
  background: ${({ theme }) => theme.color.white};
`;

export default Header;
