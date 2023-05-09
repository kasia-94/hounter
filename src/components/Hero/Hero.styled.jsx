import styled from 'styled-components';
import wallpaper from '../../assets/Hero/main-wallpaper.jpg';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Background = styled.div`
  width: 720px;
  height: 720px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${wallpaper});
  /* position: absolute; */
`;

export const IconsPartners = styled.img`
  width: auto;
  height: 64px;
`;
