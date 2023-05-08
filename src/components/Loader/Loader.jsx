import { Watch } from 'react-loader-spinner';
import { HeartContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <HeartContainer>
      <Watch
        height="80"
        width="80"
        color="#10B981"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </HeartContainer>
  );
};
