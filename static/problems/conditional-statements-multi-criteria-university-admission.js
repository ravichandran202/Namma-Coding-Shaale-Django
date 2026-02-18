module.exports = {
  "title": "Multi-Criteria University Admission",
  "difficulty": "Hard",
  "acceptance": "65%",

  "description": `
    <p>A prestigious university has a multi-level admission process. Determine a student's admission status based on their academic performance and entrance exam score.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read 12th grade percentage as floating-point input</li>
      <li>Read entrance exam percentage as floating-point input</li>
      <li>Apply multi-level conditional logic for admission evaluation</li>
      <li>Provide specific admission status based on the criteria</li>
    </ul>
    <p><b>Admission Criteria:</b></p>
    <ul>
      <li><b>Primary Requirement:</b> Must have scored 90% or more in 12th grade</li>
      <li><b>If primary requirement is met:</b> Evaluate based on entrance exam score:</li>
      <ul>
        <li>95% or higher → "Direct Admission"</li>
        <li>85% to 94% → "Waitlist"</li>
        <li>Below 85% → "Rejected - Low Entrance Score"</li>
      </ul>
      <li><b>If primary requirement is not met:</b> "Rejected - Academic Criteria"</li>
    </ul>
    <p>This problem teaches complex nested conditional logic for real-world admission systems with multiple evaluation criteria and specific rejection reasons.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 92.5
96.0
Output: Direct Admission</pre>
    <p><b>Explanation:</b> 12th grade 92.5% ≥ 90% (primary requirement met) and entrance score 96.0% ≥ 95%, so "Direct Admission".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 91.0
88.0
Output: Waitlist</pre>
    <p><b>Explanation:</b> 12th grade 91.0% ≥ 90% and entrance score 88.0% falls in 85-94% range, so "Waitlist".</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 95.0
82.0
Output: Rejected - Low Entrance Score</pre>
    <p><b>Explanation:</b> 12th grade 95.0% ≥ 90% but entrance score 82.0% < 85%, so rejected for low entrance score.</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 89.5
98.0
Output: Rejected - Academic Criteria</pre>
    <p><b>Explanation:</b> 12th grade 89.5% < 90%, so immediately rejected regardless of excellent entrance score.</p>
  `,

  "conditions": `
    <ul>
      <li>12th grade percentage will be a floating-point number between 0.0 and 100.0</li>
      <li>Entrance exam percentage will be a floating-point number between 0.0 and 100.0</li>
      <li>Use nested if-else statements</li>
      <li>Check 12th grade requirement first, then entrance exam criteria</li>
      <li>Output must be exactly one of: "Direct Admission", "Waitlist", "Rejected - Low Entrance Score", "Rejected - Academic Criteria"</li>
      <li>Use inclusive ranges for all comparisons (≥ for lower bounds)</li>
      <li>Primary requirement is strict: must have 90% or above in 12th grade</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Direct Admission", "stdinput": "92.5\n96.0" },
    { "id": 2, "input": [], "expected": "Waitlist", "stdinput": "91.0\n88.0" },
    { "id": 3, "input": [], "expected": "Rejected - Low Entrance Score", "stdinput": "95.0\n82.0" },
    { "id": 4, "input": [], "expected": "Rejected - Academic Criteria", "stdinput": "89.5\n98.0" },
    { "id": 5, "input": [], "expected": "Direct Admission", "stdinput": "90.0\n95.0" },
    { "id": 6, "input": [], "expected": "Waitlist", "stdinput": "93.0\n85.0" },
    { "id": 7, "input": [], "expected": "Rejected - Low Entrance Score", "stdinput": "97.0\n84.9" },
    { "id": 8, "input": [], "expected": "Rejected - Academic Criteria", "stdinput": "89.9\n99.9" },
    { "id": 9, "input": [], "expected": "Direct Admission", "stdinput": "100.0\n100.0" },
    { "id": 10, "input": [], "expected": "Waitlist", "stdinput": "92.0\n94.0" }
  ],

  "templates": {
    "python": "grade_12 = float(input())\nentrance_score = float(input())\n\nif grade_12 >= 90:\n    if entrance_score >= 95:\n        print(\"Direct Admission\")\n    elif entrance_score >= 85:\n        print(\"Waitlist\")\n    else:\n        print(\"Rejected - Low Entrance Score\")\nelse:\n    print(\"Rejected - Academic Criteria\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double grade_12 = scanner.nextDouble();\n        double entrance_score = scanner.nextDouble();\n        \n        if (grade_12 >= 90) {\n            if (entrance_score >= 95) {\n                System.out.println(\"Direct Admission\");\n            } else if (entrance_score >= 85) {\n                System.out.println(\"Waitlist\");\n            } else {\n                System.out.println(\"Rejected - Low Entrance Score\");\n            }\n        } else {\n            System.out.println(\"Rejected - Academic Criteria\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseFloat(line));\n    if (input.length === 2) {\n        const [grade_12, entrance_score] = input;\n        \n        if (grade_12 >= 90) {\n            if (entrance_score >= 95) {\n                console.log(\"Direct Admission\");\n            } else if (entrance_score >= 85) {\n                console.log(\"Waitlist\");\n            } else {\n                console.log(\"Rejected - Low Entrance Score\");\n            }\n        } else {\n            console.log(\"Rejected - Academic Criteria\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    double grade_12, entrance_score;\n    std::cin >> grade_12 >> entrance_score;\n    \n    if (grade_12 >= 90) {\n        if (entrance_score >= 95) {\n            std::cout << \"Direct Admission\" << std::endl;\n        } else if (entrance_score >= 85) {\n            std::cout << \"Waitlist\" << std::endl;\n        } else {\n            std::cout << \"Rejected - Low Entrance Score\" << std::endl;\n        }\n    } else {\n        std::cout << \"Rejected - Academic Criteria\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "grade_12 = float(input())\nentrance_score = float(input())\n\nif grade_12 >= 90:\n    if entrance_score >= 95:\n        print(\"Direct Admission\")\n    elif entrance_score >= 85:\n        print(\"Waitlist\")\n    else:\n        print(\"Rejected - Low Entrance Score\")\nelse:\n    print(\"Rejected - Academic Criteria\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double grade_12 = scanner.nextDouble();\n        double entrance_score = scanner.nextDouble();\n        \n        if (grade_12 >= 90) {\n            if (entrance_score >= 95) {\n                System.out.println(\"Direct Admission\");\n            } else if (entrance_score >= 85) {\n                System.out.println(\"Waitlist\");\n            } else {\n                System.out.println(\"Rejected - Low Entrance Score\");\n            }\n        } else {\n            System.out.println(\"Rejected - Academic Criteria\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseFloat(line));\n    if (input.length === 2) {\n        const [grade_12, entrance_score] = input;\n        \n        if (grade_12 >= 90) {\n            if (entrance_score >= 95) {\n                console.log(\"Direct Admission\");\n            } else if (entrance_score >= 85) {\n                console.log(\"Waitlist\");\n            } else {\n                console.log(\"Rejected - Low Entrance Score\");\n            }\n        } else {\n            console.log(\"Rejected - Academic Criteria\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    double grade_12, entrance_score;\n    std::cin >> grade_12 >> entrance_score;\n    \n    if (grade_12 >= 90) {\n        if (entrance_score >= 95) {\n            std::cout << \"Direct Admission\" << std::endl;\n        } else if (entrance_score >= 85) {\n            std::cout << \"Waitlist\" << std::endl;\n        } else {\n            std::cout << \"Rejected - Low Entrance Score\" << std::endl;\n        }\n    } else {\n        std::cout << \"Rejected - Academic Criteria\" << std::endl;\n    }\n    return 0;\n}"
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