 module.exports = {
  "title": "Count Factors",
  "difficulty": "hard",
  "acceptance": "78%",

  "description": `
    <p>Count the number of factors of a given number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to check numbers from 1 to n</li>
      <li>Count numbers that divide n evenly</li>
      <li>Print the total factor count</li>
    </ul>
    <p><b>Factor Counting Logic:</b></p>
    <ul>
      <li>Factor: number that divides n without remainder</li>
      <li>Check n % i == 0 for each i from 1 to n</li>
    </ul>
    <p>This problem teaches divisor counting and number theory basics.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10
Output: 4</pre>
    <p><b>Explanation:</b> Factors: 1,2,5,10 (4 factors)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: 2</pre>
    <p><b>Explanation:</b> Factors: 1,7 (2 factors - prime number)</p>
  
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "10" },
    { "id": 2, "input": [], "expected": "2", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "6", "stdinput": "12" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "9", "stdinput": "36" },
  ],

  "templates": {
    "python": "n = int(input())\ncount = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        for (int i = 1; i <= n; i++) {\n            if (n % i == 0) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let count = 0;\n    for (let i = 1; i <= n; i++) {\n        if (n % i === 0) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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