module.exports = {
  "title": "Print Prime Numbers from 1 to N",
  "difficulty": "hard",
  "acceptance": "82%",

  "description": `
    <p>Write a program that prints all prime numbers from <code>1</code> to <code>N</code>. <br>A prime number is a natural number greater than <code>1</code> that has no positive divisors other than <code>1</code> and itself.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single integer <code>N</code> where <code>N ≥ 1</code></li>
      <li>The number can be any positive integer</li>
    </ul>
    
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Print the prime numbers in increasing order</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10
Output:
2
3
5
7</pre>
    <p><b>Explanation:</b> Prime numbers from 1 to 10 are: 2, 3, 5, 7. Note that 1 is not prime, and 4, 6, 8, 9, 10 are not prime.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
20
Output:
2
3
5
7
11
13
17
19</pre>
    <p><b>Explanation:</b> Prime numbers from 1 to 20 are: 2, 3, 5, 7, 11, 13, 17, 19.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
1
Output:</pre>
    <p><b>Explanation:</b> There are no prime numbers from 1 to 1, so nothing is printed (empty output).</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "2\n3\n5\n7", 
      "stdinput": "10",
      "explanation": "Prime numbers from 1 to 10: 2, 3, 5, 7" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "2\n3\n5\n7\n11\n13\n17\n19", 
      "stdinput": "20",
      "explanation": "Prime numbers from 1 to 20" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "1",
      "explanation": "No prime numbers from 1 to 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "2", 
      "stdinput": "2",
      "explanation": "Only prime number from 1 to 2 is 2" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "2\n3\n5\n7\n11\n13\n17\n19\n23\n29", 
      "stdinput": "30",
      "explanation": "Prime numbers from 1 to 30" 
    }
  ],

  "templates": {
    "python": "def is_prime(num):\n    if num < 2:\n        return False\n    if num == 2:\n        return True\n    if num % 2 == 0:\n        return False\n    \n    i = 3\n    while i * i <= num:\n        if num % i == 0:\n            return False\n        i += 2\n    return True\n\ndef print_primes(n):\n    for num in range(2, n + 1):\n        if is_prime(num):\n            print(num)\n\n# main code\nn = int(input())\nprint_primes(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean is_prime(int num) {\n        if (num < 2) {\n            return false;\n        }\n        if (num == 2) {\n            return true;\n        }\n        if (num % 2 == 0) {\n            return false;\n        }\n        \n        for (int i = 3; i * i <= num; i += 2) {\n            if (num % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void print_primes(int n) {\n        for (int num = 2; num <= n; num++) {\n            if (is_prime(num)) {\n                System.out.println(num);\n            }\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_primes(n);\n    }\n}",
    "javascript": "function is_prime(num) {\n    if (num < 2) {\n        return false;\n    }\n    if (num === 2) {\n        return true;\n    }\n    if (num % 2 === 0) {\n        return false;\n    }\n    \n    for (let i = 3; i * i <= num; i += 2) {\n        if (num % i === 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction print_primes(n) {\n    for (let num = 2; num <= n; num++) {\n        if (is_prime(num)) {\n            console.log(num);\n        }\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_primes(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool is_prime(int num) {\n    if (num < 2) {\n        return false;\n    }\n    if (num == 2) {\n        return true;\n    }\n    if (num % 2 == 0) {\n        return false;\n    }\n    \n    for (int i = 3; i * i <= num; i += 2) {\n        if (num % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nvoid print_primes(int n) {\n    for (int num = 2; num <= n; num++) {\n        if (is_prime(num)) {\n            cout << num << endl;\n        }\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_primes(n);\n    return 0;\n}"
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