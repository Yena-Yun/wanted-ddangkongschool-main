import styled from 'styled-components';
import Image from 'next/image';
import Layout from './Layout';
import { FlexColumn } from 'utils/constants';

const Download = () => {
  return (
    <Layout title="지금 다운로드 받으세요!" animation="fade-up">
      <Wrapper>
        <TicketImgBox>
          <TicketImg>
            <Image
              src="/images/download/ticket.png"
              alt="TicketImg"
              width={1000}
              height={550}
            />
          </TicketImg>
          <MobileTicketImg>
            <Image
              src="/images/download/ticket_mobile.png"
              alt="MobileTicketImg"
              width={400}
              height={600}
            />
          </MobileTicketImg>
        </TicketImgBox>

        <TicketContent>
          <FlexColumn>
            <LogoImgBox>
              <Image
                src="/images/download/logo.png"
                alt="LogoImg"
                width={400}
                height={140}
              />
            </LogoImgBox>
            <Title>
              책을 보는 <br />
              새로운 방법
            </Title>
            <Bottom>지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!</Bottom>
            {/* <MobileBottom>
              지금 가입하시면 <br />
              매주 8권의 동화책을 보실 수 있어요!
            </MobileBottom> */}
          </FlexColumn>
          <FlexColumn>
            <DownloadSection>
              <p>회원가입에 걸리는 시간 단 3초</p>
              <button type="submit">앱 다운로드 하기</button>
            </DownloadSection>
          </FlexColumn>
        </TicketContent>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  position: relative;

  margin-top: 60px;
  margin-bottom: 116px;

  /* @media screen and (min-width: 1200px) {
    width: 1240px;
    height: 534px;
    margin-bottom: 80px;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    width: 994px;
    height: 534px;
    margin-bottom: 80px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 808px;
    height: 534px;
    margin-bottom: 80px;
  } */
`;

const TicketImgBox = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: -500px;

  @media (max-width: 768px) {
    left: -200px;
  }
`;

const TicketImg = styled.div`
  width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileTicketImg = styled.div`
  display: none;
  width: 100vw;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TicketContent = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 0;
  left: -300px;

  width: 740px;
  padding-top: 94px;

  /* @media screen and (min-width: 1200px) {
    width: 640px;
    padding-left: 60px;
    padding-top: 124px;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    width: 572px;
    padding-left: 10px;
    padding-top: 124px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 407px;
    padding-left: 50px;
    padding-top: 124px;
  } */
`;

const LogoImgBox = styled.div`
  width: 200px;
  height: 50px;

  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
  }
`;

const Title = styled.p`
  padding-top: 19px;
  font-size: 50px;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Bottom = styled.div`
  display: none;

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: rgb(51, 51, 51);
    display: block;
  }
`;

const DownloadSection = styled.div`
  align-items: center;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
  z-index: 2;
  padding-top: 107px;
  margin-left: 0;

  @media screen and (min-width: 1200px) {
    padding-left: 110px;
    padding-top: 182px;
    margin-right: 25px;
    align-items: flex-start;
  }

  @media (min-width: 950px) and (max-width: 1200px) {
    flex: initial;
    padding-left: 54px;
    padding-top: 182px;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    padding-left: 20px;
    padding-top: 198px;
    margin-right: 25px;
    align-items: flex-start;
    margin-left: 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: rgb(51, 51, 51);

    @media screen and (min-width: 1200px) {
      margin-left: 20px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 1.8;
    }
  }

  button {
    width: 280px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: rgb(255, 255, 255);
    background-color: rgb(51, 51, 51);
    border-radius: 10px;
    cursor: pointer;

    @media screen and (min-width: 1200px) {
      width: 282px;
      height: 80px;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
      width: 250px;
      height: 80px;
    }
  }
`;

export default Download;
