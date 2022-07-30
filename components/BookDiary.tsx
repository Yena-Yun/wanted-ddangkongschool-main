import styled from 'styled-components';
import Image from 'next/image';
import { FlexColumn } from 'utils/constants';

const BookDiary = () => {
  return (
    <Container>
      <InnerContainer>
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
        <div>
          <Image
            src="/images/book_diary.png"
            alt="book-diary-examples"
            width={760}
            height={545}
          />
        </div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(FlexColumn)`
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: rgb(249, 249, 249);
  overflow-x: hidden;
`;

const InnerContainer = styled(FlexColumn)`
  align-items: center;
  width: 100%;
  padding: 100px 20px 0;

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1200px;
    padding: 150px 30px 0;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    max-width: 768px;
    padding: 150px 30px 0;
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
    font-weight: 700;
    line-height: 1.44;
  }
`;

const TabTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    font-weight: 700;
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
    color: rgb(51, 51, 51);
    line-height: 1.67;
  }
`;

const TabSubTitle = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    padding-top: 50px;
    font-size: 24px;
    color: rgb(51, 51, 51);
    line-height: 1.67;
  }
`;

const MobileSubTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-top: 27px;
    font-size: 16px;
    color: rgb(51, 51, 51);
    line-height: 1.75;
  }
`;

export default BookDiary;
