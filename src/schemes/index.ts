import * as Yup from 'yup'
export const updateCategoryScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Minimal 3 karakter').max(16, 'Maksimal 16  karakter'),
    description: Yup.string().optional()
  })