module.exports = {
  "title": "Alphabet Symmetry Detector",
  "difficulty": "easy",
  "acceptance": "78%",

  "description": `
    <p>Write a program that takes two uppercase letters as input and checks if they are symmetric in the alphabet. Two letters are symmetric if their ASCII values add up to 155.</p>
    <p><b>What are symmetric letters?</b></p>
    <p>Symmetric letters are pairs that are equidistant from the middle of the alphabet:</p>
    <ul>
      <li>A (65) + Z (90) = 155</li>
      <li>B (66) + Y (89) = 155</li>
      <li>C (67) + X (88) = 155</li>
      <li>...</li>
      <li>M (77) + N (78) = 155</li>
    </ul>
    <p><b>Why 155?</b></p>
    <p>A (65) + Z (90) = 155, and this sum remains constant for all symmetric pairs.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two uppercase letters as input</li>
      <li>Convert both to ASCII values</li>
      <li>Check if their sum equals 155</li>
      <li>Print True if symmetric, False otherwise</li>
    </ul>
    <p>This problem teaches about alphabet symmetry and ASCII arithmetic for pattern recognition.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A
Z
Output: True</pre>
    <p><b>Explanation:</b> A (65) + Z (90) = 155</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: B
Y
Output: True</pre>
    <p><b>Explanation:</b> B (66) + Y (89) = 155</p>
    
  `,

  "conditions": `
    <ul>
      <li>Input will be two uppercase letters (A-Z)</li>
      <li>Both inputs are guaranteed to be uppercase letters</li>
      <li>Check if sum of ASCII values equals 155</li>
      <li>Output should be exactly "True" or "False"</li>
      <li>All symmetric pairs sum to 155: A+Z, B+Y, C+X, ..., M+N</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "A\nZ" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "B\nY" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "M\nN" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "A\nA" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "C\nX" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "D\nW" },
  ],

  "templates": {
    "python": "char1 = input()\nchar2 = input()\n\nsum_ascii = ord(char1) + ord(char2)\nprint(sum_ascii == 155)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char char1 = scanner.next().charAt(0);\n        char char2 = scanner.next().charAt(0);\n        \n        int sum_ascii = (int)char1 + (int)char2;\n        System.out.println(sum_ascii == 155);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const char1 = input[0];\n        const char2 = input[1];\n        \n        const sum_ascii = char1.charCodeAt(0) + char2.charCodeAt(0);\n        console.log(sum_ascii === 155);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char char1, char2;\n    std::cin >> char1 >> char2;\n    \n    int sum_ascii = (int)char1 + (int)char2;\n    std::cout << ((sum_ascii == 155) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "char1 = input()\nchar2 = input()\n\nsum_ascii = ord(char1) + ord(char2)\nprint(sum_ascii == 155)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char char1 = scanner.next().charAt(0);\n        char char2 = scanner.next().charAt(0);\n        \n        int sum_ascii = (int)char1 + (int)char2;\n        System.out.println(sum_ascii == 155);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const char1 = input[0];\n        const char2 = input[1];\n        \n        const sum_ascii = char1.charCodeAt(0) + char2.charCodeAt(0);\n        console.log(sum_ascii === 155);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char char1, char2;\n    std::cin >> char1 >> char2;\n    \n    int sum_ascii = (int)char1 + (int)char2;\n    std::cout << ((sum_ascii == 155) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
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