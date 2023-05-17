import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Button = styled.button`
  width: 107px;
  height: 46px;
  margin-left: 32px;
  border-color: transparent;
  border-radius: 32px;
  background-color: ${colors.accentBtn};
  color: ${colors.accentText};
  font-family: 'Lexend';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.57;
  cursor: pointer;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :focus,
  :hover {
    color: ${colors.white};
    background-color: ${colors.greenBtn};
  }
`;
