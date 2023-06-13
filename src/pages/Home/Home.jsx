import { Article } from 'components/Article/Article';
import { Hero } from 'components/Hero/Hero';
import { ReadyToSell } from 'components/ReadyToSell/ReadyToSell';
import { Recommendation } from 'components/Recommendation/Recommendation';
import { Review } from 'components/Review/Review';
import { Subscribe } from 'components/Subscribe/Subscribe';

export const Home = () => {
  return (
    <>
      <Hero />
      <Recommendation />
      <ReadyToSell />
      <Review />
      <Article />
      <Subscribe />
    </>
  );
};
