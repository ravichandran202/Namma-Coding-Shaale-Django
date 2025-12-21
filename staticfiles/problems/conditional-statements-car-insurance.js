module.exports = {
  "title": "Risk-Based Insurance Premium",
  "difficulty": "hard",
  "acceptance": "60%",

  "description": `
    <p>An insurance company calculates car insurance premiums based on multiple risk factors including age, car type, and accident history.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read age as integer input</li>
      <li>Read car type as string input ("Sedan", "SUV", or "Sports")</li>
      <li>Read accident history as string input ("yes" or "no")</li>
      <li>Calculate base premium with risk multipliers for age and car type</li>
      <li>Apply accident surcharge if applicable</li>
      <li>Output the final insurance premium formatted to 2 decimal places</li>
    </ul>
    <p><b>Premium Calculation:</b></p>
    <ul>
      <li><b>Base Premium:</b> 5,000</li>
      <li><b>Age Factor:</b></li>
      <ul>
        <li>Under 25 or over 60: High risk multiplier</li>
        <li>25-60: Medium risk multiplier</li>
      </ul>
      <li><b>Car Type Multipliers:</b></li>
      <ul>
        <li>Sports car: 2.5x (high risk) / 2.0x (medium risk)</li>
        <li>SUV: 1.8x (high risk) / 1.5x (medium risk)</li>
        <li>Sedan: 1.5x (high risk) / 1.2x (medium risk)</li>
      </ul>
      <li><b>Accident History:</b> 30% surcharge (1.3x multiplier) if any accidents</li>
    </ul>
    <p><b>Calculation Formula:</b></p>
    <pre>Premium = Base Premium × Age/Car Multiplier × (1.3 if accident history)</pre>
    <p>This problem teaches complex multi-factor conditional logic with layered risk assessment and financial calculations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 22
Sports
no
Output: Insurance Premium: 12500.00</pre>
    <p><b>Explanation:</b> Age 22 < 25 (high risk), Sports car (2.5x), no accident: 5000 × 2.5 = 12,500.00</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 35
Sedan
yes
Output: Insurance Premium: 7800.00</pre>
    <p><b>Explanation:</b> Age 35 (25-60 medium risk), Sedan (1.2x), with accident (1.3x): 5000 × 1.2 × 1.3 = 7,800.00</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 65
SUV
no
Output: Insurance Premium: 9000.00</pre>
    <p><b>Explanation:</b> Age 65 > 60 (high risk), SUV (1.8x), no accident: 5000 × 1.8 = 9,000.00</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 40
Sports
yes
Output: Insurance Premium: 13000.00</pre>
    <p><b>Explanation:</b> Age 40 (25-60 medium risk), Sports car (2.0x), with accident (1.3x): 5000 × 2.0 × 1.3 = 13,000.00</p>
  `,

  "conditions": `
    <ul>
      <li>Age will be an integer between 18 and 80</li>
      <li>Car type will be exactly one of: "Sedan", "SUV", "Sports" (case-sensitive)</li>
      <li>Accident history will be either "yes" or "no" (lowercase)</li>
      <li>Base premium is fixed at 5,000</li>
      <li>Apply age and car type multipliers first, then accident surcharge</li>
      <li>Output format must be: "Insurance Premium: X.XX" with 2 decimal places</li>
      <li>Use exact multiplier values:</li>
      <ul>
        <li><b>High Risk Age (Under 25 or Over 60):</b></li>
        <ul>
          <li>Sports: 2.5x</li>
          <li>SUV: 1.8x</li>
          <li>Sedan: 1.5x</li>
        </ul>
        <li><b>Medium Risk Age (25-60):</b></li>
        <ul>
          <li>Sports: 2.0x</li>
          <li>SUV: 1.5x</li>
          <li>Sedan: 1.2x</li>
        </ul>
        <li><b>Accident Surcharge:</b> 1.3x if "yes"</li>
      </ul>
      <li>Age ranges: <25 (high risk), 25-60 (medium risk), >60 (high risk)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Insurance Premium: 12500.00", "stdinput": "22\nSports\nno" },
    { "id": 2, "input": [], "expected": "Insurance Premium: 7800.00", "stdinput": "35\nSedan\nyes" },
    { "id": 3, "input": [], "expected": "Insurance Premium: 9000.00", "stdinput": "65\nSUV\nno" },
    { "id": 4, "input": [], "expected": "Insurance Premium: 13000.00", "stdinput": "40\nSports\nyes" },
    { "id": 6, "input": [], "expected": "Insurance Premium: 9750.00", "stdinput": "70\nSedan\nyes" },
    { "id": 7, "input": [], "expected": "Insurance Premium: 7500.00", "stdinput": "30\nSUV\nno" },
    { "id": 9, "input": [], "expected": "Insurance Premium: 10000.00", "stdinput": "25\nSports\nno" },
    { "id": 10, "input": [], "expected": "Insurance Premium: 16250.00", "stdinput": "18\nSports\nyes" }
  ],

  "templates": {
    "python": "age = int(input())\ncar_type = input()\naccident_history = input()\n\nbase_premium = 5000\n\n# Age and car type risk calculation\nif age < 25 or age > 60:\n    if car_type == \"Sports\":\n        premium = base_premium * 2.5\n    elif car_type == \"SUV\":\n        premium = base_premium * 1.8\n    else:\n        premium = base_premium * 1.5\nelse:\n    if car_type == \"Sports\":\n        premium = base_premium * 2.0\n    elif car_type == \"SUV\":\n        premium = base_premium * 1.5\n    else:\n        premium = base_premium * 1.2\n\n# Accident history surcharge\nif accident_history == \"yes\":\n    premium *= 1.3\n\nprint(f\"Insurance Premium: {premium:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String car_type = scanner.nextLine();\n        String accident_history = scanner.nextLine();\n        \n        double base_premium = 5000;\n        double premium;\n        \n        // Age and car type risk calculation\n        if (age < 25 || age > 60) {\n            if (car_type.equals(\"Sports\")) {\n                premium = base_premium * 2.5;\n            } else if (car_type.equals(\"SUV\")) {\n                premium = base_premium * 1.8;\n            } else {\n                premium = base_premium * 1.5;\n            }\n        } else {\n            if (car_type.equals(\"Sports\")) {\n                premium = base_premium * 2.0;\n            } else if (car_type.equals(\"SUV\")) {\n                premium = base_premium * 1.5;\n            } else {\n                premium = base_premium * 1.2;\n            }\n        }\n        \n        // Accident history surcharge\n        if (accident_history.equals(\"yes\")) {\n            premium *= 1.3;\n        }\n        \n        System.out.printf(\"Insurance Premium: %.2f\\n\", premium);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const age = parseInt(input[0]);\n        const car_type = input[1];\n        const accident_history = input[2];\n        \n        const base_premium = 5000;\n        let premium;\n        \n        // Age and car type risk calculation\n        if (age < 25 || age > 60) {\n            if (car_type === \"Sports\") {\n                premium = base_premium * 2.5;\n            } else if (car_type === \"SUV\") {\n                premium = base_premium * 1.8;\n            } else {\n                premium = base_premium * 1.5;\n            }\n        } else {\n            if (car_type === \"Sports\") {\n                premium = base_premium * 2.0;\n            } else if (car_type === \"SUV\") {\n                premium = base_premium * 1.5;\n            } else {\n                premium = base_premium * 1.2;\n            }\n        }\n        \n        // Accident history surcharge\n        if (accident_history === \"yes\") {\n            premium *= 1.3;\n        }\n        \n        console.log(`Insurance Premium: ${premium.toFixed(2)}`);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    int age;\n    std::string car_type, accident_history;\n    std::cin >> age >> car_type >> accident_history;\n    \n    double base_premium = 5000;\n    double premium;\n    \n    // Age and car type risk calculation\n    if (age < 25 || age > 60) {\n        if (car_type == \"Sports\") {\n            premium = base_premium * 2.5;\n        } else if (car_type == \"SUV\") {\n            premium = base_premium * 1.8;\n        } else {\n            premium = base_premium * 1.5;\n        }\n    } else {\n        if (car_type == \"Sports\") {\n            premium = base_premium * 2.0;\n        } else if (car_type == \"SUV\") {\n            premium = base_premium * 1.5;\n        } else {\n            premium = base_premium * 1.2;\n        }\n    }\n    \n    // Accident history surcharge\n    if (accident_history == \"yes\") {\n        premium *= 1.3;\n    }\n    \n    std::cout << \"Insurance Premium: \" << std::fixed << std::setprecision(2) << premium << std::endl;\n    return 0;\n}"
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