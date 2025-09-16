import { nanoid } from "nanoid";
import {
  iconOnline,
  iconBudgeting,
  iconOnboarding,
  iconApi,
  imgCurrency,
  imgRestaurant,
  imgPlane,
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
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

export const articleCards = [
  {
    id: nanoid(),
    img: imgCurrency,
    author: "Claire Robinson",
    topic: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: nanoid(),
    img: imgRestaurant,
    author: "Wilson Hutton",
    topic: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: nanoid(),
    img: imgPlane,
    author: "Wilson Hutton",
    topic: "Take your Digitalbank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ...",
  },
  {
    id: nanoid(),
    img: imgCurrency,
    author: "Claire Robinson",
    topic: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ...",
  },
];

export const socialIcons = [
  { id: nanoid(), icon: iconFacebook, alt: "facebook" },
  { id: nanoid(), icon: iconYoutube, alt: "youtube" },
  { id: nanoid(), icon: iconTwitter, alt: "twitter" },
  { id: nanoid(), icon: iconPinterest, alt: "pinterest" },
  { id: nanoid(), icon: iconInstagram, alt: "instagram" },
];

export const footerLinks = [
  { id: nanoid(), label: "about us" },
  { id: nanoid(), label: "contact" },
  { id: nanoid(), label: "blog" },
  { id: nanoid(), label: "careers" },
  { id: nanoid(), label: "support" },
  { id: nanoid(), label: "privacy policy" },
];
