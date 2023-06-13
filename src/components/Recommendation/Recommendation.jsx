import { Line, MainTitle, Title } from 'components/GlobalStyles';
import {
  Box,
  Button,
  ButtonRL,
  HouseList,
  HouseName,
  Icon,
  IconBox,
  Image,
  List,
  Owner,
  OwnerBox,
  Price,
  Section,
  TitleBox,
} from './Recommendation.styled';
import { MdVilla, MdApartment } from 'react-icons/md';
import {
  BsFillHouseDoorFill,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { recommendList } from 'db/recommendation';

export const Recommendation = () => {
  return (
    <>
      <Section>
        <TitleBox>
          <Line></Line>
          <Title>Our Recommendation</Title>
        </TitleBox>
        <Box>
          <MainTitle>Featured House</MainTitle>
          <List>
            <li>
              <Button>
                <BsFillHouseDoorFill size={18} />
                House
              </Button>
            </li>
            <li>
              <Button>
                <MdVilla size={18} />
                Villa
              </Button>
            </li>
            <li>
              <Button>
                <MdApartment size={18} />
                Apartment
              </Button>
            </li>
          </List>
          <List>
            <li style={{ marginRight: 16 }}>
              <ButtonRL>
                <BsChevronLeft size={18} />
              </ButtonRL>
            </li>
            <li>
              <ButtonRL>
                <BsChevronRight size={18} />
              </ButtonRL>
            </li>
          </List>
        </Box>

        <HouseList>
          <swiper-container slides-per-view="3" autoplay={true}>
            {recommendList.map(
              ({
                id,
                icon,
                name,
                currency,
                price,
                avatar,
                owner,
                place,
                figure,
              }) => {
                return (
                  <swiper-slide data-swiper-autoplay="2000" key={id}>
                    <Image
                      src={icon}
                      alt={name}
                      style={{ position: 'relative' }}
                    />
                    <HouseName>{name}</HouseName>
                    <Price>
                      <p>{currency}</p>
                      <p>{price}</p>
                      <IconBox>{figure}</IconBox>
                    </Price>

                    <OwnerBox>
                      <Icon src={avatar} alt={owner} />
                      <Owner>
                        <p>{owner}</p>
                        <p>{place}</p>
                      </Owner>
                    </OwnerBox>
                  </swiper-slide>
                );
              }
            )}
          </swiper-container>
        </HouseList>
      </Section>
    </>
  );
};
