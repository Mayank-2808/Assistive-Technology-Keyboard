import "./Keyboard.css";

import { useState } from "react";

const COLOR_MAP = {
    "q": { color: "red", width: 1 },
    "w": { color: "red", width: 1 },
    "e": { color: "red", width: 1 },
    "r": { color: "yellow", width: 1 },
    "t": { color: "yellow", width: 1 },
    "y": { color: "yellow", width: 1 },
    "u": { color: "yellow", width: 1 },
    "i": { color: "green", width: 1 },
    "o": { color: "green", width: 1 },
    "p": { color: "green", width: 1 },
    "a": { color: "red", width: 1 },
    "s": { color: "red", width: 1 },
    "d": { color: "red", width: 1 },
    "f": { color: "yellow", width: 1 },
    "g": { color: "yellow", width: 1 },
    "h": { color: "yellow", width: 1 },
    "j": { color: "green", width: 1 },
    "k": { color: "green", width: 1 },
    "l": { color: "green", width: 1 },
    "z": { color: "blue", width: 1 },
    "x": { color: "blue", width: 1 },
    "c": { color: "blue", width: 1 },
    "v": { color: "purple", width: 1 },
    "b": { color: "purple", width: 1 },
    "n": { color: "purple", width: 1 },
    "m": { color: "purple", width: 1 },
    ",": { color: "orange", width: 1 },
    ".": { color: "orange", width: 1 },
    ".?123": { color: "blue", width: 2 },
    "space": { color: "purple", width: 4 },
    "return": { color: "orange", width: 2 },
    "1": { color: "red", width: 1 },
    "2": { color: "red", width: 1 },
    "3": { color: "red", width: 1 },
    "4": { color: "yellow", width: 1 },
    "5": { color: "yellow", width: 1 },
    "6": { color: "yellow", width: 1 },
    "7": { color: "yellow", width: 1 },
    "8": { color: "green", width: 1 },
    "9": { color: "green", width: 1 },
    "0": { color: "green", width: 1 },
    "!": { color: "red", width: 1 },
    "@": { color: "red", width: 1 },
    "#": { color: "red", width: 1 },
    "$": { color: "yellow", width: 1 },
    "%": { color: "yellow", width: 1 },
    "^": { color: "yellow", width: 1 },
    "&": { color: "yellow", width: 1 },
    "*": { color: "green", width: 1 },
    "(": { color: "green", width: 1 },
    ")": { color: "green", width: 1 },
    "?": { color: "blue", width: 1 },
    "\\": { color: "blue", width: 1 },
    "/": { color: "blue", width: 1 },
    ";": { color: "purple", width: 1 },
    ":": { color: "purple", width: 1 },
    "'": { color: "purple", width: 1 },
    '"': { color: "purple", width: 1 },
    "<": { color: "orange", width: 1 },
    ">": { color: "orange", width: 1 },
    "abc": { color: "blue", width: 2 },
};

const ALPHA_KEYS = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m", ",", "."],
    [".?123", "space", "return"],
];

const NUM_KEYS = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
    ["?", "\\", "/", ";", ":", "'", '"', "<", ">"],
    ["abc", "space", "return"],
];

function Keyboard({ output, setOutput }) {
    const [currentKeyboard, setCurrentKeyboard] = useState(ALPHA_KEYS);

    function handleClick(value) {
        // TODO: enlarge each colored section when it's clicked
        if (value === "space") {
            setOutput(output + " ");
        } else if (value === "return") {
            setOutput(output + "\n");
        } else if (value === ".?123") {
            setCurrentKeyboard(NUM_KEYS);
        } else if (value === "abc") {
            setCurrentKeyboard(ALPHA_KEYS);
        } else {
            setOutput(output + value);
        }
    }

    return (
        <div className="keyboard-container">
            <div className="keyboard">
                {currentKeyboard.map((row, i) => (
                    <div className="row" key={i}>
                        {row.map((key, j) => (
                            <Key
                                key={j}
                                value={key}
                                color={COLOR_MAP[key].color}
                                width={COLOR_MAP[key].width}
                                onClick={(value) => handleClick(value)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Key({ value, color, width, onClick }) {
    let classes = ["key", "w-" + width, "key-color-" + color];
    classes = classes.join(" ");

    return (
        <button className={classes} onClick={() => onClick(value)}>
            {value}
        </button>
    );
}

export default Keyboard;
