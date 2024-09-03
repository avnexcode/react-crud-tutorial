// import { useEffect, useState } from "react";
// import { Product } from "../../types";
// import { useProductId } from "./useProductId";

import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../../libs/axios"

// export const useDeleteProduct = (idO: string) => {
//     const [product, setProduct] = useState<Product>();
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null);
//     const [message, setMessage] = useState<string>("");
//     const [status, setStatus] = useState<string>("");

//     const { product: currentProduct } = useProductId(idO!)
//     useEffect(() => {
//         setProduct(currentProduct)
//     }, [currentProduct])

//     const deleteProduct = async (id: string) => {
//         try {
//             const response = await fetch(`http://localhost:3005/products/${id}?key=aldypanteq`, {
//                 method: 'delete'
//             });
//             const result = await response.json()
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             setMessage("Product deleted successfully.");
//             setStatus(result.status);
//             setProduct(result.data)
//         } catch (err) {
//             setError(err instanceof Error ? err : new Error("An unknown error occurred"));
//             setStatus('error');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { deleteProduct, product, loading, error, status, message };
// };

// import { useEffect, useState } from "react";
// import axiosInstance from "../../libs/axios";
// import { Product } from "../../types";
// import { useProductId } from "./useProductId";

// export const useDeleteProduct = (idO: string) => {
//     const [product, setProduct] = useState<Product>();
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null);
//     const [message, setMessage] = useState<string>("");
//     const [status, setStatus] = useState<string>("");

//     const { product: currentProduct } = useProductId(idO!)
//     useEffect(() => {
//         setProduct(currentProduct)
//     }, [currentProduct])

//     const deleteProduct = async (id: string) => {
//         try {
//             const response = await axiosInstance.delete(`/products/${id}`);
//             if (response.status === 200) {
//                 setMessage("Product deleted successfully.");
//                 setStatus("success");
//             } else {
//                 throw new Error("Failed to delete product.");
//             }
//         } catch (err) {
//             setError(err instanceof Error ? err : new Error("An unknown error occurred"));
//             setStatus("error");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { deleteProduct, product, loading, error, status, message };
// };

export const useDeleteProduct = ({ onSuccess }: { onSuccess: () => void }) => {
    return useMutation({
        mutationFn: async (id: string) => {
            const response = await axiosInstance.delete(`/products/${id}`)
            return response
        },
        onSuccess,
        onError: (error) => {
            console.log(error)
        }
    })
}