import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const ManageEvents = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Alumni Meet 2025",
      date: "2025-03-15",
      time: "10:00 AM",
      location: "Campus Auditorium",
      description: "Annual alumni gathering and networking event",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Event>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentEvent.id) {
      setEvents(events.map((ev) => (ev.id === currentEvent.id ? currentEvent as Event : ev)));
      toast({ title: "Event updated successfully!" });
    } else {
      const newEvent = { ...currentEvent, id: Date.now().toString() } as Event;
      setEvents([...events, newEvent]);
      toast({ title: "Event created successfully!" });
    }
    setCurrentEvent({});
    setIsEditing(false);
  };

  const handleEdit = (event: Event) => {
    setCurrentEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((ev) => ev.id !== id));
    toast({ title: "Event deleted successfully!" });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Manage Events</h1>
          <p className="text-muted-foreground mt-2">Create and manage alumni events</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="shadow-elegant">
            <Plus className="h-5 w-5 mr-2" />
            New Event
          </Button>
        )}
      </div>

      {isEditing && (
        <Card className="shadow-elegant animate-scale-in">
          <CardHeader>
            <CardTitle>{currentEvent.id ? "Edit Event" : "Create New Event"}</CardTitle>
            <CardDescription>Fill in the event details below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  value={currentEvent.title || ""}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={currentEvent.date || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    value={currentEvent.time || ""}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, time: e.target.value })}
                    placeholder="e.g., 10:00 AM"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={currentEvent.location || ""}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={currentEvent.description || ""}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" variant="hero">
                  {currentEvent.id ? "Update Event" : "Create Event"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCurrentEvent({});
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id} className="shadow-soft hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">
                    {new Date(event.date).toLocaleDateString()} • {event.time} • {event.location}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(event)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
