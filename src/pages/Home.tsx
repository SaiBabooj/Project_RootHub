import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MessageSquare, Users, Award, TrendingUp } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Job Opportunities",
      description: "Browse exclusive job postings from alumni and connect with recruiters from top companies."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Events & Webinars",
      description: "Attend reunions, workshops, and networking events to stay connected with your alma mater."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Success Stories",
      description: "Get inspired by alumni achievements and share your own journey with the community."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Network & Connect",
      description: "Build meaningful connections with alumni across different batches and industries."
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "10K+", label: "Alumni Members" },
    { icon: <Briefcase className="h-8 w-8" />, value: "500+", label: "Job Postings" },
    { icon: <Calendar className="h-8 w-8" />, value: "100+", label: "Events Hosted" },
    { icon: <Award className="h-8 w-8" />, value: "50+", label: "Success Stories" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect. Grow. Succeed Together.
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join thousands of alumni building careers, sharing experiences, and creating opportunities for the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/stories">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Explore Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Stay Connected
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform brings together alumni and students in one vibrant community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reconnect?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our thriving community and unlock opportunities that shape your future
          </p>
          <Link to="/auth">
            <Button variant="secondary" size="lg">
              Join Now - It's Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
