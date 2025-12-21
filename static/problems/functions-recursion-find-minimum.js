module.exports = {
  "title": "Minimum Finder – Recursive",
  "difficulty": "hard",
  "acceptance": "88%",

  "description": `
    <p>Create a recursive function to find the smallest number in a given list of integers.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of elements in the list</li>
      <li>Second line: <code>n</code> space-separated integers</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the size of the list <code>n</code></li>
      <li>Read the list of integers</li>
      <li>Create a recursive function called <code>find_min(arr, n)</code></li>
      <li>The function should return the smallest number from the list</li>
      <li>Use recursion to compare elements and find the minimum</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
10 4 22 3 5
Output:
3</pre>
    <p><b>Explanation:</b> We recursively compare elements: Check last element <code>5</code> against minimum of first <code>4</code> elements, which is <code>3</code>. Since <code>3 < 5</code>, <code>3</code> is the overall minimum.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
-5 0 10
Output:
-5</pre>
    <p><b>Explanation:</b> Compare last element <code>10</code> with minimum of first <code>2</code> elements (<code>-5</code> and <code>0</code>). Minimum of those is <code>-5</code>, and <code>-5 < 10</code>, so <code>-5</code> is the smallest.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "3", 
      "stdinput": "5\n10 4 22 3 5",
      "explanation": "Minimum is 3 from mixed positive numbers" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "-5", 
      "stdinput": "3\n-5 0 10",
      "explanation": "Negative number is smallest" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "42", 
      "stdinput": "1\n42",
      "explanation": "Single element list" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "7", 
      "stdinput": "4\n7 7 7 7",
      "explanation": "All elements equal" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "-100", 
      "stdinput": "6\n10 -20 30 -100 50 0",
      "explanation": "Large negative number is minimum" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "0", 
      "stdinput": "5\n0 0 0 0 0",
      "explanation": "All zeros" 
    }
  ],

  "templates": {
    "python": "def find_min(arr, n):\n    if n == 1:\n        return arr[0]\n    return min(arr[n-1], find_min(arr, n-1))\n\n# main code\nn = int(input())\narr = list(map(int, input().split()))\nprint(find_min(arr, n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int find_min(int[] arr, int n) {\n        if (n == 1) {\n            return arr[0];\n        }\n        return Math.min(arr[n-1], find_min(arr, n-1));\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = scanner.nextInt();\n        }\n        System.out.println(find_min(arr, n));\n    }\n}",
    "javascript": "function find_min(arr, n) {\n    if (n === 1) {\n        return arr[0];\n    }\n    return Math.min(arr[n-1], find_min(arr, n-1));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    lineCount++;\n    if (lineCount === 2) {\n        const n = parseInt(inputLines[0]);\n        const arr = inputLines[1].split(' ').map(Number);\n        console.log(find_min(arr, n));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint find_min(int arr[], int n) {\n    if (n == 1) {\n        return arr[0];\n    }\n    return min(arr[n-1], find_min(arr, n-1));\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for (int i = 0; i < n; i++) {\n        cin >> arr[i];\n    }\n    cout << find_min(arr, n) << endl;\n    return 0;\n}"
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