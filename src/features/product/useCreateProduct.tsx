import { useState } from "react"
import { Product } from "../../types"

export const useCreateProduct = () => {
    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [message, setMessage] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const createProduct = async (data: Omit<Product, 'id'>) => {
        try {
            const response = await fetch('http://localhost:3005/products?key=aldypanteq', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setStatus(result.status)
            setProduct(result.data);
            setMessage(result.message)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'))
        } finally {
            setLoading(false)
        }
    }
    return { createProduct, product, loading, error, status, message }
}
