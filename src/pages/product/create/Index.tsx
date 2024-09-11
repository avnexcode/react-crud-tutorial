import { useNavigate } from "react-router-dom";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useCreateProduct, useProducts } from "../../../features/product";
import { FormikProps, useFormik } from "formik";
import { Product } from "../../../types";
import SelectGroup from "../../../components/fragments/SelectGroup";
import { useCategories } from "../../../features/category";

export default function CreateProduct() {
  const { data: categories } = useCategories(10,1)
  const { refetch: refetchProduct } = useProducts()
  const { mutate: createProduct, isPending: createProductPending } = useCreateProduct({
    onSuccess: () => {
      refetchProduct()
    }
  })
  const navigate = useNavigate()
  const formik: FormikProps<Omit<Product, 'category'>> = useFormik<Omit<Product, 'category'>>({
    initialValues: {
      name: "",
      price: 0,
      category_id: "",
      description: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      createProduct({ ...values, price: Number(values.price) });
      resetForm();
      navigate('/product');
    },
  });

  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-5xl">Create Product AH KAWAI</h1>
      </div>
      <div className="">
        <form action="" className="w-full" onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <InputGroup name="name" onChange={formik.handleChange} value={formik.values.name} />
          </div>
          <div className="mb-2">
            <InputGroup name="price" onChange={formik.handleChange} value={formik.values.price} />
          </div>
          <div className="mb-2">
            <SelectGroup
              name="category_id"
              options={categories?.categories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category_id}
            />
            {/* <select name="" id="">
              {categories?.categories.map((item, index) => {
                return <option key={index} value="">{item.name}</option>
              })}
            </select> */}
            {formik.touched.category_id && formik.errors.category_id ? (
              <div>{formik.errors.category_id}</div>
            ) : null}
          </div>
          <div className="mb-2">
            <InputGroup name="description" onChange={formik.handleChange} value={formik.values.description} />
          </div>
          <div className="mb-2">
            <InputGroup name="image" onChange={formik.handleChange} value={formik.values.image} />
          </div>
          <div className="mb-2 flex justify-end">
            <ButtonForm type="submit">{createProductPending ? 'Loading' : 'Create'}</ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
}
