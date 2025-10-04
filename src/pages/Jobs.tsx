import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ExternalLink } from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      postedBy: "John Smith '15",
      description: "Looking for experienced engineers to join our growing team. Work on cutting-edge technologies.",
      tags: ["React", "Node.js", "AWS"],
      postedDate: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupHub",
      location: "Remote",
      type: "Full-time",
      postedBy: "Sarah Johnson '12",
      description: "Lead product strategy and roadmap for our flagship SaaS platform.",
      tags: ["Product", "Strategy", "SaaS"],
      postedDate: "1 week ago"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "New York, NY",
      type: "Contract",
      postedBy: "Mike Chen '18",
      description: "Create beautiful and intuitive user experiences for mobile and web applications.",
      tags: ["UI/UX", "Figma", "Mobile"],
      postedDate: "3 days ago"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Co",
      location: "Boston, MA",
      type: "Full-time",
      postedBy: "Emily Davis '14",
      description: "Build ML models and derive insights from complex datasets to drive business decisions.",
      tags: ["Python", "ML", "Data"],
      postedDate: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "GrowthHub",
      location: "Austin, TX",
      type: "Full-time",
      postedBy: "David Wilson '16",
      description: "Lead marketing initiatives and grow our brand presence across multiple channels.",
      tags: ["Marketing", "Growth", "B2B"],
      postedDate: "1 week ago"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      postedBy: "Lisa Brown '13",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our microservices.",
      tags: ["AWS", "Kubernetes", "CI/CD"],
      postedDate: "4 days ago"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Job Opportunities</h1>
            <p className="text-muted-foreground text-lg">
              Exclusive opportunities posted by alumni for the community
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="shadow-soft hover:shadow-elegant transition-all duration-200 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base space-y-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium text-foreground">{job.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.postedDate}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Posted by <span className="font-medium text-primary">{job.postedBy}</span>
                    </div>
                    <Button variant="hero" size="sm">
                      Apply Now
                      <ExternalLink className="h-4 w-4 ml-2" />
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

export default Jobs;
