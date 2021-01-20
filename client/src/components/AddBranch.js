import React from "react";
import { gql, useQuery } from "@apollo/client";

const addBranch = gql`
    mutation AddBranch($name: String!, $geographicExpanse: String!, $languages: String!, $imageUrl: String){
        addBranch(naem: $name, geographicExpanse: $geographicExpanse, languages: $languages, imageUrl: $imageUrl){
            name
            geographicExpanse
            languages
            imageUrl
        }
    }
`

const submitBranch = e => {
    e.preventDefault();
}


class AddBranch extends React.Component {
    render() {
        return (
            <div className="add-branch" id="add-branch">
                <form onSubmit={submitBranch}>
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
}

export default AddBranch;