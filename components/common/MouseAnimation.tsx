import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const MouseAnimation = () => {
  return (
    <Button>
      <Image src="/images/mouse.png" alt="floatingBtn" width={80} height={80} />
    </Button>
  );
};

const Button = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0px;
  padding-bottom: 50px;
  animation: 0.7s ease-in 0s infinite alternate none running motion;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @keyframes motion {
    0% {
      padding-bottom: 100px;
    }
    100% {
      padding-bottom: 50px;
    }
  }
`;

export default MouseAnimation;
