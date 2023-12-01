import "./Pagination.css";

export default function Pagination({
  currentPage,
  handleNext,
  handlePrevious,
  handleGoChange,
  handleGoClick,
  goToPageValue,
  handleSubmit,
}) {
  return (
    <div className="pagination">
      <button onClick={handlePrevious}>Previous</button>
      <p>{currentPage}</p>
      <button onClick={handleNext}>Next</button>
      <div className="pagination-goto-page">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleGoChange} value={goToPageValue} />
          <button onClick={handleGoClick} type="submit">
            GO
          </button>
        </form>
      </div>
    </div>
  );
}
