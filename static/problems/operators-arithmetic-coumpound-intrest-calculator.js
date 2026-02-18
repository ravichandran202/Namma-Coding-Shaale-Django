module.exports =  {
  "title": "Compound Interest Calculator",
  "difficulty": "easy",
  "acceptance": "98.8%",

  "description": `
    <p>Write a program that calculates compound interest using exponentiation.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read principal amount, interest rate, time in years, and compounds per year</li>
      <li>Use the compound interest formula</li>
      <li>Calculate only the compound interest</li>
      <li>Print the compound interest formatted to 2 decimal places</li>
    </ul>
    <pre class="constraints">Formula:
Compound Interest = P(1 + r/n)^(nt) - P

Where:
P = Principal amount
r = Annual interest rate (as decimal)
n = Number of times compounded per year
t = Time in years</pre>
    <p>This problem teaches financial calculations and practical use of exponentiation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
1000
0.05
10
12
Output: 647.01</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5000
0.08
5
4
Output: 2429.74</pre>
  `,

  "conditions": `
    <ul>
      <li><b>Input Types </b><li>
      <ul>
          <li>Input 1 : int</li>
          <li>Input 2 : float</li>
          <li>Input 3 : int</li>
          <li>Input 4 : int</li>
      </ul>
      <li>Principal amount will be positive</li>
      <li>Interest rate will be between 0.01 and 0.20 (1% to 20%)</li>
      <li>Time will be between 1 and 30 years</li>
      <li>Compounds per year will be 1, 2, 4, 12, or 365</li>
      <li>Output should be formatted to 2 decimal places</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "647.01", "stdinput": "1000\n0.05\n10\n12" },
    { "id": 2, "input": [], "expected": "2429.74", "stdinput": "5000\n0.08\n5\n4" },
    { "id": 3, "input": [], "expected": "124.86", "stdinput": "1000\n0.04\n3\n1" },
    { "id": 4, "input": [], "expected": "103.81", "stdinput": "1000\n0.05\n2\n2" },
    { "id": 5, "input": [], "expected": "9834.71", "stdinput": "1000\n0.10\n25\n1" }
  ],

  "templates": {
    "python": `principal = float(input())\nrate = float(input())\ntime = int(input())\ncompounds_per_year = int(input())\n\namount = principal * (1 + rate/compounds_per_year) ** (compounds_per_year * time)\ninterest = amount - principal\n\nprint(f"{interest:.2f}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double principal = scanner.nextDouble();\n        double rate = scanner.nextDouble();\n        double time = scanner.nextDouble();\n        int compounds_per_year = scanner.nextInt();\n        \n        double amount = principal * Math.pow(1 + rate/compounds_per_year, compounds_per_year * time);\n        double interest = amount - principal;\n        \n        System.out.printf(\"%.2f%n\", interest);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (principal) => {\n    inputs.push(parseFloat(principal));\n    readline.question('', (rate) => {\n        inputs.push(parseFloat(rate));\n        readline.question('', (time) => {\n            inputs.push(parseFloat(time));\n            readline.question('', (compounds) => {\n                inputs.push(parseInt(compounds));\n                \n                const amount = inputs[0] * Math.pow(1 + inputs[1]/inputs[3], inputs[3] * inputs[2]);\n                const interest = amount - inputs[0];\n                \n                console.log(interest.toFixed(2));\n                readline.close();\n            });\n        });\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n#include <cmath>\n\nint main() {\n    double principal, rate, time;\n    int compounds_per_year;\n    \n    std::cin >> principal >> rate >> time >> compounds_per_year;\n    \n    double amount = principal * pow(1 + rate/compounds_per_year, compounds_per_year * time);\n    double interest = amount - principal;\n    \n    std::cout << std::fixed << std::setprecision(2) << interest << std::endl;\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `principal = float(input())\nrate = float(input())\ntime = int(input())\ncompounds_per_year = int(input())\n\namount = principal * (1 + rate/compounds_per_year) ** (compounds_per_year * time)\ninterest = amount - principal\n\nprint(f"{interest:.2f}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double principal = scanner.nextDouble();\n        double rate = scanner.nextDouble();\n        double time = scanner.nextDouble();\n        int compounds_per_year = scanner.nextInt();\n        \n        double amount = principal * Math.pow(1 + rate/compounds_per_year, compounds_per_year * time);\n        double interest = amount - principal;\n        \n        System.out.printf(\"%.2f%n\", interest);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (principal) => {\n    inputs.push(parseFloat(principal));\n    readline.question('', (rate) => {\n        inputs.push(parseFloat(rate));\n        readline.question('', (time) => {\n            inputs.push(parseFloat(time));\n            readline.question('', (compounds) => {\n                inputs.push(parseInt(compounds));\n                \n                const amount = inputs[0] * Math.pow(1 + inputs[1]/inputs[3], inputs[3] * inputs[2]);\n                const interest = amount - inputs[0];\n                \n                console.log(interest.toFixed(2));\n                readline.close();\n            });\n        });\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n#include <cmath>\n\nint main() {\n    double principal, rate, time;\n    int compounds_per_year;\n    \n    std::cin >> principal >> rate >> time >> compounds_per_year;\n    \n    double amount = principal * pow(1 + rate/compounds_per_year, compounds_per_year * time);\n    double interest = amount - principal;\n    \n    std::cout << std::fixed << std::setprecision(2) << interest << std::endl;\n    \n    return 0;\n}`
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