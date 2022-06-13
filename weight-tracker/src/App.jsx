import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";

function App() {
    const [entries, setEntries] = useState([
        { weight: 175, date: "11-23-2021" },
    ]);

    return (
        <div>
            <DisplayEntries entries={entries} />
        </div>
    );
}

export default App;
