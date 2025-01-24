import { ResumeCard } from "./resume-card";
import BlurFade from "./ui/blur-fade";

const DATA = {
    work: [
        {
            company: "SMK TI Bazma",
            href: "https://smktibazma.sch.id/",
            badges: [],
            location: "Remote",
            title: "Junior Web Developer",
            logoUrl: "/work/smktibazma.png",
            start: "May 2023",
            end: "Present",
            description:
                "Designing, developing, and maintaining various internal applications that meet the school’s operational needs, such as student management systems.Managing server infrastructure, which includes tasks like installation, configuration, and continuous monitoring.",
        },
        {
            company: "Incode Club",
            badges: [],
            href: "https://shopify.com",
            location: "Remote",
            title: "Programming Mentor",
            logoUrl: "/shopify.svg",
            start: "December 2024",
            end: "Present",
            description:
                "Guiding and teaching students modern web technologies, with a focus on understanding basic concepts and their practical applications.",
        },
    ],
    education: [
        {
            school: "Buildspace",
            href: "https://buildspace.so",
            degree: "s3, s4, sf1, s5",
            logoUrl: "/buildspace.jpg",
            start: "2023",
            end: "2024",
        },
        {
            school: "University of Waterloo",
            href: "https://uwaterloo.ca",
            degree: "Bachelor's Degree of Computer Science (BCS)",
            logoUrl: "/waterloo.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "Wilfrid Laurier University",
            href: "https://wlu.ca",
            degree: "Bachelor's Degree of Business Administration (BBA)",
            logoUrl: "/laurier.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "International Baccalaureate",
            href: "https://ibo.org",
            degree: "IB Diploma",
            logoUrl: "/ib.png",
            start: "2012",
            end: "2016",
        },
    ],
} as const;

const BLUR_FADE_DELAY = 0.04;
export default function ExperienceWork() {
    return (
        <div className="flex min-h-0 flex-col gap-y-2">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
                <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                    <ResumeCard
                        key={work.company}
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                    />
                </BlurFade>
            ))}
        </div>
    )
}