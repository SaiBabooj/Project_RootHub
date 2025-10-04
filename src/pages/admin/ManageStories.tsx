import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Story {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
}

const ManageStories = () => {
  const { toast } = useToast();
  const [stories, setStories] = useState<Story[]>([
    {
      id: "1",
      author: "Priya Sharma",
      title: "From Campus to Silicon Valley",
      content: "My journey after graduating from KL University has been incredible...",
      date: "2025-01-15",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStory, setCurrentStory] = useState<Partial<Story>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStory.id) {
      setStories(stories.map((s) => (s.id === currentStory.id ? currentStory as Story : s)));
      toast({ title: "Story updated successfully!" });
    } else {
      const newStory = {
        ...currentStory,
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
      } as Story;
      setStories([...stories, newStory]);
      toast({ title: "Story published successfully!" });
    }
    setCurrentStory({});
    setIsEditing(false);
  };

  const handleEdit = (story: Story) => {
    setCurrentStory(story);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    setStories(stories.filter((s) => s.id !== id));
    toast({ title: "Story deleted successfully!" });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Manage Stories</h1>
          <p className="text-muted-foreground mt-2">Share alumni success stories</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="shadow-elegant">
            <Plus className="h-5 w-5 mr-2" />
            New Story
          </Button>
        )}
      </div>

      {isEditing && (
        <Card className="shadow-elegant animate-scale-in">
          <CardHeader>
            <CardTitle>{currentStory.id ? "Edit Story" : "Publish New Story"}</CardTitle>
            <CardDescription>Share an inspiring alumni success story</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author Name</Label>
                <Input
                  id="author"
                  value={currentStory.author || ""}
                  onChange={(e) => setCurrentStory({ ...currentStory, author: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Story Title</Label>
                <Input
                  id="title"
                  value={currentStory.title || ""}
                  onChange={(e) => setCurrentStory({ ...currentStory, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Story Content</Label>
                <Textarea
                  id="content"
                  value={currentStory.content || ""}
                  onChange={(e) => setCurrentStory({ ...currentStory, content: e.target.value })}
                  rows={8}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" variant="hero">
                  {currentStory.id ? "Update Story" : "Publish Story"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCurrentStory({});
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
        {stories.map((story) => (
          <Card key={story.id} className="shadow-soft hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                  <CardDescription className="text-base">
                    By {story.author} • {new Date(story.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(story)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(story.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 line-clamp-3">{story.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageStories;
