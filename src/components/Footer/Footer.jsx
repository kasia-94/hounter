import { Logo } from 'components/Logo/Logo';
import {
  // BlurBlue,
  // BlurGreen,
  IconItem,
  IconList,
  Item,
  List,
  NameList,
  Nav,
  NavList,
  Section,
  Title,
} from './Footer.styled';
import { ReactComponent as Facebook } from '../../assets/svg/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/svg/icon-instagram.svg';

export const Footer = () => {
  return (
    <Section>
      <List>
        <Logo />
        <Title>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </Title>
        <IconList>
          <IconItem>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Twitter />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram />
            </a>
          </IconItem>
        </IconList>
      </List>
      <Nav>
        <div>
          <NameList>Property</NameList>
          <NavList>
            <li>
              <Item href="">House</Item>
            </li>
            <li>
              <Item href="">Apartment</Item>
            </li>
            <li>
              <Item href="">Villa</Item>
            </li>
          </NavList>
        </div>
        <div>
          <NameList>Article</NameList>
          <NavList>
            <li>
              <Item href="">New Article</Item>
            </li>
            <li>
              <Item href="">Popular Article</Item>
            </li>
            <li>
              <Item href="">Most Read</Item>
            </li>
            <li>
              <Item href="">Tips & Tricks</Item>
            </li>
          </NavList>
        </div>
        <div>
          <NameList>Contact</NameList>
          <NavList>
            <li>
              <Item>2464 Royal Ln. Mesa, New Jersey 45463</Item>
            </li>
            <li>
              <Item href="tel:+6715550110">(671) 555-0110</Item>
            </li>
            <li>
              <Item href="mailto:info@hounter.com">info@hounter.com</Item>
            </li>
          </NavList>
        </div>
      </Nav>
      {/* 
      <BlurGreen></BlurGreen>
      <BlurBlue></BlurBlue> */}
    </Section>
  );
};
