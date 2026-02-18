module.exports = {
  "title": "Bank Account Manager",
  "difficulty": "hard",
  "acceptance": "95%",

  "description": `
    <p>Create four functions to manage a bank account: deposit money, withdraw money, check balance, and calculate simple interest.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing five integers separated by spaces:</li>
      <ul>
        <li>Initial balance</li>
        <li>Deposit amount</li>
        <li>Withdrawal amount</li>
        <li>Interest rate (percentage)</li>
        <li>Time period (years)</li>
      </ul>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read five integers from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>deposit_money(balance, amount)</code> - returns new balance after adding deposit amount</li>
        <li><code>withdraw_money(balance, amount)</code> - returns new balance after withdrawal (if sufficient funds, otherwise returns same balance)</li>
        <li><code>check_balance(balance)</code> - returns the current balance (identity function)</li>
        <li><code>calculate_interest(principal, rate, time)</code> - returns simple interest using formula: <code>(principal × rate × time) ÷ 100</code></li>
      </ul>
      <li>Each function should take appropriate parameters and return the result</li>
      <li>Perform operations in sequence: show initial balance, deposit, withdrawal, then calculate interest on final balance</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
1000 200 50 5 2

Output:
Initial Balance: 1000
After Deposit: 1200
After Withdrawal: 1150
Interest Earned: 115.0</pre>
    <p><b>Explanation:</b> Initial: 1000, Deposit 200 → 1200, Withdraw 50 → 1150, Interest: (1150 × 5 × 2)/100 = 115.0</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
500 100 700 10 1

Output:
Initial Balance: 500
After Deposit: 600
After Withdrawal: 600
Interest Earned: 60.0</pre>
    <p><b>Explanation:</b> Initial: 500, Deposit 100 → 600, Withdraw 700 (insufficient funds) → 600, Interest: (600 × 10 × 1)/100 = 60.0</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Initial Balance: 1000\nAfter Deposit: 1200\nAfter Withdrawal: 1150\nInterest Earned: 115.0", 
      "stdinput": "1000 200 50 5 2",
      "explanation": "1000 +200=1200, -50=1150, interest: (1150×5×2)/100=115.0" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Initial Balance: 500\nAfter Deposit: 600\nAfter Withdrawal: 600\nInterest Earned: 60.0", 
      "stdinput": "500 100 700 10 1",
      "explanation": "500 +100=600, withdraw 700 rejected, interest: (600×10×1)/100=60.0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Initial Balance: 100\nAfter Deposit: 100\nAfter Withdrawal: 0\nInterest Earned: 0.0", 
      "stdinput": "100 0 100 5 1",
      "explanation": "100 +0=100, withdraw 100=0, interest: (0×5×1)/100=0.0" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Initial Balance: 1000\nAfter Deposit: 1100\nAfter Withdrawal: 1100\nInterest Earned: 0.0", 
      "stdinput": "1000 100 0 0 5",
      "explanation": "1000 +100=1100, withdraw 0=1100, interest: (1100×0×5)/100=0.0" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Initial Balance: 50\nAfter Deposit: 150\nAfter Withdrawal: 150\nInterest Earned: 7.5", 
      "stdinput": "50 100 200 5 1",
      "explanation": "50 +100=150, withdraw 200 rejected, interest: (150×5×1)/100=7.5" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Initial Balance: 10000\nAfter Deposit: 10500\nAfter Withdrawal: 10300\nInterest Earned: 2060.0", 
      "stdinput": "10000 500 200 10 2",
      "explanation": "10000 +500=10500, withdraw 200=10300, interest: (10300×10×2)/100=2060.0" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Initial Balance: 1\nAfter Deposit: 11\nAfter Withdrawal: 1\nInterest Earned: 0.1", 
      "stdinput": "1 10 10 10 1",
      "explanation": "1 +10=11, withdraw 10=1, interest: (1×10×1)/100=0.1" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Initial Balance: 5000\nAfter Deposit: 5500\nAfter Withdrawal: 5000\nInterest Earned: 1000.0", 
      "stdinput": "5000 500 500 20 1",
      "explanation": "5000 +500=5500, withdraw 500=5000, interest: (5000×20×1)/100=1000.0" 
    }
  ],

  "templates": {
    "python": "def deposit_money(balance, amount):\n    return balance + amount\n\ndef withdraw_money(balance, amount):\n    if amount > balance:\n        return balance\n    return balance - amount\n\ndef check_balance(balance):\n    return balance\n\ndef calculate_interest(principal, rate, time):\n    return principal * rate * time / 100\n\n# Main code\ninitial_balance, deposit_amt, withdraw_amt, interest_rate, years = map(int, input().split())\nprint(\"Initial Balance:\", initial_balance)\n\nnew_balance = deposit_money(initial_balance, deposit_amt)\nprint(\"After Deposit:\", new_balance)\n\nnew_balance = withdraw_money(new_balance, withdraw_amt)\nprint(\"After Withdrawal:\", new_balance)\n\ninterest = calculate_interest(new_balance, interest_rate, years)\nprint(\"Interest Earned:\", interest)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int deposit_money(int balance, int amount) {\n        return balance + amount;\n    }\n    \n    public static int withdraw_money(int balance, int amount) {\n        if (amount > balance) {\n            return balance;\n        }\n        return balance - amount;\n    }\n    \n    public static int check_balance(int balance) {\n        return balance;\n    }\n    \n    public static double calculate_interest(int principal, int rate, int time) {\n        return principal * rate * time / 100.0;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int initial_balance = scanner.nextInt();\n        int deposit_amt = scanner.nextInt();\n        int withdraw_amt = scanner.nextInt();\n        int interest_rate = scanner.nextInt();\n        int years = scanner.nextInt();\n        \n        System.out.println(\"Initial Balance: \" + initial_balance);\n        \n        int new_balance = deposit_money(initial_balance, deposit_amt);\n        System.out.println(\"After Deposit: \" + new_balance);\n        \n        new_balance = withdraw_money(new_balance, withdraw_amt);\n        System.out.println(\"After Withdrawal: \" + new_balance);\n        \n        double interest = calculate_interest(new_balance, interest_rate, years);\n        System.out.println(\"Interest Earned: \" + interest);\n    }\n}",
    "javascript": "function deposit_money(balance, amount) {\n    return balance + amount;\n}\n\nfunction withdraw_money(balance, amount) {\n    if (amount > balance) {\n        return balance;\n    }\n    return balance - amount;\n}\n\nfunction check_balance(balance) {\n    return balance;\n}\n\nfunction calculate_interest(principal, rate, time) {\n    return principal * rate * time / 100;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [initial_balance, deposit_amt, withdraw_amt, interest_rate, years] = input.split(' ').map(Number);\n    \n    console.log(\"Initial Balance: \" + initial_balance);\n    \n    let new_balance = deposit_money(initial_balance, deposit_amt);\n    console.log(\"After Deposit: \" + new_balance);\n    \n    new_balance = withdraw_money(new_balance, withdraw_amt);\n    console.log(\"After Withdrawal: \" + new_balance);\n    \n    const interest = calculate_interest(new_balance, interest_rate, years);\n    console.log(\"Interest Earned: \" + interest);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint deposit_money(int balance, int amount) {\n    return balance + amount;\n}\n\nint withdraw_money(int balance, int amount) {\n    if (amount > balance) {\n        return balance;\n    }\n    return balance - amount;\n}\n\nint check_balance(int balance) {\n    return balance;\n}\n\ndouble calculate_interest(int principal, int rate, int time) {\n    return principal * rate * time / 100.0;\n}\n\nint main() {\n    int initial_balance, deposit_amt, withdraw_amt, interest_rate, years;\n    cin >> initial_balance >> deposit_amt >> withdraw_amt >> interest_rate >> years;\n    \n    cout << \"Initial Balance: \" << initial_balance << endl;\n    \n    int new_balance = deposit_money(initial_balance, deposit_amt);\n    cout << \"After Deposit: \" << new_balance << endl;\n    \n    new_balance = withdraw_money(new_balance, withdraw_amt);\n    cout << \"After Withdrawal: \" << new_balance << endl;\n    \n    double interest = calculate_interest(new_balance, interest_rate, years);\n    cout << \"Interest Earned: \" << interest << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "def deposit_money(balance, amount):\n    return balance + amount\n\ndef withdraw_money(balance, amount):\n    if amount > balance:\n        return balance\n    return balance - amount\n\ndef check_balance(balance):\n    return balance\n\ndef calculate_interest(principal, rate, time):\n    return principal * rate * time / 100\n\n# Main code\ninitial_balance, deposit_amt, withdraw_amt, interest_rate, years = map(int, input().split())\nprint(\"Initial Balance:\", initial_balance)\n\nnew_balance = deposit_money(initial_balance, deposit_amt)\nprint(\"After Deposit:\", new_balance)\n\nnew_balance = withdraw_money(new_balance, withdraw_amt)\nprint(\"After Withdrawal:\", new_balance)\n\ninterest = calculate_interest(new_balance, interest_rate, years)\nprint(\"Interest Earned:\", interest)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int deposit_money(int balance, int amount) {\n        return balance + amount;\n    }\n    \n    public static int withdraw_money(int balance, int amount) {\n        if (amount > balance) {\n            return balance;\n        }\n        return balance - amount;\n    }\n    \n    public static int check_balance(int balance) {\n        return balance;\n    }\n    \n    public static double calculate_interest(int principal, int rate, int time) {\n        return principal * rate * time / 100.0;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int initial_balance = scanner.nextInt();\n        int deposit_amt = scanner.nextInt();\n        int withdraw_amt = scanner.nextInt();\n        int interest_rate = scanner.nextInt();\n        int years = scanner.nextInt();\n        \n        System.out.println(\"Initial Balance: \" + initial_balance);\n        \n        int new_balance = deposit_money(initial_balance, deposit_amt);\n        System.out.println(\"After Deposit: \" + new_balance);\n        \n        new_balance = withdraw_money(new_balance, withdraw_amt);\n        System.out.println(\"After Withdrawal: \" + new_balance);\n        \n        double interest = calculate_interest(new_balance, interest_rate, years);\n        System.out.println(\"Interest Earned: \" + interest);\n    }\n}",
    "javascript": "function deposit_money(balance, amount) {\n    return balance + amount;\n}\n\nfunction withdraw_money(balance, amount) {\n    if (amount > balance) {\n        return balance;\n    }\n    return balance - amount;\n}\n\nfunction check_balance(balance) {\n    return balance;\n}\n\nfunction calculate_interest(principal, rate, time) {\n    return principal * rate * time / 100;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [initial_balance, deposit_amt, withdraw_amt, interest_rate, years] = input.split(' ').map(Number);\n    \n    console.log(\"Initial Balance: \" + initial_balance);\n    \n    let new_balance = deposit_money(initial_balance, deposit_amt);\n    console.log(\"After Deposit: \" + new_balance);\n    \n    new_balance = withdraw_money(new_balance, withdraw_amt);\n    console.log(\"After Withdrawal: \" + new_balance);\n    \n    const interest = calculate_interest(new_balance, interest_rate, years);\n    console.log(\"Interest Earned: \" + interest);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint deposit_money(int balance, int amount) {\n    return balance + amount;\n}\n\nint withdraw_money(int balance, int amount) {\n    if (amount > balance) {\n        return balance;\n    }\n    return balance - amount;\n}\n\nint check_balance(int balance) {\n    return balance;\n}\n\ndouble calculate_interest(int principal, int rate, int time) {\n    return principal * rate * time / 100.0;\n}\n\nint main() {\n    int initial_balance, deposit_amt, withdraw_amt, interest_rate, years;\n    cin >> initial_balance >> deposit_amt >> withdraw_amt >> interest_rate >> years;\n    \n    cout << \"Initial Balance: \" << initial_balance << endl;\n    \n    int new_balance = deposit_money(initial_balance, deposit_amt);\n    cout << \"After Deposit: \" << new_balance << endl;\n    \n    new_balance = withdraw_money(new_balance, withdraw_amt);\n    cout << \"After Withdrawal: \" << new_balance << endl;\n    \n    double interest = calculate_interest(new_balance, interest_rate, years);\n    cout << \"Interest Earned: \" << interest << endl;\n    \n    return 0;\n}"
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