import { useEffect, useState } from "react"
import axiosInstance from "../../libs/axios"
import { type useUsersProps, type UserResponse } from "../../types"

export const useQueryUserID = (id: string, { onSuccess, onError }: useUsersProps) => {
    const [state, setState] = useState<Omit<UserResponse, 'mutate' | 'onSuccess' | 'onError'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    })
    useEffect(() => {
        axiosInstance.get(`/users/${id}`).then(response =>
            setState({
                data: response.data.data,
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status,
            })
        ).catch(error =>
            setState(prev => ({
                ...prev,
                loading: false,
                error: error instanceof Error ? error : new Error('An unknown error occurred')
            }))
        )
    }, [id])
    return { ...state, onSuccess, onError }
}