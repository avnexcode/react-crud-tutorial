// import { useState } from "react"
// import { Product } from "../../types"

// export const useCreateProduct = () => {
//     const [product, setProduct] = useState<Product>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<Error | null>(null)
//     const [message, setMessage] = useState<string>("")
//     const [status, setStatus] = useState<string>("")
//     const createProduct = async (data: Omit<Product, 'id'>) => {
//         try {
//             const response = await fetch('http://localhost:3005/products?key=aldypanteq', {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const result = await response.json();
//             setStatus(result.status)
//             setProduct(result.data);
//             setMessage(result.message)
//         } catch (err) {
//             setError(err instanceof Error ? err : new Error('An unknown error occurred'))
//         } finally {
//             setLoading(false)
//         }
//     }
//     return useMemo(() => {{createProduct, product, loading, error, status, message}})
// }

// import { useState } from "react"
// import { Product } from "../../types"
// import axiosInstance from "../../libs/axios"
// export const useCreateProduct = () => {
//     const [product, setProduct] = useState<Product>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<Error | null>(null)
//     const [message, setMessage] = useState<string>("")
//     const [status, setStatus] = useState<string>("")
//     const createProduct = async (data: Omit<Product, 'id'>) => {
//         try {
//             const response = await axiosInstance.post('/products?key=aldypanteq', data);
//             setStatus(response.data.status)
//             setProduct(response.data.data);
//             setMessage(response.data.message)
//         } catch (err) {
//             setError(err instanceof Error ? err : new Error('An unknown error occurred'))
//         } finally {
//             setLoading(false)
//         }
//     }
//     return { createProduct, product, loading, error, status, message }
// }

import axiosInstance from "../../libs/axios"
import { useMutation } from "@tanstack/react-query"
import { Product } from "../../types"

export const useCreateProduct = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationFn: async (data: Omit<Product, 'category'>) => {
        const response = await axiosInstance.post('/products', data)
        return response
    },
    onSuccess,
    onError: (error) => {
        console.error("An error occurred while updating the product:", error)
    }
})
