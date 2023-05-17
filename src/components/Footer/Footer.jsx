import { Logo } from 'components/Logo/Logo';
import {
  //   BlurBlue,
  //   BlurGreen,
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
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

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
              <FaFacebookF size={20} />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter size={20} />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram size={20} />
            </a>
          </IconItem>
        </IconList>
      </List>
      <Nav>
        <NavList>
          <NameList>Property</NameList>
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

        <NavList>
          <NameList>Article</NameList>
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

        <NavList>
          <NameList>Contact</NameList>
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
      </Nav>

      {/* <BlurGreen></BlurGreen>
      <BlurBlue></BlurBlue> */}
    </Section>
  );
};
