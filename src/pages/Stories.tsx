import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      author: "Sarah Johnson",
      batch: "Class of 2012",
      role: "Product Manager at Google",
      title: "From Campus to Silicon Valley",
      excerpt: "My journey from a curious student to leading product teams at one of the world's most innovative companies taught me that persistence and continuous learning are the keys to success.",
      fullStory: "After graduation, I started as a junior developer at a small startup. The skills I learned in college were just the foundation. Through mentorship from alumni and constant upskilling, I transitioned into product management. Today, I lead teams building products used by millions.",
      tags: ["Tech", "Career Growth", "Mentorship"]
    },
    {
      id: 2,
      author: "Michael Chen",
      batch: "Class of 2015",
      role: "Founder & CEO, StartupHub",
      title: "Building My Dream Startup",
      excerpt: "The entrepreneurial spirit I developed during college eventually led me to start my own company. Today, we're helping hundreds of startups succeed.",
      fullStory: "Starting a business was scary, but the network I built during my university years became my greatest asset. Alumni invested in my vision, joined as co-founders, and became my first customers. We've now raised Series B funding and have a team of 50.",
      tags: ["Entrepreneurship", "Success", "Innovation"]
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      batch: "Class of 2018",
      role: "UX Designer at Adobe",
      title: "Designing for Impact",
      excerpt: "Transitioning from engineering to design was challenging, but it aligned with my passion for creating beautiful user experiences.",
      fullStory: "I started as a software engineer but realized my true calling was in design. Through online courses and portfolio projects, I made the switch. Now I work on creative tools used by millions of designers worldwide, making their work easier and more enjoyable.",
      tags: ["Design", "Career Change", "Passion"]
    },
    {
      id: 4,
      author: "David Thompson",
      batch: "Class of 2010",
      role: "Data Science Director at Amazon",
      title: "The Power of Data",
      excerpt: "My fascination with data analytics during college evolved into a career leading AI and ML initiatives at a Fortune 500 company.",
      fullStory: "What started as a curiosity about statistics became a passion for extracting insights from data. I pursued a PhD, joined Amazon, and now lead teams building recommendation systems and predictive models that impact millions of customers daily.",
      tags: ["Data Science", "AI/ML", "Leadership"]
    },
    {
      id: 5,
      author: "Lisa Patel",
      batch: "Class of 2016",
      role: "Social Impact Consultant",
      title: "Making a Difference",
      excerpt: "I chose a path less traveled—using my skills to solve social problems and create meaningful change in underserved communities.",
      fullStory: "While my peers went into tech and finance, I joined a non-profit focusing on education technology for rural areas. The impact we've made—bringing quality education to 100,000+ students—is more rewarding than any corporate title could be.",
      tags: ["Social Impact", "Education", "Non-profit"]
    },
    {
      id: 6,
      author: "James Kumar",
      batch: "Class of 2014",
      role: "Investment Banker at Goldman Sachs",
      title: "Mastering Finance",
      excerpt: "The analytical skills and work ethic I developed in college prepared me for the demanding world of investment banking.",
      fullStory: "Banking wasn't my first choice, but a summer internship changed everything. The fast-paced environment, complex problem-solving, and global impact excited me. Through mentorship from alumni in finance, I navigated my way to one of the top firms.",
      tags: ["Finance", "Banking", "Career Path"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Success Stories</h1>
            <p className="text-muted-foreground text-lg">
              Get inspired by the incredible journeys of our alumni community
            </p>
          </div>

          <div className="space-y-6">
            {stories.map((story, index) => (
              <Card 
                key={story.id} 
                className="shadow-soft hover:shadow-elegant transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {story.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{story.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-medium text-foreground">{story.author}</div>
                        <div className="text-sm">{story.role}</div>
                        <div className="text-sm text-primary">{story.batch}</div>
                      </CardDescription>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-foreground/90">
                    "{story.excerpt}"
                  </blockquote>
                  <p className="text-foreground/80 mb-4">{story.fullStory}</p>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
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

export default Stories;
