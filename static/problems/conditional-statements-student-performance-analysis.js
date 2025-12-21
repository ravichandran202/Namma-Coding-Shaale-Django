module.exports = {
  "title": "Student Performance Analysis",
  "difficulty": "hard",
  "acceptance": "85%",

  "description": `
    <p>Analyze student performance based on a combination of academic marks and attendance percentage.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read marks (percentage) as integer input</li>
      <li>Read attendance percentage as integer input</li>
      <li>Apply nested conditional logic to determine performance category</li>
      <li>Print the appropriate performance analysis</li>
    </ul>
    <p><b>Performance Criteria:</b></p>
    <ul>
      <li><b>If attendance ≥ 75%:</b> Categorize based on marks:</li>
      <ul>
        <li>Marks ≥ 90 → <code>"Excellent"</code></li>
        <li>Marks ≥ 75 → <code>"Good"</code></li>
        <li>Marks ≥ 50 → <code>"Average"</code></li>
        <li>Marks < 50 → <code>"Poor"</code></li>
      </ul>
      <li><b>If attendance < 75%:</b> Always <code>"Needs Improvement"</code> regardless of marks</li>
    </ul>
    <p>This problem teaches complex nested conditional logic and demonstrates how multiple criteria interact in decision making systems.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 85
80
Output: Good</pre>
    <p><b>Explanation:</b> Attendance 80% ≥ 75%, and marks 85 ≥ 75 but < 90, so categorized as "Good".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 92
70
Output: Needs Improvement</pre>
    <p><b>Explanation:</b> Despite high marks (92%), attendance 70% < 75%, so automatically "Needs Improvement".</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 45
80
Output: Poor</pre>
    <p><b>Explanation:</b> Good attendance (80% ≥ 75%) but low marks (45 < 50), so categorized as "Poor".</p>
  `,

  "conditions": `
    <ul>
      <li>Marks input will be an integer between 0 and 100</li>
      <li>Attendance input will be an integer between 0 and 100</li>
      <li>Use nested if-else statements for the logic</li>
      <li>Check attendance condition first, then marks condition</li>
      <li>Output must be exactly one of: "Excellent", "Good", "Average", "Poor", "Needs Improvement"</li>
      <li>Low attendance overrides academic performance</li>
      <li>Use inclusive ranges for all comparisons</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Good", "stdinput": "85\n80" },
    { "id": 2, "input": [], "expected": "Needs Improvement", "stdinput": "92\n70" },
    { "id": 3, "input": [], "expected": "Poor", "stdinput": "45\n80" },
    { "id": 4, "input": [], "expected": "Excellent", "stdinput": "95\n90" },
    { "id": 5, "input": [], "expected": "Average", "stdinput": "65\n85" },
    { "id": 6, "input": [], "expected": "Needs Improvement", "stdinput": "30\n60" },
    { "id": 7, "input": [], "expected": "Good", "stdinput": "80\n75" },
    { "id": 8, "input": [], "expected": "Excellent", "stdinput": "90\n80" },
    { "id": 9, "input": [], "expected": "Needs Improvement", "stdinput": "100\n74" },
    { "id": 10, "input": [], "expected": "Average", "stdinput": "50\n90" }
  ],

  "templates": {
    "python": "marks = int(input())\nattendance = int(input())\n\nif attendance >= 75:\n    if marks >= 90:\n        print(\"Excellent\")\n    elif marks >= 75:\n        print(\"Good\")\n    elif marks >= 50:\n        print(\"Average\")\n    else:\n        print(\"Poor\")\nelse:\n    print(\"Needs Improvement\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        int attendance = scanner.nextInt();\n        \n        if (attendance >= 75) {\n            if (marks >= 90) {\n                System.out.println(\"Excellent\");\n            } else if (marks >= 75) {\n                System.out.println(\"Good\");\n            } else if (marks >= 50) {\n                System.out.println(\"Average\");\n            } else {\n                System.out.println(\"Poor\");\n            }\n        } else {\n            System.out.println(\"Needs Improvement\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [marks, attendance] = input;\n        \n        if (attendance >= 75) {\n            if (marks >= 90) {\n                console.log(\"Excellent\");\n            } else if (marks >= 75) {\n                console.log(\"Good\");\n            } else if (marks >= 50) {\n                console.log(\"Average\");\n            } else {\n                console.log(\"Poor\");\n            }\n        } else {\n            console.log(\"Needs Improvement\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int marks, attendance;\n    std::cin >> marks >> attendance;\n    \n    if (attendance >= 75) {\n        if (marks >= 90) {\n            std::cout << \"Excellent\" << std::endl;\n        } else if (marks >= 75) {\n            std::cout << \"Good\" << std::endl;\n        } else if (marks >= 50) {\n            std::cout << \"Average\" << std::endl;\n        } else {\n            std::cout << \"Poor\" << std::endl;\n        }\n    } else {\n        std::cout << \"Needs Improvement\" << std::endl;\n    }\n    return 0;\n}"
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