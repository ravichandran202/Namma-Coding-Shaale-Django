module.exports = {
  "title": "List Replication",
  "difficulty": "easy",
  "acceptance": "89%",

  "description": `
    <p>You have a list of snacks. Your task is to repeat the snack list a specified number of times and print the result.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains snack items as space-separated words</li>
      <li><b>Second Input:</b> The second line contains a number specifying how many times to repeat the list</li>
      <li><b>Output Format:</b> Display the snack list repeated the specified number of times as one continuous list</li>
      <li><b>Replication Method:</b> The entire list is repeated consecutively the given number of times</li>
    </ul>
    <p>This problem helps practice list multiplication and understanding how to create repeated sequences from existing lists.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
chips soda
2
Output: ['chips', 'soda', 'chips', 'soda']</pre>
    <p><b>Explanation:</b> The snack list <code>chips, soda</code> is repeated <code>2</code> times, creating the sequence <code>chips, soda, chips, soda</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
cookie
3
Output: ['cookie', 'cookie', 'cookie']</pre>
    <p><b>Explanation:</b> A single-item list repeated <code>3</code> times creates a list with three identical items.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
apple banana
1
Output: ['apple', 'banana']</pre>
    <p><b>Explanation:</b> When the repetition count is <code>1</code>, the original list is returned unchanged.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['chips', 'soda', 'chips', 'soda']", "stdinput": "chips soda\n2" },
    { "id": 2, "input": [], "expected": "['cookie', 'cookie', 'cookie']", "stdinput": "cookie\n3" },
    { "id": 3, "input": [], "expected": "['apple', 'banana']", "stdinput": "apple banana\n1" },
    { "id": 4, "input": [], "expected": "[]", "stdinput": "chips soda\n0" },
    { "id": 5, "input": [], "expected": "['one']", "stdinput": "one\n1" },
    { "id": 6, "input": [], "expected": "['first', 'second', 'first', 'second', 'first', 'second', 'first', 'second']", "stdinput": "first second\n4" }
  ],

  "templates": {
    "python": "snacks = input().split()\nn = int(input())\nprint(snacks * n)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] snacks = scanner.nextLine().split(\" \");\n        int n = scanner.nextInt();\n        \n        ArrayList<String> result = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            result.addAll(Arrays.asList(snacks));\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const snacks = inputLines[0].split(' ').filter(item => item !== '');\n        const n = parseInt(inputLines[1]);\n        const result = [];\n        for (let i = 0; i < n; i++) {\n            result.push(...snacks);\n        }\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1;\n    int n;\n    getline(cin, line1);\n    cin >> n;\n    \n    vector<string> snacks;\n    string snack;\n    \n    stringstream ss(line1);\n    while (ss >> snack) {\n        snacks.push_back(snack);\n    }\n    \n    vector<string> result;\n    for (int i = 0; i < n; i++) {\n        result.insert(result.end(), snacks.begin(), snacks.end());\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "snacks = input().split()\nn = int(input())\nprint(snacks * n)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] snacks = scanner.nextLine().split(\" \");\n        int n = scanner.nextInt();\n        \n        ArrayList<String> result = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            result.addAll(Arrays.asList(snacks));\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const snacks = inputLines[0].split(' ').filter(item => item !== '');\n        const n = parseInt(inputLines[1]);\n        const result = [];\n        for (let i = 0; i < n; i++) {\n            result.push(...snacks);\n        }\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1;\n    int n;\n    getline(cin, line1);\n    cin >> n;\n    \n    vector<string> snacks;\n    string snack;\n    \n    stringstream ss(line1);\n    while (ss >> snack) {\n        snacks.push_back(snack);\n    }\n    \n    vector<string> result;\n    for (int i = 0; i < n; i++) {\n        result.insert(result.end(), snacks.begin(), snacks.end());\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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