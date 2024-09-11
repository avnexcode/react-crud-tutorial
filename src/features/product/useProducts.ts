// useProducts.ts
// import { useState, useEffect } from 'react';
// import { Product } from '../../types';
// import axiosInstance from '../../libs/axios';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// interface UseProductsResult {
//     products: Product[];
//     isLoading: boolean;
//     error: string | null;
//     totalPages: number;
// }

// export const useProducts = (limit: number, page: number): UseProductsResult => {
//     const [state, setState] = useState<UseProductsResult>({
//         products: [],
//         isLoading: true,
//         error: null,
//         totalPages: 1,
//     });

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3005/api/v1/products?limit=${limit}&page=${page}`, {
//                     headers: {
//                         Authorization: 'Bearer secretme',
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const result = await response.json();
//                 setState({
//                     products: result.data.products,
//                     isLoading: false,
//                     error: null,
//                     totalPages: Math.ceil(result.data.total / limit),
//                 });
//             } catch (error) {
//                 setState(prev => ({
//                     ...prev,
//                     isLoading: false,
//                     error: error instanceof Error ? error.message : 'An error occurred',
//                 }));
//             }
//         };

//         fetchProducts();
//     }, [limit, page]);

//     return state;
// };

// export const useProducts = (limit: number, page: number): UseProductsResult => {
//     const [state, setState] = useState<UseProductsResult>({
//         products: [],
//         isLoading: true,
//         error: null,
//         totalPages: 1,
//     });

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axiosInstance.get('/products', {
//                     params: { limit, page }
//                 });

//                 setState({
//                     products: response.data.data.products,
//                     isLoading: false,
//                     error: null,
//                     totalPages: Math.ceil(response.data.data.total / limit),
//                 });
//             } catch (error) {
//                 setState(prev => ({
//                     ...prev,
//                     isLoading: false,
//                     error: axios.isAxiosError(error) 
//                         ? error.response?.data?.message || error.message
//                         : 'An error occurred',
//                 }));
//             }
//         };

//         fetchProducts();
//     }, [limit, page]);

//     return state;
// };

import axiosInstance from '../../libs/axios';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (limit?: number, page?: number) => {
    return useQuery({
        queryKey: ['products', limit, page],
        queryFn: async () => {
            const response = await axiosInstance.get('/products', {
                params: { limit, page }
            });
            return response.data.data;
        },
        select: (data) => ({
            products: data.products,
            totalPages: Math.ceil(data.total / limit!),
            total: data.total
        })
    });
};