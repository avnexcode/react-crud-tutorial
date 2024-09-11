import { Link } from "react-router-dom"
import { Category } from "../../types"

type CategoryCardProps = {
    category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link to={`/category/detail/${category.id}`} className="rounded overflow-hidden shadow-lg flex flex-col w-[400px]">
            <div ></div>
            <div className="relative w-[400px] h-[200px] overflow-hidden object-fit">
                <div >
                    {/* <img className="w-full"
                        src={product.image}
                        alt="Sunset in the mountains" /> */}
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </div>
                <div>
                    {/* <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        {product.category}
                    </div> */}
                </div>
            </div>
            <div className="px-6 py-4 mb-auto">
                <div
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{category.name}</div>
                <div className="text-gray-500 text-sm">
                    {category.description}
                </div>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                {/* <div className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">{product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                    })}</span>
                </div> */}

                <div className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span className="ml-1">Beli Sekarang</span>
                </div>
            </div>
        </Link>
    )
}
