import { Route, Switch } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Courses from "@/pages/courses";
import Admissions from "@/pages/admissions";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import Login from "@/pages/login";
import StudentPortal from "@/pages/student-portal";
import ParentPortal from "@/pages/parent-portal";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={Courses} />
            <Route path="/admissions" component={Admissions} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/student-portal" component={StudentPortal} />
            <Route path="/parent-portal" component={ParentPortal} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </TooltipProvider>
  );
}

export default App;
