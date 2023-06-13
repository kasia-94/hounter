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
import { IoBed, IoCarSportSharp } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';
import { GiStairs } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';

import test from '../../assets/test.png';
import icon from '../../assets/Recommendation/avatar1.png';

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
                <IoBed size={32} /> 4 Bedrooms
              </Item>
              <Item>
                <IoCarSportSharp size={32} />1 Carport
              </Item>
              <Item>
                <FaBath size={32} /> 2 Bathrooms
              </Item>
              <Item>
                <GiStairs size={32} />2 Floors
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
                <BsFillTelephoneFill size={18} />
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
