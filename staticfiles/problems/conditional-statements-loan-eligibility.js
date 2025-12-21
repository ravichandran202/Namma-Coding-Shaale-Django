module.exports = {
  "title": "Bank Loan Approval",
  "difficulty": "hard",
  "acceptance": "82%",

  "description": `
    <p>Determine loan eligibility based on age and income criteria using nested conditional logic.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Read annual income as integer input</li>
      <li>Apply two-level validation for loan approval</li>
      <li>Provide specific rejection reasons</li>
      <li>Output must be exactly one of: <code>"Approved"</code>, <code>"Rejected - Age Criteria"</code>, <code>"Rejected - Low Income"</code></li>
    </ul>
    <p><b>Loan Approval Criteria:</b></p>
    <ul>
      <li><b>Age Check:</b> Must be between 21 and 60 (inclusive)</li>
      <li><b>Income Check:</b> If age valid, income must be ≥ 25000</li>
      <li><b>Approval:</b> Only if both conditions are satisfied</li>
    </ul>
    <p>This problem teaches nested conditional logic and specific error messaging in financial applications.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25
30000
Output: Approved</pre>
    <p><b>Explanation:</b> Age 25 is valid (21-60) and income 30000 ≥ 25000, so loan approved.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 18
40000
Output: Rejected - Age Criteria</pre>
    <p><b>Explanation:</b> Age 18 < 21, so rejected immediately regardless of income.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 30
20000
Output: Rejected - Low Income</pre>
    <p><b>Explanation:</b> Age 30 is valid, but income 20000 < 25000, so rejected for low income.</p>
  `,

  "conditions": `
    <ul>
      <li>Age input will be an integer between 18 and 70</li>
      <li>Income input will be a positive integer up to 100000</li>
      <li>Use nested if-else statements</li>
      <li>Check age criteria first, then income criteria</li>
      <li>Output must be exactly one of: "Approved", "Rejected - Age Criteria", "Rejected - Low Income"</li>
      <li>Provide specific rejection reasons</li>
      <li>Use inclusive ranges for age (21 to 60 inclusive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Approved", "stdinput": "25\n30000" },
    { "id": 2, "input": [], "expected": "Rejected - Age Criteria", "stdinput": "18\n40000" },
    { "id": 3, "input": [], "expected": "Rejected - Low Income", "stdinput": "30\n20000" },
    { "id": 4, "input": [], "expected": "Rejected - Age Criteria", "stdinput": "65\n50000" },
    { "id": 5, "input": [], "expected": "Approved", "stdinput": "21\n25000" },
    { "id": 6, "input": [], "expected": "Approved", "stdinput": "60\n30000" },
  ],

  "templates": {
    "python": "age = int(input())\nincome = int(input())\n\nif age >= 21 and age <= 60:\n    if income >= 25000:\n        print(\"Approved\")\n    else:\n        print(\"Rejected - Low Income\")\nelse:\n    print(\"Rejected - Age Criteria\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        int income = scanner.nextInt();\n        \n        if (age >= 21 && age <= 60) {\n            if (income >= 25000) {\n                System.out.println(\"Approved\");\n            } else {\n                System.out.println(\"Rejected - Low Income\");\n            }\n        } else {\n            System.out.println(\"Rejected - Age Criteria\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [age, income] = input;\n        \n        if (age >= 21 && age <= 60) {\n            if (income >= 25000) {\n                console.log(\"Approved\");\n            } else {\n                console.log(\"Rejected - Low Income\");\n            }\n        } else {\n            console.log(\"Rejected - Age Criteria\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int age, income;\n    std::cin >> age >> income;\n    \n    if (age >= 21 && age <= 60) {\n        if (income >= 25000) {\n            std::cout << \"Approved\" << std::endl;\n        } else {\n            std::cout << \"Rejected - Low Income\" << std::endl;\n        }\n    } else {\n        std::cout << \"Rejected - Age Criteria\" << std::endl;\n    }\n    return 0;\n}"
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