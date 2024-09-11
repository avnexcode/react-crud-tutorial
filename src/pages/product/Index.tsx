import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../features/product';
import ProductCard from '../../components/elements/ProductCard';
import Pagination from '../../components/elements/Pagination';
// import Hero from '../../components/elements/Hero';
import { Product } from '../../types';

const HomeProduct: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = 10;
  const navigate = useNavigate();

  const { data, isLoading, error } = useProducts(limit, page);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  // Navigasi ke halaman sebelumnya jika tidak ada produk
  if (data?.products.length === 0 && page !== 1) {
    navigate(-1);
    return null;
  }

  return (
    <div>
      <div className="mb-10">
        {/* <Hero /> */}
      </div>
      <div className="flex justify-center pb-10 font-semibold">
        <h1 className="text-5xl">Our Products</h1>
      </div>
      <div className="flex gap-5 flex-wrap justify-around">
        {data?.products.length > 0 ? (
          data?.products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h1 className="text-red-500 text-xl">No products available</h1>
        )}
      </div>
      <div className="flex justify-center pt-10">
        <Pagination
          page={page}
          setPage={handlePageChange}
          totalPages={data?.totalPages || 1}
        />
      </div>
    </div>
  );
};

export default HomeProduct;