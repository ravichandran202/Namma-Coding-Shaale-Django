module.exports = {
  "title": "Total Even Greater then N",
  "difficulty": "easy",
  "acceptance": "88%",

  "description": `
    <p>Count how many even numbers in the list are greater than a given threshold value.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the threshold value</li>
      <li><b>Output Format:</b> Display a single integer representing the count of even numbers greater than the threshold</li>
    </ul>
    <p>This problem helps practice combining multiple conditions in filtering and counting operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
2 8 15 22 9 14
10
Output: 2</pre>
    <p><b>Explanation:</b> The even numbers greater than <code>10</code> are <code>22</code> and <code>14</code>, so the count is <code>2</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
4 6 8 10 12
15
Output: 0</pre>
    <p><b>Explanation:</b> All numbers are even but none are greater than <code>15</code>, so the count is zero.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2", "stdinput": "6\n2 8 15 22 9 14\n10" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "5\n4 6 8 10 12\n15" },
    { "id": 3, "input": [], "expected": "3", "stdinput": "4\n-4 -2 0 2\n-3" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "3\n1 3 5\n0" },
    { "id": 5, "input": [], "expected": "1", "stdinput": "4\n5 10 15 20\n15" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nthreshold = int(input())\ncount = 0\nfor num in nums:\n    if num % 2 == 0 and num > threshold:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0 && num > scanner.nextInt()) {\n                count++;\n            }\n        }\n        \n        // Read threshold after reading all numbers\n        scanner.nextLine(); // consume remaining newline\n        int threshold = scanner.nextInt();\n        \n        // Reset scanner and recount properly\n        scanner = new Scanner(System.in);\n        n = scanner.nextInt();\n        count = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0 && num > threshold) {\n                count++;\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const threshold = parseInt(inputLines[2]);\n        \n        let count = 0;\n        for (let num of nums) {\n            if (num % 2 === 0 && num > threshold) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int threshold;\n    cin >> threshold;\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] % 2 == 0 && nums[i] > threshold) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
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