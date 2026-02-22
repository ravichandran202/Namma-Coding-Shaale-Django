module.exports = {
  "title": "Consonant Counter",
  "difficulty": "medium",
  "acceptance": "80%",

  "description": `
    <p>Count how many consonants are in a given word.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a word as input</li>
      <li>Count consonants (letters that are not vowels)</li>
      <li>Print the consonant count</li>
    </ul>

    <p>This problem teaches character filtering and vowel-consonant classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: education
Output: 4</pre>
    <p><b>Explanation:</b> Consonants: d,c,t,n (4 consonants)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Python
Output: 5</pre>
    <p><b>Explanation:</b> Consonants: P,y,t,h,n (5 consonants)</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "education" },
    { "id": 2, "input": [], "expected": "5", "stdinput": "Python" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "AEIOU" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "Hello" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "a" },
    { "id": 7, "input": [], "expected": "1", "stdinput": "b" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "123!@#" }
  ],

  "templates": {
    "python": "word = input()\n\n# TODO: Use a for loop to count the consonants and print the count\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next();\n        \n        // TODO: Use a for loop to count the consonants and print the count\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    \n    // TODO: Use a for loop to count the consonants and print the count\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    \n    // TODO: Use a for loop to count the consonants and print the count\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "word = input().lower()\ncount = 0\nfor ch in word:\n    if 'a' <= ch <= 'z' and ch not in 'aeiou':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next().toLowerCase();\n        int count = 0;\n        for (int i = 0; i < word.length(); i++) {\n            char ch = word.charAt(i);\n            if (ch >= 'a' && ch <= 'z') {\n                if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {\n                    count++;\n                }\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const word = input.toLowerCase();\n    let count = 0;\n    for (let i = 0; i < word.length; i++) {\n        const ch = word[i];\n        if (ch >= 'a' && ch <= 'z' && !'aeiou'.includes(ch)) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    int count = 0;\n    for (char ch : word) {\n        char lowerCh = tolower(ch);\n        if (lowerCh >= 'a' && lowerCh <= 'z') {\n            if (lowerCh != 'a' && lowerCh != 'e' && lowerCh != 'i' && lowerCh != 'o' && lowerCh != 'u') {\n                count++;\n            }\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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