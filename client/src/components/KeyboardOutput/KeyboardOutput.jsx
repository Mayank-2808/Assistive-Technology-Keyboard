import React from "react";

import "./KeyboardOutput.css";

function KeyboardOutput({ value }) {
    return (
        <>
            <div className="keyboard-output">
                <textarea type="text" value={value}></textarea>
            </div>
        </>
    );
}

export default KeyboardOutput;
