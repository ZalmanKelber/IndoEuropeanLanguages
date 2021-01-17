import React from "react";

const Branch = ({data}) => {
    return (
        <div className="card">
            <div className="container">
                <h2>{data.name}</h2>
                <h4>{data.geographicExpanse}</h4>
                {
                    data.languages.map(language => {
                        return <h4>{language}</h4>
                    })
                }
            </div>
        </div>
    );
}

export default Branch;