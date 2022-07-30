import styled from 'styled-components';
import useMedia from 'use-media';
import Layout from './Layout';
import { BookMarkText } from 'utils/data/BookMark';
import { FlexColumn } from 'utils/constants';

const Bookmarks = () => {
  const tablet = useMedia({ minWidth: '768px', maxWidth: '1199px' });
  const desktop = useMedia({ minWidth: '1200px' });

  return (
    <Layout title="땅콩스쿨만의 특징" animation="fade-up">
      <MarksSection>
        {BookMarkText.map((mark, idx) => {
          const media = desktop
            ? mark.subTitle.desktop
            : tablet
            ? mark.subTitle.tablet
            : mark.subTitle.mobile;

          return (
            <Mark
              key={`${mark.title}_${idx}`}
              data-aos="fade-up"
              data-aos-delay={`${150 * (idx + 1)}`}
            >
              <MarkImg
                src={`/images/marks/mark${idx + 1}.png`}
                alt={`bookmark_${idx}`}
              />
              <Title>{mark.title}</Title>
              <SubTitleBox>
                {media.map((line, idx) => (
                  <SubTitle key={`${mark.title}_line_${idx + 1}`}>
                    {line}
                    <br />
                  </SubTitle>
                ))}
              </SubTitleBox>
            </Mark>
          );
        })}
      </MarksSection>
    </Layout>
  );
};

const MarksSection = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 40px 0 50px;
  overflow: hidden;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 1380px;
    margin-top: 80px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0 101px;
  }
`;

const Mark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 458px;
  margin-right: 0;
  background-image: url(https://ddangkongschool.com/86e2b34f195de559b1e0b75027590801.png);
  background-size: 360px 458px;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 1;

  @media (min-width: 1200px) {
    width: 460px;
    height: 651px;
    margin-right: -70px;
    background-image: url(https://ddangkongschool.com/ff074222d16cdd912139f3667a8b8fbc.png);
    background-size: 460px 651px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 580px;
    height: 609px;
    margin-right: 0;
    background-image: url(https://ddangkongschool.com/ddf7d90d2fd5ce5acda239619a9d586f.png);
    background-size: 580px 609px;
  }
`;

const MarkImg = styled.img`
  margin-top: 121px;
  width: 80px;
  height: 80px;

  @media (min-width: 768px) {
    margin-top: 174px;
    width: 116px;
    height: 116px;
  }
`;

const Title = styled.div`
  margin: 30px auto 0;
  font-weight: bold;
  text-align: center;
  color: rgb(51, 51, 51);
  font-size: 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    font-size: 30px;
  }
`;

const SubTitleBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

const SubTitle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 20px;
    text-align: center;
    color: rgb(51, 51, 51);
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: rgb(51, 51, 51);
  }
`;

export default Bookmarks;
