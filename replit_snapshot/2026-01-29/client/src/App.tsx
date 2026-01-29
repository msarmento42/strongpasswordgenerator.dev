import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdSenseWrapper } from "@/components/AdSenseWrapper";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Passphrases from "@/pages/Passphrases";
import StrengthCheckerPage from "@/pages/StrengthChecker";
import Guides from "@/pages/Guides";
import GuideStrongPasswords from "@/pages/guides/GuideStrongPasswords";
import GuidePasswordManagers from "@/pages/guides/GuidePasswordManagers";
import GuideUpgrading from "@/pages/guides/GuideUpgrading";
import GuideMFA from "@/pages/guides/GuideMFA";
import Faq from "@/pages/Faq";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/passphrases" component={Passphrases} />
      <Route path="/strength-checker" component={StrengthCheckerPage} />
      <Route path="/guides" component={Guides} />
      <Route path="/guides/strong-passwords-and-passphrases" component={GuideStrongPasswords} />
      <Route path="/guides/password-managers" component={GuidePasswordManagers} />
      <Route path="/guides/upgrading-old-passwords" component={GuideUpgrading} />
      <Route path="/guides/multi-factor-authentication" component={GuideMFA} />
      <Route path="/faq" component={Faq} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdSenseWrapper />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;