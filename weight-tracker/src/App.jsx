import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import EntriesChartTracker from "./Components/EntriesChartTracker";
import AddEntryForm from "./Components/AddEntryForm";

function App() {
    const [entries, setEntries] = useState([
        { weight: 175, date: "2022-05-23" },
    ]);

    function addNewEntry(entry) {
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <DisplayEntries entries={entries} />
                    <AddEntryForm addNewEntry={addNewEntry} />
                </div>
                <div className="col-md-6">
                    <EntriesChartTracker entries={entries} />
                </div>
            </div>
        </div>
    );
}

export default App;
