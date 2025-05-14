import { ProjectCard } from "./card-project";
import { Icons } from "./icons";
import BlurFade from "./ui/blur-fade";

const DATA = [
  {
    title: "Big Data SISMAKO",
    href: "https://sismako.smktibazma.sch.id/",
    dates: "Juli 2023 - Present",
    active: true,
    description:
      "Big Data Sismako is a web-based platform developed to manage, analyze, and visualize large-scale data, specifically designed to meet the needs of school applications.",
    // "Big Data Sismako adalah sebuah platform berbasis web yang di kembangkan untuk mengelola, menganalisis, dan memvisualisasi- kan data dalam skala besar, khusus untuk kebutuhan aplikasi sekolah.",
    technologies: [
      "Laravel 11",
      "Bootstrap",
      "MySQL",
      // "Teamwork",
      // "Collaboration",
      "GitHub",
      "HTML5",
      "CSS3",
      "Javascript",
    ],
    links: [
      {
        type: "Website",
        href: "https://sismako.smktibazma.sch.id/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/sismako.jpg",
    video: "",
  },
  {
    title: "MGMP TKJ Jawa Barat",
    href: "https://jabar.mgmptkj.org/",
    dates: "Jan 2025",
    active: true,
    description:
      "A web platform designed to support collaboration and communication among Computer and Network Engineering (TKJ) teachers in West Java, while also serving as the official information and activity hub for the MGMP TKJ West Java.",
    // "Platform web yang dirancang untuk mendukung kolaborasi dan komunikasi antar guru Teknik Komputer dan Jaringan (TKJ) di Jawa Barat, sekaligus menjadi pusat informasi dan kegiatan resmi MGMP TKJ Jawa Barat.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "TailwindCSS",
      "Next Api Routes",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://jabar.mgmptkj.org/",
        icon: <Icons.globe className="size-3" />,
      },
      //   {
      //     type: "Source",
      //     href: "https://github.com/magicuidesign/magicui",
      //     icon: <Icons.github className="size-3" />,
      //   },
    ],
    image: "/projects/mgmptkj.jpg",
    video: "",
  },
  {
    title: "Smart Home App",
    href: "https://home-fadhil.vercel.app/",
    dates: "Jan 2025",
    active: true,
    description:
      "Built a smart home platform with Next.js and Firebase for real-time device control, integrating IoT via MicroPython and MQTT to enhance household energy efficiency.",
    // "Platform web yang dirancang untuk mendukung kolaborasi dan komunikasi antar guru Teknik Komputer dan Jaringan (TKJ) di Jawa Barat, sekaligus menjadi pusat informasi dan kegiatan resmi MGMP TKJ Jawa Barat.",
    technologies: [
      "Next.js",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "MicroPython",
      "MQTT",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://home-fadhil.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/smart.jpg",
    video: "",
  },
   {
    title: "Slangtech - Class Management Platform",
    href: "https://home-fadhil.vercel.app/",
    dates: "Jan 2025",
    active: true,
    description:
      "Developed a classroom management system using Next.js, ASP.NET Core, and PostgreSQL, implementing Server-Side Rendering (SSR) for an enhanced user experience.",
    // "Platform web yang dirancang untuk mendukung kolaborasi dan komunikasi antar guru Teknik Komputer dan Jaringan (TKJ) di Jawa Barat, sekaligus menjadi pusat informasi dan kegiatan resmi MGMP TKJ Jawa Barat.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "TailwindCSS",
      "ASP.NET Core",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://slangtech.asia/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/slangtech.jpg",
    video: "",
  },
    {
    title: "Absensi RFID Smart",
    href: "#",
    dates: "Oct 2024",
    active: true,
    description:
      "Developing an API using Laravel 11 to integrate an RFID-based attendance system with IoT devices.",
    //   "Membangun API menggunakan Laravel 11 untuk mengintegrasikan sistem absensi berbasis RFID dengan perangkat IoT.",
    technologies: [
      "Laravel 11",
      "Internet of things",
      // "Prisma",
      // "Stripe",
    ],
    links: [
      // {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      // },
      // {
      //     type: "Source",
      //     href: "https://github.com/dillionverma/llm.report",
      //     icon: <Icons.github className="size-3" />,
      // },
    ],
    image: "/projects/systemrfid.png",
    video: "",
  },
];

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <>
      {DATA.map((project, id) => (
        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        </BlurFade>
      ))}
    </>
  );
}
