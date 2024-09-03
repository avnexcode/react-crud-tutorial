import { useParams, Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useDeleteProduct, useProductId } from "../../../features/product"
import { useEffect } from "react"
export default function DetailProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: product } = useProductId(id!)

  const { mutate: deleteProduct, isError, error } = useDeleteProduct({
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
      navigate('/product');
    }
  });

  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "Error",
        text: error instanceof Error ? error.message : "An error occurred",
        icon: "error"
      });
    }
  }, [isError, error]);

  const deleteHandler = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      deleteProduct(id!);
    }
  };

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
        <Link to={`/product/update/${product.id}`}>Edit</Link>
      </div>
    </div>
  )
}