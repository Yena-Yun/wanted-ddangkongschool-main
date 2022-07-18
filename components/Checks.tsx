import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Checks = () => {
  const checkArr = [
    {
      id: 1,
      src: '/images/checks/check1.gif',
      alt: 'check1',
    },
    {
      id: 2,
      src: '/images/checks/check2.gif',
      alt: 'check2',
    },
    {
      id: 3,
      src: '/images/checks/check3.gif',
      alt: 'check3',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

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
      <div>
        <ChecksWrap>
          <Column>
            <Row>
              <Check className="check-container">
                <Image
                  src="/images/checks/check1.gif"
                  alt="check1"
                  width={160}
                  height={180}
                  data-aos="fade-down"
                  data-aos-delay="0"
                  priority
                />
                <Image
                  src="/images/checks/check2.gif"
                  alt="check2"
                  width={160}
                  height={180}
                  data-aos="fade-down"
                  data-aos-delay="200"
                  priority
                />
                <Image
                  src="/images/checks/check3.gif"
                  alt="check3"
                  width={160}
                  height={180}
                  data-aos="fade-down"
                  data-aos-delay="300"
                  priority
                />
              </Check>
            </Row>
            <Row>
              {checkArr.map((check) => (
                <Book key={check.id}>
                  <Image
                    src={`/images/checks/book${check.id}.png`}
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
      </div>
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
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Check = styled.div`
  display: flex;
`;

const CheckImg = styled.img`
  width: 160px;
  margin-right: 54px;

  &:last-child {
    margin-right: 0;
  }
`;

const Book = styled.div`
  display: flex;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`;

const BookImagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Checks;
