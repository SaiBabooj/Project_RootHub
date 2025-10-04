import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
}

const ManageJobs = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "Bangalore",
      description: "Looking for experienced developers",
      salary: "₹15-25 LPA",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState<Partial<Job>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentJob.id) {
      setJobs(jobs.map((j) => (j.id === currentJob.id ? currentJob as Job : j)));
      toast({ title: "Job updated successfully!" });
    } else {
      const newJob = { ...currentJob, id: Date.now().toString() } as Job;
      setJobs([...jobs, newJob]);
      toast({ title: "Job created successfully!" });
    }
    setCurrentJob({});
    setIsEditing(false);
  };

  const handleEdit = (job: Job) => {
    setCurrentJob(job);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    setJobs(jobs.filter((j) => j.id !== id));
    toast({ title: "Job deleted successfully!" });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Manage Jobs</h1>
          <p className="text-muted-foreground mt-2">Create and manage job postings</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="shadow-elegant">
            <Plus className="h-5 w-5 mr-2" />
            New Job
          </Button>
        )}
      </div>

      {isEditing && (
        <Card className="shadow-elegant animate-scale-in">
          <CardHeader>
            <CardTitle>{currentJob.id ? "Edit Job" : "Create New Job"}</CardTitle>
            <CardDescription>Fill in the job details below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={currentJob.title || ""}
                    onChange={(e) => setCurrentJob({ ...currentJob, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={currentJob.company || ""}
                    onChange={(e) => setCurrentJob({ ...currentJob, company: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={currentJob.location || ""}
                    onChange={(e) => setCurrentJob({ ...currentJob, location: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input
                    id="salary"
                    value={currentJob.salary || ""}
                    onChange={(e) => setCurrentJob({ ...currentJob, salary: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={currentJob.description || ""}
                  onChange={(e) => setCurrentJob({ ...currentJob, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" variant="hero">
                  {currentJob.id ? "Update Job" : "Create Job"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCurrentJob({});
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
        {jobs.map((job) => (
          <Card key={job.id} className="shadow-soft hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-base">
                    {job.company} • {job.location} • {job.salary}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(job)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(job.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageJobs;
