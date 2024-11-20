const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="px-4 py-2 border border-[2px] bg-primary01 text-white hover:bg-primary01/90 transition duration-300"
            >
              Previous Page
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border border-[2px] transition duration-300 ${
                currentPage === number
                  ? "bg-primary01 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 border border-[2px] bg-primary01 text-white hover:bg-primary01/90 transition duration-300"
            >
              Next Page
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
