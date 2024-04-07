import React from "react";

const LimitDropdown = ({ limit, setLimit }) => {
    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    }

    return (
        <div className="bg-gray-200 flex justify-left items-center p-2 gap-2">
            <label htmlFor="limit">Show:</label>
            <select id="limit" value={limit} onChange={handleLimitChange} className="w-15">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}

export default LimitDropdown;
