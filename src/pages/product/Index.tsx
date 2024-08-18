import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { type Product } from "../../types";
import ProductCard from "../../components/elements/ProductCard";
import Pagination from "../../components/elements/Pagination";
import Hero from "../../components/elements/Hero";



export default function HomeProduct() {
  const [products, setProducts] = useState<Product[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3005/products?key=aldypanteq`)
        const result = await response.json()
        setProducts(result.data.products)
        if (!result.data) {
          navigate(-1)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [navigate])


  const renderElement = () => products?.map((product, index) => {
    return <ProductCard product={product} key={index} />
  })

  return (
    <div>
      <div className="mb-10">
        <Hero />
      </div>
      <div className="flex justify-center pb-10 font-semibold">
        <h1 className="text-5xl">Our Products</h1>
      </div>
      <div className="flex gap-5 flex-wrap justify-around">
        {products.length > 0 ? renderElement() : <h1 className="text-red-500 text-xl">Ih Kosong</h1>}
      </div>
      <div className="flex justify-center pt-10">
        <Pagination />
      </div>
    </div>
  )
}
