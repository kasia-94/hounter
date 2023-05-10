import styled from 'styled-components';
import wallpaper from '../../assets/Hero/main-wallpaper.jpg';
import lines from '../../assets/Hero/lines.png';
import { colors } from 'utils/styles';

export const Section = styled.section`
  display: flex;
  margin: 0px auto;
  padding-top: 102px;
`;

export const MainText = styled.div`
  width: 496px;
`;

export const Background = styled.div`
  position: absolute;
  margin-top: -200px;
  margin-left: -152px;
  width: 100%;
  height: 720px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(${wallpaper});
`;

export const Lines = styled.div`
  position: absolute;
  width: 100%;
  height: 347px;
  margin-left: -114px;
  margin-top: 138px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(${lines});
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
  width: 496px;
  margin-bottom: 32px;
  border: 2px solid red;
`;

export const MapPin = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 19px;
`;

export const Input = styled.input`
  width: 303px;
  padding: 4px 4px 4px 24px;
  border: none;
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
