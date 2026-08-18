import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Analytics from "./components/Analytics";
import ScrollToTop from "./components/ScrollToTop";

const Obrigado = lazy(() => import("./pages/Obrigado"));
const DireitoConsumidor = lazy(() => import("./pages/DireitoConsumidor"));
const ProdutoComDefeito = lazy(() => import("./pages/ProdutoComDefeito"));
const DireitoMedico = lazy(() => import("./pages/DireitoMedico"));
const DireitoBancario = lazy(() => import("./pages/DireitoBancario"));
const DireitoDigital = lazy(() => import("./pages/DireitoDigital"));
const SeparacaoExtrajudicial = lazy(() => import("./pages/SeparacaoExtrajudicial"));
const DivorcioJudicial = lazy(() => import("./pages/DivorcioJudicial"));
const ElaboracaoDeContratos = lazy(() => import("./pages/ElaboracaoDeContratos"));
const PoliticaDePrivacidade = lazy(() => import("./pages/PoliticaDePrivacidade"));
const NotFound = lazy(() => import("./pages/NotFound"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
