import { useNavigate, useSearchParams } from "react-router-dom";
import { useCategories } from "../../features/category"
import { Category } from "../../types";
import CategoryCard from "../../components/elements/CategoryCard";
import Pagination from "../../components/elements/Pagination";

export default function HomeCategory() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = 10;
    const navigate = useNavigate();

    const { data, loading, error, } = useCategories(limit, page);

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    if (data?.categories?.length === 0 && page !== 1) {
        navigate(-1);
        return null;
    }
    return (
        <div>
            <div className="mb-10">
                {/* <Hero /> */}
            </div>
            <div className="flex justify-center pb-10 font-semibold">
                <h1 className="text-5xl">Data CAtegory</h1>
            </div>
            <div className="flex gap-5 flex-wrap justify-around">
                {data?.categories && data?.categories.length > 0 ? (
                    data?.categories?.map((category: Category) => (
                        <CategoryCard category={category} key={category.id} />
                    ))
                ) : (
                    <h1 className="text-red-500 text-xl">No data?.categories? available</h1>
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
    )
}