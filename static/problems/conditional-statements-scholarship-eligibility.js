module.exports = {
  "title": "Scholarship Check",
  "difficulty": "Medium",
  "acceptance": "81%",

  "description": `
    <p>Check if a student is eligible for scholarship based on academic performance and family income criteria.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read marks (percentage) as integer input</li>
      <li>Read family income as integer input</li>
      <li>Apply scholarship eligibility criteria using logical operators</li>
      <li>Print the scholarship eligibility status</li>
    </ul>
    <p><b>Eligibility Criteria:</b></p>
    <ul>
      <li>Marks ≥ 90 (automatic eligibility regardless of income), OR</li>
      <li>Marks ≥ 80 AND family_income < 50000</li>
    </ul>
    <p>This problem teaches complex logical operations with OR and AND operators, demonstrating how multiple criteria can be combined for decision making.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 85
40000
Output: Eligible for Scholarship</pre>
    <p><b>Explanation:</b> Marks 85 ≥ 80 and family income 40000 < 50000, so eligible through the second criteria.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 92
100000
Output: Eligible for Scholarship</pre>
    <p><b>Explanation:</b> Marks 92 ≥ 90, so automatically eligible regardless of family income.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 85
60000
Output: Not Eligible</pre>
    <p><b>Explanation:</b> Marks 85 ≥ 80 but family income 60000 ≥ 50000, so not eligible.</p>
  `,

  "conditions": `
    <ul>
      <li>Marks input will be an integer between 0 and 100</li>
      <li>Family income input will be a positive integer up to 1000000</li>
      <li>Use logical OR and AND operators appropriately</li>
      <li>Output must be exactly one of: "Eligible for Scholarship" or "Not Eligible"</li>
      <li>High academic performance (≥90) overrides income requirement</li>
      <li>Good academic performance (≥80) requires low family income (<50000)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Eligible for Scholarship", "stdinput": "85\n40000" },
    { "id": 2, "input": [], "expected": "Eligible for Scholarship", "stdinput": "92\n100000" },
    { "id": 3, "input": [], "expected": "Not Eligible", "stdinput": "85\n60000" },
    { "id": 4, "input": [], "expected": "Not Eligible", "stdinput": "78\n30000" },
    { "id": 5, "input": [], "expected": "Eligible for Scholarship", "stdinput": "90\n80000" },
    { "id": 7, "input": [], "expected": "Eligible for Scholarship", "stdinput": "80\n45000" },
  ],

  "templates": {
    "python": "marks = int(input())\nfamily_income = int(input())\n\nif marks >= 90 or (marks >= 80 and family_income < 50000):\n    print(\"Eligible for Scholarship\")\nelse:\n    print(\"Not Eligible\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        int family_income = scanner.nextInt();\n        \n        if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n            System.out.println(\"Eligible for Scholarship\");\n        } else {\n            System.out.println(\"Not Eligible\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [marks, family_income] = input;\n        \n        if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n            console.log(\"Eligible for Scholarship\");\n        } else {\n            console.log(\"Not Eligible\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int marks, family_income;\n    std::cin >> marks >> family_income;\n    \n    if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n        std::cout << \"Eligible for Scholarship\" << std::endl;\n    } else {\n        std::cout << \"Not Eligible\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "marks = int(input())\nfamily_income = int(input())\n\nif marks >= 90 or (marks >= 80 and family_income < 50000):\n    print(\"Eligible for Scholarship\")\nelse:\n    print(\"Not Eligible\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        int family_income = scanner.nextInt();\n        \n        if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n            System.out.println(\"Eligible for Scholarship\");\n        } else {\n            System.out.println(\"Not Eligible\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [marks, family_income] = input;\n        \n        if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n            console.log(\"Eligible for Scholarship\");\n        } else {\n            console.log(\"Not Eligible\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int marks, family_income;\n    std::cin >> marks >> family_income;\n    \n    if (marks >= 90 || (marks >= 80 && family_income < 50000)) {\n        std::cout << \"Eligible for Scholarship\" << std::endl;\n    } else {\n        std::cout << \"Not Eligible\" << std::endl;\n    }\n    return 0;\n}"
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