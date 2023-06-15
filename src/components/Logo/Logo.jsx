import logo from '../../assets/svg/logo.svg';
import { Image, LogoLink, Text } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="./">
      <Image src={logo} alt="logo" />
      <Text>Hounter</Text>
    </LogoLink>
  );
};
