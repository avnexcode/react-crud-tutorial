import { useFormik } from "formik";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useCreateCategory } from "../../../features/category";
import { useNavigate } from "react-router-dom";
// import * as Yup from 'yup'
import { string, z } from 'zod'
import { toFormikValidationSchema } from "zod-formik-adapter";
export default function CreateCategory() {
    const { createCategory } = useCreateCategory({
        onSuccess: () => {
            console.log('KONTOL')
        }
    })
    const navigate = useNavigate()

    // const CategorySchema = Yup.object().shape({
    //     name: Yup.string()
    //         .min(3, 'Minimal 3 Karakter')
    //         .max(16, 'Maksimal 16 Karakter')
    //         .required('Wajib di isi'),
    //     description: Yup.string()
    //         .optional(),
    // });

    const CategorySchema = z.object({
        name: string({ message: 'Wajib diisi' }).min(3, 'Minimal 3 karakter').max(16, 'Maksimal 16 karakter'),
        description: string().optional()
    })

    // type Category = Yup.InferType<typeof CategorySchema>
    type Category = z.infer<typeof CategorySchema>

    const formik = useFormik<Category>({
        initialValues: {
            name: "",
            description: ""
        },
        validationSchema: toFormikValidationSchema(CategorySchema),
        onSubmit: (values, { resetForm }) => {
            createCategory(values)
            resetForm()
            navigate('/category')
        }
    })

    return (
        <>
            <div className="flex w-full px-10 py-5 justify-center">
                <h1 className="text-5xl">Create Category</h1>
            </div>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                        <InputGroup name="name" onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name ? (
                            <div className="text-red-500">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="mb-2">
                        <InputGroup name="description" onChange={formik.handleChange} />
                        {formik.errors.description && formik.touched.description ? (
                            <div className="text-red-500">{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <div className="mb-2 flex justify-end">
                        <ButtonForm type="submit">Create</ButtonForm>
                    </div>
                </form>
            </div>
        </>
    )
}