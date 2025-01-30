const truncateText = (text, maxLength) => { 
	if (text.length <= maxLength) return text;
    
    let truncated = text.slice(0, maxLength);
    let lastSpace = truncated.lastIndexOf(" ");
    
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + "..." : truncated + "...";
}
export default truncateText;