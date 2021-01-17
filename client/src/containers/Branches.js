import React from "react";

import Branch from "../components/Branch";

export default class Branches extends React.Component {
    state = {
        branches: [
            { id: 1, name: "Germanic", geographicExpanse: "Northern Europe", languages: ["English", "German"] },
            { id: 2, name: "Italic", geographicExpanse: "Southern Europe", languages: ["Spanish", "French", "Italian"] },
            { id: 3, name: "Hellenic", geographicExpanse: "Greece", languages: ["Greek"] },
            { id: 4, name: "Albanian", geographicExpanse: "Albania", languages: ["Albanian"] },
            { id: 5, name: "Balto-Slavonic", geographicExpanse: "Eastern Europe and Siberia", languages: ["Russian", "Polish", "Lithuanian"] },
            { id: 6, name: "Armenian", geographicExpanse: "Armenia", languages: ["Armenian"] },
            { id: 7, name: "Indo-Iranian", geographicExpanse: "Middle East and South Asia", languages: ["Hindi", "Farsi", "Bengali", "Punjabi", "Kurdish"] },
            { id: 8, name: "Celtic", geographicExpanse: "Brittish Isles and France", languages: ["Breton", "Welsh", "Gaelic"] },
        ]
    }

    render() {
        return (
            <div className="branches">
                {
                    this.state.branches.map(branch => {
                        return (
                            <Branch key={branch.id} data={branch} />
                        )
                    })
                }
            </div>
        )
    }
}