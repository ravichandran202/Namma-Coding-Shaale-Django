module.exports = {
  "title": "Even-Odd Counter",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Count how many even and odd numbers are in the given list of numbers.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read integer n (number of inputs)</li>
      <li>Use for loop to read n numbers</li>
      <li>Count even and odd numbers separately</li>
      <li>Print even count and odd count</li>
    </ul>

    <p>This problem teaches multiple counters and number classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1
2
3
4
5
Output: 2 3</pre>
    <p><b>Explanation:</b> Even: 2,4 (2 numbers), Odd: 1,3,5 (3 numbers)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
0
2
4
6
Output: 4 0</pre>
    <p><b>Explanation:</b> All numbers are even</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "2 3", "stdinput": "5\n1\n2\n3\n4\n5" },
    { "id": 2, "input": [], "expected": "4 0", "stdinput": "4\n0\n2\n4\n6" },
    { "id": 3, "input": [], "expected": "0 3", "stdinput": "3\n1\n3\n5" },
    { "id": 4, "input": [], "expected": "1 1", "stdinput": "2\n2\n3" },
    { "id": 5, "input": [], "expected": "3 2", "stdinput": "5\n10\n20\n30\n15\n25" },
    { "id": 6, "input": [], "expected": "1 0", "stdinput": "1\n0" }
  ],

  "templates": {
    "python": "n = int(input())\neven = 0\nodd = 0\nfor i in range(n):\n    num = int(input())\n    if num % 2 == 0:\n        even += 1\n    else:\n        odd += 1\nprint(even, odd)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int even = 0, odd = 0;\n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0) {\n                even++;\n            } else {\n                odd++;\n            }\n        }\n        System.out.println(even + \" \" + odd);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let even = 0, odd = 0;\n    for (let i = 1; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num % 2 === 0) {\n            even++;\n        } else {\n            odd++;\n        }\n    }\n    console.log(even + ' ' + odd);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int even = 0, odd = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 == 0) {\n            even++;\n        } else {\n            odd++;\n        }\n    }\n    cout << even << \" \" << odd << endl;\n    return 0;\n}"
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