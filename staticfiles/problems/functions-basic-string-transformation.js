module.exports = {
  "title": "String Transformation Toolkit",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Create four functions that perform different string operations: uppercase conversion, lowercase conversion, string reversal, and vowel counting.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>to_uppercase(text)</code> - returns the string converted to uppercase</li>
        <li><code>to_lowercase(text)</code> - returns the string converted to lowercase</li>
        <li><code>reverse_string(text)</code> - returns the reversed string</li>
        <li><code>count_vowels(text)</code> - returns the count of vowels (a, e, i, o, u) in the string</li>
      </ul>
      <li>Each function should take one string parameter and return the result</li>
      <li>Call all four functions with the input string and print the results with labels</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
Hello World

Output:
Uppercase: HELLO WORLD
Lowercase: hello world
Reversed: dlroW olleH
Vowel Count: 3</pre>
    <p><b>Explanation:</b> Functions process "Hello World": uppercase → "HELLO WORLD", lowercase → "hello world", reversed → "dlroW olleH", vowels: e, o, o = 3</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Python

Output:
Uppercase: PYTHON
Lowercase: python
Reversed: nohtyP
Vowel Count: 1</pre>
    <p><b>Explanation:</b> "Python": uppercase → "PYTHON", lowercase → "python", reversed → "nohtyP", vowels: o = 1</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Uppercase: HELLO WORLD\nLowercase: hello world\nReversed: dlroW olleH\nVowel Count: 3", 
      "stdinput": "Hello World",
      "explanation": "Uppercase: HELLO WORLD, Lowercase: hello world, Reversed: dlroW olleH, Vowels: 3" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Uppercase: PYTHON\nLowercase: python\nReversed: nohtyP\nVowel Count: 1", 
      "stdinput": "Python",
      "explanation": "Uppercase: PYTHON, Lowercase: python, Reversed: nohtyP, Vowels: 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Uppercase: \nLowercase: \nReversed: \nVowel Count: 0", 
      "stdinput": "",
      "explanation": "Empty string: all transformations return empty string, 0 vowels" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Uppercase: AEIOU\nLowercase: aeiou\nReversed: UOIEA\nVowel Count: 5", 
      "stdinput": "AEIOU",
      "explanation": "All uppercase vowels: AEIOU, lowercase: aeiou, reversed: UOIEA, Vowels: 5" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Uppercase: PROGRAMMING IS FUN\nLowercase: programming is fun\nReversed: nuf si gnimmargorP\nVowel Count: 5", 
      "stdinput": "Programming is fun",
      "explanation": "Uppercase: PROGRAMMING IS FUN, lowercase: programming is fun, reversed: nuf si gnimmargorP, Vowels: o, a, i, i, u = 5" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Uppercase: A\nLowercase: a\nReversed: a\nVowel Count: 1", 
      "stdinput": "a",
      "explanation": "Single character: uppercase A, lowercase a, reversed a, Vowels: 1" 
    }
  ],

  "templates": {
    "python": "def to_uppercase(text):\n    return text.upper()\n\ndef to_lowercase(text):\n    return text.lower()\n\ndef reverse_string(text):\n    return text[::-1]\n\ndef count_vowels(text):\n    vowels = \"aeiouAEIOU\"\n    count = 0\n    for char in text:\n        if char in vowels:\n            count += 1\n    return count\n\n# Main code\ninput_text = input()\nprint(\"Uppercase:\", to_uppercase(input_text))\nprint(\"Lowercase:\", to_lowercase(input_text))\nprint(\"Reversed:\", reverse_string(input_text))\nprint(\"Vowel Count:\", count_vowels(input_text))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static String to_uppercase(String text) {\n        return text.toUpperCase();\n    }\n    \n    public static String to_lowercase(String text) {\n        return text.toLowerCase();\n    }\n    \n    public static String reverse_string(String text) {\n        return new StringBuilder(text).reverse().toString();\n    }\n    \n    public static int count_vowels(String text) {\n        int count = 0;\n        String vowels = \"aeiouAEIOU\";\n        for (int i = 0; i < text.length(); i++) {\n            char ch = text.charAt(i);\n            if (vowels.indexOf(ch) != -1) {\n                count++;\n            }\n        }\n        return count;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input_text = scanner.nextLine();\n        \n        System.out.println(\"Uppercase: \" + to_uppercase(input_text));\n        System.out.println(\"Lowercase: \" + to_lowercase(input_text));\n        System.out.println(\"Reversed: \" + reverse_string(input_text));\n        System.out.println(\"Vowel Count: \" + count_vowels(input_text));\n    }\n}",
    "javascript": "function to_uppercase(text) {\n    return text.toUpperCase();\n}\n\nfunction to_lowercase(text) {\n    return text.toLowerCase();\n}\n\nfunction reverse_string(text) {\n    return text.split('').reverse().join('');\n}\n\nfunction count_vowels(text) {\n    const vowels = \"aeiouAEIOU\";\n    let count = 0;\n    for (let i = 0; i < text.length; i++) {\n        if (vowels.includes(text[i])) {\n            count++;\n        }\n    }\n    return count;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input_text) => {\n    console.log(\"Uppercase: \" + to_uppercase(input_text));\n    console.log(\"Lowercase: \" + to_lowercase(input_text));\n    console.log(\"Reversed: \" + reverse_string(input_text));\n    console.log(\"Vowel Count: \" + count_vowels(input_text));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nstring to_uppercase(string text) {\n    transform(text.begin(), text.end(), text.begin(), ::toupper);\n    return text;\n}\n\nstring to_lowercase(string text) {\n    transform(text.begin(), text.end(), text.begin(), ::tolower);\n    return text;\n}\n\nstring reverse_string(string text) {\n    reverse(text.begin(), text.end());\n    return text;\n}\n\nint count_vowels(string text) {\n    int count = 0;\n    string vowels = \"aeiouAEIOU\";\n    for (char ch : text) {\n        if (vowels.find(ch) != string::npos) {\n            count++;\n        }\n    }\n    return count;\n}\n\nint main() {\n    string input_text;\n    getline(cin, input_text);\n    \n    cout << \"Uppercase: \" << to_uppercase(input_text) << endl;\n    cout << \"Lowercase: \" << to_lowercase(input_text) << endl;\n    cout << \"Reversed: \" << reverse_string(input_text) << endl;\n    cout << \"Vowel Count: \" << count_vowels(input_text) << endl;\n    \n    return 0;\n}"
  },

  "wrapCode": function(lang, userCode, input) {
    switch(lang) {
      case 'python':
        return `${userCode}`;
      case 'java':
        return userCode;
      case 'javascript':
        return `${userCode}`;
      case 'c++':
        return userCode;
      default:
        return userCode;
    }
  }
}