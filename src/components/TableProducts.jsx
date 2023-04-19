import React, { useEffect, useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const TableProducts = (props) => {
  const [productos, setProductos] = useState([]);
  // const navigate = useNavigate();
  const toast = useToast();
  const editProduct = (id) => {
    // navigate(`/productos/${id}`);
    props.setCurrentProductId(id);
    props.setMode("edit");
  };

  useEffect(() => {
    setProductos(props.productos);
  }, [props.productos]);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`/productos/${id}`);
      if (response.status === 200) {
        toast({
          title: "Producto eliminado",
          description: response.data.mensaje,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        const { data } = await axios.get("/productos");
        setProductos(data);
      }
    } catch (error) {
      toast({
        title: "Error al eliminar el producto",
        description: "El producto no ha sido eliminado",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div id="products" className="pt-3 col-12 col-md-6">
        <table className="border table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productos &&
              productos.map((producto) => (
                <tr key={producto._id}>
                  <th scope="row">{producto.nombre}</th>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={() => editProduct(producto._id)}
                    >
                      <FaPen />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteProduct(producto._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
