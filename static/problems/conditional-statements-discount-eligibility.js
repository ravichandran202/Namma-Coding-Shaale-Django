module.exports = {
  "title": "Discount Eligibility",
  "difficulty": "Medium",
  "acceptance": "85%",

  "description": `
    <p>Check if a person is eligible for a senior citizen discount based on age and citizenship criteria.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as an integer input</li>
      <li>Read citizenship status as a string input</li>
      <li>Check if both conditions are satisfied</li>
      <li>Print the eligibility status for the discount</li>
    </ul>
    <p><b>Eligibility Conditions:</b></p>
    <ul>
      <li>Age must be 60 or above</li>
      <li>Citizenship status must be "yes"</li>
      <li>Both conditions must be true for eligibility</li>
    </ul>
    <p>This problem teaches logical AND operations and combining multiple criteria for eligibility checks.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 65
yes
Output: Eligible for discount</pre>
    <p><b>Explanation:</b> Age 65 ≥ 60 and citizenship is "yes", so both conditions are satisfied.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 70
no
Output: Not eligible for discount</pre>
    <p><b>Explanation:</b> Age condition is satisfied (70 ≥ 60) but citizenship is "no", so not eligible.</p>
  `,

  "conditions": `
    <ul>
      <li>Age input will be an integer between 1 and 120</li>
      <li>Citizenship input will be either "yes" or "no" (lowercase)</li>
      <li>Use logical AND operator to combine both conditions</li>
      <li>Output must be exactly one of: "Eligible for discount" or "Not eligible for discount"</li>
      <li>Both conditions must be true for eligibility</li>
      <li>Citizenship check should be case-sensitive</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Eligible for discount", "stdinput": "65\nyes" },
    { "id": 2, "input": [], "expected": "Not eligible for discount", "stdinput": "70\nno" },
    { "id": 3, "input": [], "expected": "Not eligible for discount", "stdinput": "55\nyes" },
    { "id": 4, "input": [], "expected": "Eligible for discount", "stdinput": "60\nyes" },
    { "id": 5, "input": [], "expected": "Not eligible for discount", "stdinput": "45\nno" },
  ],

  "templates": {
    "python": "age = int(input())\ncitizen = input()\n\nif age >= 60 and citizen == \"yes\":\n    print(\"Eligible for discount\")\nelse:\n    print(\"Not eligible for discount\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String citizen = scanner.nextLine();\n        \n        if (age >= 60 && citizen.equals(\"yes\")) {\n            System.out.println(\"Eligible for discount\");\n        } else {\n            System.out.println(\"Not eligible for discount\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const age = parseInt(input[0]);\n        const citizen = input[1];\n        \n        if (age >= 60 && citizen === \"yes\") {\n            console.log(\"Eligible for discount\");\n        } else {\n            console.log(\"Not eligible for discount\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    int age;\n    std::string citizen;\n    \n    std::cin >> age;\n    std::cin >> citizen;\n    \n    if (age >= 60 && citizen == \"yes\") {\n        std::cout << \"Eligible for discount\" << std::endl;\n    } else {\n        std::cout << \"Not eligible for discount\" << std::endl;\n    }\n    return 0;\n}"
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