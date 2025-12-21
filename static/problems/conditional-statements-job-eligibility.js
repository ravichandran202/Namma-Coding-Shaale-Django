module.exports = {
  "title": "Job Eligibility Check",
  "difficulty": "medium",
  "acceptance": "81%",

  "description": `
    <p>Check job application eligibility based on age and experience criteria using nested conditional logic.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Read years of experience as integer input</li>
      <li>Apply two-level validation for job eligibility</li>
      <li>Provide specific feedback for each rejection case</li>
      <li>Output must be exactly one of: <code>"Eligible"</code>, <code>"Need more experience"</code>, <code>"Not eligible due to age"</code></li>
    </ul>
    <p><b>Eligibility Criteria:</b></p>
    <ul>
      <li><b>Age Check:</b> Must be 18 years or older</li>
      <li><b>Experience Check:</b> If age valid, must have at least 2 years of experience</li>
      <li><b>Approval:</b> Only if both conditions are satisfied</li>
    </ul>
    <p>This problem teaches nested conditional logic for employment screening systems with specific qualification criteria.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
22
3
Output: Eligible</pre>
    <p><b>Explanation:</b> Age 22 ≥ 18 and experience 3 ≥ 2, so eligible for the job.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
20
1
Output: Need more experience</pre>
    <p><b>Explanation:</b> Age 20 is valid, but experience 1 < 2, so needs more experience.</p>
  `,

  "conditions": `
    <ul>
      <li>Age input will be an integer between 16 and 65</li>
      <li>Experience input will be an integer between 0 and 50</li>
      <li>Check age criteria first, then experience criteria</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Eligible", "stdinput": "22\n3" },
    { "id": 2, "input": [], "expected": "Need more experience", "stdinput": "20\n1" },
    { "id": 3, "input": [], "expected": "Not eligible due to age", "stdinput": "16\n4" },
    { "id": 4, "input": [], "expected": "Eligible", "stdinput": "25\n2" },
    { "id": 5, "input": [], "expected": "Not eligible due to age", "stdinput": "17\n5" },
  ],

  "templates": {
    "python": "age = int(input())\nexperience = int(input())\n\nif age >= 18:\n    if experience >= 2:\n        print(\"Eligible\")\n    else:\n        print(\"Need more experience\")\nelse:\n    print(\"Not eligible due to age\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        int experience = scanner.nextInt();\n        \n        if (age >= 18) {\n            if (experience >= 2) {\n                System.out.println(\"Eligible\");\n            } else {\n                System.out.println(\"Need more experience\");\n            }\n        } else {\n            System.out.println(\"Not eligible due to age\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [age, experience] = input;\n        \n        if (age >= 18) {\n            if (experience >= 2) {\n                console.log(\"Eligible\");\n            } else {\n                console.log(\"Need more experience\");\n            }\n        } else {\n            console.log(\"Not eligible due to age\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int age, experience;\n    std::cin >> age >> experience;\n    \n    if (age >= 18) {\n        if (experience >= 2) {\n            std::cout << \"Eligible\" << std::endl;\n        } else {\n            std::cout << \"Need more experience\" << std::endl;\n        }\n    } else {\n        std::cout << \"Not eligible due to age\" << std::endl;\n    }\n    return 0;\n}"
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