module.exports = {
  "title": "Grade Calculator",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Assign grades based on marks:</p>
    <ul>
      <li>90+ → "A"</li>
      <li>80-89 → "B"</li>
      <li>70-79 → "C"</li>
      <li>Below 70 → "Fail"</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read marks as integer input</li>
      <li>Use if-elif-else ladder to assign grades</li>
      <li>Print the corresponding grade based on the marks</li>
    </ul>
    <p>This problem teaches multiple conditional branches using if-elif-else statements.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 85
Output: B</pre>
    <p><b>Explanation:</b> 85 falls in the 80-89 range, so grade "B" is assigned.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 92
Output: A</pre>
    <p><b>Explanation:</b> 92 is 90 or above, so grade "A" is assigned.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 65
Output: Fail</pre>
    <p><b>Explanation:</b> 65 is below 70, so "Fail" is assigned.</p>
  `,

  "conditions": `
    <ul>
      <li>Marks will be an integer between 0 and 100</li>
      <li>Grade ranges: A (90-100), B (80-89), C (70-79), Fail (0-69)</li>
      <li>Output must be exactly "A", "B", "C", or "Fail" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "B", "stdinput": "85" },
    { "id": 2, "input": [], "expected": "A", "stdinput": "92" },
    { "id": 3, "input": [], "expected": "Fail", "stdinput": "65" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "100" },
    { "id": 5, "input": [], "expected": "A", "stdinput": "90" },
    { "id": 6, "input": [], "expected": "B", "stdinput": "89" },
    { "id": 7, "input": [], "expected": "C", "stdinput": "79" },
    { "id": 8, "input": [], "expected": "Fail", "stdinput": "69" }
  ],

  "templates": {
    "python": `marks = int(input())\n\n# TODO: Assign grades based on marks and print the result\n# A (90+), B (80-89), C (70-79), Fail (below 70)\n`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        \n        // TODO: Assign grades based on marks and print the result\n        // A (90+), B (80-89), C (70-79), Fail (below 70)\n        \n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (marks) => {\n    const marksNum = parseInt(marks);\n    \n    // TODO: Assign grades based on marks and print the result\n    // A (90+), B (80-89), C (70-79), Fail (below 70)\n    \n    readline.close();
});`,
    "c++": `#include <iostream>\n\nint main() {\n    int marks;\n    std::cin >> marks;\n    \n    // TODO: Assign grades based on marks and print the result\n    // A (90+), B (80-89), C (70-79), Fail (below 70)\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `marks = int(input())\nif marks >= 90:\n    print(\"A\")\nelif marks >= 80:\n    print(\"B\")\nelif marks >= 70:\n    print(\"C\")\nelse:\n    print(\"Fail\")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        if (marks >= 90) {\n            System.out.println(\"A\");\n        } else if (marks >= 80) {\n            System.out.println(\"B\");\n        } else if (marks >= 70) {\n            System.out.println(\"C\");\n        } else {\n            System.out.println(\"Fail\");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (marks) => {\n    const marksNum = parseInt(marks);\n    if (marksNum >= 90) {\n        console.log(\"A\");\n    } else if (marksNum >= 80) {\n        console.log(\"B\");\n    } else if (marksNum >= 70) {\n        console.log(\"C\");\n    } else {\n        console.log(\"Fail\");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int marks;\n    std::cin >> marks;\n    if (marks >= 90) {\n        std::cout << \"A\" << std::endl;\n    } else if (marks >= 80) {\n        std::cout << \"B\" << std::endl;\n    } else if (marks >= 70) {\n        std::cout << \"C\" << std::endl;\n    } else {\n        std::cout << \"Fail\" << std::endl;\n    }\n    return 0;\n}`
  },

  "wrapCode": function (lang, userCode, input) {
    switch (lang) {
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