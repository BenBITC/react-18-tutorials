import tour1Img from './images/tour-1.jpeg'
import tour2Img from './images/tour-2.jpeg'
import hongKongImg from './images/hongkong1.jpg'
import tour4Img from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', iconClass: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', iconClass: 'fab fa-twitter' },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    iconClass: 'fab fa-squarespace',
  },
]

export const serviceItems = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    body: 'Backroads tours offer xceptional value. Explore more and spend less compared to traditional mass tours, with all-inclusive pricing covering accommodation, meals, activities, and expert guiding.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    body: 'Lace up your boots and embark on unforgettable hikes tailored to all levels. Traverse breathtaking landscapes, discover hidden trails, and experience the beauty of nature up close.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    body: 'Relax and unwind after a day of adventure. Backroads tours feature comfortable accommodations, delicious meals, and thoughtful amenities, ensuring you return home feeling refreshed and rejuvenated.',
  },
]

export const featuredTours = [
  {
    id: 1,
    image: tour1Img,
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    body: 'Embark on a thrilling 6-day adventure through the majestic landscapes of Tibet. Hike through the Himalayas, explore ancient monasteries steeped in Buddhist history, and experience the unique culture of the Tibetan people.',
    country: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2Img,
    title: 'best of java',
    date: 'october 1st, 2020',
    body: 'Immerse yourself in the beauty and diversity of Indonesia on our 11-day Best of Java tour. Explore lush rainforests teeming with exotic wildlife, climb volcanic mountains offering breathtaking panoramas, and discover the rich cultural heritage of this island nation.',
    country: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    image: hongKongImg,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    body: "Discover the vibrant metropolis of Hong Kong and the natural beauty of its surrounding islands on this 8-day adventure. Explore bustling markets overflowing with local treasures, ride the Peak Tram for stunning city views, and hike the scenic Dragon's Back trail.",
    country: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4Img,
    title: 'kenya highlights',
    date: 'december 5th, 2019',
    body: 'Witness the awe-inspiring wildlife of Kenya on this unforgettable 20-day safari adventure. Spot lions, elephants, zebras, giraffes, and a myriad of other animals in their natural habitat, and experience the breathtaking beauty of the African savanna.',
    country: 'kenya',
    duration: 20,
    price: 3300,
  },
]
