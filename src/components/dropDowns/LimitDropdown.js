import React from "react";

const LimitDropdown = ({ limit, setLimit }) => {
    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    }

    return (
        <div>
            <label htmlFor="limit">Show:</label>
            <select id="limit" value={limit} onChange={handleLimitChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}

export default LimitDropdown;
