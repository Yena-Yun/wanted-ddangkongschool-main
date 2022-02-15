import React from 'react';
import styled from 'styled-components';

const MouseAnimation = () => {
  return (
    <Button>
      <ButtonImg src="/images/mouse.png" alt="floatingBtn"/>
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  width: 73px;
  min-width: 73px;
  display: block;
  bottom: 0px;
  padding-bottom: 50px;
  left: 50%;
  animation: 0.7s ease-in 0s infinite alternate none running motion;
  transform: translateX(-50%);

  @media (min-width: 768px){
    width: 3.8%;
    min-width: 48px;
    position: absolute;
    animation: 0.7s ease-in 0s infinite alternate none running motion;
    display: block;
    bottom: 0px;
    padding-bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes motion {
    0% {
    padding-bottom: 100px;
    }
    100% {
    padding-bottom: 50px;
    }
  }
`

const ButtonImg = styled.img`
  margin: 0px auto;
  width: 54px;
  height: 54px;
  bottom: 30px;

  @media (min-width: 768px){
    width: 72px;
    height: 72px;
    bottom: 50px;
  }

  @keyframes bgmove {
    0% {
    padding-bottom: 100px;
    }
    100% {
    padding-bottom: 50px;
    }
  }
`
export default MouseAnimation;


