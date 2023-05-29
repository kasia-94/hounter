import { Hero } from 'components/Hero/Hero';
import { Recommendation } from 'components/Recommendation/Recommendation';
import { Subscribe } from 'components/Subscribe/Subscribe';

export const Home = () => {
  return (
    <>
      <Hero />
      <Recommendation />
      <Subscribe />
    </>
  );
};
