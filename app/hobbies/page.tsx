import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Guitar, Camera, Clapperboard, Gamepad, Film } from "lucide-react";

const hobbies = [
    {
        title: "Music",
        icon: Music,
        description: "I enjoy listening to various genres of music, from classical to modern pop. Music has always been a source of inspiration and relaxation for me.",
    },
    {
        title: "Playing Guitar",
        icon: Guitar,
        description: "Playing the guitar is a way for me to unwind and express myself creatively. I love the feeling of strumming chords and playing my favorite songs.",
    },
    {
        title: "Photography",
        icon: Camera,
        description: "Capturing moments through photography allows me to express my creativity and see the world from different perspectives.",
    },
    {
        title: "Filming",
        icon: Clapperboard,
        description: "I enjoy creating videos, capturing scenes, and exploring visual storytelling through filming and video editing.",
    },
    {
        title: "Gaming",
        icon: Gamepad,
        description: "I enjoy playing video games, especially those that challenge my problem-solving skills and offer immersive experiences.",
    },
    {
        title: "Watching Movies & Series",
        icon: Film,
        description: "I enjoy watching movies & series from different genres and appreciating their storytelling, cinematography, and creativity.",
    },
];

export default function Hobbies() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
                <p className="text-muted-foreground mt-1">
                    Things I enjoy doing in my free time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((hobby) => {
                    const Icon = hobby.icon;
                    return (
                    <Card key={hobby.title} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-lg">{hobby.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{hobby.description}</p>
                        </CardContent>
                    </Card>
                    );
                })}
            </div>
        </div>
    );
}