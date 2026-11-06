
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
  GraduationCap,
  Gamepad2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "MySQL",
  "C++",
  "C",
  "Python",
  "Git",
];

export default function Home() {
  return (
    <div className="space-y-10 pb-16">
      <section className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden">

        <div className="relative space-y-7">

          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Welcome to my portfolio
          </div>

          <div className="space-y-3">
            <p className="text-lg font-medium text-muted-foreground">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Bench<span className="text-primary">.</span>
            </h1>

            <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl">
              Aspiring Software Developer
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I'm a BSIT student passionate about programming, web development,
            and technology. I enjoy turning ideas into functional digital
            experiences while continuously learning and improving my skills.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/about"
              className={buttonVariants({ size: "lg" }) + " transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"}
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className={buttonVariants({
              variant: "outline",
              size: "lg",
              }) + " transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"}
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-5 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Web Development
            </span>

            <span className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              Programming
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-6 py-10">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Explore More
          </h2>

          <p className="text-muted-foreground">
            Learn more about my academic background and personal interests.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/education"
            className="group flex items-center justify-between rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  My academic journey and background.
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </Link>

          <Link
            href="/hobbies"
            className="group flex items-center justify-between rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Gamepad2 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold">Hobbies & Interests</h3>
                <p className="text-sm text-muted-foreground">
                  Things I enjoy doing in my free time.
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </Link>

        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            My Technologies
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            Tools I Work With
          </h2>

          <p className="text-muted-foreground">
            Technologies and tools I'm learning and using in my projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border bg-card p-8 text-center sm:p-12">

        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative mx-auto max-w-xl space-y-5">
          <Sparkles className="mx-auto h-8 w-8 text-primary" />

          <h2 className="text-3xl font-bold tracking-tight">
            Let's Connect!
          </h2>

          <p className="leading-7 text-muted-foreground">
            Have a project idea, opportunity, or just want to talk about
            technology? Feel free to reach out.
          </p>

          <Link
            href="/contact"
            className={buttonVariants({ size: "lg" }) + " transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
