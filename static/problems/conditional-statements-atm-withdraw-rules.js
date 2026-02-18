module.exports = {
  "title": "ATM Withdrawal Rules",
  "difficulty": "Medium",
  "acceptance": "84%",

  "description": `
    <p>Check if a bank withdrawal is possible based on balance and denomination rules.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read current balance as integer input</li>
      <li>Read withdrawal amount as integer input</li>
      <li>Check both conditions for successful withdrawal</li>
      <li>Print withdrawal status and remaining balance if successful</li>
    </ul>
    <p><b>Withdrawal Conditions:</b></p>
    <ul>
      <li>Balance must be greater than or equal to withdrawal amount</li>
      <li>Withdrawal amount must be a multiple of 100</li>
      <li>Both conditions must be satisfied for successful withdrawal</li>
    </ul>
    <p>This problem teaches banking transaction logic with multiple validation criteria and conditional output.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5000
2000
Output: Withdrawal Successful
Remaining Balance: 3000</pre>
    <p><b>Explanation:</b> Balance 5000 ≥ withdrawal 2000 and 2000 is a multiple of 100, so withdrawal successful.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3000
3500
Output: Withdrawal Failed</pre>
    <p><b>Explanation:</b> Balance 3000 < withdrawal 3500, so withdrawal failed.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
5000
1550
Output: Withdrawal Failed</pre>
    <p><b>Explanation:</b> Withdrawal amount 1550 is not a multiple of 100, so withdrawal failed.</p>
  `,

  "conditions": `
    <ul>
      <li>Balance and withdrawal amount will be positive integers</li>
      <li>Amounts will be up to 100000</li>
      <li>Use modulo operator to check multiple of 100</li>
      <li>Output format: Two lines for success, one line for failure</li>
      <li>For successful withdrawal, print both status and remaining balance</li>
      <li>For failed withdrawal, print only status</li>
      <li>Check both conditions using logical AND</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Withdrawal Successful\nRemaining Balance: 3000", "stdinput": "5000\n2000" },
    { "id": 2, "input": [], "expected": "Withdrawal Failed", "stdinput": "3000\n3500" },
    { "id": 3, "input": [], "expected": "Withdrawal Failed", "stdinput": "5000\n1550" },
    { "id": 4, "input": [], "expected": "Withdrawal Successful\nRemaining Balance: 5000", "stdinput": "10000\n5000" },
    { "id": 5, "input": [], "expected": "Withdrawal Successful\nRemaining Balance: 900", "stdinput": "1000\n100" },
    { "id": 6, "input": [], "expected": "Withdrawal Failed", "stdinput": "800\n850" },
  ],

  "templates": {
    "python": "balance = int(input())\nwithdrawal = int(input())\n\nif balance >= withdrawal and withdrawal % 100 == 0:\n    print(\"Withdrawal Successful\")\n    print(\"Remaining Balance:\", balance - withdrawal)\nelse:\n    print(\"Withdrawal Failed\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int balance = scanner.nextInt();\n        int withdrawal = scanner.nextInt();\n        \n        if (balance >= withdrawal && withdrawal % 100 == 0) {\n            System.out.println(\"Withdrawal Successful\");\n            System.out.println(\"Remaining Balance: \" + (balance - withdrawal));\n        } else {\n            System.out.println(\"Withdrawal Failed\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [balance, withdrawal] = input;\n        \n        if (balance >= withdrawal && withdrawal % 100 === 0) {\n            console.log(\"Withdrawal Successful\");\n            console.log(\"Remaining Balance: \" + (balance - withdrawal));\n        } else {\n            console.log(\"Withdrawal Failed\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int balance, withdrawal;\n    std::cin >> balance >> withdrawal;\n    \n    if (balance >= withdrawal && withdrawal % 100 == 0) {\n        std::cout << \"Withdrawal Successful\" << std::endl;\n        std::cout << \"Remaining Balance: \" << balance - withdrawal << std::endl;\n    } else {\n        std::cout << \"Withdrawal Failed\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "balance = int(input())\nwithdrawal = int(input())\n\nif balance >= withdrawal and withdrawal % 100 == 0:\n    print(\"Withdrawal Successful\")\n    print(\"Remaining Balance:\", balance - withdrawal)\nelse:\n    print(\"Withdrawal Failed\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int balance = scanner.nextInt();\n        int withdrawal = scanner.nextInt();\n        \n        if (balance >= withdrawal && withdrawal % 100 == 0) {\n            System.out.println(\"Withdrawal Successful\");\n            System.out.println(\"Remaining Balance: \" + (balance - withdrawal));\n        } else {\n            System.out.println(\"Withdrawal Failed\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 2) {\n        const [balance, withdrawal] = input;\n        \n        if (balance >= withdrawal && withdrawal % 100 === 0) {\n            console.log(\"Withdrawal Successful\");\n            console.log(\"Remaining Balance: \" + (balance - withdrawal));\n        } else {\n            console.log(\"Withdrawal Failed\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int balance, withdrawal;\n    std::cin >> balance >> withdrawal;\n    \n    if (balance >= withdrawal && withdrawal % 100 == 0) {\n        std::cout << \"Withdrawal Successful\" << std::endl;\n        std::cout << \"Remaining Balance: \" << balance - withdrawal << std::endl;\n    } else {\n        std::cout << \"Withdrawal Failed\" << std::endl;\n    }\n    return 0;\n}"
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