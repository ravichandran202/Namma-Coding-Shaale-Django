module.exports = {
  "title": "Sequence Generator",
  "difficulty": "hard",
  "acceptance": "99.1%",

  "description": `
    <p>Write a program that takes two characters as input and prints all characters in the ASCII sequence between them (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two characters as input (start and end of sequence)</li>
      <li>Use while loop to iterate through ASCII values</li>
      <li>Print all characters from start to end in sequence</li>
    </ul>
    <p><b>ASCII Concept:</b></p>
    <ul>
      <li>Each character has a numeric ASCII value</li>
      <li>ord(char) converts character to ASCII value</li>
      <li>chr(number) converts ASCII value to character</li>
      <li>Characters are ordered by their ASCII values</li>
    </ul>
    <p>This problem teaches ASCII conversion and character sequence generation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
A
E
Output: A B C D E</pre>
    <p><b>Explanation:</b> All characters from A to E in ASCII sequence</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
a
d
Output: a b c d</pre>
    <p><b>Explanation:</b> All characters from a to d in ASCII sequence</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
1
5
Output: 1 2 3 4 5</pre>
    <p><b>Explanation:</b> All digit characters from 1 to 5 in ASCII sequence</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A B C D E", "stdinput": "A\nE" },
    { "id": 2, "input": [], "expected": "a b c d", "stdinput": "a\nd" },
    { "id": 3, "input": [], "expected": "1 2 3 4 5", "stdinput": "1\n5" },
    { "id": 4, "input": [], "expected": "X Y Z", "stdinput": "X\nZ" },
    { "id": 5, "input": [], "expected": "P Q R S T", "stdinput": "P\nT" },
    { "id": 6, "input": [], "expected": "m n o p", "stdinput": "m\np" },
    { "id": 7, "input": [], "expected": "7 8 9", "stdinput": "7\n9" },
    { "id": 8, "input": [], "expected": "K L M N O P", "stdinput": "K\nP" },
    { "id": 9, "input": [], "expected": "w x y z", "stdinput": "w\nz" },
    { "id": 10, "input": [], "expected": "2 3 4", "stdinput": "2\n4" }
  ],

  "templates": {
    "python": "start_char = input()\nend_char = input()\n\nstart = ord(start_char)\nend = ord(end_char)\n\nascii_val = start\nwhile ascii_val <= end:\n    print(chr(ascii_val), end=' ')\n    ascii_val += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char startChar = scanner.next().charAt(0);\n        char endChar = scanner.next().charAt(0);\n        \n        int start = (int) startChar;\n        int end = (int) endChar;\n        \n        int asciiVal = start;\n        while (asciiVal <= end) {\n            System.out.print((char) asciiVal + \" \");\n            asciiVal++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.question('', (first) => {\n    input.push(first);\n    readline.question('', (second) => {\n        input.push(second);\n        const startChar = input[0];\n        const endChar = input[1];\n        \n        const start = startChar.charCodeAt(0);\n        const end = endChar.charCodeAt(0);\n        \n        let asciiVal = start;\n        let output = '';\n        while (asciiVal <= end) {\n            output += String.fromCharCode(asciiVal) + ' ';\n            asciiVal++;\n        }\n        console.log(output.trim());\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char startChar, endChar;\n    cin >> startChar >> endChar;\n    \n    int start = (int) startChar;\n    int end = (int) endChar;\n    \n    int asciiVal = start;\n    while (asciiVal <= end) {\n        cout << (char) asciiVal << \" \";\n        asciiVal++;\n    }\n    return 0;\n}"
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