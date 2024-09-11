import { useEffect, useState } from "react"
import { CreateResponse } from "../../types"
import axiosInstance from "../../libs/axios"

export const useCategoryId = (id: string) => {
    const [state, setState] = useState<Omit<CreateResponse, 'createCategory'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    })

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axiosInstance.get(`/categories/${id}`)
                setState({
                    data: response.data.data,
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status,
                })
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: err instanceof Error ? err : new Error('An unknown error occurred')
                }))
            }
        }
        fetchCategory()
    }, [id])

    return state
}