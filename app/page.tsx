import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DockDemo from "@/components/bottom-bar";
import Projects from "@/components/project";
import { Hello } from "@/components/hello";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
// import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper";
import WorkExperience from "@/components/experience";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";

function App() {
  const list = [
    {
      title: "Web Programming",
      description:
        "Building modern web applications with the latest technologies.",
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
      { name: "Flask" },
      { name: "Prisma" },
      { name: "MongoDB" },
      { name: "Cloud Deployment" },
      { name: "Figma" },
      { name: "Problem Solving" },
      //   { name: "Interpersonal" },
      //   { name: "Communication" },
      { name: "Teamwork" },
    ],
  };

  return (
    <>
      <ScrollProgress className="top-[0px]" />
      <SidebarProvider>
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 px-4 py-10">
            <ScrollAnimationWrapper>
              <Hello />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <Card className="mx-auto w-full max-w-2xl rounded-xl p-3">
                <Badge className="mb-2">About Me</Badge>
                <p className="text-md text-muted-foreground">
                  Passionate about web development and digital innovation, I
                  enjoy learning and exploring new technologies to improve my
                  skills.
                </p>
                <br />
                <p className="text-md text-muted-foreground">
                  I focus on building scalable web applications, designing
                  RESTful APIs, and creating responsive user interfaces.
                  Additionally, I have experience in developing IoT solutions
                  integrated with AI
                </p>
              </Card>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <Card className="mx-auto w-full max-w-2xl rounded-xl p-3">
                <Badge className="mb-4">What I Do</Badge>
                <App />
              </Card>
            </ScrollAnimationWrapper>
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

          <div className="max-w-[700px] mx-auto px-4">
            <WorkExperience />
          </div>

          <div
            className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12"
            id="projects"
          >
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Project
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[700px] mx-auto p-3">
            <Projects />
          </div>

          {/* <ScrollAnimationWrapper>
                        <section className="py-20 bg-background/50 max-w-[700px] mx-auto">
                            <div className="container px-4">
                                <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
                                <div className="max-w-3xl mx-auto">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </section>
                    </ScrollAnimationWrapper> */}

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
                  <Link href="www.linkedin.com/in/infofadhil" className="text-blue-500 hover:underline">
                    with a direct question on linkedin
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
          <div className="mt-24"></div>

          <SmoothCursor />
          <DockDemo />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
