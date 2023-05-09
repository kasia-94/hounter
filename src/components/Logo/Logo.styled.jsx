import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, device } from 'utils/styles';

export const Image = styled.img`
  width: 26px;
  height: 26px;
  ${device.tablet} {
    width: 36px;
    height: 36px;
  }
`;

export const Text = styled.span`
  margin-left: 12px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${colors.title};
  ${device.full} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
