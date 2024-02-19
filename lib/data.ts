import bulle from '../public/big-bulle.png';
import chockladboll from '../public/chocklad-boll.png';
import semla from '../public/semla.png'
import kladdkaka from '../public/kladdkaka.png'

export const links = [
    {
      name: "HOME",
      hash: "#home",
      icon: "mdi-light:home"
    },
    {
      name: "ABOUT US",
      hash: "#about-us",
      icon: "fluent:people-team-48-regular"
    },
    {
      name: "MENU",
      hash: "#menu",
      icon: "material-symbols-light:food-bank-outline"
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
        description: "Kanelbulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle,
        price: 29
    },
    {
        id: 2,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 3,
        title: "Semla",
        description: "Semla",
        tags: ["Sweet", "Cream"],
        image: semla,
        price: 29
    },
    {
        id: 4,
        title: "Kladdkaka",
        description: "Kladdkaka",
        tags: ["Sweet", "Chocolate"],
        image: kladdkaka,
        price: 29
    },
    {
        id: 5,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 6,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll,
        price: 29
    },
    {
        id: 7,
        title: "Kanel Bulle",
        description: "Kanelbulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle,
        price: 29
    },
    {
        id: 8,
        title: "Kanel Bulle",
        description: "Kanelbulle",
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