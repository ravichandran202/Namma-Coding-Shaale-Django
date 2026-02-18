module.exports =  {
  "title": "Teenager Check",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Verify if a person is a teenager. A teenager is someone between 13 and 19 years old (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Check if age is between 13 and 19 (inclusive)</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches range checking with inclusive boundaries for age verification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 16
Output: True</pre>
    <p><b>Explanation:</b> 16 is between 13 and 19 - teenager age range.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 12
Output: False</pre>
    <p><b>Explanation:</b> 12 is below 13 - not a teenager.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 19
Output: True</pre>
    <p><b>Explanation:</b> 19 is within teenager range (13-19 inclusive).</p>
  `,

  "conditions": `
    <ul>
      <li>Age will be a positive integer between 1 and 120</li>
      <li>Teenager range is 13 to 19 years old (inclusive)</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "16" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "12" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "19" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "13" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "20" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "18" },
  ],

  "templates": {
    "python": `age = int(input())\nis_teenager = age >= 13 and age <= 19\nprint(is_teenager)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        boolean is_teenager = age >= 13 && age <= 19;\n        System.out.println(is_teenager);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    const is_teenager = ageNum >= 13 && ageNum <= 19;\n    console.log(is_teenager);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    bool is_teenager = (age >= 13 && age <= 19);\n    std::cout << std::boolalpha << is_teenager << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `age = int(input())\nis_teenager = age >= 13 and age <= 19\nprint(is_teenager)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        boolean is_teenager = age >= 13 && age <= 19;\n        System.out.println(is_teenager);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    const is_teenager = ageNum >= 13 && ageNum <= 19;\n    console.log(is_teenager);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    bool is_teenager = (age >= 13 && age <= 19);\n    std::cout << std::boolalpha << is_teenager << std::endl;\n    return 0;\n}`
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