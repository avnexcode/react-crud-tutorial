import { useState } from "react"
import axiosInstance from "../../libs/axios"
import { type Category, type CreateResponse } from "../../types"

export const useCreateCategory = (): CreateResponse => {
    const [state, setState] = useState<Omit<CreateResponse, 'createCategory'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    })
    const createCategory = async (data: Category) => {
        setState(prev => ({ ...prev, loading: true, error: null }))
        try {
            const response = await axiosInstance.post(`/categories`, data)
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
    return {
        ...state,
        createCategory
    }
}