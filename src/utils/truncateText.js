/**
 * Truncates a given text to a specified maximum length, ensuring that words are not cut off in the middle.
 * If the text is truncated, an ellipsis ("...") is appended to the end.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} - The truncated text with an ellipsis if it was truncated, or the original text if it was not.
 */
const truncateText = (text, maxLength) => { 
	if (text.length <= maxLength) return text;
    
    let truncated = text.slice(0, maxLength);
    let lastSpace = truncated.lastIndexOf(" ");
    
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + "..." : truncated + "...";
}
export default truncateText;