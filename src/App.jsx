import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NoPage } from "./Pages/NoPage";
import { SiteUnderContruction } from "./Pages/SiteUnderContruction";
import { ProductsPage } from "./Pages/ProductsPage";
import axios from "axios";
import { FormProduct } from "./components/FormProduct";
axios.defaults.baseURL = "http://localhost:8085";

export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<SiteUnderContruction />} />

            <Route path="productos" element={<ProductsPage />}>
              {/* <Route path=":id" element={<FormProduct mode="edit" />} />
              <Route path="nuevo" element={<FormProduct mode="new"/>} /> */}
            </Route>

            <Route path="ventas" element={<SiteUnderContruction />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
