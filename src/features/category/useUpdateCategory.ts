import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../../libs/axios"
import { Category } from "../../types";

export const useUpdateCategory = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationKey: ['category'],
    mutationFn: async (data: Category) => {
        const response = await axiosInstance.put(`/categories/${data.id}`, data);
        return response.data.data
     },
     onSuccess
})
