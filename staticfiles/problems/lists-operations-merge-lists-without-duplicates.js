module.exports = {
  "title": "Combine Two Lists Without Duplicates",
  "difficulty": "hard",
  "acceptance": "70%",

  "description": `
    <p>Read two lists and merge them into a single list, but remove any duplicate items that appear in both lists.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the first list as space-separated items</li>
      <li><b>Second Input:</b> The second line contains the second list as space-separated items</li>
      <li><b>Output Format:</b> Display a single list containing all unique items from both lists</li>
      <li><b>Order Preservation:</b> Maintain the original order from the first list, followed by new items from the second list in their original order</li>
    </ul>
    <p>This problem helps practice list manipulation, duplicate removal, and maintaining element order while combining multiple data sources.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
apple mango banana
banana kiwi apple
Output: ['apple', 'mango', 'banana', 'kiwi']</pre>
    <p><b>Explanation:</b> The items <code>apple</code> and <code>banana</code> appear in both lists, so they are only included once in the result.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
red blue green
yellow red orange
Output: ['red', 'blue', 'green', 'yellow', 'orange']</pre>
    <p><b>Explanation:</b> <code>red</code> is duplicated, so it appears only once while maintaining its original position.</p>

    <p><b>Explanation:</b> The number <code>3</code> appears in both lists but is only included once in the final result.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['apple', 'mango', 'banana', 'kiwi']", "stdinput": "apple mango banana\nbanana kiwi apple" },
    { "id": 2, "input": [], "expected": "['red', 'blue', 'green', 'yellow', 'orange']", "stdinput": "red blue green\nyellow red orange" },
    { "id": 3, "input": [], "expected": "['1', '2', '3', '4', '5']", "stdinput": "1 2 3\n3 4 5" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'C', 'D']", "stdinput": "A B C\nB C D" },
    { "id": 5, "input": [], "expected": "['same']", "stdinput": "same\nsame same" },
    { "id": 6, "input": [], "expected": "['first', 'second', 'third', 'fourth']", "stdinput": "first second third\nthird fourth" },
    { "id": 7, "input": [], "expected": "['one', 'two']", "stdinput": "one two\none two" },
    { "id": 8, "input": [], "expected": "['X', 'Y', 'Z', 'W']", "stdinput": "X Y Z\nY Z W" },
    { "id": 9, "input": [], "expected": "['unique']", "stdinput": "unique\nunique" }
  ],

  "templates": {
    "python": "a = input().split()\nb = input().split()\nc = a + b\nresult = []\nfor i in c:\n    if i not in result:\n        result.append(i)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] a = scanner.nextLine().split(\" \");\n        String[] b = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>();\n        \n        for (String item : a) {\n            if (!result.contains(item)) {\n                result.add(item);\n            }\n        }\n        \n        for (String item : b) {\n            if (!result.contains(item)) {\n                result.add(item);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const a = inputLines[0].split(' ').filter(item => item !== '');\n        const b = inputLines[1].split(' ').filter(item => item !== '');\n        const combined = a.concat(b);\n        const result = [];\n        \n        for (const item of combined) {\n            if (!result.includes(item)) {\n                result.push(item);\n            }\n        }\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<string> result;\n    string item;\n    \n    // Process first line\n    stringstream ss1(line1);\n    while (ss1 >> item) {\n        if (find(result.begin(), result.end(), item) == result.end()) {\n            result.push_back(item);\n        }\n    }\n    \n    // Process second line\n    stringstream ss2(line2);\n    while (ss2 >> item) {\n        if (find(result.begin(), result.end(), item) == result.end()) {\n            result.push_back(item);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "a = input().split()\nb = input().split()\nc = a + b\nresult = []\nfor i in c:\n    if i not in result:\n        result.append(i)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] a = scanner.nextLine().split(\" \");\n        String[] b = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>();\n        \n        for (String item : a) {\n            if (!result.contains(item)) {\n                result.add(item);\n            }\n        }\n        \n        for (String item : b) {\n            if (!result.contains(item)) {\n                result.add(item);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const a = inputLines[0].split(' ').filter(item => item !== '');\n        const b = inputLines[1].split(' ').filter(item => item !== '');\n        const combined = a.concat(b);\n        const result = [];\n        \n        for (const item of combined) {\n            if (!result.includes(item)) {\n                result.push(item);\n            }\n        }\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<string> result;\n    string item;\n    \n    // Process first line\n    stringstream ss1(line1);\n    while (ss1 >> item) {\n        if (find(result.begin(), result.end(), item) == result.end()) {\n            result.push_back(item);\n        }\n    }\n    \n    // Process second line\n    stringstream ss2(line2);\n    while (ss2 >> item) {\n        if (find(result.begin(), result.end(), item) == result.end()) {\n            result.push_back(item);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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