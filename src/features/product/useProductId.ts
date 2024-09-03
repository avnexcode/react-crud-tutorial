// import { useEffect, useState } from "react"
// import { Product } from "../../types"

// export const useProductId = (id: string | null) => {
//     const [product, setProduct] = useState<Product>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<Error | null>(null)
//     const [message, setMessage] = useState<string>("")
//     const [status, setStatus] = useState<string>("")
//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3005/products/${id}?key=aldypanteq`)
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch product')
//                 }
//                 const result = await response.json()
//                 setProduct(result.data)
//                 setStatus(result.status)
//                 setMessage(result.message)
//             } catch (err) {
//                 setError(err instanceof Error ? err : new Error('An unknown error occurred'))
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchProduct()
//     }, [id])
//     return { product, loading, error, status, message }
// }

// import { useEffect, useState } from "react"
// import { Product } from "../../types"
// import axiosInstance from "../../libs/axios"

// export const useProductId = (id: string | null) => {
//     const [product, setProduct] = useState<Product>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<Error | null>(null)
//     const [message, setMessage] = useState<string>("")
//     const [status, setStatus] = useState<string>("")
//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await axiosInstance.get(`/products/${id}`)
//                 setProduct(response.data.data)
//                 setStatus(response.data.status)
//                 setMessage(response.data.message)
//             } catch (err) {
//                 setError(err instanceof Error ? err : new Error('An unknown error occurred'))
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchProduct()
//     }, [id])
//     return { product, loading, error, status, message }
// }

import axiosInstance from "../../libs/axios"
import { useQuery } from "@tanstack/react-query"

export const useProductId = (id: string | null) => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/products/${id}`)
            return response.data.data
        }
    })
}