import { ProjectCard } from "./card-project"
import { Icons } from "./icons"
import BlurFade from "./ui/blur-fade"

const DATA = [
    {
        title: "Big Data SISMAKO",
        href: "https://sismako.smktibazma.sch.id/",
        dates: "Juli 2023 - Present",
        active: true,
        description:
            "Big Data Sismako adalah sebuah platform berbasis web yang di kembangkan untuk mengelola, menganalisis, dan memvisualisasi- kan data dalam skala besar, khusus untuk kebutuhan aplikasi sekolah.",
        technologies: [
            "Laravel 11",
            "Bootstrap",
            "MySQL",
            "Teamwork",
            "Collaboration",
            "GitHub",
            "HTML5",
            "CSS3",
            "Javascript"
        ],
        links: [
            {
                type: "Website",
                href: "https://sismako.smktibazma.sch.id/",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "/projects/sismako.jpg",
        video:
        ""
    },
    {
        title: "MGMP TKJ Jawa Barat",
        href: "https://jabar.mgmptkj.org/",
        dates: "Jan 2025",
        active: true,
        description:
            "Platform web yang dirancang untuk mendukung kolaborasi dan komunikasi antar guru Teknik Komputer dan Jaringan (TKJ) di Jawa Barat, sekaligus menjadi pusat informasi dan kegiatan resmi MGMP TKJ Jawa Barat.",
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
            {
                type: "Source",
                href: "https://github.com/magicuidesign/magicui",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "/projects/mgmptkj.jpg",
        video: "",
    },
    {
        title: "Absensi RFID Smart",
        href: "#",
        dates: "Oct 2024",
        active: true,
        description:
            "Membangun API menggunakan Laravel 11 untuk mengintegrasikan sistem absensi berbasis RFID dengan perangkat IoT.",
        technologies: [
            "Laravel 11",
            "Internet of things",
            "Prisma",
            "Stripe",
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
    // {
    //     title: "Automatic Chat",
    //     href: "https://automatic.chat",
    //     dates: "April 2023 - March 2024",
    //     active: true,
    //     description:
    //         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //     technologies: [
    //         "Next.js",
    //         "Typescript",
    //         "PostgreSQL",
    //         "Prisma",
    //         "TailwindCSS",
    //         "Shadcn UI",
    //         "Magic UI",
    //         "Stripe",
    //         "Cloudflare Workers",
    //     ],
    //     links: [
    //         {
    //             type: "Website",
    //             href: "https://automatic.chat",
    //             icon: <Icons.globe className="size-3" />,
    //         },
    //     ],
    //     image: "https://k31kdl3eukazsfrf.public.blob.vercel-storage.com/Capture-LEHjbtA4YOFJT18PE7XzYYw0MXvLQ8.JPG",
    //     video:
    //     ""
    //         // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
]

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
    return (
        <>
            {DATA.map((project, id) => (
                <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
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
    )
}