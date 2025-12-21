module.exports = {
  "title": "Alphabet Wrap-around Shifter",
  "difficulty": "hard",
  "acceptance": "75%",

  "description": `
    <p>Write a program that takes an uppercase letter and an integer N as input, and shifts the letter by N positions in the alphabet. The shift should wrap around from Z to A.</p>
    <p><b>How wrap-around shifting works:</b></p>
    <p>This is like a circular shift in the alphabet:</p>
    <ul>
      <li>'Z' shifted by 3 → 'C' (Z→A→B→C)</li>
      <li>'A' shifted by -1 → 'Z' (A→Z)</li>
      <li>'M' shifted by 13 → 'Z' (M→N→O→...→Z)</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an uppercase letter as input</li>
      <li>Read an integer shift amount</li>
      <li>Convert back to uppercase letter</li>
    </ul>
    <p>This problem teaches modular arithmetic and circular shifting with ASCII values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
Z
3
Output: C</pre>
    <p><b>Explanation:</b> 'Z' (90) + 3 → 'C'</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
A
-1
Output: Z</pre>
    <p><b>Explanation:</b> 'A' (65) → -1 → 'Z'</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
M
13
Output: Z</pre>
    <p><b>Explanation:</b> 'M' (77) + 13 → 'Z'</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 
B
25
Output: A</pre>
    <p><b>Explanation:</b> 'B' (66) + 25 = 65 → 'A'</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be one uppercase letter (A-Z) and one integer</li>
      <li>The integer can be positive, negative, or zero</li>
      <li>Output should be exactly one uppercase letter</li>
      <li>Handle large shifts (positive and negative) correctly</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "C", "stdinput": "Z\n3" },
    { "id": 2, "input": [], "expected": "Z", "stdinput": "A\n-1" },
    { "id": 3, "input": [], "expected": "Z", "stdinput": "M\n13" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "B\n25" },
    { "id": 5, "input": [], "expected": "A", "stdinput": "A\n0" },
    { "id": 6, "input": [], "expected": "D", "stdinput": "A\n3" },
    { "id": 7, "input": [], "expected": "Y", "stdinput": "A\n-2" },
    { "id": 8, "input": [], "expected": "I", "stdinput": "Z\n9" },
    { "id": 9, "input": [], "expected": "M", "stdinput": "A\n12" },
    { "id": 10, "input": [], "expected": "B", "stdinput": "Z\n2" }
  ],

  "templates": {
    "python": "char = input()\nshift = int(input())\n\nascii_val = ord(char)\nnew_ascii = (ascii_val - 65 + shift) % 26 + 65\nprint(chr(new_ascii))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int shift = scanner.nextInt();\n        \n        int ascii_val = (int) character;\n        int new_ascii = ((ascii_val - 65 + shift) % 26 + 26) % 26 + 65;\n        System.out.println((char) new_ascii);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const char = input[0];\n        const shift = parseInt(input[1]);\n        \n        const ascii_val = char.charCodeAt(0);\n        const new_ascii = ((ascii_val - 65 + shift) % 26 + 26) % 26 + 65;\n        console.log(String.fromCharCode(new_ascii));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    int shift;\n    std::cin >> ch >> shift;\n    \n    int ascii_val = (int)ch;\n    int new_ascii = ((ascii_val - 65 + shift) % 26 + 26) % 26 + 65;\n    std::cout << (char)new_ascii << std::endl;\n    return 0;\n}"
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