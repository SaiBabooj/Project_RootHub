import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageStories from "./pages/admin/ManageStories";
import AdminProfile from "./pages/admin/AdminProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Student Portal Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Admin/Alumni Portal Routes */}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="jobs" element={<ManageJobs />} />
              <Route path="events" element={<ManageEvents />} />
              <Route path="stories" element={<ManageStories />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
