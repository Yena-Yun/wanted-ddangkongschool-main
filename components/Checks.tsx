import { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import * as U from 'utils/constants';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Checks = () => {
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
      <U.FlexColumn>
        <Row>
          <U.FlexBox>
            {Array.from({ length: U.CHECK_BOOK_NUMBER }).map((check, idx) => (
              <Check key={`check_${idx}`}>
                <Image
                  src={`/images/checks/check${idx + 1}.gif`}
                  alt={`check${idx + 1}`}
                  width={160}
                  height={180}
                  data-aos="fade-down"
                  data-aos-delay={`${100 * (idx + 1)}`}
                />
              </Check>
            ))}
          </U.FlexBox>
        </Row>
        <Row>
          {Array.from({ length: U.CHECK_BOOK_NUMBER }).map((book, idx) => (
            <Book
              key={`book_${idx + 1}`}
              data-aos="fade-down"
              data-aos-delay={`${150 * (idx + 1)}`}
              data-aos-duration="500"
            >
              <Image
                src={`/images/checks/book${idx + 1}.png`}
                alt={`check_book_${idx + 1}`}
                width={190}
                height={210}
              />
            </Book>
          ))}
        </Row>
      </U.FlexColumn>
    </Wrapper>
  );
};

const Wrapper = styled(U.FlexBox)`
  justify-content: center;
  padding: 150px 0;
  background-color: #f9f9f9;

  @media (max-width: ${U.MEDIA.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrap = styled.div`
  margin-right: 156px;

  @media (max-width: ${U.MEDIA.lg}) {
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

  @media (max-width: ${U.MEDIA.lg}) {
    text-align: center;
  }
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.default};

  @media (max-width: ${U.MEDIA.lg}) {
    text-align: center;
  }
`;

const Row = styled(U.FlexBox)`
  justify-content: space-around;
  width: 600px;
  margin-bottom: 24px;

  ${U.NO_MARGIN_LAST}
`;

const Check = styled.div`
  width: 160px;
  margin-right: 54px;

  ${U.NO_MARGIN_LAST}
`;

const Book = styled(U.FlexBox)`
  margin-right: 40px;

  ${U.NO_MARGIN_LAST}
`;

export default Checks;
