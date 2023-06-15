import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Section = styled.section`
  margin-top: 212px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.25;

  text-transform: capitalize;
  color: ${colors.title};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    margin-right: 32px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  font-family: 'Lexend';
  font-size: 18px;
  line-height: 1.56;
  background-color: transparent;
  color: ${colors.grey};
  border: 1px solid ${colors.disabled};
  border-radius: 32px;
  transition: fill 0.12s ease, background-color 0.12s ease, color 0.12s ease;
  cursor: pointer;
  svg {
    fill: ${colors.grey};
    width: 24px;
    height: 24px;
    margin-right: 11px;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${colors.greenBtn};
    background-color: ${colors.accentBtn};
    border-color: ${colors.accentBtn};
    svg {
      fill: ${colors.greenBtn};
    }
  }
`;

export const ButtonRL = styled.button`
  width: 60px;
  height: 52px;
  align-items: center;
  background-color: ${colors.disabled};
  border-radius: 32px;
  border-color: transparent;
  transition: fill 0.12s ease, background-color 0.12s ease;
  cursor: pointer;
  svg {
    width: 28px;
    height: 28px;
    fill: ${colors.subTitleDesc};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.greenBtn};
    svg {
      fill: ${colors.white};
    }
  }
`;

export const HouseList = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 340px;
  height: 382px;
  margin-bottom: 24px;
`;

export const HouseName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  color: ${colors.titleDesc};
`;

export const Price = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.6;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const OwnerBox = styled.div`
  display: flex;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 63%;
  right: 62%;
`;
