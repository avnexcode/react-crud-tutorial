import { useState, ChangeEvent, FormEvent } from "react";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { Product } from "../../../types";
// import { redirect } from "react-router-dom";

export default function CreateProduct() {
  const [product, setProduct] = useState<Product>({ name: "", price: 0, category: "", description: "", image: "" });

  const [message, setMessage] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProductData(product)
  };
  
  const createProductData = async (data: Product) => {
    try {
      const response = await fetch('http://localhost:3005/products?key=aldypanteq', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          price: Number(data.price)
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setMessage(result.message);
      setProduct({ name: "", price: 0, category: "", description: "", image: "" });
    } catch (error) {
      setMessage('An error occurred while creating the product.');
    }
  };

  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-5xl">Create Product AH KAWAI</h1>
      </div>
      {message ? <h1>{message}</h1> : null}
      <div className="">
        <form action="" className="w-full" onSubmit={submitHandler}>
          <div className="mb-2">
            <InputGroup name="name" onChange={handleChange} value={product.name} />
          </div>
          <div className="mb-2">
            <InputGroup name="price" onChange={handleChange} value={product.price} />
          </div>
          <div className="mb-2">
            <InputGroup name="category" onChange={handleChange} value={product.category} />
          </div>
          <div className="mb-2">
            <InputGroup name="description" onChange={handleChange} value={product.description} />
          </div>
          <div className="mb-2">
            <InputGroup name="image" onChange={handleChange} value={product.image} />
          </div>
          <div className="mb-2 flex justify-end">
            <ButtonForm type="submit">Create</ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
}
