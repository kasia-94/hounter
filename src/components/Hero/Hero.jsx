import partner1 from '../../assets/Hero/partner1.png';
import partner2 from '../../assets/Hero/partner2.png';
import partner3 from '../../assets/Hero/partner3.png';
import partner4 from '../../assets/Hero/partner4.png';
import { Background, IconsPartners, Section } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Section>
        <div>
          <h1>find the place to live your dreams easily here</h1>
          <p>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <form>
            <input
              type="text"
              placeholder="Search for the location you want!"
            />
            <button>Search</button>
          </form>
          <h3>Our Partnership </h3>
          <ul>
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
          </ul>
        </div>
        <Background></Background>
      </Section>
    </>
  );
};
