module.exports = {
  "title": "Tiered Billing System",
  "difficulty": "hard",
  "acceptance": "77%",

  "description": `
    <p>Calculate electricity bill based on a tiered pricing system.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read units of electricity consumed as input</li>
      <li>Calculate bill based on tiered pricing structure</li>
      <li>Print the total bill amount</li>
    </ul>
    <p><b>Pricing Tiers:</b></p>
    <ul>
      <li>First 100 units: ₹5 per unit</li>
      <li>Next 100 units (101-200): ₹6 per unit</li>
      <li>Above 200 units: ₹7 per unit</li>
    </ul>
    <p>This problem teaches tiered calculations and progressive pricing logic commonly used in utility billing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 250
Output: Bill: ₹ 1450</pre>
    <p><b>Explanation:</b> 100×5 + 100×6 + 50×7 = 500 + 600 + 350 = 1450</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 80
Output: Bill: ₹ 400</pre>
    <p><b>Explanation:</b> 80 × 5 = 400 (all units in first tier)</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer representing units consumed</li>
      <li>Units will be between 1 and 1000</li>
      <li>Use the exact tiered pricing structure specified</li>
      <li>Output format must be exactly: "Bill: ₹ X" (with space after ₹)</li>
      <li>Calculate bill as integer value</li>
      <li>Apply tiers progressively (first 100, next 100, then remaining)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Bill: 1450", "stdinput": "250" },
    { "id": 2, "input": [], "expected": "Bill: 400", "stdinput": "80" },
    { "id": 3, "input": [], "expected": "Bill: 800", "stdinput": "150" },
    { "id": 4, "input": [], "expected": "Bill: 1800", "stdinput": "300" },
    { "id": 5, "input": [], "expected": "Bill: 500", "stdinput": "100" },
    { "id": 6, "input": [], "expected": "Bill: 1100", "stdinput": "200" },
    { "id": 7, "input": [], "expected": "Bill: 50", "stdinput": "10" },
  ],

  "templates": {
    "python": "units = int(input())\n\nif units <= 100:\n    bill = units * 5\nelif units <= 200:\n    bill = 100 * 5 + (units - 100) * 6\nelse:\n    bill = 100 * 5 + 100 * 6 + (units - 200) * 7\n\nprint(\"Bill:\", bill)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int units = scanner.nextInt();\n        int bill;\n        \n        if (units <= 100) {\n            bill = units * 5;\n        } else if (units <= 200) {\n            bill = 100 * 5 + (units - 100) * 6;\n        } else {\n            bill = 100 * 5 + 100 * 6 + (units - 200) * 7;\n        }\n        \n        System.out.println(\"Bill: ₹ \" + bill);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (units) => {\n    const unitsNum = parseInt(units);\n    let bill;\n    \n    if (unitsNum <= 100) {\n        bill = unitsNum * 5;\n    } else if (unitsNum <= 200) {\n        bill = 100 * 5 + (unitsNum - 100) * 6;\n    } else {\n        bill = 100 * 5 + 100 * 6 + (unitsNum - 200) * 7;\n    }\n    \n    console.log(\"Bill: ₹ \" + bill);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int units;\n    std::cin >> units;\n    int bill;\n    \n    if (units <= 100) {\n        bill = units * 5;\n    } else if (units <= 200) {\n        bill = 100 * 5 + (units - 100) * 6;\n    } else {\n        bill = 100 * 5 + 100 * 6 + (units - 200) * 7;\n    }\n    \n    std::cout << \"Bill: ₹ \" << bill << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "units = int(input())\n\nif units <= 100:\n    bill = units * 5\nelif units <= 200:\n    bill = 100 * 5 + (units - 100) * 6\nelse:\n    bill = 100 * 5 + 100 * 6 + (units - 200) * 7\n\nprint(\"Bill:\", bill)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int units = scanner.nextInt();\n        int bill;\n        \n        if (units <= 100) {\n            bill = units * 5;\n        } else if (units <= 200) {\n            bill = 100 * 5 + (units - 100) * 6;\n        } else {\n            bill = 100 * 5 + 100 * 6 + (units - 200) * 7;\n        }\n        \n        System.out.println(\"Bill: ₹ \" + bill);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (units) => {\n    const unitsNum = parseInt(units);\n    let bill;\n    \n    if (unitsNum <= 100) {\n        bill = unitsNum * 5;\n    } else if (unitsNum <= 200) {\n        bill = 100 * 5 + (unitsNum - 100) * 6;\n    } else {\n        bill = 100 * 5 + 100 * 6 + (unitsNum - 200) * 7;\n    }\n    \n    console.log(\"Bill: ₹ \" + bill);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int units;\n    std::cin >> units;\n    int bill;\n    \n    if (units <= 100) {\n        bill = units * 5;\n    } else if (units <= 200) {\n        bill = 100 * 5 + (units - 100) * 6;\n    } else {\n        bill = 100 * 5 + 100 * 6 + (units - 200) * 7;\n    }\n    \n    std::cout << \"Bill: ₹ \" << bill << std::endl;\n    return 0;\n}"
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