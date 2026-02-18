module.exports =  {
  "title": "Voting Eligibility Check",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Take a person's age as input and check if the person is eligible to vote.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Check if age is 18 years or older</li>
      <li>print True, If eligible </li>
      <li>If not eligible, print False</li>
    </ul>
    <p>This problem teaches comparison operations with real-world application in eligibility checking.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 20
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 16
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 18
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Age will be a positive integer between 1 and 120</li>
      <li>Voting age is 18 years or older</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "20" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "16" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "18" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "17" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "25" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "0" }
  ],

  "templates": {
    "python": `age = int(input())\nprint(age >= 18)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        System.out.println(age >= 18);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    console.log(ageNum >= 18);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    std::cout << std::boolalpha << (age >= 18) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `age = int(input())\nprint(age >= 18)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        System.out.println(age >= 18);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    console.log(ageNum >= 18);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    std::cout << std::boolalpha << (age >= 18) << std::endl;\n    return 0;\n}`
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