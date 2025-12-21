module.exports = {
  "title": "Modify List Value",
  "difficulty": "easy",
  "acceptance": "82%",

  "description": `
    <p>You have a list of marks where one value is incorrect. Your task is to replace the incorrect value with a new correct value.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains marks as space-separated values</li>
      <li><b>Second Input:</b> The second line contains the index position of the value to replace</li>
      <li><b>Third Input:</b> The third line contains the new correct value</li>
      <li><b>Output Format:</b> Display the updated list with the specified value replaced</li>
    </ul>
    <p>This problem helps practice list indexing and element modification while working with multiple inputs.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
45 67 89 50
2
95
Output: ['45', '67', '95', '50']</pre>
    <p><b>Explanation:</b> The value at index <code>2</code> (third element <code>89</code>) is replaced with <code>95</code>, resulting in the updated list.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
10 20 30 40 50
0
100
Output: ['100', '20', '30', '40', '50']</pre>
    <p><b>Explanation:</b> The first element at index <code>0</code> (<code>10</code>) is replaced with <code>100</code>.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
A B C D
3
X
Output: ['A', 'B', 'C', 'X']</pre>
    <p><b>Explanation:</b> The last element at index <code>3</code> (<code>D</code>) is replaced with <code>X</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['45', '67', '95', '50']", "stdinput": "45 67 89 50\n2\n95" },
    { "id": 2, "input": [], "expected": "['100', '20', '30', '40', '50']", "stdinput": "10 20 30 40 50\n0\n100" },
    { "id": 3, "input": [], "expected": "['A', 'B', 'C', 'X']", "stdinput": "A B C D\n3\nX" },
    { "id": 4, "input": [], "expected": "['X', 'Y', 'Z']", "stdinput": "A Y Z\n0\nX" },
    { "id": 5, "input": [], "expected": "['1', '2', '9', '4']", "stdinput": "1 2 3 4\n2\n9" },
    { "id": 6, "input": [], "expected": "['red', 'green', 'blue']", "stdinput": "red yellow blue\n1\ngreen" },
    { "id": 7, "input": [], "expected": "['first', 'correct', 'third']", "stdinput": "first wrong third\n1\ncorrect" },
    { "id": 8, "input": [], "expected": "['old', 'new']", "stdinput": "old value\n1\nnew" },
    { "id": 9, "input": [], "expected": "['replaced']", "stdinput": "original\n0\nreplaced" }
  ],

  "templates": {
    "python": "marks = input().split()\ni = int(input())\nv = input()\nmarks[i] = v\nprint(marks)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] marks = scanner.nextLine().split(\" \");\n        int i = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String v = scanner.nextLine();\n        \n        marks[i] = v;\n        System.out.println(Arrays.toString(marks));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const marks = inputLines[0].split(' ').filter(item => item !== '');\n        const i = parseInt(inputLines[1]);\n        const v = inputLines[2];\n        \n        marks[i] = v;\n        console.log(JSON.stringify(marks));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, v;\n    int i;\n    getline(cin, line1);\n    cin >> i;\n    cin.ignore(); // ignore newline\n    getline(cin, v);\n    \n    vector<string> marks;\n    string mark;\n    \n    stringstream ss(line1);\n    while (ss >> mark) {\n        marks.push_back(mark);\n    }\n    \n    marks[i] = v;\n    \n    cout << \"[\";\n    for (int i = 0; i < marks.size(); i++) {\n        cout << \"'\" << marks[i] << \"'\";\n        if (i < marks.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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