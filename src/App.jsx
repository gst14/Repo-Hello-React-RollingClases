import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NoPage } from "./Pages/NoPage";
import { SiteUnderContruction } from "./Pages/SiteUnderContruction";
import { ProductsPage } from "./Pages/ProductsPage";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import axios from "axios";
// import { useEffect } from "react";
axios.defaults.baseURL = process.env.REACT_API_URL || "https://repo-hello-express-rollingclases-production.up.railway.app/api";

export function App() {
  // const [user, setUser] = useState(null); // {id: 1, name: "Juan", email: "juan@juan", role: "admin"}
  
  // useEffect(() => {
  //   axios.get("/auth/me").then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);
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
            {/* <Route path="admin" element={ user.role === "admin" && <AdminPage /> : <SiteUnderContruction/>} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
