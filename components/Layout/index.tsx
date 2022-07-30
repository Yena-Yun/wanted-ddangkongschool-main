import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  title: ReactNode | string;
  animation: string;
  children: ReactNode;
}

const Layout = ({ title, animation, children }: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Title data-aos={animation}>{title}</Title>
      </Header>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 520px;
  margin: 0 auto;
  padding: 100px 0;
  background-color: rgb(249, 249, 249);
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 0.8;
  color: rgb(51, 51, 51);

  @media screen and (min-width: 768px) {
    font-size: 50px;
    line-height: 1.44;
  }
`;

export default Layout;
