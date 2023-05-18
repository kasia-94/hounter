import styled from 'styled-components';
import { colors } from 'utils/styles';

export const List = styled.div`
  position: absolute;
  margin-top: 350px;
  margin-left: 672px;
  width: 650px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  padding: 24px;
  background-color: ${colors.white};
  box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  font-family: 'Lexend';
`;

export const Icon = styled.img`
  height: 56px;
  width: auto;
  margin-right: 16px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.title};
  flex-wrap: nowrap;
`;

export const Desc = styled.p`
  display: flex;
  font-size: 12px;
  line-height: 1.67;
  color: ${colors.desc};
  flex-wrap: nowrap;
`;
