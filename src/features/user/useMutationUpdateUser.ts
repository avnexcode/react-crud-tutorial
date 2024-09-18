import { useState } from "react"
import axiosInstance from "../../libs/axios"
import { type useUsersProps, type User, type UserResponse } from "../../types"
export const useMutationUpdateUser = ({ onSuccess, onError }: useUsersProps): UserResponse => {
    const [state, setState] = useState<Omit<UserResponse, 'mutate' | 'onSuccess' | 'onError'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    })
    const mutate = async (data: User) => {
        setState(prev => ({ ...prev, loading: true }))
        try {
            const response = await axiosInstance.put(`/users/${data.id}`, data)
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
    return { ...state, mutate, onSuccess, onError }
}