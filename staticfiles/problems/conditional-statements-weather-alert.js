module.exports = {
  "title": "Weather Alert",
  "difficulty": "easy",
  "acceptance": "99.3%",

  "description": `
    <p>Give weather alerts based on temperature readings.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read temperature as integer input</li>
      <li>Classify temperature into weather categories</li>
      <li>Print the corresponding weather alert</li>
    </ul>
    <p><b>Temperature Categories:</b></p>
    <ul>
      <li>Above 35°C → "Hot"</li>
      <li>20°C to 35°C → "Pleasant"</li>
      <li>Below 20°C → "Cold"</li>
    </ul>
    <p>This problem teaches conditional statements for temperature-based classification and weather alerts.</p>
    <p><b>Note:</b> The temperature ranges are inclusive. For example, 35 is considered Hot, 20 is considered Pleasant, and 19 is considered Cold.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25
Output: Pleasant</pre>
    <p><b>Explanation:</b> 25°C falls in the 20-35°C range, so "Pleasant" weather is reported.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 38
Output: Hot</pre>
    <p><b>Explanation:</b> 38°C is above 35°C, so "Hot" weather alert is issued.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 15
Output: Cold</pre>
    <p><b>Explanation:</b> 15°C is below 20°C, so "Cold" weather alert is issued.</p>
  `,

  "conditions": `
    <ul>
      <li>Temperature will be an integer between -50 and 50</li>
      <li>Temperature categories: Hot (>35), Pleasant (20-35), Cold (<20)</li>
      <li>All ranges are inclusive as per the problem description</li>
      <li>Output must be exactly "Hot", "Pleasant", or "Cold" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Pleasant", "stdinput": "25" },
    { "id": 2, "input": [], "expected": "Hot", "stdinput": "38" },
    { "id": 3, "input": [], "expected": "Cold", "stdinput": "15" },
    { "id": 4, "input": [], "expected": "Hot", "stdinput": "36" },
    { "id": 5, "input": [], "expected": "Pleasant", "stdinput": "35" },
    { "id": 6, "input": [], "expected": "Pleasant", "stdinput": "20" },
  ],

  "templates": {
    "python": `temp = int(input())\nif temp > 35:\n    print("Hot")\nelif temp >= 20:\n    print("Pleasant")\nelse:\n    print("Cold")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int temp = scanner.nextInt();\n        if (temp > 35) {\n            System.out.println("Hot");\n        } else if (temp >= 20) {\n            System.out.println("Pleasant");\n        } else {\n            System.out.println("Cold");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (temp) => {\n    const tempNum = parseInt(temp);\n    if (tempNum > 35) {\n        console.log("Hot");\n    } else if (tempNum >= 20) {\n        console.log("Pleasant");\n    } else {\n        console.log("Cold");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int temp;\n    std::cin >> temp;\n    if (temp > 35) {\n        std::cout << "Hot" << std::endl;\n    } else if (temp >= 20) {\n        std::cout << "Pleasant" << std::endl;\n    } else {\n        std::cout << "Cold" << std::endl;\n    }\n    return 0;\n}`
  },


  "solutions": {
    "python": `temp = int(input())\nif temp > 35:\n    print("Hot")\nelif temp >= 20:\n    print("Pleasant")\nelse:\n    print("Cold")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int temp = scanner.nextInt();\n        if (temp > 35) {\n            System.out.println("Hot");\n        } else if (temp >= 20) {\n            System.out.println("Pleasant");\n        } else {\n            System.out.println("Cold");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (temp) => {\n    const tempNum = parseInt(temp);\n    if (tempNum > 35) {\n        console.log("Hot");\n    } else if (tempNum >= 20) {\n        console.log("Pleasant");\n    } else {\n        console.log("Cold");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int temp;\n    std::cin >> temp;\n    if (temp > 35) {\n        std::cout << "Hot" << std::endl;\n    } else if (temp >= 20) {\n        std::cout << "Pleasant" << std::endl;\n    } else {\n        std::cout << "Cold" << std::endl;\n    }\n    return 0;\n}`
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