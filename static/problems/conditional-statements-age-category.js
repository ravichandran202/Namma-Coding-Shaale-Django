module.exports = {
  "title": "Age Category",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Classify a person's age into different categories based on the following ranges:</p>
    <ul>
      <li>0-12 years → "Child"</li>
      <li>13-19 years → "Teenager"</li>
      <li>20-59 years → "Adult"</li>
      <li>60 years and above → "Senior"</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Use if-elif-else ladder to categorize the age</li>
      <li>Print the corresponding age category</li>
    </ul>
    <p>This problem teaches multiple conditional branches and age-based classification using if-elif-else statements.</p>
    <p><b>Note:</b> The age ranges are inclusive. For example, 12 is considered a Child, 19 is considered a Teenager, and 59 is considered an Adult.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25
Output: Adult</pre>
    <p><b>Explanation:</b> 25 falls in the 20-59 range, so category "Adult" is assigned.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 15
Output: Teenager</pre>
    <p><b>Explanation:</b> 15 falls in the 13-19 range, so category "Teenager" is assigned.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 8
Output: Child</pre>
    <p><b>Explanation:</b> 8 falls in the 0-12 range, so category "Child" is assigned.</p>
    
    <h3>Example 4</h3>
    <pre class="constraints">Input: 65
Output: Senior</pre>
    <p><b>Explanation:</b> 65 is 60 or above, so category "Senior" is assigned.</p>
  `,

  "conditions": `
    <ul>
      <li>Age will be a non-negative integer between 0 and 120</li>
      <li>Age categories: Child (0-12), Teenager (13-19), Adult (20-59), Senior (60+)</li>
      <li>All ranges are inclusive</li>
      <li>Output must be exactly "Child", "Teenager", "Adult", or "Senior" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Adult", "stdinput": "25" },
    { "id": 2, "input": [], "expected": "Teenager", "stdinput": "15" },
    { "id": 3, "input": [], "expected": "Child", "stdinput": "8" },
    { "id": 4, "input": [], "expected": "Senior", "stdinput": "65" },
    { "id": 5, "input": [], "expected": "Child", "stdinput": "0" },
    { "id": 6, "input": [], "expected": "Child", "stdinput": "12" },
    { "id": 7, "input": [], "expected": "Teenager", "stdinput": "13" },
    { "id": 8, "input": [], "expected": "Teenager", "stdinput": "19" },
    { "id": 9, "input": [], "expected": "Adult", "stdinput": "20" },
    { "id": 10, "input": [], "expected": "Adult", "stdinput": "59" }
  ],

  "templates": {
    "python": `age = int(input())\n\n# TODO: Classify the age into categories and print the result\n# Child (0-12), Teenager (13-19), Adult (20-59), Senior (60+)\n`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        \n        // TODO: Classify the age into categories and print the result\n        // Child (0-12), Teenager (13-19), Adult (20-59), Senior (60+)\n        \n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    \n    // TODO: Classify the age into categories and print the result\n    // Child (0-12), Teenager (13-19), Adult (20-59), Senior (60+)\n    \n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    \n    // TODO: Classify the age into categories and print the result\n    // Child (0-12), Teenager (13-19), Adult (20-59), Senior (60+)\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `age = int(input())\nif age <= 12:\n    print("Child")\nelif age <= 19:\n    print("Teenager")\nelif age <= 59:\n    print("Adult")\nelse:\n    print("Senior")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        if (age <= 12) {\n            System.out.println("Child");\n        } else if (age <= 19) {\n            System.out.println("Teenager");\n        } else if (age <= 59) {\n            System.out.println("Adult");\n        } else {\n            System.out.println("Senior");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (age) => {\n    const ageNum = parseInt(age);\n    if (ageNum <= 12) {\n        console.log("Child");\n    } else if (ageNum <= 19) {\n        console.log("Teenager");\n    } else if (ageNum <= 59) {\n        console.log("Adult");\n    } else {\n        console.log("Senior");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int age;\n    std::cin >> age;\n    if (age <= 12) {\n        std::cout << "Child" << std::endl;\n    } else if (age <= 19) {\n        std::cout << "Teenager" << std::endl;\n    } else if (age <= 59) {\n        std::cout << "Adult" << std::endl;\n    } else {\n        std::cout << "Senior" << std::endl;\n    }\n    return 0;\n}`
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