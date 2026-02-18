module.exports = {
  "title": "Palindrome Checker",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Check if a given word is palindrome using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a word as input</li>
      <li>Convert to lowercase for case-insensitive comparison</li>
      <li>Use for loop to reverse the string</li>
      <li>Compare original with reversed string</li>
      <li>Print "True" if palindrome, "False" otherwise</li>
    </ul>
    <p><b>Palindrome Concept:</b></p>
    <ul>
      <li>Palindrome reads same forwards and backwards</li>
      <li>Examples: "madam", "racecar", "level"</li>
      <li>Build reversed string by iterating backwards</li>
      <li>Compare original and reversed strings</li>
    </ul>
    <p>This problem teaches string reversal and comparison.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Madam
Output: True</pre>
    <p><b>Explanation:</b> "madam" reads same forwards and backwards</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Python
Output: False</pre>
    <p><b>Explanation:</b> "python" reversed is "nohtyp" (different)</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: racecar
Output: True</pre>
    <p><b>Explanation:</b> "racecar" reads same forwards and backwards</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "Madam" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "Python" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "racecar" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "level" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "hello" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "a" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "noon" }
  ],

  "templates": {
    "python": "word = input().lower()\nreversed_word = \"\"\nfor i in range(len(word) - 1, -1, -1):\n    reversed_word += word[i]\nif word == reversed_word:\n    print(\"True\")\nelse:\n    print(\"False\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next().toLowerCase();\n        String reversedWord = \"\";\n        for (int i = word.length() - 1; i >= 0; i--) {\n            reversedWord += word.charAt(i);\n        }\n        if (word.equals(reversedWord)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const word = input.toLowerCase();\n    let reversedWord = \"\";\n    for (let i = word.length - 1; i >= 0; i--) {\n        reversedWord += word[i];\n    }\n    if (word === reversedWord) {\n        console.log(\"True\");\n    } else {\n        console.log(\"False\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    string reversedWord = \"\";\n    for (int i = word.length() - 1; i >= 0; i--) {\n        reversedWord += tolower(word[i]);\n    }\n    string lowerWord = word;\n    transform(lowerWord.begin(), lowerWord.end(), lowerWord.begin(), ::tolower);\n    if (lowerWord == reversedWord) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "word = input().lower()\nreversed_word = \"\"\nfor i in range(len(word) - 1, -1, -1):\n    reversed_word += word[i]\nif word == reversed_word:\n    print(\"True\")\nelse:\n    print(\"False\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next().toLowerCase();\n        String reversedWord = \"\";\n        for (int i = word.length() - 1; i >= 0; i--) {\n            reversedWord += word.charAt(i);\n        }\n        if (word.equals(reversedWord)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const word = input.toLowerCase();\n    let reversedWord = \"\";\n    for (let i = word.length - 1; i >= 0; i--) {\n        reversedWord += word[i];\n    }\n    if (word === reversedWord) {\n        console.log(\"True\");\n    } else {\n        console.log(\"False\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    string reversedWord = \"\";\n    for (int i = word.length() - 1; i >= 0; i--) {\n        reversedWord += tolower(word[i]);\n    }\n    string lowerWord = word;\n    transform(lowerWord.begin(), lowerWord.end(), lowerWord.begin(), ::tolower);\n    if (lowerWord == reversedWord) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    return 0;\n}"
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