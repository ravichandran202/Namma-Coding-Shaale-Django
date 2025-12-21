module.exports = {
  "title": "Combine Alternately",
  "difficulty": "hard",
  "acceptance": "61%",

  "description": `
    <p>Combine two lists by taking one element from each list alternately, creating an interleaved sequence.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the first list as space-separated items</li>
      <li><b>Second Input:</b> The second line contains the second list as space-separated items</li>
      <li><b>Output Format:</b> Display a single list with elements alternating between the two input lists</li>
      <li><b>Interleaving Logic:</b> 
      <ol>
      <li>Take first element from first list, </li>
      <li>then first from second list, </li>
      <li>then second from first list, and so on</li>
      </ol></li>
    </ul>
    <p>This problem helps practice working with multiple lists simultaneously and creating complex interleaving patterns.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
1 2 3
A B C
Output: ['1', 'A', '2', 'B', '3', 'C']</pre>
    <p><b>Explanation:</b> Elements are taken alternately: <code>1</code> (first list), <code>A</code> (second list), <code>2</code> (first list), <code>B</code> (second list), <code>3</code> (first list), <code>C</code> (second list).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
red blue
X Y
Output: ['red', 'X', 'blue', 'Y']</pre>
    <p><b>Explanation:</b> The pattern continues with two-element lists: first from list one, first from list two, second from list one, second from list two.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['1', 'A', '2', 'B', '3', 'C']", "stdinput": "1 2 3\nA B C" },
    { "id": 2, "input": [], "expected": "['red', 'X', 'blue', 'Y']", "stdinput": "red blue\nX Y" },
    { "id": 3, "input": [], "expected": "['mon', 'jan', 'tue', 'feb', 'wed', 'mar']", "stdinput": "mon tue wed\njan feb mar" },
    { "id": 4, "input": [], "expected": "['first', 'one', 'second', 'two']", "stdinput": "first second\none two" },
    { "id": 5, "input": [], "expected": "['A', '1', 'B', '2']", "stdinput": "A B\n1 2" },
    { "id": 6, "input": [], "expected": "['cat', 'dog', 'bird', 'fish']", "stdinput": "cat bird\ndog fish" },
    { "id": 7, "input": [], "expected": "['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']", "stdinput": "Jan Mar May\nFeb Apr Jun" },
    { "id": 8, "input": [], "expected": "['up', 'down', 'left', 'right']", "stdinput": "up left\ndown right" },
    { "id": 9, "input": [], "expected": "['alpha', 'beta', 'gamma', 'delta']", "stdinput": "alpha gamma\nbeta delta" }
  ],

  "templates": {
    "python": "a = input().split()\nb = input().split()\nc = []\nfor i in range(len(a)):\n    c.append(a[i])\n    c.append(b[i])\nprint(c)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] a = scanner.nextLine().split(\" \");\n        String[] b = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>();\n        for (int i = 0; i < a.length; i++) {\n            result.add(a[i]);\n            result.add(b[i]);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const a = inputLines[0].split(' ').filter(item => item !== '');\n        const b = inputLines[1].split(' ').filter(item => item !== '');\n        const result = [];\n        \n        for (let i = 0; i < a.length; i++) {\n            result.push(a[i]);\n            result.push(b[i]);\n        }\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<string> a, b;\n    string item;\n    \n    stringstream ss1(line1);\n    while (ss1 >> item) {\n        a.push_back(item);\n    }\n    \n    stringstream ss2(line2);\n    while (ss2 >> item) {\n        b.push_back(item);\n    }\n    \n    vector<string> result;\n    for (int i = 0; i < a.size(); i++) {\n        result.push_back(a[i]);\n        result.push_back(b[i]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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