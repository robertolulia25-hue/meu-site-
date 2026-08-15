import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Obrigado from "./pages/Obrigado";
import DireitoConsumidor from "./pages/DireitoConsumidor";
import ProdutoComDefeito from "./pages/ProdutoComDefeito";
import DireitoMedico from "./pages/DireitoMedico";
import DireitoBancario from "./pages/DireitoBancario";
import DireitoDigital from "./pages/DireitoDigital";
import SeparacaoExtrajudicial from "./pages/SeparacaoExtrajudicial";
import DivorcioJudicial from "./pages/DivorcioJudicial";
import ElaboracaoDeContratos from "./pages/ElaboracaoDeContratos";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/direito-consumidor" element={<DireitoConsumidor />} />
          <Route path="/direito-consumidor/produto-com-defeito" element={<ProdutoComDefeito />} />
          <Route path="/direito-medico" element={<DireitoMedico />} />
          <Route path="/direito-bancario" element={<DireitoBancario />} />
          <Route path="/direito-digital" element={<DireitoDigital />} />
          <Route path="/separacao-extrajudicial" element={<SeparacaoExtrajudicial />} />
          <Route path="/divorcio-judicial" element={<DivorcioJudicial />} />
          <Route path="/separacao-judicial" element={<Navigate to="/divorcio-judicial" replace />} />
          <Route path="/elaboracao-de-contratos" element={<ElaboracaoDeContratos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
