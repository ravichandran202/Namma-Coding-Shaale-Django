module.exports = {
  "title": "List Operations – Calculate Average",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>Calculate the average of all elements in a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated values</li>
      <li><b>Output Format:</b> Display a floating-point number representing the average of all elements</li>
    </ul>
    <p>This problem helps practice basic arithmetic operations, type conversion, and working with floating-point results.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
Output: 30.0</pre>
    <p><b>Explanation:</b> The average <code>(10 + 20 + 30 + 40 + 50) / 5</code> equals <code>30.0</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
5 10 15
Output: 10.0</pre>
    <p><b>Explanation:</b> The average <code>(5 + 10 + 15) / 3</code> equals <code>10.0</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30.0", "stdinput": "5\n10 20 30 40 50" },
    { "id": 2, "input": [], "expected": "10.0", "stdinput": "3\n5 10 15" },
    { "id": 3, "input": [], "expected": "2.5", "stdinput": "4\n1 2 3 4" },
    { "id": 4, "input": [], "expected": "100.0", "stdinput": "1\n100" },
    { "id": 5, "input": [], "expected": "3.0", "stdinput": "5\n1 2 3 4 5" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\naverage = sum(nums) / len(nums)\nprint(average)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int sum = 0;\n        \n        for (int i = 0; i < n; i++) {\n            sum += scanner.nextInt();\n        }\n        \n        double average = (double) sum / n;\n        System.out.println(average);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const sum = nums.reduce((acc, num) => acc + num, 0);\n        const average = sum / n;\n        console.log(average);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        sum += num;\n    }\n    \n    double average = static_cast<double>(sum) / n;\n    cout << fixed << setprecision(1) << average << endl;\n    return 0;\n}"
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