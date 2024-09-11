import { useNavigate, useParams } from "react-router-dom";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useCategoryId, useUpdateCategory } from "../../../features/category";
import { FormikProps, useFormik } from "formik";
import { useEffect } from "react";
import { Category } from "../../../types";
import { updateCategoryScheme } from "../../../schemes";

export default function UpdateCategory() {
    const { id } = useParams<{ id: string }>();
    const { data: category } = useCategoryId(id!)
    const navigate = useNavigate()
    const { mutate: updateCategory } = useUpdateCategory({
        onSuccess: () => {
            console.log('success update')
        }
    })
    const formik: FormikProps<Category> = useFormik<Category>({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: updateCategoryScheme,
        onSubmit: values => {
            updateCategory({ id, ...values })
            navigate('/category')
        }
    })
    useEffect(() => {
        if (category) {
            formik.setValues({
                name: category.name,
                description: category.description
            })
        }
    }, [id, category])
    return (
        <>
            <div>
                <h1 className="text-5xl">Update Category</h1>
            </div>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                        <InputGroup name="name" onChange={formik.handleChange} value={formik.values.name} />
                        {formik.errors.name && formik.touched.name ? (
                            <div className="text-red-500">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="mb-2">
                        <InputGroup name="description" onChange={formik.handleChange} value={formik.values.description} />
                        {formik.errors.description && formik.touched.description ? (
                            <div className="text-red-500">{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <div className="mb-2 flex justify-end">
                        <ButtonForm type="submit">Update</ButtonForm>
                    </div>
                </form>
            </div>
        </>
    )
}