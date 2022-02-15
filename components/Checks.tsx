import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Checks = () => {
  const checkArr = Array(3).fill(0);

  return (
    <Wrapper>
      <TextWrap>
        <Title>
          교육 전문가들이
          <br />
          선정한 도서
        </Title>
        <Content>
          호두랩스의 교육 전문가들이 <br />
          교과 수록, 초등 필독 도서 등 <br />
          아동 교육에 적합한 도서를 <br />
          직접 선정해요!
        </Content>
      </TextWrap>

      <AnimationWrap>
        <ChecksWrap>
          {checkArr.map((check, idx) => (
            <Column key={idx}>
              <Check>
                <Image
                  src={`/images/checks/check${idx + 1}.gif`}
                  width={150}
                  height={110}
                  alt="check mark"
                />
              </Check>
              <Book>
                <Image
                  src={`/images/checks/book${idx + 1}.png`}
                  width={190}
                  height={210}
                  alt="book below check mark"
                />
              </Book>
            </Column>
          ))}
        </ChecksWrap>
        <BookImagesWrap></BookImagesWrap>
      </AnimationWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 150px 0;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const TextWrap = styled.div`
  margin-right: 156px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.default};
`;

const AnimationWrap = styled.div`
  width: 650px;
`;

const ChecksWrap = styled.div`
  display: flex;
`;

const Column = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  align-items: center;
  margin-right: 100px;
  &:last-child {
    margin-right: 0;
  }
`;

const Check = styled.div`
  margin-bottom: 33px;
`;

const Book = styled.div``;

const BookImagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Checks;
