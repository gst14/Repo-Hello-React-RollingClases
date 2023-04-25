import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NoPage } from "./Pages/NoPage";
import { SiteUnderContruction } from "./Pages/SiteUnderContruction";
import { ProductsPage } from "./Pages/ProductsPage";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8085/api";
// repo-hello-express-rollingclases-production.up.railway.app/api

export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/" element={<HomePage/>}>
            <Route path="" element={<SiteUnderContruction/>} />
            <Route path="productos" element={<ProductsPage/>}/>
            <Route path="ventas" element={<SiteUnderContruction />} />
            <Route path="*" element={<SiteUnderContruction />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
