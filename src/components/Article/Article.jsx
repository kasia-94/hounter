import { Line, MainTitle, Title } from 'components/GlobalStyles';
import {
  AddBox,
  ArticleName,
  Avatar,
  AvatarBox,
  Box,
  Button,
  Image,
  List,
  MainArticleName,
  MainBox,
  MainDesc,
  MainImage,
  Name,
  Section,
  Time,
  TitleBox,
} from './Article.styled';
import { articles, mainArticle } from 'db/article';
import { ReactComponent as Clock } from '../../assets/svg/icon-clock.svg';

export const Article = () => {
  return (
    <>
      <Section>
        <TitleBox>
          <Line></Line>
          <Title>See tips and trick from our partnership</Title>
          <MainTitle>Find out more about selling and buying homes</MainTitle>
          <Button>
            <a href="https://homeia.com">More Article</a>
          </Button>
        </TitleBox>
        <Box>
          <AddBox>
            {articles.map(({ author, avatar, id, icon, title, time, url }) => {
              return (
                <List href={url} key={id}>
                  <Image src={icon} alt="icon" />
                  <div>
                    <AvatarBox>
                      <Avatar src={avatar} alt="icon" />
                      <Name>{author}</Name>
                    </AvatarBox>
                    <ArticleName>{title}</ArticleName>
                    <Time>
                      <Clock />
                      <p>{time}</p>
                    </Time>
                  </div>
                </List>
              );
            })}
          </AddBox>
          <MainBox>
            {mainArticle.map(
              ({ id, avatar, author, desc, url, title, icon, time }) => {
                return (
                  <a href={url} key={id}>
                    <div>
                      <MainImage src={icon} alt="icon" />
                      <AvatarBox>
                        <Avatar src={avatar} alt="icon" />
                        <Name>{author}</Name>
                      </AvatarBox>
                      <MainArticleName>{title}</MainArticleName>
                      <MainDesc>{desc}</MainDesc>
                      <Time>
                        <Clock />
                        <p>{time}</p>
                      </Time>
                    </div>
                  </a>
                );
              }
            )}
          </MainBox>
        </Box>
      </Section>
    </>
  );
};
