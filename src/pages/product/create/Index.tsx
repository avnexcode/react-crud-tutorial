import { useNavigate } from "react-router-dom";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useCreateProduct, useProducts } from "../../../features/product";
import { FormikProps, useFormik } from "formik";
import { Product } from "../../../types";
import SelectGroup from "../../../components/fragments/SelectGroup";

type SelectOption = {
  id: string;
  name: string;
  description: string,
}

export default function CreateProduct() {
  const categories: SelectOption[] = [
    {
      id: '1',
      name: 'Makanan',
      description: ''
    },
    {
      id: '2',
      name: 'Minuman',
      description: ''
    },
  ]

  const { refetch: refetchProduct } = useProducts()

  const { mutate: createProduct, isPending: createProductPending } = useCreateProduct({
    onSuccess: () => {
      refetchProduct()
    }
  })
  const navigate = useNavigate()

  const formik: FormikProps<Product> = useFormik<Product>({
    initialValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
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
              name="category"
              options={categories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
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
