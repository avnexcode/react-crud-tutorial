import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../libs/axios";

export const useDeleteCategory = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationKey: ['categories'],
    mutationFn: async (id: string) => {
        const response = await axiosInstance.delete(`/categories/${id}`)
        return response
    },
    onSuccess
})