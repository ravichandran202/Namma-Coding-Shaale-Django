module.exports = {
  "title": "Advanced Income Tax Calculation",
  "difficulty": "hard",
  "acceptance": "62%",

  "description": `
    <p>Create a program to calculate income tax based on a progressive tax system with special considerations for senior citizens.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read annual income as floating-point input</li>
      <li>Read senior citizen status as string input ("yes" or "no")</li>
      <li>Apply progressive tax slabs with different rates for senior citizens</li>
      <li>Calculate tax amount based on the applicable slab and citizen category</li>
      <li>Output the tax amount formatted to 2 decimal places</li>
    </ul>
    <p><b>Tax Slabs:</b></p>
    <ul>
      <li><b>Income ≤ 3,00,000:</b> No tax</li>
      <li><b>Income 3,00,001 - 6,00,000:</b></li>
      <ul>
        <li>Senior citizens: 5% tax</li>
        <li>Others: 10% tax</li>
      </ul>
      <li><b>Income 6,00,001 - 10,00,000:</b></li>
      <ul>
        <li>Senior citizens: 10% tax</li>
        <li>Others: 20% tax</li>
      </ul>
      <li><b>Income > 10,00,000:</b> 30% tax for all</li>
    </ul>
    <p>This problem teaches complex conditional logic with progressive taxation systems, citizen category differentiation, and precise financial calculations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
750000
yes
Output: Tax: 75000.00</pre>
    <p><b>Explanation:</b> Income 7,50,000 falls in 6,00,001-10,00,000 slab. Senior citizen pays 10% tax: 750000 × 0.10 = 75,000.00</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
500000
no
Output: Tax: 50000.00</pre>
    <p><b>Explanation:</b> Income 5,00,000 falls in 3,00,001-6,00,000 slab. Non-senior pays 10% tax: 500000 × 0.10 = 50,000.00</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
250000
yes
Output: No Tax</pre>
    <p><b>Explanation:</b> Income 2,50,000 ≤ 3,00,000, so no tax regardless of senior citizen status.</p>
  `,

  "conditions": `
    <ul>
      <li>Income will be a positive floating-point number up to 1,00,00,000</li>
      <li>Senior citizen status will be either "yes" or "no" (lowercase)</li>
      <li>Use nested if-else statements for progressive tax slabs</li>
      <li>Apply different tax rates based on citizen category for middle slabs</li>
      <li>Output "No Tax" for income ≤ 3,00,000</li>
      <li>For taxable income, output format must be: "Tax: X.XX" with 2 decimal places</li>
      <li>Use inclusive-exclusive ranges for tax slabs</li>
      <li>Tax is calculated on the entire income amount (not progressive per slab)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Tax: 75000.00", "stdinput": "750000\nyes" },
    { "id": 2, "input": [], "expected": "Tax: 50000.00", "stdinput": "500000\nno" },
    { "id": 3, "input": [], "expected": "No Tax", "stdinput": "250000\nyes" },
    { "id": 4, "input": [], "expected": "Tax: 360000.00", "stdinput": "1200000\nno" },
    { "id": 5, "input": [], "expected": "No Tax", "stdinput": "300000\nyes" },
    { "id": 6, "input": [], "expected": "No Tax", "stdinput": "300000\nno" },
    { "id": 7, "input": [], "expected": "Tax: 100000.00", "stdinput": "1000000\nyes" },
    { "id": 8, "input": [], "expected": "Tax: 200000.00", "stdinput": "1000000\nno" }
  ],

  "templates": {
    "python": "income = float(input())\nis_senior = input()\n\nif income <= 300000:\n    print(\"No Tax\")\nelif income <= 600000:\n    if is_senior == \"yes\":\n        tax = income * 0.05\n    else:\n        tax = income * 0.10\n    print(f\"Tax: {tax:.2f}\")\nelif income <= 1000000:\n    if is_senior == \"yes\":\n        tax = income * 0.10\n    else:\n        tax = income * 0.20\n    print(f\"Tax: {tax:.2f}\")\nelse:\n    tax = income * 0.30\n    print(f\"Tax: {tax:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double income = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String is_senior = scanner.nextLine();\n        \n        if (income <= 300000) {\n            System.out.println(\"No Tax\");\n        } else if (income <= 600000) {\n            double tax;\n            if (is_senior.equals(\"yes\")) {\n                tax = income * 0.05;\n            } else {\n                tax = income * 0.10;\n            }\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        } else if (income <= 1000000) {\n            double tax;\n            if (is_senior.equals(\"yes\")) {\n                tax = income * 0.10;\n            } else {\n                tax = income * 0.20;\n            }\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        } else {\n            double tax = income * 0.30;\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const income = parseFloat(input[0]);\n        const is_senior = input[1];\n        \n        if (income <= 300000) {\n            console.log(\"No Tax\");\n        } else if (income <= 600000) {\n            let tax;\n            if (is_senior === \"yes\") {\n                tax = income * 0.05;\n            } else {\n                tax = income * 0.10;\n            }\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        } else if (income <= 1000000) {\n            let tax;\n            if (is_senior === \"yes\") {\n                tax = income * 0.10;\n            } else {\n                tax = income * 0.20;\n            }\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        } else {\n            const tax = income * 0.30;\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    double income;\n    std::string is_senior;\n    std::cin >> income >> is_senior;\n    \n    if (income <= 300000) {\n        std::cout << \"No Tax\" << std::endl;\n    } else if (income <= 600000) {\n        double tax;\n        if (is_senior == \"yes\") {\n            tax = income * 0.05;\n        } else {\n            tax = income * 0.10;\n        }\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    } else if (income <= 1000000) {\n        double tax;\n        if (is_senior == \"yes\") {\n            tax = income * 0.10;\n        } else {\n            tax = income * 0.20;\n        }\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    } else {\n        double tax = income * 0.30;\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "income = float(input())\nis_senior = input()\n\nif income <= 300000:\n    print(\"No Tax\")\nelif income <= 600000:\n    if is_senior == \"yes\":\n        tax = income * 0.05\n    else:\n        tax = income * 0.10\n    print(f\"Tax: {tax:.2f}\")\nelif income <= 1000000:\n    if is_senior == \"yes\":\n        tax = income * 0.10\n    else:\n        tax = income * 0.20\n    print(f\"Tax: {tax:.2f}\")\nelse:\n    tax = income * 0.30\n    print(f\"Tax: {tax:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double income = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String is_senior = scanner.nextLine();\n        \n        if (income <= 300000) {\n            System.out.println(\"No Tax\");\n        } else if (income <= 600000) {\n            double tax;\n            if (is_senior.equals(\"yes\")) {\n                tax = income * 0.05;\n            } else {\n                tax = income * 0.10;\n            }\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        } else if (income <= 1000000) {\n            double tax;\n            if (is_senior.equals(\"yes\")) {\n                tax = income * 0.10;\n            } else {\n                tax = income * 0.20;\n            }\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        } else {\n            double tax = income * 0.30;\n            System.out.printf(\"Tax: %.2f\\n\", tax);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const income = parseFloat(input[0]);\n        const is_senior = input[1];\n        \n        if (income <= 300000) {\n            console.log(\"No Tax\");\n        } else if (income <= 600000) {\n            let tax;\n            if (is_senior === \"yes\") {\n                tax = income * 0.05;\n            } else {\n                tax = income * 0.10;\n            }\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        } else if (income <= 1000000) {\n            let tax;\n            if (is_senior === \"yes\") {\n                tax = income * 0.10;\n            } else {\n                tax = income * 0.20;\n            }\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        } else {\n            const tax = income * 0.30;\n            console.log(`Tax: ${tax.toFixed(2)}`);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    double income;\n    std::string is_senior;\n    std::cin >> income >> is_senior;\n    \n    if (income <= 300000) {\n        std::cout << \"No Tax\" << std::endl;\n    } else if (income <= 600000) {\n        double tax;\n        if (is_senior == \"yes\") {\n            tax = income * 0.05;\n        } else {\n            tax = income * 0.10;\n        }\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    } else if (income <= 1000000) {\n        double tax;\n        if (is_senior == \"yes\") {\n            tax = income * 0.10;\n        } else {\n            tax = income * 0.20;\n        }\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    } else {\n        double tax = income * 0.30;\n        std::cout << \"Tax: \" << std::fixed << std::setprecision(2) << tax << std::endl;\n    }\n    return 0;\n}"
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