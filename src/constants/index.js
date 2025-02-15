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
    price: {
      monthly: "$9/m",
      yearly: "$90/yr",
    },
    year_benefit: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Advanded,
    title: "Advanced",
    price: {
      monthly: "$12/m",
      yearly: "$120/yr",
    },
    year_benefit: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Pro,
    title: "Pro",
    price: {
      monthly: "$15/m",
      yearly: "$150/yr",
    },
    year_benefit: "2 months free",
  },
];

export const addOns = [
  {
    id: crypto.randomUUID(),
    type: "Online service",
    subtitle: "Access to multiplayer games",
    price: {
      monthly: "+$1/mo",
      yearly: "+$10/yr",
    },
  },
  {
    id: crypto.randomUUID(),
    type: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: {
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
  },
  {
    id: crypto.randomUUID(),
    type: "Customizable profile",
    subtitle: "Custom theme on your profile",
    price: {
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
  },
];
