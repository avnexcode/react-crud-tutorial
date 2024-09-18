import { updateCategoryScheme, UserScheme } from "../schemes";

export type Product = {
  id?: string;
  name: string;
  description: string;
  category_id?: string;
  image: string;
  price: number;
  category: Category
};

export type CreateResponse = {
  createCategory: (data: Category) => Promise<void>
  data: Category | null
  loading: boolean
  totalPage?: number
  error: Error | null
  message: string
  status: string
  onSuccess?: () => void
}

export type Category = {
  id?: string;
} & Yup.InferType<typeof updateCategoryScheme>;


type KONZ = {
  title: string
  descs: string
}



type KONZ2 = Omit<KONZ, 'title'>

type KONZ3 = Partial<KONZ>

export type User = z.infer<typeof UserScheme>

export type UserResponse = {
  mutate: (data: Partial<User>) => Promise<void>,
  data: User | null
  loading: boolean
  error: Error | null
  message: string
  status: string
  onSuccess: () => void
  onError: () => void
}

export type useUsersProps = {
  onSuccess: () => void,
  onError: () => void,
}
