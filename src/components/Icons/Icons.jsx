import { AiFillFire, AiFillHome } from 'react-icons/ai';
import { IoWallet } from 'react-icons/io5';
import { FireBox, HouseBox, IconBox, WalletBox } from './Icons.styled';

export const IconFire = () => {
  return (
    <IconBox>
      <FireBox>
        <AiFillFire style={{ marginRight: 10 }} />
        <p>Popular</p>
      </FireBox>
    </IconBox>
  );
};

export const IconHouse = () => {
  return (
    <IconBox>
      <HouseBox>
        <AiFillHome style={{ marginRight: 10 }} />
        <p>New house</p>
      </HouseBox>
    </IconBox>
  );
};

export const IconWallet = () => {
  return (
    <IconBox>
      <WalletBox>
        <IoWallet style={{ marginRight: 10 }} />
        <p>Best Deals</p>
      </WalletBox>
    </IconBox>
  );
};
