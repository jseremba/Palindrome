function isPalindrome(word) {
    let wordFormat = word
        .replace(/[^\w]/gi, "") // Replace all non-words characters
        .toLowerCase(); // Convert entire word to lower case

    let reversedWord = wordFormat
        .split('') // Make an array
        .reverse() // Reverse the array
        .join(''); // Convert to a string

    return wordFormat === reversedWord ? true : false;
}
