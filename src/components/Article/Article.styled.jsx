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

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 12px 16px;
  gap: 16px;
  cursor: pointer;

  background-color: ${colors.greenBtn};
  border-radius: 32px;
  border: inherit;

  font-family: 'Lexend';
  font-weight: 600;
  line-height: 1.57;

  color: ${colors.white};
  transition: background-color 0.12s ease, color 0.12s ease;

  &:hover,
  &:focus {
    background-color: ${colors.secondaryAccent};
    color: ${colors.greenBtn};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const AddBox = styled.div`
  width: 572px;
  margin-left: 20px;
`;

export const MainBox = styled.div`
  width: 560px;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const Image = styled.img`
  width: 200px;
  height: 144px;
  border-radius: 16px;
  margin-right: 32px;
`;

export const MainArticleName = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  text-transform: capitalize;
  color: ${colors.title};
`;

export const MainDesc = styled.p`
  margin-bottom: 16px;
  color: ${colors.mainText};
  opacity: 0.75;
`;

export const MainImage = styled.img`
  width: 560px;
  height: 280px;
  border-radius: 16px;
  margin-right: 32px;
  margin-bottom: 24px;
`;

export const List = styled.a`
  display: flex;
  margin-bottom: 44px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const AvatarBox = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`;

export const Name = styled.p`
  line-height: 1.57;
  color: ${colors.subTitleDesc};
`;

export const ArticleName = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.78;
  text-transform: capitalize;
  color: ${colors.title};
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.grey};
`;
