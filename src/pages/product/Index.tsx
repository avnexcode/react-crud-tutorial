import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { type Product } from "../../types";
import ProductCard from "../../components/elements/ProductCard";
import Pagination from "../../components/elements/Pagination";
import Hero from "../../components/elements/Hero";

export default function HomeProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const [limit] = useState<number>(10)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`http://localhost:3005/products?key=aldypanteq&limit=${limit}&page=${page}`)
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const result = await response.json()
        if (!result.data) {
          navigate(-1)
          return
        }
        setProducts(result.data.products)
        setTotalPages(Math.ceil(result.data.total / limit))
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [navigate, limit, page])

  const renderElement = () => products?.map((product, index) => (
    <ProductCard product={product} key={product.id || index} />
  ))

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div className="mb-10">
        <Hero />
      </div>
      <div className="flex justify-center pb-10 font-semibold">
        <h1 className="text-5xl">Our Products</h1>
      </div>
      <div className="flex gap-5 flex-wrap justify-around">
        {products.length > 0 ? renderElement() : <h1 className="text-red-500 text-xl">No products available</h1>}
      </div>
      <div className="flex justify-center pt-10">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  )
}