import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Briefcase, Calendar, Award, ExternalLink, Edit } from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    batch: "Class of 2018",
    role: "Alumni",
    profession: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    bio: "Passionate software engineer with 6+ years of experience in building scalable web applications. Love mentoring students and giving back to the community.",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB", "TypeScript"],
    achievements: [
      "Published 3 research papers",
      "Won Hackathon 2017",
      "Dean's List - 4 semesters"
    ],
    interests: ["Technology", "Mentorship", "Open Source", "Hiking"]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card className="shadow-elegant animate-fade-in">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary shadow-soft">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div>
                      <CardTitle className="text-3xl mb-1">{user.name}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="font-medium text-foreground">{user.profession}</div>
                        <div>{user.company}</div>
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {user.batch}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{user.bio}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {user.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Interests */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="border-primary/30">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Section */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your contributions to the alumni community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <div className="font-medium">Posted a job opening</div>
                  <div className="text-sm text-muted-foreground">Senior Engineer at Tech Innovations</div>
                </div>
                <span className="text-sm text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <div className="font-medium">Registered for an event</div>
                  <div className="text-sm text-muted-foreground">Tech Career Workshop 2025</div>
                </div>
                <span className="text-sm text-muted-foreground">1 week ago</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">Shared a success story</div>
                  <div className="text-sm text-muted-foreground">My Journey in Tech</div>
                </div>
                <span className="text-sm text-muted-foreground">2 weeks ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
