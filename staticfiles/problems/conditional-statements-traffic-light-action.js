module.exports = {
    "title": "Traffic Light Action",
    "difficulty": "medium",
    "acceptance": "92%",
  
    "description": `
      <p>Simulate a traffic light control system that determines the driver's action based on the traffic light color.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read the traffic light color as a string input</li>
        <li>Apply conditional logic to determine the appropriate action</li>
        <li>Print the specific action command</li>
      </ul>
      <p><b>Traffic Rules:</b></p>
      <ul>
        <li><b>If color is "Red":</b> Output <code>"Stop"</code></li>
        <li><b>If color is "Yellow":</b> Output <code>"Get Ready"</code></li>
        <li><b>If color is "Green":</b> Output <code>"Go"</code></li>
        <li><b>For any other input:</b> Output <code>"Invalid Color"</code></li>
      </ul>
      <p>This problem introduces basic string comparison and <code>if-elif-else</code> chains (or <code>switch</code> statements) to handle multiple discrete states.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: Red
Output: Stop</pre>
      <p><b>Explanation:</b> The light is Red, which requires the vehicle to stop immediately.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: Green
Output: Go</pre>
      <p><b>Explanation:</b> The light is Green, allowing the vehicle to proceed.</p>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input: Blue
Output: Invalid Color</pre>
      <p><b>Explanation:</b> "Blue" is not a standard traffic light color, so it falls into the else/default category.</p>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be a single word string</li>
        <li>Input is case-sensitive (assume input matches "Red", "Yellow", "Green" exactly for valid cases)</li>
        <li>Use conditional statements (if-else or switch)</li>
        <li>Output must match the specified action strings exactly</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Stop", "stdinput": "Red" },
      { "id": 2, "input": [], "expected": "Get Ready", "stdinput": "Yellow" },
      { "id": 3, "input": [], "expected": "Go", "stdinput": "Green" },
      { "id": 4, "input": [], "expected": "Invalid Color", "stdinput": "Blue" },
      { "id": 5, "input": [], "expected": "Invalid Color", "stdinput": "red" },
      { "id": 6, "input": [], "expected": "Stop", "stdinput": "Red" },
      { "id": 7, "input": [], "expected": "Invalid Color", "stdinput": "Purple" },
      { "id": 8, "input": [], "expected": "Get Ready", "stdinput": "Yellow" },
      { "id": 9, "input": [], "expected": "Go", "stdinput": "Green" },
      { "id": 10, "input": [], "expected": "Invalid Color", "stdinput": "orange" }
    ],
  
    "templates": {
      "python": "color = input()\n\nif color == \"Red\":\n    print(\"Stop\")\nelif color == \"Yellow\":\n    print(\"Get Ready\")\nelif color == \"Green\":\n    print(\"Go\")\nelse:\n    print(\"Invalid Color\")",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String color = scanner.next();\n        \n        if (color.equals(\"Red\")) {\n            System.out.println(\"Stop\");\n        } else if (color.equals(\"Yellow\")) {\n            System.out.println(\"Get Ready\");\n        } else if (color.equals(\"Green\")) {\n            System.out.println(\"Go\");\n        } else {\n            System.out.println(\"Invalid Color\");\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (color) => {\n    if (color === \"Red\") {\n        console.log(\"Stop\");\n    } else if (color === \"Yellow\") {\n        console.log(\"Get Ready\");\n    } else if (color === \"Green\") {\n        console.log(\"Go\");\n    } else {\n        console.log(\"Invalid Color\");\n    }\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string color;\n    std::cin >> color;\n    \n    if (color == \"Red\") {\n        std::cout << \"Stop\" << std::endl;\n    } else if (color == \"Yellow\") {\n        std::cout << \"Get Ready\" << std::endl;\n    } else if (color == \"Green\") {\n        std::cout << \"Go\" << std::endl;\n    } else {\n        std::cout << \"Invalid Color\" << std::endl;\n    }\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "color = input()\n\nif color == \"Red\":\n    print(\"Stop\")\nelif color == \"Yellow\":\n    print(\"Get Ready\")\nelif color == \"Green\":\n    print(\"Go\")\nelse:\n    print(\"Invalid Color\")",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String color = scanner.next();\n        \n        if (color.equals(\"Red\")) {\n            System.out.println(\"Stop\");\n        } else if (color.equals(\"Yellow\")) {\n            System.out.println(\"Get Ready\");\n        } else if (color.equals(\"Green\")) {\n            System.out.println(\"Go\");\n        } else {\n            System.out.println(\"Invalid Color\");\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (color) => {\n    if (color === \"Red\") {\n        console.log(\"Stop\");\n    } else if (color === \"Yellow\") {\n        console.log(\"Get Ready\");\n    } else if (color === \"Green\") {\n        console.log(\"Go\");\n    } else {\n        console.log(\"Invalid Color\");\n    }\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string color;\n    std::cin >> color;\n    \n    if (color == \"Red\") {\n        std::cout << \"Stop\" << std::endl;\n    } else if (color == \"Yellow\") {\n        std::cout << \"Get Ready\" << std::endl;\n    } else if (color == \"Green\") {\n        std::cout << \"Go\" << std::endl;\n    } else {\n        std::cout << \"Invalid Color\" << std::endl;\n    }\n    return 0;\n}"
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