import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Section = styled.section`
  margin-top: 120px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  p {
    margin-top: 8px;
  }
`;

export const Swiper = styled.div`
  align-content: center;
`;

export const Image = styled.img`
  width: 740px;
  height: 400px;
  opacity: 0.7;
  border-radius: 8px;
  z-index: 0;
`;

export const Box = styled.div`
  width: 612px;
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
  background-color: ${colors.white};
  z-index: 100;
`;

export const ArticleTitle = styled.p`
  margin-left: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  text-transform: capitalize;
  color: ${colors.title};
`;

export const Article = styled.p`
  line-height: 1.71;
  color: ${colors.mainText};
  opacity: 0.75;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
`;

export const Name = styled.p`
  font-weight: 500;
  line-height: 1.57;
  color: ${colors.titleDesc};
`;

export const Profession = styled.p`
  font-weight: 500;
  line-height: 1.57;
  color: ${colors.grey};
`;

export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OwnerBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameBox = styled.div`
  flex-direction: column;
`;

export const RateBox = styled.div`
  display: flex;
  align-items: end;
`;
