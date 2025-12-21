module.exports = {
  "title": "Unique Ordered List",
  "difficulty": "medium",
  "acceptance": "59%",

  "description": `
    <p>Remove duplicate elements from a list while preserving the original order of first occurrences.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values, which may include duplicates</li>
      <li><b>Output Format:</b> Display the list with duplicates removed, maintaining the order of first appearances</li>
      <li><b>Duplicate Removal:</b> Only the first occurrence of each element is kept; subsequent duplicates are removed</li>
      <li><b>Order Preservation:</b> The relative order of the first occurrences is maintained exactly as in the original list</li>
    </ul>
    <p>This problem helps practice list manipulation, duplicate detection, and order preservation algorithms.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: red blue red green blue
Output: ['red', 'blue', 'green']</pre>
    <p><b>Explanation:</b> <code>red</code> and <code>blue</code> appear multiple times, but only their first occurrences are kept in the original order.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: A A B B C C
Output: ['A', 'B', 'C']</pre>
    <p><b>Explanation:</b> All duplicates are removed, leaving only the first occurrence of each unique element in order.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['red', 'blue', 'green']", "stdinput": "red blue red green blue" },
    { "id": 2, "input": [], "expected": "['A', 'B', 'C']", "stdinput": "A A B B C C" },
    { "id": 3, "input": [], "expected": "['1', '2', '3', '4']", "stdinput": "1 2 3 2 1 4" },
    { "id": 4, "input": [], "expected": "['same']", "stdinput": "same same same" },
    { "id": 5, "input": [], "expected": "['first', 'second', 'third']", "stdinput": "first second third second first" },
    { "id": 6, "input": [], "expected": "['apple', 'banana', 'cherry']", "stdinput": "apple banana cherry banana apple" },
    { "id": 7, "input": [], "expected": "['X', 'Y', 'Z']", "stdinput": "X Y Z X Y Z" },
    { "id": 8, "input": [], "expected": "['one']", "stdinput": "one one one one" },
    { "id": 9, "input": [], "expected": "['cat', 'dog', 'bird', 'fish']", "stdinput": "cat dog bird fish cat dog" }
  ],

  "templates": {
    "python": "colors = input().split()\nresult = []\nfor i in colors:\n    if i not in result:\n        result.append(i)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] colors = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>();\n        for (String color : colors) {\n            if (!result.contains(color)) {\n                result.add(color);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const colors = input.split(' ').filter(item => item !== '');\n    const result = [];\n    \n    for (const color of colors) {\n        if (!result.includes(color)) {\n            result.push(color);\n        }\n    }\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> colors;\n    string color;\n    \n    stringstream ss(input);\n    while (ss >> color) {\n        colors.push_back(color);\n    }\n    \n    vector<string> result;\n    for (const string& c : colors) {\n        if (find(result.begin(), result.end(), c) == result.end()) {\n            result.push_back(c);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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