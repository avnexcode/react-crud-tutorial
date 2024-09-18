import * as Yup from 'yup'
import { z } from 'zod'
export const updateCategoryScheme = Yup.object().shape({
  name: Yup.string().min(3, 'Minimal 3 karakter').max(16, 'Maksimal 16  karakter'),
  description: Yup.string().optional()
})

export const UserScheme = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})