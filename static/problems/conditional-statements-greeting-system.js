module.exports = {
  "title": "Smart Greeting System",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Provide appropriate greetings based on the time of day using a 24-hour format.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer representing hour in 24-hour format</li>
      <li>Determine the appropriate time period</li>
      <li>Print the corresponding greeting</li>
    </ul>
    <p><b>Time Periods and Greetings:</b></p>
    <ul>
      <li>5:00 - 11:59 →  <code>"Good Morning"</code></li>
      <li>12:00 - 16:59 → <code>"Good Afternoon"</code></li>
      <li>17:00 - 20:59 → <code>"Good Evening"</code></li>
      <li>21:00 - 4:59 →  <code>"Good Night"</code></li>
    </ul>
    <p>This problem teaches range-based conditional logic and time period classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 14
Output: Good Afternoon</pre>
    <p><b>Explanation:</b> 14:00 (2 PM) falls in the afternoon period (12-16), so "Good Afternoon" is printed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 8
Output: Good Morning</pre>
    <p><b>Explanation:</b> 8:00 (8 AM) falls in the morning period (5-11), so "Good Morning" is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer representing hour in 24-hour format</li>
      <li>Hour will be between 0 and 23</li>
      <li>Consider inclusive ranges for each time period</li>
      <li>Output must be exactly one of: "Good Morning", "Good Afternoon", "Good Evening", "Good Night"</li>
      <li>The night period wraps around midnight (21-4)</li>
      <li>Assume integer hours only (no minutes)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Good Afternoon", "stdinput": "14" },
    { "id": 2, "input": [], "expected": "Good Morning", "stdinput": "8" },
    { "id": 3, "input": [], "expected": "Good Evening", "stdinput": "19" },
    { "id": 4, "input": [], "expected": "Good Night", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "Good Morning", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "Good Night", "stdinput": "0" }
  ],

  "templates": {
    "python": "time = int(input())\n\nif time >= 5 and time <= 11:\n    print(\"Good Morning\")\nelif time >= 12 and time <= 16:\n    print(\"Good Afternoon\")\nelif time >= 17 and time <= 20:\n    print(\"Good Evening\")\nelse:\n    print(\"Good Night\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int time = scanner.nextInt();\n        \n        if (time >= 5 && time <= 11) {\n            System.out.println(\"Good Morning\");\n        } else if (time >= 12 && time <= 16) {\n            System.out.println(\"Good Afternoon\");\n        } else if (time >= 17 && time <= 20) {\n            System.out.println(\"Good Evening\");\n        } else {\n            System.out.println(\"Good Night\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (time) => {\n    const hour = parseInt(time);\n    if (hour >= 5 && hour <= 11) {\n        console.log(\"Good Morning\");\n    } else if (hour >= 12 && hour <= 16) {\n        console.log(\"Good Afternoon\");\n    } else if (hour >= 17 && hour <= 20) {\n        console.log(\"Good Evening\");\n    } else {\n        console.log(\"Good Night\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int time;\n    std::cin >> time;\n    \n    if (time >= 5 && time <= 11) {\n        std::cout << \"Good Morning\" << std::endl;\n    } else if (time >= 12 && time <= 16) {\n        std::cout << \"Good Afternoon\" << std::endl;\n    } else if (time >= 17 && time <= 20) {\n        std::cout << \"Good Evening\" << std::endl;\n    } else {\n        std::cout << \"Good Night\" << std::endl;\n    }\n    return 0;\n}"
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