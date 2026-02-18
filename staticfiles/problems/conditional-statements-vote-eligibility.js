module.exports = {
  "title": "Voting Eligibility Checker",
  "difficulty": "easy",
  "acceptance": "99.0%",

  "description": `
    <p>Determine if a person is eligible to vote based on their age.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer representing age as input</li>
      <li>Check if the age meets the voting eligibility criteria</li>
      <li>Print the corresponding eligibility status</li>
    </ul>
    <p><b>Eligibility Conditions:</b></p>
    <ul>
      <li>Age ≥ 18 years → <code>"Eligible"</code></li>
      <li>Age < 18 years → <code>"Not eligible"</code></li>
    </ul>
    <p>This problem teaches basic conditional logic and integer comparison for age verification systems.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 20
Output: Eligible</pre>
    <p><b>Explanation:</b> Age 20 is greater than or equal to 18, so the person is eligible to vote.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 16
Output: Not eligible</pre>
    <p><b>Explanation:</b> Age 16 is less than 18, so the person is not eligible to vote.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer representing age</li>
      <li>Age will be between 1 and 120 years</li>
      <li>Check eligibility using comparison operators</li>
      <li>Output must be exactly one of: "Eligible" or "Not eligible" (case-sensitive)</li>
      <li>The minimum voting age is 18 years (inclusive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Eligible", "stdinput": "20" },
    { "id": 2, "input": [], "expected": "Not eligible", "stdinput": "16" },
    { "id": 3, "input": [], "expected": "Eligible", "stdinput": "18" },
    { "id": 4, "input": [], "expected": "Eligible", "stdinput": "65" },
    { "id": 5, "input": [], "expected": "Not eligible", "stdinput": "17" },
  ],

  "templates": {
    "python": "age = int(input())\nif age >= 18:\n    print(\"Eligible\")\nelse:\n    print(\"Not eligible\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        if (age >= 18) {\n            System.out.println(\"Eligible\");\n        } else {\n            System.out.println(\"Not eligible\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    if (ageNum >= 18) {\n        console.log(\"Eligible\");\n    } else {\n        console.log(\"Not eligible\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    if (age >= 18) {\n        std::cout << \"Eligible\" << std::endl;\n    } else {\n        std::cout << \"Not eligible\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "age = int(input())\nif age >= 18:\n    print(\"Eligible\")\nelse:\n    print(\"Not eligible\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        if (age >= 18) {\n            System.out.println(\"Eligible\");\n        } else {\n            System.out.println(\"Not eligible\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    if (ageNum >= 18) {\n        console.log(\"Eligible\");\n    } else {\n        console.log(\"Not eligible\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    if (age >= 18) {\n        std::cout << \"Eligible\" << std::endl;\n    } else {\n        std::cout << \"Not eligible\" << std::endl;\n    }\n    return 0;\n}"
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