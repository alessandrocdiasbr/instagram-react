import React from "react";
import Suggestion from "./Suggestion";

export default function SuggestionsList({ suggestions }) {
    return (
        <ul>
            {suggestions.slice(0, 3).map((suggestion, index) => (
                <Suggestion key={index} suggestion={suggestion} />
            ))}
        </ul>
    );
}
