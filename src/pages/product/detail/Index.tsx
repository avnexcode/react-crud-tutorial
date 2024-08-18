import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { type Product } from "../../../types"
import Swal from "sweetalert2"

export default function DetailProduct() {
  const [product, setProduct] = useState<Product | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3005/products/${id}?key=aldypanteq`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const result = await response.json()
        setProduct(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchProduct()
  }, [id])

  const deleteHandler = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:3005/products/${id}?key=aldypanteq`, {
          method: "DELETE"
        })
        if (!response.ok) {
          throw new Error('Failed to delete product')
        }
        await Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        })
        navigate('/product')  // Redirect after successful deletion
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err instanceof Error ? err.message : 'An error occurred',
        icon: "error"
      })
    }
  }

  if (!product) return <div>No product found</div>

  return (
    <div>
      <Link to="/product">Kembali</Link>
      <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
        <button onClick={deleteHandler}>Delete Product</button>
      </div>
    </div>
  )
}