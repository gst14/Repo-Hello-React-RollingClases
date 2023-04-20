import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";

export const FormProduct = (props) => {
  const toast = useToast();
  const [formValues, setFormValues] = useState({
    _id: "",
    nombre: "",
    precio: 0,
    stock: 0,
  });

  const [product, setProduct] = useState({});
  useEffect(() => {
    if (props.mode === "edit") {
      const url = `/productos/${props.currentProductId}`;
      axios.get(url).then((response) => {
        setProduct(response.data);
        setFormValues({
          nombre: response.data.nombre,
          precio: response.data.precio,
          stock: response.data.stock,
        });
      });
    } else {
      setProduct({});
      setFormValues({
        nombre: "",
        precio: 0,
        stock: 0,
      });
    }
  }, [props.currentProductId, props.mode]);

  const saveProduct = async () => {
    try {
      if (props.mode === "edit") {
        const response = await axios.put(
          `/productos/${product._id}`,
          {...formValues}
        );
        if (response.status === 200) {
          await props.getProducts();
          toast({
            title: "Producto modificado",
            description: "El producto ha sido modificado correctamente",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setFormValues({
            nombre: "",
            precio: 0,
            stock: 0,
          });
          setProduct({});
          props.setMode("");
        }
      } 
      if(props.mode === "new"){
        const response = await axios.post("/productos", {...formValues});
        if (response.status === 201) {
          await props.getProducts();
          toast({
            title: "Nuevo producto",
            description: "El producto ha sido guardado correctamente",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setFormValues({
            nombre: "",
            precio: 0,
            stock: 0,
          });
          setProduct({});
          props.setMode("");
        }
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Error al guardar el producto",
        description: "El producto no ha sido guardado",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="pt-3 col-12 col-md-6">
      <h2>{props.mode === "edit" ? "Editar Producto" : "Nuevo Producto"}</h2>
      <form onSubmit={async(e) => {
        e.preventDefault()
        await saveProduct()
        }}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={formValues.nombre}
            onChange={(e) =>
              setFormValues({ ...formValues, nombre: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="precio"
            value={formValues.precio}
            onChange={(e) =>
              setFormValues({ ...formValues, precio: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            value={formValues.stock}
            onChange={(e) =>
              setFormValues({ ...formValues, stock: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-100 d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary w-auto"
          >
            <span>{props.mode === "edit" ? "Actualizar" : "Guardar"}</span>
            <FaSave />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.setMode("")}
          >
            <span>Cancelar</span>
          </button>
        </div>
      </form>
    </div>
  );
};
