module.exports = {
  "title": "Get the Middle Element (Odd and Even Length)",
  "difficulty": "medium",
  "acceptance": "72%",

  "description": `
    <p>Extract the middle element(s) from a list based on whether the list length is odd or even.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the middle element(s) as a list</li>
      <li><b>Odd Length Lists:</b> For odd-length lists, return a single element - the exact middle element</li>
      <li><b>Even Length Lists:</b> For even-length lists, return two elements - the two middle elements</li>
    </ul>
    <p>This problem helps practice conditional logic and list slicing based on list length properties.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A B C
Output: ['B']</pre>
    <p><b>Explanation:</b> With <code>3</code> elements (odd), return the single middle element <code>B</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1 2 3 4
Output: ['2', '3']</pre>
    <p><b>Explanation:</b> With <code>4</code> elements (even), return the two middle elements <code>2</code> and <code>3</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['B']", "stdinput": "A B C" },
    { "id": 2, "input": [], "expected": "['2', '3']", "stdinput": "1 2 3 4" },
    { "id": 3, "input": [], "expected": "['X']", "stdinput": "X" },
    { "id": 4, "input": [], "expected": "['30']", "stdinput": "10 20 30 40 50" },
    { "id": 5, "input": [], "expected": "['red', 'blue']", "stdinput": "red blue" },
    { "id": 6, "input": [], "expected": "['middle']", "stdinput": "start middle end" },
    { "id": 7, "input": [], "expected": "['3', '4']", "stdinput": "1 2 3 4 5 6" },
    { "id": 8, "input": [], "expected": "['C']", "stdinput": "A B C D E" },
    { "id": 9, "input": [], "expected": "[]", "stdinput": "" }
  ],

  "templates": {
    "python": "items = input().split()\nif len(items) % 2 == 0:\n    half = len(items) // 2\n    print(items[half-1:half+1])\nelse:\n    half = len(items) // 2\n    print([items[half]])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        \n        String[] result;\n        if (items.length % 2 == 0) {\n            int half = items.length / 2;\n            result = Arrays.copyOfRange(items, half - 1, half + 1);\n        } else {\n            int half = items.length / 2;\n            result = new String[]{items[half]};\n        }\n        \n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    let result = [];\n    \n    if (items.length % 2 === 0) {\n        const half = items.length / 2;\n        result = items.slice(half - 1, half + 1);\n    } else {\n        const half = Math.floor(items.length / 2);\n        result = [items[half]];\n    }\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    vector<string> result;\n    if (items.size() % 2 == 0) {\n        int half = items.size() / 2;\n        result.push_back(items[half - 1]);\n        result.push_back(items[half]);\n    } else {\n        int half = items.size() / 2;\n        result.push_back(items[half]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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