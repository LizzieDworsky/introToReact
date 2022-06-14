import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries";
import EntriesChartTracker from "./Components/EntriesChartTracker";
import AddEntryForm from "./Components/AddEntryForm";
import "./styles.css";

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
                <h3 style={{ margin: "1em" }}>
                    Weight
                    <small className="text-muted">Tracker</small>
                </h3>
                <div className="col-md-6">
                    <div className="border-box">
                        <DisplayEntries entries={entries} />
                    </div>
                    <div className="border-box">
                        <AddEntryForm addNewEntry={addNewEntry} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border-box">
                        <EntriesChartTracker entries={entries} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
