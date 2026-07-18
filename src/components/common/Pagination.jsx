export default function Pagination({ currentPage, lastPage, onPageChange }) {
  if (!lastPage || lastPage <= 1) {
    return null;
  }

  const pages = [];

  for (let page = 1; page <= lastPage; page++) {
    pages.push(page);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${currentPage === lastPage ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
