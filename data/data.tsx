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
      href: "/home",
      label: "Home",
      icon: Home,
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      icon: Folder,
    },
  ] as NavbarItem[],
  contact: {
    social: {
      github: {
        url: "https://github.com/username",
        icon: Github,
        navbar: true,
      },
      twitter: {
        url: "https://twitter.com/username",
        icon: Twitter,
        navbar: true,
      },
      linkedin: {
        url: "https://linkedin.com/in/username",
        icon: Linkedin,
        navbar: false,
      },
    } as Record<string, SocialItem>,
  },
};
