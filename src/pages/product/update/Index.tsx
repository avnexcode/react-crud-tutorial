import { useNavigate, useParams } from "react-router-dom";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useEffect, useState } from "react";
import { Product } from "../../../types";
import { useProductId, useUpdateProduct } from "../../../features/product";

export default function UpdateProduct() {
  const { id } = useParams()
  const { product } = useProductId(id)
  const [updateProductData, setUpdateProductData] = useState<Product>({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (product) {
      setUpdateProductData(product)
    }
  }, [product])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUpdateProductData((prev) => ({
      ...prev,
      [name]: value
    }
    ))
  }

  const { updateProduct } = useUpdateProduct()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateProduct({ ...updateProductData, price: Number(updateProductData.price) })
    navigate('/product')
  }

  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-5xl">Update Product AH KAWAI</h1>
      </div>
      <div className="">
        <form action="" className="w-full" onSubmit={submitHandler}>
          <div className="mb-2">
            <InputGroup name="name" onChange={handleChange} value={updateProductData.name} />
          </div>
          <div className="mb-2">
            <InputGroup name="price" onChange={handleChange} value={updateProductData.price} />
          </div>
          <div className="mb-2">
            <InputGroup name="category" onChange={handleChange} value={updateProductData.category} />
          </div>
          <div className="mb-2">
            <InputGroup name="description" onChange={handleChange} value={updateProductData.description} />
          </div>
          <div className="mb-2">
            <InputGroup name="image" onChange={handleChange} value={updateProductData.image} />
          </div>
          <div className="mb-2 flex justify-end">
            <ButtonForm type="submit">Update</ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
}
