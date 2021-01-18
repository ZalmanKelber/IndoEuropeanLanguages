import React from "react";

const Branch = ({data}) => {
    return (
        <div className="card">
            <div className="container">
                <h2>{data.name}</h2>
                <h4>{data.geographicExpanse}</h4>
                <img alt="Branch" src={data.imageUrl} width="100%" height="auto" />
                {
                    data.languages.map((language, i) => {
                        return <h4 key={i}>{language}</h4>
                    })
                }
            </div>
        </div>
    );
}

export default Branch;