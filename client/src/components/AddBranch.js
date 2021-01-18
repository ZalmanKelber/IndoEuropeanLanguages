import React from "react";

const AddBranch = () => {
    const alertAdd = () => alert("Branch Added!");
    return (
        <div className="add-branch">
            <form onSubmit={alertAdd}>
                <label>Name</label>
                <input type="text" required />
                <label>Geographic Expanse</label>
                <input type="text" required />
                <label>Languages</label>
                <input type="text" placeholder="(Optional)" />
                <button type="submit">Add Branch</button>
            </form>
        </div>
    );
}

export default AddBranch;