import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import AddEntry from "./Components/AddEntryForm";

function App() {
    const [entries, setEntries] = useState([
        { weight: 175, date: "2022-05-23" },
    ]);

    function addNewEntry(entry) {
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
    }

    return (
        <div>
            <DisplayEntries entries={entries} />
            <AddEntry addNewEntry={addNewEntry} />
        </div>
    );
}

export default App;
