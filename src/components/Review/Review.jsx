import { Line, MainTitle, Title } from 'components/GlobalStyles';
import {
  Article,
  ArticleTitle,
  Avatar,
  Box,
  Image,
  MainBox,
  Name,
  NameBox,
  OwnerBox,
  Profession,
  RateBox,
  Section,
  Swiper,
  TitleBox,
} from './Review.styled';
import { review } from 'db/review';
import { ReactComponent as Star } from '../../assets/svg/icon-star.svg';

export const Review = () => {
  return (
    <>
      <Section>
        <TitleBox>
          <Line></Line>
          <Title>See Our Review</Title>
          <MainTitle>What Our User Say About Us</MainTitle>
        </TitleBox>

        <div>
          <swiper-container slides-per-view="1" autoplay={true}>
            {review.map(
              ({ id, image, title, text, avatar, owner, profession, rate }) => {
                return (
                  <swiper-slide data-swiper-autoplay="4000" key={id}>
                    <Swiper>
                      <Image src={image} alt="house" />
                      <Box>
                        <div>
                          <ArticleTitle>{title}</ArticleTitle>
                          <Article>{text}</Article>
                        </div>
                        <MainBox>
                          <OwnerBox>
                            <Avatar src={avatar} alt="owner" />
                            <NameBox>
                              <Name>{owner}</Name>
                              <Profession>{profession}</Profession>
                            </NameBox>
                          </OwnerBox>
                          <RateBox>
                            <Star />
                            <ArticleTitle>{rate}</ArticleTitle>
                          </RateBox>
                        </MainBox>
                      </Box>
                    </Swiper>
                  </swiper-slide>
                );
              }
            )}
          </swiper-container>
        </div>
      </Section>
    </>
  );
};
