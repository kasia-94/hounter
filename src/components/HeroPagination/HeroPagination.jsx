import icon1 from '../../assets/Hero/pag1.png';
import icon2 from '../../assets/Hero/pag2.png';
import icon3 from '../../assets/Hero/pag3.png';
import { Desc, Icon, Item, List, Title } from './HeroPagination.styled';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
register();

export const HeroPagination = () => {
  const pagination = [
    {
      id: 11,
      icon: icon1,
      title: '1K+ People',
      description: 'Successfully Getting Home',
    },
    { id: 22, icon: icon2, title: '56 Houses', description: 'Sold Monthly' },
    {
      id: 33,
      icon: icon3,
      title: '4K+',
      description: 'People Looking for New Homes',
    },
  ];

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', e => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', e => {});
  }, []);
  return (
    <List>
      <swiper-container ref={swiperElRef} slides-per-view="2" autoplay={true}>
        {pagination.map(({ id, icon, title, description }) => {
          return (
            <swiper-slide data-swiper-autoplay="2000" key={id}>
              <Item>
                <Icon src={icon} alt={title} />
                <div>
                  <Title>{title}</Title>
                  <Desc>{description}</Desc>
                </div>
              </Item>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </List>
  );
};
