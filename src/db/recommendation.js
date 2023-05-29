import icon1 from '../assets/Recommendation/icon1.jpg';
import icon2 from '../assets/Recommendation/icon2.jpg';
import icon3 from '../assets/Recommendation/icon3.jpg';

import avatar1 from '../assets/Recommendation/avatar1.png';
import avatar2 from '../assets/Recommendation/avatar2.png';
import avatar3 from '../assets/Recommendation/avatar3.png';
import { IconFire, IconHouse, IconWallet } from 'components/Icons/Icons';

const fire = <IconFire />;
const house = <IconHouse />;
const wallet = <IconWallet />;

export const recommendList = [
  {
    id: 1,
    type: 'villa',
    sort: 'popular',
    name: 'Roselands House',
    icon: icon1,
    currency: '$',
    price: '35.000.000',
    owner: 'Dianne Russell',
    avatar: avatar1,
    place: 'Manchester, Kentucky',
    figure: fire,
  },
  {
    id: 2,
    type: 'house',
    sort: 'new house',
    name: 'Woodlandside',
    icon: icon2,
    currency: '$',
    price: '20.000.000',
    owner: 'Robert Fox',
    avatar: avatar2,
    place: 'Dr. San Jose, South Dakota',
    figure: house,
  },
  {
    id: 3,
    type: 'apartment',
    sort: 'best deals',
    name: 'The Old Lighthouse',
    icon: icon3,
    currency: '$',
    price: '44.000.000',
    owner: 'Ronald Richards',
    avatar: avatar3,
    place: 'Santa Ana, Illinois',
    figure: wallet,
  },
  {
    id: 4,
    type: 'villa',
    sort: 'popular',
    name: 'Roselands House',
    icon: icon1,
    currency: '$',
    price: '35.000.000',
    owner: 'Dianne Russell',
    avatar: avatar1,
    place: 'Manchester, Kentucky',
    figure: fire,
  },
  {
    id: 5,
    type: 'house',
    sort: 'new house',
    name: 'Woodlandside',
    icon: icon2,
    currency: '$',
    price: '20.000.000',
    owner: 'Robert Fox',
    avatar: avatar2,
    place: 'Dr. San Jose, South Dakota',
    figure: house,
  },
  {
    id: 6,
    type: 'apartment',
    sort: 'best deals',
    name: 'The Old Lighthouse',
    icon: icon3,
    currency: '$',
    price: '44.000.000',
    owner: 'Ronald Richards',
    avatar: avatar3,
    place: 'Santa Ana, Illinois',
    figure: wallet,
  },
];
