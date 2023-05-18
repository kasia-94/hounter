import styled from 'styled-components';
import { colors } from 'utils/styles';
import img1 from '../../assets/Subscribe/1.png';
import img2 from '../../assets/Subscribe/2.png';
import img3 from '../../assets/Subscribe/3.png';
import img4 from '../../assets/Subscribe/4.png';
import img5 from '../../assets/Subscribe/5.png';
import img6 from '../../assets/Subscribe/6.png';
import img7 from '../../assets/Subscribe/7.png';
import img8 from '../../assets/Subscribe/8.png';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 312px;
  margin-top: 120px;
  border-radius: 32px;

  background: url(${img1}), url(${img2}), url(${img3}), url(${img4}),
    url(${img5}), url(${img6}), url(${img7}), url(${img8}),
    linear-gradient(
      140deg,
      rgba(99, 127, 187, 0.719) 0%,
      rgba(255, 255, 255, 0.7008053221288515) 40%,
      rgba(255, 255, 255, 0.7008053221288515) 60%,
      rgba(215, 240, 220, 0.493) 80%,
      rgba(99, 127, 187, 0.719) 100%
    ),
    rgb(150, 164, 211);
  background-position: 3% 12%, 15% 18%, 3% 70%, 15% 70%, 82% 18%, 95% 30%,
    85% 60%, 93% 70%;
  background-repeat: no-repeat;
`;

export const Title = styled.p`
  width: 450px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.title};
  margin-bottom: 32px;
  text-transform: capitalize;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 496px;
  height: 56px;
  background-color: ${colors.white};
  border: 1px solid ${colors.disabled};
  border-radius: 32px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;

export const Input = styled.input`
  width: 283px;
  height: 22px;
  margin-left: 16px;

  border: none;
  outline: none;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 3px;

  width: 129px;
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
