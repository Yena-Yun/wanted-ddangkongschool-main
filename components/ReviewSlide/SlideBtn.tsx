import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const SlideBtn = () => {
  return (
    <>
      <LeftBtn>
        <Image
          src="/images/slideOverlay/left-arrow.png"
          width="40px"
          height="40px"
          alt="left-sliding-btn"
        />
      </LeftBtn>
      <RightBtn>
        <Image
          src="/images/slideOverlay/right-arrow.png"
          width="40px"
          height="40px"
          alt="right-sliding-btn"
        />
      </RightBtn>
    </>
  );
};

const LeftBtn = styled.div`
  position: absolute;
  top: 337px;
  left: 202px;
  cursor: pointer;
`;

const RightBtn = styled.div`
  position: absolute;
  top: 337px;
  right: 202px;
  cursor: pointer;
`;

export default SlideBtn;
