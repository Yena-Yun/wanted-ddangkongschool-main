import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const DiaryBook = () => {
  return (
    <Contaniner>
      <InnerContainner>
        <Header>
          <Title data-aos="fade-up">
            매일 매일 <br />
            알아서 기록하는 독서 일기
          </Title>
          <TabTitle data-aos="fade-up">
            매일 매일 알아서 <br />
            기록하는 독서 일기
          </TabTitle>
          <SubTitle data-aos="fade-up">
            오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를
            통해 확인해보세요. <br />
            읽기만 해도 자동으로 기록되고, 공유도 가능해요.
          </SubTitle>
          <TabSubTitle data-aos="fade-up">
            오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 <br />
            독서일기를 통해 확인해보세요. <br />
            읽기만 해도 자동으로 기록되고, 공유도 가능해요.
          </TabSubTitle>
          <MobileSubTitle data-aos="fade-up">
            오늘은 아이가 어떤 책을 읽었는지, <br />
            어떤 활동에 참여했는지 <br />
            독서일기를 통해 확인해보세요. <br />
            읽기만 해도 자동으로 기록되고, <br />
            공유도 가능해요.
          </MobileSubTitle>
        </Header>
        <ImgBox>
          <Image
            src="/images/style6.png"
            alt="DeskTopImg"
            width={360}
            height={345}
          />
        </ImgBox>
      </InnerContainner>
    </Contaniner>
  );
};

const Contaniner = styled.div`
  overflow-x: hidden;
  background-color: rgb(249, 249, 249);
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`;

const InnerContainner = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    padding-top: 150px;
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0px auto;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 150px;
    width: 100%;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 50px;
    line-height: 1.44;
    font-weight: bold;
  }
`;

const TabTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-weight: bold;
    font-size: 30px;
    line-height: 1.47;
    color: rgb(51, 51, 51);
  }
`;

const SubTitle = styled.header`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
    color: rgb(51, 51, 51);
  }
`;

const TabSubTitle = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
    color: rgb(51, 51, 51);
  }
`;

const MobileSubTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-top: 27px;
    font-size: 16px;
    line-height: 1.75;
    color: rgb(51, 51, 51);
  }
`;
const ImgBox = styled.div`
  margin-top: 0px;
  margin-bottom: 47px;
`;

export default DiaryBook;
