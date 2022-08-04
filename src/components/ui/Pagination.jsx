import React from "react";


const Pagination = ({ previousPage, nextPage }) => {

    return (
        <div className="pagination">
            <button onClick={previousPage}>
                Previous
            </button>
            <button onClick={nextPage}>
                Next
            </button>
        </div>

    )
}

export default Pagination;