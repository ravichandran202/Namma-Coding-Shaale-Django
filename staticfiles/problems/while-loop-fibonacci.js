module.exports = {
  "title": "Fibonacci Generator",
  "difficulty": "hard",
  "acceptance": "82%",

  "description": `
    <p>Print the first N terms of the Fibonacci series.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Generate Fibonacci sequence using while loop</li>
      <li>Print each term on separate line</li>
      <li>Fibonacci sequence: 0,1,1,2,3,5,8,13,...</li>
    </ul>
    <p><b>Fibonacci Sequence:</b></p>
    <ul>
      <li>First term: 0</li>
      <li>Second term: 1</li>
      <li>Each subsequent term = sum of previous two terms</li>
      <li>F(n) = F(n-1) + F(n-2)</li>
    </ul>
    <p>This problem teaches sequence generation and multiple variable updates.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
0
1
1
2
3</pre>
    <p><b>Explanation:</b> First 5 Fibonacci numbers</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1
Output: 0</pre>
    <p><b>Explanation:</b> Only the first Fibonacci number</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 3
Output: 
0
1
1</pre>
    <p><b>Explanation:</b> First 3 Fibonacci numbers</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "0\n1\n1\n2\n3", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "0\n1\n1\n2\n3\n5\n8", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "0\n1\n1", "stdinput": "3" },
    { "id": 5, "input": [], "expected": "0\n1\n1\n2\n3\n5\n8\n13\n21\n34", "stdinput": "10" },
    { "id": 6, "input": [], "expected": "0\n1", "stdinput": "2" }
  ],

  "templates": {
    "python": "n = int(input())\na, b = 0, 1\ncount = 0\nwhile count < n:\n    print(a)\n    a, b = b, a + b\n    count += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int a = 0, b = 1;\n        int count = 0;\n        while (count < n) {\n            System.out.println(a);\n            int next = a + b;\n            a = b;\n            b = next;\n            count++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let a = 0, b = 1;\n    let count = 0;\n    while (count < n) {\n        console.log(a);\n        const next = a + b;\n        a = b;\n        b = next;\n        count++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int a = 0, b = 1;\n    int count = 0;\n    while (count < n) {\n        std::cout << a << std::endl;\n        int next = a + b;\n        a = b;\n        b = next;\n        count++;\n    }\n    return 0;\n}"
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