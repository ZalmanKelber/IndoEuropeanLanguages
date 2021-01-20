import React from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_BRANCH = gql`
    mutation AddBranch($name: String!, $geographicExpanse: String!, $languages: String!, $imageUrl: String!){
        addBranch(name: $name, geographicExpanse: $geographicExpanse, languages: $languages, imageUrl: $imageUrl){
            name
            geographicExpanse
            languages
            imageUrl
        }
    }
`

function AddBranch() {
    const [state, setState] = React.useState({
        name: "", geographicExpanse: "", languages: "", imageUrl: ""
    });
    const [addBranch, { data, loading, mutationError }] = useMutation(ADD_BRANCH, {
        onError(err) {
            console.log(err);
            console.log(mutationError);
        }
    });
    const submitBranch = e => {
        e.preventDefault();
        const variables = {
            name: state.name,
            geographicExpanse: state.geographicExpanse,
            languages: state.languages,
            imageUrl: state.imageUrl
        }
        console.log(variables);
        addBranch({ variables });
        setState({
            name: "", geographicExpanse: "", languages: "", imageUrl: ""
        });
    }
    const updateValue = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    return (
        <div className="add-branch" id="add-branch">
            <form onSubmit={submitBranch}>
                <label>Name</label>
                <input name="name" type="text" required value={state.name} onChange={updateValue} />
                <label>Geographic Expanse</label>
                <input name="geographicExpanse" type="text" required value={state.geographicExpanse} onChange={updateValue}  />
                <br />
                <label>Languages</label>
                <input name="languages" type="text" required value={state.languages} onChange={updateValue}  />
                <label>Image URL</label>
                <input name="imageUrl" type="text" required value={state.imageUrl} onChange={updateValue}  />
                <button type="submit">Add Branch</button>
            </form>
        </div>
    );
}

export default AddBranch;