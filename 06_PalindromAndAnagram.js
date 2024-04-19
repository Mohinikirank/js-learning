function isPalindrome(word){
    const arrayChars = word.split("");
    arrayChars.reverse();
    const reverseWord = arrayChars.join("");
    const result = reverseWord==word;
    return result;
}
var result = isPalindrome("madam");
console.log(`is word 'madam' palindrome : ${result}`);

var result = isPalindrome("dad");
console.log(`is word 'dad' palindrome : ${result}`);

var result = isPalindrome("hello");
console.log(`is word 'hello' palindrome : ${result}`);

console.log(`===============================================================================`);

const isAnagram = (firstWord, secondWord ) =>{
    const firstSortedWord = firstWord.split("").sort().join("");
    const secondSortedWord = secondWord.split("").sort().join("");
    return firstSortedWord == secondSortedWord;
}
var result = isAnagram("silent", "listen");
console.log(`Given words are anagram: ${result}`);

var result = isAnagram("hello", "world");
console.log(`Given words are anagram: ${result}`);
var result = isAnagram("such", "much");
console.log(`Given words are anagram: ${result}`);