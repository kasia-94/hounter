import styled from 'styled-components';
import { colors } from 'utils/styles';

export const IconBox = styled.div`
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const FireBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: ${colors.popularBgc};
  color: ${colors.popular};
  fill: ${colors.popular};
`;

export const HouseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: ${colors.newItemBgc};
  color: ${colors.newItem};
  fill: ${colors.newItem};

  svg {
    fill: ${colors.newItem};
  }
`;

export const WalletBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: ${colors.accentBtn};
  color: ${colors.accentText};
  fill: ${colors.accentText};
`;
