import { useState, ChangeEvent, FormEvent } from "react";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { Product } from "../../../types";
import { useCreateProduct } from "../../../features/product";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";

export default function CreateProduct() {
  const [product, setProduct] = useState<Product>({ name: "", price: 0, category: "", description: "", image: "" });
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { createProduct, message } = useCreateProduct()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createProduct({ ...product, price: Number(product.price) })
    navigate('/product')
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
