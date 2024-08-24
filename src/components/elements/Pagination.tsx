import { Link, useLocation } from 'react-router-dom';

type PaginationProps = {
    page: number
    setPage: (page: number) => void
    totalPages: number
}

export default function Pagination({ page, setPage, totalPages }: PaginationProps) {
    const { pathname } = useLocation();

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
    const renderLink = (total: number) => {
        const links = []
        for (let i = 1; i <= total; i++) {
            links.push(i)
        }
        return links
    }

    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
                onClick={() => handlePageChange(page - 1)}
                to={`${pathname}?page=${page - 1}`}
                className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}>
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
            {renderLink(totalPages).map((item, index) => <Link
                key={index}
                to="#"
                aria-current="page"
                className={`relative z-10 inline-flex items-center ${item === page ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500' } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                {item}
            </Link>)}
            <Link
                onClick={() => handlePageChange(page + 1)}
                to={`${pathname}?page=${page + 1}`}
                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}>
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </nav>
    );
}