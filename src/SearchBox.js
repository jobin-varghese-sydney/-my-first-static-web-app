{/* <SearchBox
            totalCount={totalCount}
            pageCount={pageCount}
            queryString={queryString}

            onTotalChange={(myNumber) => {
            setPageCount(myNumber);
            }}
            onQueryChange={(myString) => {
            setQueryString(myString);
            }} */}


const SearchBox = ({
    totalCount, pageCount, queryString, onTotalChange, onQueryChange
}) => {

    return (
        <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
            <div className="d-flex align-items-center flex-grow-1">
                <label htmlFor="queryString" className="me-2 fw-bold text-secondary">
                    Search
                </label>
                <input id="queryString" className="form-control form-control-sm me-2"
                    type="text"
                    value={queryString}
                    onChange={(event) => { onQueryChange(event.target.value); }}
                />

            </div>
            <div>
                <b className="me-2 text-secondary">Total:</b>
                {totalCount}
            </div>

        </div>


    );



};

export default SearchBox;