import React from "react";
import { gql, useQuery } from "@apollo/client";

import Branch from "../components/Branch";

const allBranches = gql`
{
    branches {
        name
        geographicExpanse
        languages
        imageUrl
    }
}
`

function Branches() {
    const { loading, error, data } = useQuery(allBranches);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return (
        <div className="branches">
            {
                data.branches.map((branch, i) => {
                    return (
                        <Branch key={i} data={branch} />
                    )
                })
            }
        </div>
    )
}

export default Branches;