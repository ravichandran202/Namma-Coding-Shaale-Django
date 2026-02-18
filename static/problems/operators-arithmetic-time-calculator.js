module.exports =  {
  "title": "Time Converter",
  "difficulty": "easy",
  "acceptance": "99.0%",

  "description": `
    <p>Write a program that takes total minutes as input and converts it to hours and minutes using division and modulus operations.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read total minutes as an integer input</li>
      <li>Print the result in the format: <code>"X hours and Y minutes"</code></li>
    </ul>
    <p>This problem teaches practical use of division and modulus operations for time conversion.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 125
Output: 2 hours and 5 minutes</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 90
Output: 1 hours and 30 minutes</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 60
Output: 1 hours and 0 minutes</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a non-negative integer</li>
      <li>Total minutes will be between 0 and 10000</li>
      <li>Must use both floor division and modulus operations</li>
      <li>Output format must be exactly: "X hours and Y minutes"</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2 hours and 5 minutes", "stdinput": "125" },
    { "id": 2, "input": [], "expected": "1 hours and 30 minutes", "stdinput": "90" },
    { "id": 3, "input": [], "expected": "1 hours and 0 minutes", "stdinput": "60" },
    { "id": 4, "input": [], "expected": "0 hours and 45 minutes", "stdinput": "45" },
    { "id": 5, "input": [], "expected": "3 hours and 15 minutes", "stdinput": "195" },
    { "id": 6, "input": [], "expected": "0 hours and 0 minutes", "stdinput": "0" },
    { "id": 7, "input": [], "expected": "24 hours and 0 minutes", "stdinput": "1440" },
    { "id": 8, "input": [], "expected": "16 hours and 40 minutes", "stdinput": "1000" },
    { "id": 9, "input": [], "expected": "41 hours and 40 minutes", "stdinput": "2500" },
    { "id": 10, "input": [], "expected": "166 hours and 40 minutes", "stdinput": "10000" }
  ],

  "templates": {
    "python": `total_minutes = int(input())\nhours = total_minutes // 60\nminutes = total_minutes % 60\nprint(f"{hours} hours and {minutes} minutes")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int total_minutes = scanner.nextInt();\n        int hours = total_minutes / 60;\n        int minutes = total_minutes % 60;\n        System.out.println(hours + \" hours and \" + minutes + \" minutes\");\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (total_minutes) => {\n    const minutes = parseInt(total_minutes);\n    const hours = Math.floor(minutes / 60);\n    const remaining_minutes = minutes % 60;\n    console.log(hours + \" hours and \" + remaining_minutes + \" minutes\");\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int total_minutes;\n    std::cin >> total_minutes;\n    int hours = total_minutes / 60;\n    int minutes = total_minutes % 60;\n    std::cout << hours << \" hours and \" << minutes << \" minutes\" << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `total_minutes = int(input())\nhours = total_minutes // 60\nminutes = total_minutes % 60\nprint(f"{hours} hours and {minutes} minutes")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int total_minutes = scanner.nextInt();\n        int hours = total_minutes / 60;\n        int minutes = total_minutes % 60;\n        System.out.println(hours + \" hours and \" + minutes + \" minutes\");\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (total_minutes) => {\n    const minutes = parseInt(total_minutes);\n    const hours = Math.floor(minutes / 60);\n    const remaining_minutes = minutes % 60;\n    console.log(hours + \" hours and \" + remaining_minutes + \" minutes\");\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int total_minutes;\n    std::cin >> total_minutes;\n    int hours = total_minutes / 60;\n    int minutes = total_minutes % 60;\n    std::cout << hours << \" hours and \" << minutes << \" minutes\" << std::endl;\n    return 0;\n}`
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