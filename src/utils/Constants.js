import { nanoid } from "nanoid";
import {
  iconOnline,
  iconBudgeting,
  iconOnboarding,
  iconApi,
} from "../assets/index.js";

export const navLinks = [
  { id: nanoid(), label: "Home", href: "#home" },
  { id: nanoid(), label: "About", href: "#about" },
  { id: nanoid(), label: "Contact", href: "#contact" },
  { id: nanoid(), label: "Blog", href: "#blog" },
  { id: nanoid(), label: "Careers", href: "#careers" },
];
export const aboutCards = [
  {
    id: nanoid(),
    icon: iconOnline,
    title: "online banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: nanoid(),
    icon: iconBudgeting,
    title: "simple budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: nanoid(),
    icon: iconOnboarding,
    title: "fast onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: nanoid(),
    icon: iconApi,
    title: "open api",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
