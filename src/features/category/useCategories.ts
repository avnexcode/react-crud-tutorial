import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import { Category } from "../../types";

interface CategoryState {
    data: {
        categories: Category[];
        total: number;
        totalPages: number;
        page: number
    } | null;
    loading: boolean;
    error: Error | null;
    message: string;
    status: string;
}

export const useCategories = (limit?: number, page?: number): CategoryState => {
    const [state, setState] = useState<CategoryState>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: '',
    });

    useEffect(() => {
        const fetchCategory = async () => {
            setState(prev => ({ ...prev, loading: true }));
            try {
                const response = await axiosInstance.get(`/categories`, {
                    params: { 
                        limit: limit !== undefined ? limit : undefined, 
                        page: page !== undefined ? page : undefined 
                    }
                });
                const totalPages = limit ? Math.ceil(response.data.data.total / limit) : 1;
                setState({
                    data: { 
                        ...response.data.data, 
                        totalPages,
                        page: page || 1
                    },
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status,
                });
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: err instanceof Error ? err : new Error('An unknown error occurred')
                }));
            }
        };
        fetchCategory();
    }, [limit, page]);

    return state;
};