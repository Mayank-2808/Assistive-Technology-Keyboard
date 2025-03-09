import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import KeyboardOutput from "./components/KeyboardOutput";
import KeyboardAutocomplete from "./components/KeyboardAutocomplete/KeyboardAutocomplete";

function App() {
    const [output, setOutput] = useState("Start typing...");

    // TODO: call flask api with the current output to get suggestions from the backend
    const suggestions = ["Hello", "World", "Tech", "Keyboard", "Autocomplete"];

    return (
        <div>
            <KeyboardOutput value={output} />
            <KeyboardAutocomplete
                suggestions={suggestions}
                onSuggestionClick={(suggestion) =>
                    setOutput(output + suggestion)
                }
            />
            <Keyboard output={output} setOutput={setOutput} />
        </div>
    );
}

export default App;
