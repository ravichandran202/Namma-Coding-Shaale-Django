module.exports = {
  "title": "Character in Range Detector",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Write a program that takes a character and two integers (start and end of range) as input, and checks if the character's ASCII value falls within the specified range (inclusive).</p>
    <p><b>How range checking works:</b></p>
    <p>The program checks if the character's ASCII value is between the start and end values (including both endpoints):</p>
    <ul>
      <li>Character 'M' (77) in range 70-80 → True</li>
      <li>Character 'A' (65) in range 70-80 → False</li>
      <li>Character 'z' (122) in range 97-122 → True</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a character as input</li>
      <li>Read start of range as integer</li>
      <li>Read end of range as integer</li>
      <li>Convert character to ASCII value</li>
      <li>Check if ASCII value is between start and end (inclusive)</li>
      <li>Print True or False</li>
    </ul>
    <p>This problem teaches range validation using ASCII values and multiple inputs.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
M
70
80
Output: True</pre>
    <p><b>Explanation:</b> 'M' has ASCII value 77, which is between 70 and 80.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
A
70
80
Output: False</pre>
    <p><b>Explanation:</b> 'A' has ASCII value 65, which is NOT between 70 and 80.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be one character followed by two integers</li>
      <li>The character can be any printable ASCII character</li>
      <li>Range values will be integers between 0 and 127</li>
      <li>Start value will be less than or equal to end value</li>
      <li>Check inclusive range</li>
      <li>Output should be exactly "True" or "False"</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "M\n70\n80" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "A\n70\n80" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "z\n97\n122" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "5\n48\n57" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "!\n65\n90" },
  ],

  "templates": {
    "python": "char = input()\nstart = int(input())\nend = int(input())\n\nascii_val = ord(char)\nprint(start <= ascii_val <= end)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int start = scanner.nextInt();\n        int end = scanner.nextInt();\n        \n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= start && ascii_val <= end);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const char = input[0];\n        const start = parseInt(input[1]);\n        const end = parseInt(input[2]);\n        \n        const ascii_val = char.charCodeAt(0);\n        console.log(ascii_val >= start && ascii_val <= end);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    int start, end;\n    std::cin >> ch >> start >> end;\n    \n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= start && ascii_val <= end) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "char = input()\nstart = int(input())\nend = int(input())\n\nascii_val = ord(char)\nprint(start <= ascii_val <= end)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int start = scanner.nextInt();\n        int end = scanner.nextInt();\n        \n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= start && ascii_val <= end);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const char = input[0];\n        const start = parseInt(input[1]);\n        const end = parseInt(input[2]);\n        \n        const ascii_val = char.charCodeAt(0);\n        console.log(ascii_val >= start && ascii_val <= end);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    int start, end;\n    std::cin >> ch >> start >> end;\n    \n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= start && ascii_val <= end) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
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