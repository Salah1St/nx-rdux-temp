import { Dispatch, SetStateAction } from "react";

interface PaginationProp {
  list: { address: string; total_carbon_footprint: number }[];
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ list, setCurrentPage, itemsPerPage, currentPage }: PaginationProp) {
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} className={`flex justify-center items-center w-7 h-8 rounded-md ${currentPage === i && "bg-blue-100"}`} onClick={() => goToPage(i)}>
          {i}
        </button>,
      );
    }
    return pageNumbers;
  };

  const totalPages = Math.ceil(list?.length / itemsPerPage);

  return (
    <div className="flex gap-5">
      <button onClick={prevPage} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPageNumbers()}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
