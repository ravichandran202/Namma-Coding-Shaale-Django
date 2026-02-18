module.exports = {
  "title": "Vowel Counter",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Count the number of vowels in the given word.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a word as input</li>
      <li>Convert word to lowercase for case-insensitive counting</li>
      <li>Use for loop to iterate through each character</li>
      <li>Check if character is a vowel (a, e, i, o, u)</li>
      <li>Count and print total vowels</li>
    </ul>
    <p><b>Vowel Counting Concept:</b></p>
    <ul>
      <li>Vowels in English: a, e, i, o, u</li>
      <li>Convert to lowercase to handle both cases</li>
      <li>Check each character against vowel string</li>
      <li>Increment counter when vowel found</li>
    </ul>
    <p>This problem teaches character checking and conditional counting.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Education
Output: 5</pre>
    <p><b>Explanation:</b> Vowels in "Education": E, u, a, i, o (5 vowels)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Python
Output: 1</pre>
    <p><b>Explanation:</b> Vowels in "Python": o (1 vowel)</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: Rhythm
Output: 0</pre>
    <p><b>Explanation:</b> No vowels in "Rhythm"</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5", "stdinput": "Education" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "Python" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "Rhythm" },
    { "id": 4, "input": [], "expected": "5", "stdinput": "Beautiful" },
    { "id": 5, "input": [], "expected": "5", "stdinput": "AEIOU" },
    { "id": 6, "input": [], "expected": "2", "stdinput": "Hello" },
    { "id": 7, "input": [], "expected": "3", "stdinput": "Elephant" },
    { "id": 8, "input": [], "expected": "1", "stdinput": "A" }
  ],

  "templates": {
    "python": "word = input().lower()\ncount = 0\nfor ch in word:\n    if ch in 'aeiou':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next().toLowerCase();\n        int count = 0;\n        for (int i = 0; i < word.length(); i++) {\n            char ch = word.charAt(i);\n            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const word = input.toLowerCase();\n    let count = 0;\n    for (let i = 0; i < word.length; i++) {\n        if ('aeiou'.includes(word[i])) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    int count = 0;\n    for (char ch : word) {\n        char lowerCh = tolower(ch);\n        if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "word = input().lower()\ncount = 0\nfor ch in word:\n    if ch in 'aeiou':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next().toLowerCase();\n        int count = 0;\n        for (int i = 0; i < word.length(); i++) {\n            char ch = word.charAt(i);\n            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const word = input.toLowerCase();\n    let count = 0;\n    for (let i = 0; i < word.length; i++) {\n        if ('aeiou'.includes(word[i])) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    int count = 0;\n    for (char ch : word) {\n        char lowerCh = tolower(ch);\n        if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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