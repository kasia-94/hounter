import { Line, MainTitle, Title } from 'components/GlobalStyles';
import {
  Avatar,
  BaseLine,
  Box,
  Button,
  Contact,
  Image,
  Item,
  List,
  ListTitle,
  Owner,
  PostTitle,
  Section,
  TitleBox,
} from './ReadyToSell.styled';

import test from '../../assets/test.png';
import icon from '../../assets/Recommendation/avatar1.webp';
import { ReactComponent as Car } from '../../assets/svg/icon-car.svg';
import { ReactComponent as Bath } from '../../assets/svg/icon-bath.svg';
import { ReactComponent as Stairs } from '../../assets/svg/icon-stairs.svg';
import { ReactComponent as Bed } from '../../assets/svg/icon-bed.svg';
import { ReactComponent as Phone } from '../../assets/svg/icon-phone.svg';

export const ReadyToSell = () => {
  return (
    <>
      <Section>
        <TitleBox>
          <Line></Line>
          <Title>Ready to Sell!</Title>
        </TitleBox>

        <Box>
          <div>
            <MainTitle>Let’s tour and see our house!</MainTitle>
            <PostTitle>
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </PostTitle>
            <ListTitle>House Detail</ListTitle>
            <List>
              <Item>
                <Bed /> 4 Bedrooms
              </Item>
              <Item>
                <Car />1 Carport
              </Item>
              <Item>
                <Bath /> 2 Bathrooms
              </Item>
              <Item>
                <Stairs />2 Floors
              </Item>
            </List>
            <BaseLine></BaseLine>
            <Contact>
              <Owner>
                <Avatar src={icon} alt="icon" />
                <div>
                  <p>Dianne Russell</p>
                  <p>Manager Director</p>
                </div>
              </Owner>
              <Button>
                <Phone />
                <a href="tel:+6715550110">Contact Now</a>
              </Button>
            </Contact>
          </div>
          <div>
            <Image src={test} alt="1" />
          </div>
        </Box>
      </Section>
    </>
  );
};
