function indexOfIgnoreCase(str, subStr) {
    // Handle edge cases
    if (subStr === "") {
        return 0; // If subStr is empty, return 0
    }
    if (str === "" || subStr.length > str.length) {
        return -1; // If str is empty or subStr is longer than str, return -1
    }

    // Convert both strings to lower case for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Find the index of the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1
