module.exports = {
  "title": "Cinema Ticket Pricing",
  "difficulty": "Medium",
  "acceptance": "84%",

  "description": `
    <p>Calculate movie ticket prices based on age and student status using nested conditional logic.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Read student status as string input ("yes" or "no")</li>
      <li>Apply tiered pricing with special consideration for adult students</li>
      <li>Print the appropriate ticket type and price</li>
    </ul>
    <p><b>Pricing Structure:</b></p>
    <ul>
      <li><b>Age < 12:</b> Child Ticket → 100</li>
      <li><b>Age 12-17:</b> Student Ticket → 150</li>
      <li><b>Age ≥ 18:</b> Adult pricing with student discount</li>
      <ul>
        <li>Student → Adult Student Ticket: 180</li>
        <li>Non-student → Adult Ticket: 200</li>
      </ul>
    </ul>
    <p>This problem teaches nested conditional logic for tiered pricing systems with special cases and discount eligibility.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
20
yes
Output: Adult Student Ticket: 180</pre>
    <p><b>Explanation:</b> Age 20 ≥ 18 and student status "yes", so adult student price applies.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
10
no
Output: Child Ticket: 100</pre>
    <p><b>Explanation:</b> Age 10 < 12, so child price applies regardless of student status.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
15
yes
Output: Student Ticket: 150</pre>
    <p><b>Explanation:</b> Age 15 falls in 12-17 range, so standard student price applies.</p>
  `,

  "conditions": `
    <ul>
      <li>Age input will be an integer between 1 and 100</li>
      <li>Student status will be either "yes" or "no" (lowercase)</li>
      <li>Use nested if-else statements</li>
      <li>Check age ranges first, then student status for adults</li>
      <li>Output format must match exactly with ticket type and price</li>
      <li>Age ranges: <12 (child), 12-17 (student), ≥18 (adult)</li>
      <li>Student status only affects pricing for adults (≥18)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Adult Student Ticket: 180", "stdinput": "20\nyes" },
    { "id": 2, "input": [], "expected": "Child Ticket: 100", "stdinput": "10\nno" },
    { "id": 3, "input": [], "expected": "Student Ticket: 150", "stdinput": "15\nyes" },
    { "id": 4, "input": [], "expected": "Adult Ticket: 200", "stdinput": "25\nno" },
    { "id": 5, "input": [], "expected": "Child Ticket: 100", "stdinput": "8\nyes" },
    { "id": 6, "input": [], "expected": "Student Ticket: 150", "stdinput": "17\nno" },
  ],

  "templates": {
    "python": "age = int(input())\nis_student = input()\n\nif age < 12:\n    print(\"Child Ticket: 100\")\nelif age <= 17:\n    print(\"Student Ticket: 150\")\nelse:\n    if is_student == \"yes\":\n        print(\"Adult Student Ticket: 180\")\n    else:\n        print(\"Adult Ticket: 200\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String is_student = scanner.nextLine();\n        \n        if (age < 12) {\n            System.out.println(\"Child Ticket: 100\");\n        } else if (age <= 17) {\n            System.out.println(\"Student Ticket: 150\");\n        } else {\n            if (is_student.equals(\"yes\")) {\n                System.out.println(\"Adult Student Ticket: 180\");\n            } else {\n                System.out.println(\"Adult Ticket: 200\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const age = parseInt(input[0]);\n        const is_student = input[1];\n        \n        if (age < 12) {\n            console.log(\"Child Ticket: 100\");\n        } else if (age <= 17) {\n            console.log(\"Student Ticket: 150\");\n        } else {\n            if (is_student === \"yes\") {\n                console.log(\"Adult Student Ticket: 180\");\n            } else {\n                console.log(\"Adult Ticket: 200\");\n            }\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    int age;\n    std::string is_student;\n    std::cin >> age >> is_student;\n    \n    if (age < 12) {\n        std::cout << \"Child Ticket: 100\" << std::endl;\n    } else if (age <= 17) {\n        std::cout << \"Student Ticket: 150\" << std::endl;\n    } else {\n        if (is_student == \"yes\") {\n            std::cout << \"Adult Student Ticket: 180\" << std::endl;\n        } else {\n            std::cout << \"Adult Ticket: 200\" << std::endl;\n        }\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "age = int(input())\nis_student = input()\n\nif age < 12:\n    print(\"Child Ticket: 100\")\nelif age <= 17:\n    print(\"Student Ticket: 150\")\nelse:\n    if is_student == \"yes\":\n        print(\"Adult Student Ticket: 180\")\n    else:\n        print(\"Adult Ticket: 200\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String is_student = scanner.nextLine();\n        \n        if (age < 12) {\n            System.out.println(\"Child Ticket: 100\");\n        } else if (age <= 17) {\n            System.out.println(\"Student Ticket: 150\");\n        } else {\n            if (is_student.equals(\"yes\")) {\n                System.out.println(\"Adult Student Ticket: 180\");\n            } else {\n                System.out.println(\"Adult Ticket: 200\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const age = parseInt(input[0]);\n        const is_student = input[1];\n        \n        if (age < 12) {\n            console.log(\"Child Ticket: 100\");\n        } else if (age <= 17) {\n            console.log(\"Student Ticket: 150\");\n        } else {\n            if (is_student === \"yes\") {\n                console.log(\"Adult Student Ticket: 180\");\n            } else {\n                console.log(\"Adult Ticket: 200\");\n            }\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    int age;\n    std::string is_student;\n    std::cin >> age >> is_student;\n    \n    if (age < 12) {\n        std::cout << \"Child Ticket: 100\" << std::endl;\n    } else if (age <= 17) {\n        std::cout << \"Student Ticket: 150\" << std::endl;\n    } else {\n        if (is_student == \"yes\") {\n            std::cout << \"Adult Student Ticket: 180\" << std::endl;\n        } else {\n            std::cout << \"Adult Ticket: 200\" << std::endl;\n        }\n    }\n    return 0;\n}"
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