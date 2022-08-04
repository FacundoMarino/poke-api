import React from "react";


const Pagination = ({ previousPage, nextPage }) => {

    return (
        <div className="pagination">
            <button className="btn" onClick={previousPage}>
                Previous
            </button>
            <button className="btn" onClick={nextPage}>
                Next
            </button>
        </div>

    )
}

export default Pagination;