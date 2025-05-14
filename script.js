function indexOfIgnoreCase(str: string, subStr: string): number {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use built-in indexOf for efficient search
  return lowerStr.indexOf(lowerSubStr);
}


