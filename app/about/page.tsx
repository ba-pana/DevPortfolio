import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
    "C & C++",
    "Python",
    "HTML & CSS",
    "React & Next.js",
    "Tailwind CSS",
    "Node.js & Express",
    "MySQL / Oracle",
    "Git & GitHub",
    "REST APIs & GraphQL",
    "Shadcn UI",
];

export default function About() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
                <p className="text-muted-foreground mt-1">
                    A bit about my background, pasion, and technical skillset.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Hi! I'm Bench, a Bachelor of Science in Information Technology (BSIT) student with a strong interest in programming, web development, and technology.
                    </p>
                    <p>
                        My interest in computers started from my curiosity about how software and applications work behind the scenes. As I continue my journey in IT, I enjoy learning new programming languages, exploring different technologies, and turning ideas into simple but functional projects.
                    </p>
                    <p>
                        I'm currently developing my skills in frontend and backend development, database management, and software development. I believe that every project and challenge is an opportunity to learn something new and improve as a developer.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 space-y-2">
                        {skills.map((skill) => (
                        <Badge
                            key={skill}
                            className="cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                        >
                            {skill}
                        </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}