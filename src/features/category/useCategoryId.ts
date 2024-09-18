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
        axiosInstance.get(`/categories/${id}`).then(response => setState({
            data: response.data.data,
            loading: false,
            error: null,
            message: response.data.message,
            status: response.data.status,
        })).catch(error => setState(prev => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error : new Error('An unknown error occurred')
        })))
    }, [id])

    return state
}