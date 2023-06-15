import { partners } from 'db/partners';
import mappin from '../../assets/svg/mappin.svg';
import {
  Background,
  IconsPartners,
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
  Blur,
  ButtonSearch,
  ArrowRight,
} from './Hero.styled';
import { HeroPagination } from 'components/HeroPagination/HeroPagination';

export const Hero = () => {
  return (
    <>
      <Section>
        <Blur></Blur>
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
            <>
              <MapPin src={mappin} alt="mappin" />
              <Input
                type="text"
                placeholder="Search for the location you want!"
              />
            </>
            <ButtonSearch>
              Search <ArrowRight />
            </ButtonSearch>
          </Search>
          <PartnerTitle>Our Partnership </PartnerTitle>
          <PartnerList>
            {partners.map(({ id, icon, alt }) => {
              return (
                <li key={id}>
                  <IconsPartners src={icon} alt={alt} />
                </li>
              );
            })}
          </PartnerList>
        </MainText>

        <Background></Background>
        <HeroPagination />
      </Section>
    </>
  );
};
