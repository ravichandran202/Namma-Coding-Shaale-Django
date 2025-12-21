module.exports = {
  "title": "List Operations – Calculate Sum",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Calculate the sum of all elements in a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated values</li>
      <li><b>Output Format:</b> Display a single number representing the sum of all elements</li>
    </ul>
    <p>This problem helps practice basic list operations, type conversion, and mathematical summation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
Output: 150</pre>
    <p><b>Explanation:</b> The numbers <code>10 + 20 + 30 + 40 + 50</code> equal <code>150</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
5 -2 7
Output: 10</pre>
    <p><b>Explanation:</b> The sum <code>5 + (-2) + 7</code> equals <code>10</code>.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "150", "stdinput": "5\n10 20 30 40 50" },
    { "id": 2, "input": [], "expected": "10", "stdinput": "3\n5 -2 7" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "0" },
    { "id": 5, "input": [], "expected": "15", "stdinput": "5\n1 2 3 4 5" },
    { "id": 6, "input": [], "expected": "-5", "stdinput": "3\n-10 2 3" },
    { "id": 7, "input": [], "expected": "0", "stdinput": "4\n-5 -3 5 3" },
  ],

  "templates": {
    "python": "n = int(input())\nif n > 0:\n    nums = list(map(int, input().split()))\n    print(sum(nums))\nelse:\n    print(0)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int sum = 0;\n        \n        for (int i = 0; i < n; i++) {\n            sum += scanner.nextInt();\n        }\n        \n        System.out.println(sum);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2 || (inputLines.length === 1 && parseInt(inputLines[0]) === 0)) {\n        const n = parseInt(inputLines[0]);\n        let sum = 0;\n        \n        if (n > 0) {\n            const nums = inputLines[1].split(' ').map(Number);\n            sum = nums.reduce((acc, num) => acc + num, 0);\n        }\n        \n        console.log(sum);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        sum += num;\n    }\n    \n    cout << sum << endl;\n    return 0;\n}"
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