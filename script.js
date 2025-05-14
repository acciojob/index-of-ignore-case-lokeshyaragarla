function indexOfIgnoreCase(str: string, subStr: string): number {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use built-in indexOf for efficient search
  return lowerStr.indexOf(lowerSubStr);
}

// ✅ Test cases
console.log(indexOfIgnoreCase("Hello World", "world")); // ➞ 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // ➞ 2
console.log(indexOfIgnoreCase("test", "aaa"));          // ➞ -1
console.log(indexOfIgnoreCase("", ""));                 // ➞ 0 (empty string is always found at index 0)
console.log(indexOfIgnoreCase("abc", ""));              // ➞ 0
console.log(indexOfIgnoreCase("", "a"));                // ➞ -1
