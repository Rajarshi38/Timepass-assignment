import Arcade from "../assets/Timepass/icon-arcade.svg";
import Advanded from "../assets/Timepass/icon-advanced.svg";
import Pro from "../assets/Timepass/icon-pro.svg";

export const stepData = [
  {
    title: "Personal Info",
    subtitle: "Please provide your name, email, address and phone number",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks Ok before confirming",
  },
];

export const planDetails = [
  {
    id: crypto.randomUUID(),
    icon: Arcade,
    title: "Arcade",
    price: "$90/yr",
    yearly: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Advanded,
    title: "Advanced",
    price: "$120/yr",
    yearly: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Pro,
    title: "Pro",
    price: "$150/yr",
    yearly: "2 months free",
  },
];
