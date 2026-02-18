module.exports = {
  "title": "Tiered Discount System",
  "difficulty": "hard",
  "acceptance": "79%",

  "description": `
    <p>Calculate discount and final amount based on purchase amount using a tiered discount system.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read purchase amount as integer input</li>
      <li>Apply discount based on tiered pricing structure</li>
      <li>Calculate discount amount and final payable amount</li>
      <li>Print both discount and final amount</li>
    </ul>
    <p><b>Discount Tiers:</b></p>
    <ul>
      <li>Purchase amount ≥ 5000 → 20% discount</li>
      <li>Purchase amount ≥ 2000 → 10% discount</li>
      <li>Purchase amount < 2000 → No discount</li>
    </ul>
    <p>This problem teaches percentage calculations, tiered pricing logic, and multiple output formatting.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6000

Output: 
Discount: 1200.0
Final Amount: 4800.0</pre>
    <p><b>Explanation:</b> Amount 6000 ≥ 5000, so 20% discount, final amount: 4800</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3000

Output: 
Discount: 300.0
Final Amount: 2700.0</pre>
    <p><b>Explanation:</b> Amount 3000 ≥ 2000, so 10% discount, final amount: 2700</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 1500

Output: 
No Discount
Final Amount: 1500</pre>
    <p><b>Explanation:</b> Amount 1500 < 2000, so no discount applied.</p>
  `,

  "conditions": `
    <ul>
      <li>Purchase amount will be a positive integer up to 100000</li>
      <li>Apply discounts in the specified tier order</li>
      <li>Calculate discount as percentage of original amount</li>
      <li>Output format must match exactly with two lines</li>
      <li>Print discount amount with one decimal place</li>
      <li>For no discount case, print "No Discount" and original amount</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Discount: 1200.0\nFinal Amount: 4800.0", "stdinput": "6000" },
    { "id": 2, "input": [], "expected": "Discount: 300.0\nFinal Amount: 2700.0", "stdinput": "3000" },
    { "id": 3, "input": [], "expected": "No Discount\nFinal Amount: 1500", "stdinput": "1500" },
    { "id": 4, "input": [], "expected": "Discount: 200.0\nFinal Amount: 1800.0", "stdinput": "2000" },
    { "id": 5, "input": [], "expected": "Discount: 1000.0\nFinal Amount: 4000.0", "stdinput": "5000" },
    { "id": 6, "input": [], "expected": "No Discount\nFinal Amount: 1999", "stdinput": "1999" },
    { "id": 7, "input": [], "expected": "Discount: 2000.0\nFinal Amount: 8000.0", "stdinput": "10000" },
  ],

  "templates": {
    "python": "amount = int(input())\n\nif amount >= 5000:\n    discount = amount * 0.20\n    final_amount = amount - discount\n    print(\"Discount:\", discount)\n    print(\"Final Amount:\", final_amount)\nelif amount >= 2000:\n    discount = amount * 0.10\n    final_amount = amount - discount\n    print(\"Discount:\", discount)\n    print(\"Final Amount:\", final_amount)\nelse:\n    print(\"No Discount\")\n    print(\"Final Amount:\", amount)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int amount = scanner.nextInt();\n        \n        if (amount >= 5000) {\n            double discount = amount * 0.20;\n            double final_amount = amount - discount;\n            System.out.println(\"Discount: \" + discount);\n            System.out.println(\"Final Amount: \" + final_amount);\n        } else if (amount >= 2000) {\n            double discount = amount * 0.10;\n            double final_amount = amount - discount;\n            System.out.println(\"Discount: \" + discount);\n            System.out.println(\"Final Amount: \" + final_amount);\n        } else {\n            System.out.println(\"No Discount\");\n            System.out.println(\"Final Amount: \" + amount);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (amount) => {\n    const amt = parseInt(amount);\n    \n    if (amt >= 5000) {\n        const discount = amt * 0.20;\n        const final_amount = amt - discount;\n        console.log(\"Discount: \" + discount.toFixed(1));\n        console.log(\"Final Amount: \" + final_amount.toFixed(1));\n    } else if (amt >= 2000) {\n        const discount = amt * 0.10;\n        const final_amount = amt - discount;\n        console.log(\"Discount: \" + discount.toFixed(1));\n        console.log(\"Final Amount: \" + final_amount.toFixed(1));\n    } else {\n        console.log(\"No Discount\");\n        console.log(\"Final Amount: \" + amt);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n\nint main() {\n    int amount;\n    std::cin >> amount;\n    \n    if (amount >= 5000) {\n        double discount = amount * 0.20;\n        double final_amount = amount - discount;\n        std::cout << \"Discount: \" << std::fixed << std::setprecision(1) << discount << std::endl;\n        std::cout << \"Final Amount: \" << std::fixed << std::setprecision(1) << final_amount << std::endl;\n    } else if (amount >= 2000) {\n        double discount = amount * 0.10;\n        double final_amount = amount - discount;\n        std::cout << \"Discount: \" << std::fixed << std::setprecision(1) << discount << std::endl;\n        std::cout << \"Final Amount: \" << std::fixed << std::setprecision(1) << final_amount << std::endl;\n    } else {\n        std::cout << \"No Discount\" << std::endl;\n        std::cout << \"Final Amount: \" << amount << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "amount = int(input())\n\nif amount >= 5000:\n    discount = amount * 0.20\n    final_amount = amount - discount\n    print(\"Discount:\", discount)\n    print(\"Final Amount:\", final_amount)\nelif amount >= 2000:\n    discount = amount * 0.10\n    final_amount = amount - discount\n    print(\"Discount:\", discount)\n    print(\"Final Amount:\", final_amount)\nelse:\n    print(\"No Discount\")\n    print(\"Final Amount:\", amount)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int amount = scanner.nextInt();\n        \n        if (amount >= 5000) {\n            double discount = amount * 0.20;\n            double final_amount = amount - discount;\n            System.out.println(\"Discount: \" + discount);\n            System.out.println(\"Final Amount: \" + final_amount);\n        } else if (amount >= 2000) {\n            double discount = amount * 0.10;\n            double final_amount = amount - discount;\n            System.out.println(\"Discount: \" + discount);\n            System.out.println(\"Final Amount: \" + final_amount);\n        } else {\n            System.out.println(\"No Discount\");\n            System.out.println(\"Final Amount: \" + amount);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (amount) => {\n    const amt = parseInt(amount);\n    \n    if (amt >= 5000) {\n        const discount = amt * 0.20;\n        const final_amount = amt - discount;\n        console.log(\"Discount: \" + discount.toFixed(1));\n        console.log(\"Final Amount: \" + final_amount.toFixed(1));\n    } else if (amt >= 2000) {\n        const discount = amt * 0.10;\n        const final_amount = amt - discount;\n        console.log(\"Discount: \" + discount.toFixed(1));\n        console.log(\"Final Amount: \" + final_amount.toFixed(1));\n    } else {\n        console.log(\"No Discount\");\n        console.log(\"Final Amount: \" + amt);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n\nint main() {\n    int amount;\n    std::cin >> amount;\n    \n    if (amount >= 5000) {\n        double discount = amount * 0.20;\n        double final_amount = amount - discount;\n        std::cout << \"Discount: \" << std::fixed << std::setprecision(1) << discount << std::endl;\n        std::cout << \"Final Amount: \" << std::fixed << std::setprecision(1) << final_amount << std::endl;\n    } else if (amount >= 2000) {\n        double discount = amount * 0.10;\n        double final_amount = amount - discount;\n        std::cout << \"Discount: \" << std::fixed << std::setprecision(1) << discount << std::endl;\n        std::cout << \"Final Amount: \" << std::fixed << std::setprecision(1) << final_amount << std::endl;\n    } else {\n        std::cout << \"No Discount\" << std::endl;\n        std::cout << \"Final Amount: \" << amount << std::endl;\n    }\n    return 0;\n}"
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