import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
    {
        degree: "Bachelor of Science in Information Technology",
        institution: "Naga College Foundation Inc.",
        period: "2025 - Present",
        description: "Focused on software development, web technologies, and database management. Gained hands-on experience in building applications and collaborating on projects.",
        achievements: [
            "Dean's List for Academic Excellence",
        ],
    },
];

export default function Education() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Education</h1>
                <p className="text-muted-foreground mt-1">
                    Academic background and formal training.
                </p>
            </div>

            <div className="space-y-6">
                {educationList.map((item, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                                        <CardDescription>{item.institution}</CardDescription>
                                    </div>
                                </div>
                                <span className="text-sm text-muted-foreground">{item.period}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">{item.description}</p>
                            <div>
                                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                                    <Award className="w-4 h-4 text-primary" />
                                    Key Highlights
                                </h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {item.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
    );
}