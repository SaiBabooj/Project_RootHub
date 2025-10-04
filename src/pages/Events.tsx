import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Career Workshop 2025",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 234,
      description: "Join industry experts as they share insights on building successful tech careers, resume tips, and interview strategies.",
      speaker: "Sarah Williams '10, VP Engineering at TechGiant"
    },
    {
      id: 2,
      title: "Annual Alumni Reunion",
      date: "April 20, 2025",
      time: "2:00 PM - 10:00 PM",
      location: "University Campus",
      type: "Reunion",
      attendees: 456,
      description: "Reconnect with old friends, meet new alumni, and celebrate our shared memories. Food, games, and networking opportunities.",
      speaker: "Multiple Alumni Speakers"
    },
    {
      id: 3,
      title: "Entrepreneurship Webinar",
      date: "March 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Online",
      type: "Webinar",
      attendees: 189,
      description: "Learn from successful alumni entrepreneurs about starting and scaling businesses. Q&A session included.",
      speaker: "Mike Rodriguez '08, Founder of StartupXYZ"
    },
    {
      id: 4,
      title: "Networking Mixer",
      date: "April 5, 2025",
      time: "6:30 PM - 9:30 PM",
      location: "Downtown Hotel",
      type: "Networking",
      attendees: 123,
      description: "Casual networking event for alumni to connect, share experiences, and explore collaboration opportunities.",
      speaker: "Open Networking"
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-primary";
      case "Reunion": return "bg-secondary";
      case "Webinar": return "bg-accent";
      case "Networking": return "bg-primary-glow";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-muted-foreground text-lg">
              Join us for exclusive alumni events, workshops, and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="shadow-soft hover:shadow-elegant transition-all duration-200 hover:border-primary/30 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getEventColor(event.type)} text-white`}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-foreground/80 mb-4">{event.description}</p>
                  <div className="mt-auto space-y-3">
                    <div className="text-sm text-muted-foreground pt-3 border-t">
                      <span className="font-medium">Speaker:</span> {event.speaker}
                    </div>
                    <Button variant="hero" className="w-full">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
