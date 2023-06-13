import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Section = styled.section`
  margin-top: 120px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostTitle = styled.p`
  margin: 16px 0;
  font-size: 16px;
  line-height: 1.75;
  color: ${colors.mainText};
  opacity: 0.75;
`;

export const ListTitle = styled.p`
  margin: 16px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.75;
  color: ${colors.title};
  opacity: 0.75;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100%) / 2);
  margin: 14px 0;
  align-items: center;

  svg {
    fill: ${colors.grey};
    margin-right: 16px;
  }
`;

export const BaseLine = styled.div`
  display: flex;
  margin: 34px 0;
  ::before {
    content: '';
    width: 440px;
    height: 1px;
    background: ${colors.menuText};
    margin-right: 8px;
  }
`;

export const Image = styled.img`
  width: 528px;
  height: 459px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 24px;
`;

export const Button = styled.button`
  display: flex;
  margin-left: 59px;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  cursor: pointer;

  background-color: ${colors.greenBtn};
  border-radius: 32px;
  border: inherit;

  font-family: 'Lexend';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.57;

  color: ${colors.white};
  transition: fill 0.12s ease, background-color 0.12s ease, color 0.12s ease;

  &:hover,
  &:focus {
    background-color: ${colors.secondaryAccent};
    color: ${colors.greenBtn};
    svg {
      fill: ${colors.greenBtn};
    }
  }
`;
