import { Data } from "./type";

import Rectangle_3 from "../src/assets/Rectangle_3.png";
import Rectangle_4 from "../src/assets/Rectangle_4.png";
import Rectangle_5 from "../src/assets/Rectangle_5.png";

export const data: Data = {
  hero:{
    appType: "Food app",
    tagLine: "Why stay hungry when you can order from Bella Onojie",
    description: "Download the bella onoje’s food app now on",
    mainActionText: "Playstore",
    extraActionText: "App Store",
  },
  listStep: [
    {
      title: "Create an account",
      heading: "Create/login to an existing account to get started",
      description: "An account is created with your email and a desired password",
      img: Rectangle_3,
      alternate: false,
    },
    {
      title: "Explore while shopping",
      heading: "Shop for your favorites meal as e dey hot.",
      description: "Shop for your favorite meals or drinks and enjoy while doing it.",
      img: Rectangle_4,
      alternate: true,
    },
    {
      title: "Checkout",
      heading: "When you're done, check out and get it delivered.",
      description: "When you're done, check out and get it  delivered with ease.",
      img: Rectangle_5,
      alternate: false,
    }
  ],
  bottomLead: {
    actionText: "Download the app now.",
    description: "Available on your favourite store. Start your premium experience now.",
    mainActionText: "Playstore",
    extraActionText: "App Store",
  },
}