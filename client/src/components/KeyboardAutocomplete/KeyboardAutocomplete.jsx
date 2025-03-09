import "./KeyboardAutocomplete.css";

function KeyboardAutocomplete({ suggestions, onSuggestionClick }) {
    // display only the first 5 suggestions
    suggestions = suggestions.slice(0, 5);

    return (
        <>
            <div className="autocomplete-container">
                <div className="keyboard-autocomplete">
                    {suggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            className="suggestion"
                            onClick={() => onSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default KeyboardAutocomplete;
