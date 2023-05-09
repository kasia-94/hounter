import styled from 'styled-components';
import { colors } from 'utils/styles';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled.li`
  padding: 8px 16px;
  margin-right: 24px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  background: rgba(255, 255, 255, 0.1);
  color: ${colors.menuText};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;

  :hover {
    background-color: ${colors.accentBtn};
    color: ${colors.accentText};
  }
`;
