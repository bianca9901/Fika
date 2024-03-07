/**
 * data contains various data used in the application, including:
 *
 * - Profile data for displaying the staffs testimonials with corresponding images.
 * - Navigation links with their names, paths, and icons.
 * - Fika items (Swedish pastries) with their titles, tags, images, and prices.
 * - Opening hours for each day of the week.
 */

import bulle from "../public/bulle.png";
import chokladboll from "../public/choklad-boll.png";
import semla from "../public/semla.png";
import kladdkaka from "../public/kladdkaka.png";
import profileimage1 from "../public/profile1.png";
import profileimage2 from "../public/profile2.png";
import profileimage3 from "../public/profile3.png";
import profileimage4 from "../public/profile4.png";
import profileimage5 from "../public/profile5.png";
import profileimage6 from "../public/profile6.png";
import profileimage7 from "../public/profile7.png";

export const profileData = [
  {
    image: profileimage1,
    text: "I love working here because of the friendly environment and delicious coffee!😄",
  },
  {
    image: profileimage2,
    text: "The teamwork and camaraderie among coworkers make every day enjoyable😍",
  },
  {
    image: profileimage3,
    text: "Working here allows me to meet people from all over the world wanting to try fika🌎",
  },
  {
    image: profileimage4,
    text: "I love how Swedish culture is embraced here!🌈",
  },
  {
    image: profileimage5,
    text: "I enjoy interacting with customers and creating memorable experiences for them!",
  },
  {
    image: profileimage6,
    text: "The opportunity to learn and grow keeps me motivated every day👩🏾‍🍳",
  },
  {
    image: profileimage7,
    text: "The cozy atmosphere here makes it feel like home🤭",
  },
];

export const links = [
  {
    name: "HOME",
    path: "/",
    icon: "mdi-light:home",
  },
  {
    name: "MENU",
    path: "/#menu",
    icon: "material-symbols-light:food-bank-outline",
  },
  {
    name: "ABOUT US",
    path: "/#about-us",
    icon: "fluent:people-team-48-regular",
  },
  {
    name: "CONTACT",
    path: "/#contact",
    icon: "material-symbols-light:contact-phone-outline-sharp",
  },
] as const;

export const fika = [
  {
    id: 1,
    title: "Kanel Bulle",
    tags: ["Sweet", "Cinnamon"],
    image: bulle,
    price: 29,
  },
  {
    id: 2,
    title: "Choklad Boll",
    tags: ["Sweet", "Chocolate"],
    image: chokladboll,
    price: 29,
  },
  {
    id: 3,
    title: "Semla",
    tags: ["Sweet", "Cream"],
    image: semla,
    price: 29,
  },
  {
    id: 4,
    title: "Kladdkaka",
    tags: ["Sweet", "Chocolate"],
    image: kladdkaka,
    price: 29,
  },
  {
    id: 5,
    title: "Chocklad Boll",
    tags: ["Sweet", "Chocolate"],
    image: chokladboll,
    price: 29,
  },
  {
    id: 6,
    title: "Chocklad Boll",
    tags: ["Sweet", "Chocolate"],
    image: chokladboll,
    price: 29,
  },
  {
    id: 7,
    title: "Kanel Bulle",
    tags: ["Sweet", "Cinnamon"],
    image: bulle,
    price: 29,
  },
  {
    id: 8,
    title: "Kanel Bulle",
    tags: ["Sweet", "Cinnamon"],
    image: bulle,
    price: 29,
  },
] as const;

export const days = [
  { day: "Monday", time: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 8:00 PM" },
  { day: "Sunday", time: "10:00 AM - 6:00 PM" },
] as const;
