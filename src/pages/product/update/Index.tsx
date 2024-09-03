import { useNavigate, useParams } from "react-router-dom";
import ButtonForm from "../../../components/elements/ButtonForm";
import InputGroup from "../../../components/fragments/InputGroup";
import { useEffect } from "react";
import { Product } from "../../../types";
import { useProductId, useUpdateProduct } from "../../../features/product";
import { FormikProps, useFormik } from "formik";
import SelectGroup from "../../../components/fragments/SelectGroup";

type SelectOption = {
  id: string;
  name: string;
  description: string,
}

export default function UpdateProduct() {
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
  const { id } = useParams()
  const { data: product } = useProductId(id!)
  const { mutate: updateProduct } = useUpdateProduct({
    onSuccess: () => {
      console.log('update success')
    },
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
    onSubmit: async (values, { resetForm }) => {
      await updateProduct({ ...values, price: Number(values.price) }, {
        onError: (error) => {
          console.log(`Something went wrong ${error}`)
        }
      });
      resetForm();
      navigate('/product');
    },
  });

  useEffect(() => {
    if (product) {
      formik.setValues({
        id,
        name: product?.name || '',
        price: product?.price || 0,
        category: product?.category || '',
        description: product?.description || '',
        image: product?.image || '',
      });
    }
  }, [id, product])

  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-5xl">Update Product AH KAWAI</h1>
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
            <ButtonForm type="submit">Update</ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
}
