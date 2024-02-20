import bulle from '../public/big-bulle.png';
import chockladboll from '../public/chocklad-boll.png';
import semla from '../public/semla.png'
import kladdkaka from '../public/kladdkaka.png'
import profileimage1 from '../public/profile1.png'
import profileimage2 from '../public/profile2.png'
import profileimage3 from '../public/profile3.png'
import profileimage4 from '../public/profile4.png'
import profileimage5 from '../public/profile5.png'
import profileimage6 from '../public/profile6.png'
import profileimage7 from '../public/profile7.png'

export const profileImages = [
  profileimage1,
  profileimage2,
  profileimage3,
  profileimage4,
  profileimage5,
  profileimage6,
  profileimage7
]

export const links = [
    {
      name: "HOME",
      hash: "#home",
      icon: "mdi-light:home"
    },
    {
      name: "MENU",
      hash: "#menu",
      icon: "material-symbols-light:food-bank-outline"
    },
    {
      name: "ABOUT US",
      hash: "#about-us",
      icon: "fluent:people-team-48-regular"
    },
    {
      name: "CONTACT",
      hash: "#contact",
      icon: "material-symbols-light:contact-phone-outline-sharp"
    },
  ] as const;

  export const fika = [
    {
        id: 1,
        title: "Kanel Bulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle,
        price: 29
    },
    {
        id: 2,
        title: "Chocklad Boll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 3,
        title: "Semla",
        tags: ["Sweet", "Cream"],
        image: semla,
        price: 29
    },
    {
        id: 4,
        title: "Kladdkaka",
        tags: ["Sweet", "Chocolate"],
        image: kladdkaka,
        price: 29
    },
    {
        id: 5,
        title: "Chocklad Boll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 6,
        title: "Chocklad Boll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 7,
        title: "Kanel Bulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle,
        price: 29
    },
    {
        id: 8,
        title: "Kanel Bulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle,
        price: 29
    }
] as const;

export const days = [
  { day: "Monday", time: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 8:00 PM" },
  { day: "Sunday", time: "10:00 AM - 6:00 PM" },
] as const 
