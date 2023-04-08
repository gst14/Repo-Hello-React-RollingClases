import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NoPage } from "./Pages/NoPage";
import { ResumeSection } from "./Pages/ResumeSection";
import { TransferenciasSection } from "./Pages/TransferenciasSection";

export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<ResumeSection />} />
            <Route path="transferencias" element={<TransferenciasSection />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
