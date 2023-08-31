const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const FIRST_PAGE = 1;

  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center items-center gap-3 p-2">
      {currentPage >= 2 && (
        <li
          className="text-lg hover:bg-black/20 flex justify-center items-center rounded-md cursor-pointer sm:h-[30px] h-[20px] aspect-square"
          onClick={handleFirstPage}
        >
          <i className="bx bxs-chevrons-left"></i>
        </li>
      )}
      {currentPage >= 2 && (
        <li
          className="text-lg hover:bg-black/20 flex justify-center items-center rounded-md cursor-pointer sm:h-[30px] h-[20px] aspect-square"
          onClick={handlePreviusPage}
        >
          <i className="bx bxs-chevron-left"></i>
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          key={page}
          className={`h-[30px] flex justify-center items-center hover:bg-red-700 hover:text-white cursor-pointer text-center rounded-md aspect-square ${
            currentPage === page ? "text-white bg-red-500" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {" "}
          {page}{" "}
        </li>
      ))}
      <li
        className="text-lg hover:bg-black/20 flex justify-center items-center rounded-md cursor-pointer sm:h-[30px] h-[15px] aspect-square"
        onClick={handleNextPage}
      >
        <i className="bx bxs-chevron-right"></i>
      </li>
      <li
        className="text-lg hover:bg-black/20 flex justify-center items-center rounded-md cursor-pointer sm:h-[30px] h-[15px] aspect-square"
        onClick={handleLastPage}
      >
        <i className="bx bxs-chevrons-right"></i>
      </li>
    </ul>
  );
};
export default Pagination;
