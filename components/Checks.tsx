import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Checks = () => {
  const checkArr = Array(3).fill(0);

  return (
    <Wrapper>
      <TextWrap>
        <Title data-aos="fade-up">
          교육 전문가들이
          <br />
          선정한 도서
        </Title>
        <Content data-aos="fade-up">
          호두랩스의 교육 전문가들이 <br />
          교과 수록, 초등 필독 도서 등 <br />
          아동 교육에 적합한 도서를 <br />
          직접 선정해요!
        </Content>
      </TextWrap>
      <AnimationWrap>
        <ChecksWrap>
          <Column>
            <Row>
              {checkArr.map((check, idx) => (
                <Check key={idx}>
                  <CheckAni
                    data-aos="fade-up" data-aos-delay="100"
                    src={`/images/checks/check${idx + 1}.gif`}
                    width={150}
                    height={110}
                    alt="check mark"
                  />
                </Check>
              ))}
            </Row>
            <Row>
              {checkArr.map((check, idx) => (
                <Book key={idx}>
                  <Image
                    src={`/images/checks/book${idx + 1}.png`}
                    width={190}
                    height={210}
                    alt="book below check mark"
                  />
                </Book>
              ))}
            </Row>
          </Column>
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

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrap = styled.div`
  margin-right: 156px;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  color: ${({ theme }) => theme.color.default};
  margin-bottom: 50px;

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    text-align: center;
  }
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.default};

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    text-align: center;
  }
`;

const AnimationWrap = styled.div`
  width: 650px;
`;

const ChecksWrap = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 100%;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    ${({ theme }) => theme.common.flexColumn};
    alignt-items: center;
  } ;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Check = styled.div`
  margin-bottom: 33px;
  width: 120px;

  &:last-child {
    margin-right: 0;
  }
`;

const CheckAni = styled.img`
  width: 100%;
`;

const Book = styled.div`
  display: flex;
`;

const BookImagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Checks;
