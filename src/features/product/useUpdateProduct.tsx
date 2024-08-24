import { useState } from "react"
import { Product } from "../../types"
export const useUpdateProduct = () => {
    const [product, setProduct] = useState<Product>()
    const [pending, setPending] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [message, setMessage] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const updateProduct = async (data: Product) => {
        try {
            const response = await fetch(`http://localhost:3005/products/${data.id}?key=aldypanteq`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setProduct(result.data)
            setStatus(result.status)
            setMessage(result.message)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'))
        } finally {
            setPending(false)
        }
    }
    return { updateProduct, product, pending, error, status, message }
}
