import styled from 'styled-components';
import wallpaper from '../../assets/Hero/main-wallpaper.jpg';
import lines from '../../assets/Hero/lines.png';
import blur from '../../assets/Hero/blur-1.png';
import { colors } from 'utils/styles';

export const Section = styled.section`
  display: flex;
  margin: 0px auto;
  padding-top: 102px;
  position: relative;
`;

export const MainText = styled.div`
  width: 496px;
  z-index: 3;
`;

export const Background = styled.div`
  display: flex;
  position: absolute;
  margin-top: -200px;
  margin-left: 146px;
  width: 100%;
  height: 720px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(${wallpaper});

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 347px;
    margin-left: -114px;
    margin-top: 138px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${lines});
  }
`;

export const Blur = styled.div`
  position: absolute;
  width: 741px;
  height: 523px;
  margin-top: -300px;
  margin-left: -215px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${blur});
`;

export const Title = styled.h1`
  width: 440px;
  margin-bottom: 24px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.25;
  text-transform: capitalize;
  color: ${colors.title};
`;

export const StyleTitle = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px ${colors.title};
  font-family: sans-serif;
`;

export const PreTitle = styled.p`
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.75;
  opacity: 0.75;
`;

export const Search = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 496px;
  height: 56px;
  margin-bottom: 32px;
  border: 1px solid ${colors.disabled};
  border-radius: 32px;
`;

export const MapPin = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 27px;
`;

export const Input = styled.input`
  width: 303px;
  border: none;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
`;

export const ButtonSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 16px;
  margin-right: 3px;

  width: 109px;
  height: 50px;

  background-color: ${colors.greenBtn};
  border-radius: 32px;
  border-color: transparent;
  font-family: 'Lexend';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.57;
  color: ${colors.white};
  cursor: pointer;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :focus,
  :hover {
    color: ${colors.greenBtn};
    background-color: ${colors.secondaryAccent};
  }
`;

export const PartnerTitle = styled.p`
  font-size: 16px;
  line-height: 2;
`;

export const PartnerList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const IconsPartners = styled.img`
  width: auto;
  height: 64px;
`;
