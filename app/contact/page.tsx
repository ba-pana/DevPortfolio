import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Contact Me</h1>
                <p className="text-muted-foreground mt-1">
                    Have a question, collaboration idea, or project in mid? Reach out below!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground font-medium">Email</p>
                                <p className="text-sm font-semibold">bapana@gbox.ncf.edu.ph</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground font-medium">Phone</p>
                                <p className="text-sm font-semibold">+63 956 785 8978</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-xs text-muted-foreground font-medium">Address</p>
                                <p className="text-sm font-semibold">San Fernando, Camarines Sur</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>Fill out the form below and I'll get back to you as soon.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" placeholder="Project Inquiry / Hello" required />
                            </div>


                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" rows={4} placeholder="Your message here..." required />
                            </div>

                            <Button type="submit" className="w-full sm:w-auto">
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}