import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DockDemo from "@/components/bottom-bar"
import Projects from "@/components/project"
import { Hello } from "@/components/hello"

import { ScrollProgress } from "@/components/ui/scroll-progress";
import BlurFade from "@/components/ui/blur-fade"
import ExperienceWork from "@/components/work"
import Link from "next/link"

function App() {
    const list = [
        {
            title: "Web Programming",
            description: "Building modern web applications with the latest technologies.",
        },
        {
            title: "Internet of Things",
            description: "Creating connected devices and smart solutions.",
        },
        {
            title: "Design",
            description: "Create modern UI, posters, and more design.",
        },
    ];

    return (
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {list.map((item, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}

const BLUR_FADE_DELAY = 0.04;


export default function Page() {
    const mySkills = {
        technical: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Express" },
            { name: "Postgres" },
            { name: "Node.js" },
            { name: "Sequelize.js" },
            { name: "Laravel 11" },
            { name: "MicroPython" },
            { name: "Cloud Deployment" },
            { name: "Figma" },
            { name: "Problem Solving" },
            { name: "Interpersonal" },
            { name: "Communication" },
            { name: "Teamwork" }
        ]
    }

    return (
        <>
            <ScrollProgress className="top-[0px]" />
            <SidebarProvider>
                {/* <AppSidebar /> */}

                <SidebarInset>
                    {/*  <header className="flex h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="line-clamp-1">
                                Portofolio Fadhil
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="ml-auto px-3">
                <NavActions />
            </div>
        </header> */}
                    <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                        <Hello />
                        <Card className="mx-auto w-full max-w-2xl rounded-xl p-3">
                            <Badge className="mb-2">About Me</Badge>
                            <p className="text-md text-muted-foreground">
                                As a vocational school student majoring in Network Information Systems & Applications,
                                I have high enthusiasm for web programming and digital innovation.
                            </p>
                            <br />
                            <p className="text-md text-muted-foreground">
                                I enjoy exploring new knowledge and continuously learning to hone my skills in this field.
                                My journey in technology was driven by a deep curiosity and enthusiasm for digital innovation.
                            </p>
                        </Card>

                        <Card className="mx-auto w-full max-w-2xl rounded-xl p-3">
                            <Badge className="mb-4">What I Do</Badge>
                            <App />

                        </Card>
                    </div>

                    <div className="max-w-[700px] mx-auto px-4">
                        <ExperienceWork />
                    </div>
                    <div className="flex min-h-0 flex-col gap-y-3 mx-auto h-24 w-full max-w-2xl  mb-10 px-4 mt-5 ">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <h2 className="text-xl font-bold">Skills</h2>
                        </BlurFade>
                        <div className="flex flex-wrap gap-1">
                            {mySkills.technical.map((skill, id) => (
                                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                    <Badge key={skill.name}>{skill.name}</Badge>
                                </BlurFade>
                            ))}
                        </div>
                    </div>



                    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 16}>
                            <div className="space-y-3">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Project
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Check out my latest work
                                </h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                                </p>
                            </div>
                        </BlurFade>
                    </div>


                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[700px] mx-auto p-3">
                        <Projects />
                    </div>

                    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 16}>
                            <div className="space-y-3">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Contact
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Get in Touch
                                </h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Want to chat? Just shoot me a dm{" "}
                                    <Link
                                        href=""
                                        className="text-blue-500 hover:underline"
                                    >
                                        with a direct question on twitter
                                    </Link>{" "}
                                    and I&apos;ll respond whenever I can. I will ignore all
                                    soliciting.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                    <div className="mt-24"></div>

                    <DockDemo />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
