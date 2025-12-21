module.exports = {
  "title": "Leap Year Verification",
  "difficulty": "medium",
  "acceptance": "75%",

  "description": `
    <p>Determine if a given year is a leap year based on the Gregorian calendar rules.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer representing a year as input</li>
      <li>Apply leap year rules to determine the result</li>
      <li>Print whether the year is a leap year or not</li>
    </ul>
    <p><b>Leap Year Rules:</b></p>
    <ul>
      <li>A year is a leap year if:</li>
      <li>It is divisible by 4 AND not divisible by 100, OR</li>
      <li>It is divisible by 400</li>
    </ul>
    <p>This problem teaches complex conditional logic with multiple boolean operations and modulo arithmetic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 2024
Output: Leap Year</pre>
    <p><b>Explanation:</b> 2024 is divisible by 4 and not divisible by 100, so it's a leap year.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1900
Output: Not Leap Year</pre>
    <p><b>Explanation:</b> 1900 is divisible by 4 and 100, but not by 400, so it's not a leap year.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a positive integer representing a year</li>
      <li>Year will be between 1 and 9999</li>
      <li>Output must be exactly one of: "Leap Year" or "Not Leap Year" (case-sensitive)</li>
      <li>Follow the standard Gregorian calendar leap year rules</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Leap Year", "stdinput": "2024" },
    { "id": 2, "input": [], "expected": "Not Leap Year", "stdinput": "1900" },
    { "id": 3, "input": [], "expected": "Leap Year", "stdinput": "2000" },
    { "id": 4, "input": [], "expected": "Not Leap Year", "stdinput": "2023" },
    { "id": 5, "input": [], "expected": "Leap Year", "stdinput": "2016" },
    { "id": 6, "input": [], "expected": "Not Leap Year", "stdinput": "2100" },
    { "id": 7, "input": [], "expected": "Leap Year", "stdinput": "2400" },
    { "id": 8, "input": [], "expected": "Not Leap Year", "stdinput": "1999" },
    { "id": 9, "input": [], "expected": "Leap Year", "stdinput": "1600" },
    { "id": 10, "input": [], "expected": "Not Leap Year", "stdinput": "1800" }
  ],

  "templates": {
    "python": "year = int(input())\n\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(\"Leap Year\")\nelse:\n    print(\"Not Leap Year\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int year = scanner.nextInt();\n        \n        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n            System.out.println(\"Leap Year\");\n        } else {\n            System.out.println(\"Not Leap Year\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (year) => {\n    const yearNum = parseInt(year);\n    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0)) {\n        console.log(\"Leap Year\");\n    } else {\n        console.log(\"Not Leap Year\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int year;\n    std::cin >> year;\n    \n    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        std::cout << \"Leap Year\" << std::endl;\n    } else {\n        std::cout << \"Not Leap Year\" << std::endl;\n    }\n    return 0;\n}"
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