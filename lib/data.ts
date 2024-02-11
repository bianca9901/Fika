import bulle from "@/public/big-bulle.png";
import chockladboll from "@/public/chocklad-boll.png";

export const links = [
    {
      name: "Home",
      hash: "#home",
      icon: "mdi-light:home"
    },
    {
      name: "About us",
      hash: "#about-us",
      icon: "fluent:people-team-48-regular"
    },
    {
      name: "Menu",
      hash: "#menu",
      icon: "material-symbols-light:food-bank-outline"
    },
    {
      name: "Contact",
      hash: "#contact",
      icon: "material-symbols-light:contact-phone-outline-sharp"
    },
  ] as const;

  export const fika = [
    {
        id: 1,
        title: "Bulle",
        description: "Kanelbulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle
    },
    {
        id: 2,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll
    },
    {
        id: 3,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll
    },
    {
        id: 4,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll
    },
    {
        id: 5,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll
    },
    {
        id: 6,
        title: "Chocklad Boll",
        description: "Chockladboll",
        tags: ["Sweet", "Chocolate"],
        image: chockladboll
    },
    {
        id: 7,
        title: "Bulle",
        description: "Kanelbulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle
    },
    {
        id: 8,
        title: "Bulle",
        description: "Kanelbulle",
        tags: ["Sweet", "Cinnamon"],
        image: bulle
    }
] as const;
