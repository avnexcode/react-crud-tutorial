import { useNavigate, useParams } from "react-router-dom"
import { useCategoryId } from "../../../features/category"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Swal from "sweetalert2"
import { useDeleteCategory } from "../../../features/category/useDeleteCategory"

export default function DetailCategory() {
  const { id } = useParams()
  const { data: category } = useCategoryId(id!)
  const navigate = useNavigate()

  const { mutate: deleteCategory, isError, error } = useDeleteCategory({
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
      navigate('/category');
    }
  })

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
      deleteCategory(id!);
    }
  };

  if (!category) return <div>No category found</div>
  return (
    <div>
      <Link to="/category">Kembali</Link>
      <div>
        <h1>Name : {category.name}</h1>
        <p>category Description{category.description}</p>
        <button onClick={deleteHandler}>Delete category</button>
        <Link to={`/category/update/${category.id}`}>Edit</Link>
      </div>
    </div>
  )
}