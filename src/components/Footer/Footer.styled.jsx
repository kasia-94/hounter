import styled from 'styled-components';
import { colors } from 'utils/styles';
import blur1 from '../../assets/Footer/blur-1.webp';
import blur2 from '../../assets/Footer/blur-2.webp';

export const Section = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 80px;

  /* ::after {
    content: '';
    width: 438px;
    height: 494px;
    left: 1394px;
    top: 4268px;

    background: #b9ff82;
    opacity: 0.3;
    filter: blur(60px);
    transform: rotate(45deg);
  } */

  /* ::before {
    content: '';
    position: absolute;
    width: 438px;
    height: 494px;
    left: 77%;
    margin-top: -187px;
    margin-left: 945px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${blur2});
  }  */
`;

export const List = styled.div`
  width: 320px;
  flex-direction: column;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-right: 88px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const NavList = styled.ul`
  li {
    margin-bottom: 18px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const IconList = styled.ul`
  display: flex;
`;

export const IconItem = styled.li`
  margin-right: 30px;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  :last-child {
    margin-right: 0;
  }
  :hover {
    transform: scale(1.5);
  }
  a {
    fill: ${colors.icon};
    transition: fill 250ms ease-in-out;
    :hover {
      fill: ${colors.greenBtn};
    }
  }
`;

export const BlurGreen = styled.div`
  position: absolute;
  width: 438px;
  height: 494px;
  margin-top: -11px;
  margin-left: 885px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${blur1});
`;
export const BlurBlue = styled.div`
  position: absolute;
  width: 438px;
  height: 494px;
  margin-top: -187px;
  margin-left: 945px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${blur2});
`;

export const Title = styled.p`
  margin-top: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 1.71;
`;

export const NameList = styled.p`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.titleDesc};
`;

export const Item = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.grey};
`;
