import partner1 from '../../assets/Hero/partner1.png';
import partner2 from '../../assets/Hero/partner2.png';
import partner3 from '../../assets/Hero/partner3.png';
import partner4 from '../../assets/Hero/partner4.png';
import mappin from '../../assets/Hero/mappin.svg';
import {
  Background,
  IconsPartners,
  Lines,
  MainText,
  StyleTitle,
  Section,
  Title,
  PreTitle,
  Search,
  PartnerTitle,
  PartnerList,
  Input,
  MapPin,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Section>
        <MainText>
          <Title>
            find the place to live <StyleTitle>your dreams</StyleTitle> easily
            here
          </Title>
          <PreTitle>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </PreTitle>
          <Search>
            <MapPin src={mappin} />
            <Input
              type="text"
              placeholder="Search for the location you want!"
            />
            <button>Search</button>
          </Search>
          <PartnerTitle>Our Partnership </PartnerTitle>
          <PartnerList>
            <li>
              <IconsPartners src={partner1} alt="partner" />
            </li>
            <li>
              <IconsPartners src={partner2} alt="partner" />
            </li>
            <li>
              <IconsPartners src={partner3} alt="partner" />
            </li>
            <li>
              <IconsPartners src={partner4} alt="partner" />
            </li>
          </PartnerList>
        </MainText>
        <>
          <Background>
            <Lines></Lines>
          </Background>
        </>
      </Section>
    </>
  );
};
