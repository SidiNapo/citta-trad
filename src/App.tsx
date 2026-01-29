import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ar from "./pages/Ar";
import Fr from "./pages/Fr";
import Services from "./pages/Services";
import SwornTranslation from "./pages/SwornTranslation";
import Apostille from "./pages/Apostille";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ar" element={<Ar />} />
          <Route path="/fr" element={<Fr />} />
          <Route path="/services" element={<Services />} />
          <Route path="/traduction-assermentee" element={<SwornTranslation />} />
          <Route path="/apostille" element={<Apostille />} />
          <Route path="/faq" element={<Faq />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
