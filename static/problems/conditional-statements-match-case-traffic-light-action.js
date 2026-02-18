module.exports = {
  "title": "Traffic Light Action",
  "difficulty": "Medium",
  "acceptance": "89%",

  "description": `
    <p>Provide appropriate driving actions based on traffic light colors using pattern matching.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read traffic light color as string input</li>
      <li>Use match-case statement to determine the appropriate action</li>
      <li>Handle invalid color inputs gracefully</li>
    </ul>
    <p><b>Traffic Light Actions:</b></p>
    <ul>
      <li>Red    → <code> "Stop"</code></li>
      <li>Yellow → <code> "Slow Down"</code></li>
      <li>Green  → <code> "Go"</code></li>
      <li>Any other color → <code> "Invalid color"</code></li>
    </ul>
    <p>This problem teaches pattern matching for simple state-based decision making and input validation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Green
Output: Go</pre>
    <p><b>Explanation:</b> "Green" light indicates it's safe to proceed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Red
Output: Stop</pre>
    <p><b>Explanation:</b> "Red" light requires complete stop.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a string representing traffic light color</li>
      <li>Color names are case-sensitive (capitalized first letter)</li>
      <li>Use match-case statement (Python 3.10+) or switch-case equivalent</li>
      <li>Output must be exactly one of: "Stop", "Slow Down", "Go", or "Invalid color"</li>
      <li>Handle exactly three valid colors and any invalid input</li>
      <li>Valid colors: Red, Yellow, Green</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Go", "stdinput": "Green" },
    { "id": 2, "input": [], "expected": "Stop", "stdinput": "Red" },
    { "id": 3, "input": [], "expected": "Slow Down", "stdinput": "Yellow" },
    { "id": 4, "input": [], "expected": "Invalid color", "stdinput": "Blue" },
    { "id": 5, "input": [], "expected": "Invalid color", "stdinput": "green" },
  ],

  "templates": {
    "python": "light = input()\n\nmatch light:\n    case \"Red\":\n        print(\"Stop\")\n    case \"Yellow\":\n        print(\"Slow Down\")\n    case \"Green\":\n        print(\"Go\")\n    case _:\n        print(\"Invalid color\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String light = scanner.nextLine();\n        \n        switch (light) {\n            case \"Red\":\n                System.out.println(\"Stop\");\n                break;\n            case \"Yellow\":\n                System.out.println(\"Slow Down\");\n                break;\n            case \"Green\":\n                System.out.println(\"Go\");\n                break;\n            default:\n                System.out.println(\"Invalid color\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (light) => {\n    switch (light) {\n        case \"Red\":\n            console.log(\"Stop\");\n            break;\n        case \"Yellow\":\n            console.log(\"Slow Down\");\n            break;\n        case \"Green\":\n            console.log(\"Go\");\n            break;\n        default:\n            console.log(\"Invalid color\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string light;\n    std::getline(std::cin, light);\n    \n    if (light == \"Red\") {\n        std::cout << \"Stop\" << std::endl;\n    } else if (light == \"Yellow\") {\n        std::cout << \"Slow Down\" << std::endl;\n    } else if (light == \"Green\") {\n        std::cout << \"Go\" << std::endl;\n    } else {\n        std::cout << \"Invalid color\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "light = input()\n\nmatch light:\n    case \"Red\":\n        print(\"Stop\")\n    case \"Yellow\":\n        print(\"Slow Down\")\n    case \"Green\":\n        print(\"Go\")\n    case _:\n        print(\"Invalid color\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String light = scanner.nextLine();\n        \n        switch (light) {\n            case \"Red\":\n                System.out.println(\"Stop\");\n                break;\n            case \"Yellow\":\n                System.out.println(\"Slow Down\");\n                break;\n            case \"Green\":\n                System.out.println(\"Go\");\n                break;\n            default:\n                System.out.println(\"Invalid color\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (light) => {\n    switch (light) {\n        case \"Red\":\n            console.log(\"Stop\");\n            break;\n        case \"Yellow\":\n            console.log(\"Slow Down\");\n            break;\n        case \"Green\":\n            console.log(\"Go\");\n            break;\n        default:\n            console.log(\"Invalid color\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string light;\n    std::getline(std::cin, light);\n    \n    if (light == \"Red\") {\n        std::cout << \"Stop\" << std::endl;\n    } else if (light == \"Yellow\") {\n        std::cout << \"Slow Down\" << std::endl;\n    } else if (light == \"Green\") {\n        std::cout << \"Go\" << std::endl;\n    } else {\n        std::cout << \"Invalid color\" << std::endl;\n    }\n    return 0;\n}"
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