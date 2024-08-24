import { useEffect, useState } from "react"
import { Product } from "../../types"

export const useDeleteProduct = (id: string) => {
    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [message, setMessage] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    useEffect(() => {
        try {
            setProduct({})
            setStatus("")
            setMessage("")
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'))
        } finally {
            setLoading(false)
        }
    }, [])
    return { product, loading, error, status, message }
}
