import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { SignUp } from 'components/SignUp/SignUp';
import { HeaderDiv, Menu } from './Header.styled';

export const Header = () => {
  return (
    <HeaderDiv>
      <Logo />
      <Menu>
        <Navigation />
        <SignUp />
      </Menu>
    </HeaderDiv>
  );
};
