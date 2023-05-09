import styled from 'styled-components';
import { device } from 'utils/styles';

export const Container = styled.div`
  padding: 20px 10px;
  ${device.full} {
    padding: 46px 120px;
  }
`;
