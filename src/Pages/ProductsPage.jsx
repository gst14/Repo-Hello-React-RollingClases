import React, { useState, useEffect } from "react";
import { TableProducts } from "../components/TableProducts";
import axios from "axios";
// import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";
import { FormProduct } from "../components/FormProduct";
export const ProductsPage = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("");
  const [currentProductId, setCurrentProductId] = useState(0);
  // const navigate = useNavigate();
  const getProducts = async () => {
    setIsLoading(true);
    const { data } = await axios.get("/productos");
    setproducts(data);
    setIsLoading(false);
    console.log("Get products");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pt-3 col-12">
      <h2>Productos</h2>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => setMode("new")}
      >
        Nuevo Producto
      </Button>
      <Button
        colorScheme="whiteAlpha"
        variant="solid"
        onClick={() => getProducts()}
      >
        <motion.div
          animate={{
            rotate: isLoading ? 720 : 0,
            scale: isLoading ? 1.2 : 1,
            transition: {
              duration: isLoading ? 1 : 0,
              repeat: isLoading ? Infinity : 0,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FaRedo color="teal" onClick={() => getProducts()} />
        </motion.div>
      </Button>
      <div className="row">
        <TableProducts productos={products} setMode={setMode} setCurrentProductId={setCurrentProductId}/>
        { mode!=="" && <FormProduct mode={mode} setMode={setMode} getProducts={getProducts} currentProductId={currentProductId}/>}
      </div>
    </div>
  );
};
