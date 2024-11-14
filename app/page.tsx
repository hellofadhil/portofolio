import { AppSidebar } from "@/components/ui/app-sidebar"
import { NavActions } from "@/components/ui/nav-actions"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


import {
    Card,
    // CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


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
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
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

export default function Page() {
    const mySkills = {
        technical: [
            { name: "React.js" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Express.js" },
            { name: "PostgreSQL" },
            { name: "Node.js" },
            { name: "Sequelize.js" },
            { name: "Javascript" },
            { name: "PHP" },
            { name: "Laravel 11" },
            { name: "MySQL" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "MicroPython" },
            { name: "Cloud Deployment" },
            { name: "Figma" },
            { name: "Canva" },
        ],
        soft: [
            { name: "Problem Solving" },
            { name: "Interpersonal" },
            { name: "Communication" },
            { name: "Teamwork" },
        ] 
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />
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
                </header>
                <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                    <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50 flex justify-between items-center p-3" >
                        <div>
                            <h1 className="text-xl font-semibold">Hi I&apos;m Fadhil Rabbani</h1>
                            <p className="text-sm text-muted-foreground">Web Developer with 2+ years of experience</p>
                        </div>
                        <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="Fadhil Rabbani" />
                                <AvatarFallback>FR</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50 p-3 ">
                        <div className="space-y-2">
                            <Badge>About Me</Badge>
                            <p className="text-md text-muted-foreground">
                                As a vocational school student majoring in Network Information Systems & Applications,
                                I have high enthusiasm for web programming and digital innovation.
                            </p>
                            <p className="text-md text-muted-foreground">
                                I enjoy exploring new knowledge and continuously learning to hone my skills in this field.
                                My journey in technology was driven by a deep curiosity and enthusiasm for digital innovation.
                            </p>
                        </div>
                        <div className="space-y-4 mt-5">
                            <Badge>What I Do?</Badge>
                            <App />
                        </div>
                        <div className="space-y-3 mt-5 text-green-500">
                            <h1 className="font-bold">Technical Skills</h1>
                            <div className="space-y-2 space-x-1">
                                {mySkills.technical.map((skill, index) => (
                                    <Badge variant="outline" key={index}>{skill.name}</Badge>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3 mt-5 text-green-500">
                            <h1 className="font-bold">Soft Skills</h1>
                            <div className="space-y-2 space-x-1 ">
                                {mySkills.soft.map((skill, index) => (
                                    <Badge variant="outline" key={index}>{skill.name}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
