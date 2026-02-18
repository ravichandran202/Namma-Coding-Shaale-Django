module.exports = {
  "title": "List Operations – Set Difference",
  "difficulty": "hard",
  "acceptance": "86%",

  "description": `
    <p>Find elements present in the first list but not in the second list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the first list as space-separated integers</li>
      <li><b>Second Input:</b> The second line contains the second list as space-separated integers</li>
      <li><b>Output Format:</b> Display a list containing elements from the first list that are not in the second list</li>
    </ul>
    <p>This problem helps practice set operations and list filtering based on membership conditions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
1 2 3 4 5
3 4 6 7
Output: [1, 2, 5]</pre>
    <p><b>Explanation:</b> Elements <code>1</code>, <code>2</code>, and <code>5</code> are in the first list but not in the second list.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
10 20 30
10 20 30
Output: []</pre>
    <p><b>Explanation:</b> All elements from the first list are present in the second list, so the result is empty.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 2, 5]", "stdinput": "1 2 3 4 5\n3 4 6 7" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "10 20 30\n10 20 30" },
    { "id": 3, "input": [], "expected": "[5, 5]", "stdinput": "5 5 10 10\n10 15 20" },
    { "id": 4, "input": [], "expected": "[1, 3, 5, 7]", "stdinput": "1 3 5 7\n2 4 6 8" },
    { "id": 5, "input": [], "expected": "[100, 300]", "stdinput": "100 200 300 400\n200 400 600" },
    { "id": 6, "input": [], "expected": "[-5, -3]", "stdinput": "-5 -3 -1 1\n-1 1 3 5" },
    { "id": 7, "input": [], "expected": "[2, 4, 6]", "stdinput": "1 2 3 4 5 6\n1 3 5 7" },
    { "id": 8, "input": [], "expected": "[7, 8, 9]", "stdinput": "7 8 9 10\n10 11 12" },
    { "id": 9, "input": [], "expected": "[25, 75]", "stdinput": "25 50 75 100\n50 100 150" }
  ],

  "templates": {
    "python": "list1 = list(map(int, input().split()))\nlist2 = list(map(int, input().split()))\nresult = []\nfor num in list1:\n    if num not in list2:\n        result.append(num)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] list1Str = scanner.nextLine().split(\" \");\n        String[] list2Str = scanner.nextLine().split(\" \");\n        \n        ArrayList<Integer> list1 = new ArrayList<>();\n        ArrayList<Integer> list2 = new ArrayList<>();\n        \n        for (String s : list1Str) {\n            list1.add(Integer.parseInt(s));\n        }\n        for (String s : list2Str) {\n            list2.add(Integer.parseInt(s));\n        }\n        \n        ArrayList<Integer> result = new ArrayList<>();\n        for (int num : list1) {\n            if (!list2.contains(num)) {\n                result.add(num);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const list1 = inputLines[0].split(' ').map(Number);\n        const list2 = inputLines[1].split(' ').map(Number);\n        const result = list1.filter(num => !list2.includes(num));\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<int> list1, list2, result;\n    stringstream ss1(line1), ss2(line2);\n    int num;\n    \n    while (ss1 >> num) {\n        list1.push_back(num);\n    }\n    while (ss2 >> num) {\n        list2.push_back(num);\n    }\n    \n    for (int num : list1) {\n        if (find(list2.begin(), list2.end(), num) == list2.end()) {\n            result.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << result[i];\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "list1 = list(map(int, input().split()))\nlist2 = list(map(int, input().split()))\nresult = []\nfor num in list1:\n    if num not in list2:\n        result.append(num)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] list1Str = scanner.nextLine().split(\" \");\n        String[] list2Str = scanner.nextLine().split(\" \");\n        \n        ArrayList<Integer> list1 = new ArrayList<>();\n        ArrayList<Integer> list2 = new ArrayList<>();\n        \n        for (String s : list1Str) {\n            list1.add(Integer.parseInt(s));\n        }\n        for (String s : list2Str) {\n            list2.add(Integer.parseInt(s));\n        }\n        \n        ArrayList<Integer> result = new ArrayList<>();\n        for (int num : list1) {\n            if (!list2.contains(num)) {\n                result.add(num);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const list1 = inputLines[0].split(' ').map(Number);\n        const list2 = inputLines[1].split(' ').map(Number);\n        const result = list1.filter(num => !list2.includes(num));\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<int> list1, list2, result;\n    stringstream ss1(line1), ss2(line2);\n    int num;\n    \n    while (ss1 >> num) {\n        list1.push_back(num);\n    }\n    while (ss2 >> num) {\n        list2.push_back(num);\n    }\n    \n    for (int num : list1) {\n        if (find(list2.begin(), list2.end(), num) == list2.end()) {\n            result.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << result[i];\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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