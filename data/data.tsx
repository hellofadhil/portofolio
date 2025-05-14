import { LucideIcon, Home, Info, Folder, Github, Twitter, Linkedin } from "lucide-react";

export interface NavbarItem {
  href: string;
  label: string;
  icon: LucideIcon; // Tipe untuk ikon dari Lucide
}

export interface SocialItem {
  url: string;
  icon: LucideIcon;
  navbar: boolean;
}

export const DATA = {
  navbar: [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "#about",
      label: "About",
      icon: Info,
    },
    {
      href: "#projects",
      label: "Portfolio",
      icon: Folder,
    },
  ] as NavbarItem[],
  contact: {
    social: {
      github: {
        url: "https://github.com/hellofadhil",
        icon: Github,
        navbar: true,
      },
      twitter: {
        url: "https://twitter.com/username",
        icon: Twitter,
        navbar: false,
      },
      linkedin: {
        url: "https://linkedin.com/in/infofadhil",
        icon: Linkedin,
        navbar: true,
      },
    } as Record<string, SocialItem>,
  },
};
