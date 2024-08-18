import { Link } from "react-router-dom"
import { type Product } from "../../types"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/product/detail/${product.id}`} className="rounded overflow-hidden shadow-lg flex flex-col w-[400px]">
            <a href="#"></a>
            <div className="relative w-[400px] h-[200px] overflow-hidden object-fit"><a href="#">
                <img className="w-full"
                    src={product.image}
                    alt="Sunset in the mountains" />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        {product.category}
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{product.name}</a>
                <p className="text-gray-500 text-sm">
                    {product.description}
                </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">{product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                    })}</span>
                </a>

                <a href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span className="ml-1">Beli Sekarang</span>
                </a>
            </div>
        </Link>
    )
}
