import { FireBox, HouseBox, Icon, IconBox, WalletBox } from './Icons.styled';
import fire from '../../assets/svg/icon-popular.svg';
import house from '../../assets/svg/icon-house-blue.svg';
import wallet from '../../assets/svg/icon-wallet.svg';

export const IconFire = () => {
  return (
    <IconBox>
      <FireBox>
        <Icon src={fire} alt="popular" />
        <p>Popular</p>
      </FireBox>
    </IconBox>
  );
};

export const IconHouse = () => {
  return (
    <IconBox>
      <HouseBox>
        <Icon src={house} alt="house" />
        <p>New house</p>
      </HouseBox>
    </IconBox>
  );
};

export const IconWallet = () => {
  return (
    <IconBox>
      <WalletBox>
        <Icon src={wallet} alt="wallet" />
        <p>Best Deals</p>
      </WalletBox>
    </IconBox>
  );
};
