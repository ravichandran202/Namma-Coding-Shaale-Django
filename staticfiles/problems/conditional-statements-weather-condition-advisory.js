module.exports = {
  "title": "Weather Condition Advisory",
  "difficulty": "hard",
  "acceptance": "83%",

  "description": `
    <p>Provide weather advisory based on temperature and rain conditions using nested conditional logic.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read temperature as integer input</li>
      <li>Read rain status as string input ("yes" or "no")</li>
      <li>Apply nested conditions to determine the weather advisory</li>
      <li>Print the appropriate weather description</li>
    </ul>
    <p><b>Weather Classification:</b></p>
    <ul>
      <li><b>Temperature > 30°C:</b> Hot weather</li>
      <ul>
        <li>With rain → "Hot and Humid"</li>
        <li>Without rain → "Hot"</li>
      </ul>
      <li><b>Temperature 15-30°C:</b> Moderate weather</li>
      <ul>
        <li>With rain → "Moderate with Rain"</li>
        <li>Without rain → "Pleasant"</li>
      </ul>
      <li><b>Temperature < 15°C:</b> Cold weather</li>
      <ul>
        <li>With rain → "Cold and Rainy"</li>
        <li>Without rain → "Cold"</li>
      </ul>
    </ul>
    <p>This problem teaches complex nested conditional logic with multiple interacting criteria for real-world scenario classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25
yes
Output: Moderate with Rain</pre>
    <p><b>Explanation:</b> Temperature 25°C (15-30 range) with rain, so "Moderate with Rain".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 35
no
Output: Hot</pre>
    <p><b>Explanation:</b> Temperature 35°C (>30) without rain, so "Hot".</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 10
yes
Output: Cold and Rainy</pre>
    <p><b>Explanation:</b> Temperature 10°C (<15) with rain, so "Cold and Rainy".</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 20
no
Output: Pleasant</pre>
    <p><b>Explanation:</b> Temperature 20°C (15-30 range) without rain, so "Pleasant".</p>
  `,

  "conditions": `
    <ul>
      <li>Temperature input will be an integer between -20 and 50</li>
      <li>Rain status will be either "yes" or "no" (lowercase)</li>
      <li>Use nested if-else statements</li>
      <li>Check temperature ranges first, then rain condition</li>
      <li>Output must be exactly one of: "Hot and Humid", "Hot", "Moderate with Rain", "Pleasant", "Cold and Rainy", "Cold"</li>
      <li>Temperature ranges: >30 (hot), 15-30 (moderate), <15 (cold)</li>
      <li>Rain status is case-sensitive</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Moderate with Rain", "stdinput": "25\nyes" },
    { "id": 2, "input": [], "expected": "Hot", "stdinput": "35\nno" },
    { "id": 3, "input": [], "expected": "Cold and Rainy", "stdinput": "10\nyes" },
    { "id": 4, "input": [], "expected": "Pleasant", "stdinput": "20\nno" },
    { "id": 5, "input": [], "expected": "Hot and Humid", "stdinput": "32\nyes" },
    { "id": 6, "input": [], "expected": "Cold", "stdinput": "5\nno" },
    { "id": 7, "input": [], "expected": "Moderate with Rain", "stdinput": "15\nyes" },
    { "id": 8, "input": [], "expected": "Pleasant", "stdinput": "30\nno" },
    { "id": 9, "input": [], "expected": "Hot and Humid", "stdinput": "40\nyes" },
    { "id": 10, "input": [], "expected": "Cold and Rainy", "stdinput": "0\nyes" }
  ],

  "templates": {
    "python": "temperature = int(input())\nis_raining = input()\n\nif temperature > 30:\n    if is_raining == \"yes\":\n        print(\"Hot and Humid\")\n    else:\n        print(\"Hot\")\nelif temperature >= 15:\n    if is_raining == \"yes\":\n        print(\"Moderate with Rain\")\n    else:\n        print(\"Pleasant\")\nelse:\n    if is_raining == \"yes\":\n        print(\"Cold and Rainy\")\n    else:\n        print(\"Cold\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int temperature = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String is_raining = scanner.nextLine();\n        \n        if (temperature > 30) {\n            if (is_raining.equals(\"yes\")) {\n                System.out.println(\"Hot and Humid\");\n            } else {\n                System.out.println(\"Hot\");\n            }\n        } else if (temperature >= 15) {\n            if (is_raining.equals(\"yes\")) {\n                System.out.println(\"Moderate with Rain\");\n            } else {\n                System.out.println(\"Pleasant\");\n            }\n        } else {\n            if (is_raining.equals(\"yes\")) {\n                System.out.println(\"Cold and Rainy\");\n            } else {\n                System.out.println(\"Cold\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const temperature = parseInt(input[0]);\n        const is_raining = input[1];\n        \n        if (temperature > 30) {\n            if (is_raining === \"yes\") {\n                console.log(\"Hot and Humid\");\n            } else {\n                console.log(\"Hot\");\n            }\n        } else if (temperature >= 15) {\n            if (is_raining === \"yes\") {\n                console.log(\"Moderate with Rain\");\n            } else {\n                console.log(\"Pleasant\");\n            }\n        } else {\n            if (is_raining === \"yes\") {\n                console.log(\"Cold and Rainy\");\n            } else {\n                console.log(\"Cold\");\n            }\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    int temperature;\n    std::string is_raining;\n    std::cin >> temperature >> is_raining;\n    \n    if (temperature > 30) {\n        if (is_raining == \"yes\") {\n            std::cout << \"Hot and Humid\" << std::endl;\n        } else {\n            std::cout << \"Hot\" << std::endl;\n        }\n    } else if (temperature >= 15) {\n        if (is_raining == \"yes\") {\n            std::cout << \"Moderate with Rain\" << std::endl;\n        } else {\n            std::cout << \"Pleasant\" << std::endl;\n        }\n    } else {\n        if (is_raining == \"yes\") {\n            std::cout << \"Cold and Rainy\" << std::endl;\n        } else {\n            std::cout << \"Cold\" << std::endl;\n        }\n    }\n    return 0;\n}"
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