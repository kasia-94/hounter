import icon1 from '../../assets/Hero/pag1.png';
import icon2 from '../../assets/Hero/pag2.png';
import icon3 from '../../assets/Hero/pag3.png';
import { Desc, Icon, Item, List, Title } from './HeroPagination.styled';
import { register } from 'swiper/element/bundle';
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
  return (
    <List>
      <swiper-container slides-per-view="2" autoplay={true}>
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
