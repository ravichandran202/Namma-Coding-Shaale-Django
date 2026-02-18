module.exports = {
  "title": "Business Profit/Loss Calculator",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Calculate and determine the profit or loss in a business transaction based on cost price and selling price.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integers: cost price and selling price</li>
      <li>Compare the prices to determine profit or loss</li>
      <li>Calculate the amount of profit or loss</li>
      <li>Print the result with the appropriate message</li>
    </ul>
    <p><b>Business Scenarios:</b></p>
    <ul>
      <li>Profit: When selling price > cost price</li>
      <li>Loss: When selling price < cost price</li>
      <li>No Profit No Loss: When selling price = cost price</li>
    </ul>
    <p>This problem teaches financial calculations and conditional logic for business applications.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
500
600
Output: Profit: 100</pre>
    <p><b>Explanation:</b> Selling price (600) is greater than cost price (500), resulting in profit of 100.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
800    
700
Output: Loss: 100</pre>
    <p><b>Explanation:</b> Selling price (700) is less than cost price (800), resulting in loss of 100.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
450
450
Output: No Profit No Loss</pre>
    <p><b>Explanation:</b> Selling price equals cost price, so there is no profit or loss.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two positive integers: cost price and selling price</li>
      <li>Prices will be between 1 and 100000</li>
      <li>Calculate profit as: selling_price - cost_price</li>
      <li>Calculate loss as: cost_price - selling_price</li>
      <li>Output format must match exactly: "Profit: X", "Loss: X", or "No Profit No Loss"</li>
      <li>Output the calculated amount without currency symbols</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Profit: 100", "stdinput": "500\n600" },
    { "id": 2, "input": [], "expected": "Loss: 100", "stdinput": "800\n700" },
    { "id": 3, "input": [], "expected": "No Profit No Loss", "stdinput": "450\n450" },
    { "id": 4, "input": [], "expected": "Profit: 200", "stdinput": "1000\n1200" },
    { "id": 5, "input": [], "expected": "Loss: 50", "stdinput": "150\n100" },
    { "id": 6, "input": [], "expected": "Profit: 250", "stdinput": "750\n1000" },
    { "id": 7, "input": [], "expected": "No Profit No Loss", "stdinput": "999\n999" },
  ],

  "templates": {
    "python": "cost_price = int(input())\nselling_price = int(input())\n\nif selling_price > cost_price:\n    profit = selling_price - cost_price\n    print(\"Profit:\", profit)\nelif selling_price < cost_price:\n    loss = cost_price - selling_price\n    print(\"Loss:\", loss)\nelse:\n    print(\"No Profit No Loss\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int cost_price = scanner.nextInt();\n        int selling_price = scanner.nextInt();\n        \n        if (selling_price > cost_price) {\n            int profit = selling_price - cost_price;\n            System.out.println(\"Profit: \" + profit);\n        } else if (selling_price < cost_price) {\n            int loss = cost_price - selling_price;\n            System.out.println(\"Loss: \" + loss);\n        } else {\n            System.out.println(\"No Profit No Loss\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [cost_price, selling_price] = input;\n        if (selling_price > cost_price) {\n            const profit = selling_price - cost_price;\n            console.log(\"Profit: \" + profit);\n        } else if (selling_price < cost_price) {\n            const loss = cost_price - selling_price;\n            console.log(\"Loss: \" + loss);\n        } else {\n            console.log(\"No Profit No Loss\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int cost_price, selling_price;\n    std::cin >> cost_price >> selling_price;\n    \n    if (selling_price > cost_price) {\n        int profit = selling_price - cost_price;\n        std::cout << \"Profit: \" << profit << std::endl;\n    } else if (selling_price < cost_price) {\n        int loss = cost_price - selling_price;\n        std::cout << \"Loss: \" << loss << std::endl;\n    } else {\n        std::cout << \"No Profit No Loss\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "cost_price = int(input())\nselling_price = int(input())\n\nif selling_price > cost_price:\n    profit = selling_price - cost_price\n    print(\"Profit:\", profit)\nelif selling_price < cost_price:\n    loss = cost_price - selling_price\n    print(\"Loss:\", loss)\nelse:\n    print(\"No Profit No Loss\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int cost_price = scanner.nextInt();\n        int selling_price = scanner.nextInt();\n        \n        if (selling_price > cost_price) {\n            int profit = selling_price - cost_price;\n            System.out.println(\"Profit: \" + profit);\n        } else if (selling_price < cost_price) {\n            int loss = cost_price - selling_price;\n            System.out.println(\"Loss: \" + loss);\n        } else {\n            System.out.println(\"No Profit No Loss\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [cost_price, selling_price] = input;\n        if (selling_price > cost_price) {\n            const profit = selling_price - cost_price;\n            console.log(\"Profit: \" + profit);\n        } else if (selling_price < cost_price) {\n            const loss = cost_price - selling_price;\n            console.log(\"Loss: \" + loss);\n        } else {\n            console.log(\"No Profit No Loss\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int cost_price, selling_price;\n    std::cin >> cost_price >> selling_price;\n    \n    if (selling_price > cost_price) {\n        int profit = selling_price - cost_price;\n        std::cout << \"Profit: \" << profit << std::endl;\n    } else if (selling_price < cost_price) {\n        int loss = cost_price - selling_price;\n        std::cout << \"Loss: \" << loss << std::endl;\n    } else {\n        std::cout << \"No Profit No Loss\" << std::endl;\n    }\n    return 0;\n}"
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