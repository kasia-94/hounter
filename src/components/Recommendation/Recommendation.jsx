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
import { recommendList } from 'db/recommendation';
import { ReactComponent as HouseIcon } from '../../assets/svg/icon-house.svg';
import { ReactComponent as ApartIcon } from '../../assets/svg/icon-apartment.svg';
import { ReactComponent as VillaIcon } from '../../assets/svg/icon-villa.svg';
import { ReactComponent as Right } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as Left } from '../../assets/svg/arrow-left.svg';

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
                <HouseIcon />
                House
              </Button>
            </li>
            <li>
              <Button>
                <VillaIcon />
                Villa
              </Button>
            </li>
            <li>
              <Button>
                <ApartIcon /> Apartment
              </Button>
            </li>
          </List>
          <List>
            <li style={{ marginRight: 16 }}>
              <ButtonRL>
                <Left />
              </ButtonRL>
            </li>
            <li>
              <ButtonRL>
                <Right />
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
