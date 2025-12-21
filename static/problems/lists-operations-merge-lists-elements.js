module.exports = {
  "title": "Combine Lists",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>You have two separate shopping lists. Your task is to combine them into one single list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The first line contains the first shopping list as space-separated items</li>
      <li><b>Second Input:</b> The second line contains the second shopping list as space-separated items</li>
      <li><b>Output Format:</b> Display a single list containing all items from both lists</li>
    </ul>
    <p>This problem helps practice reading multiple inputs and combining lists while maintaining the original sequence of elements.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
milk bread eggs
soap shampoo
Output: ['milk', 'bread', 'eggs', 'soap', 'shampoo']</pre>
    <p><b>Explanation:</b> The first list <code>milk, bread, eggs</code> is combined with the second list <code>soap, shampoo</code> to create one continuous list.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
apples oranges
bananas grapes
Output: ['apples', 'oranges', 'bananas', 'grapes']</pre>
    <p><b>Explanation:</b> Both lists are combined in the order they were provided, first list items followed by second list items.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
pens pencils
notebook
Output: ['pens', 'pencils', 'notebook']</pre>
    <p><b>Explanation:</b> Lists with different numbers of items are combined seamlessly into one list.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['milk', 'bread', 'eggs', 'soap', 'shampoo']", "stdinput": "milk bread eggs\nsoap shampoo" },
    { "id": 2, "input": [], "expected": "['apples', 'oranges', 'bananas', 'grapes']", "stdinput": "apples oranges\nbananas grapes" },
    { "id": 3, "input": [], "expected": "['pens', 'pencils', 'notebook']", "stdinput": "pens pencils\nnotebook" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'C', 'D']", "stdinput": "A B\nC D" },
    { "id": 7, "input": [], "expected": "['math', 'science', 'history', 'art']", "stdinput": "math science\nhistory art" },
    { "id": 8, "input": [], "expected": "['first', 'second', 'third', 'fourth', 'fifth']", "stdinput": "first second\nthird fourth fifth" },
  ],

  "templates": {
    "python": "list1 = input().split()\nlist2 = input().split()\nprint(list1 + list2)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] list1 = scanner.nextLine().split(\" \");\n        String[] list2 = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> combined = new ArrayList<>();\n        combined.addAll(Arrays.asList(list1));\n        combined.addAll(Arrays.asList(list2));\n        \n        System.out.println(combined);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const list1 = inputLines[0].split(' ').filter(item => item !== '');\n        const list2 = inputLines[1].split(' ').filter(item => item !== '');\n        const combined = list1.concat(list2);\n        console.log(JSON.stringify(combined));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    vector<string> combined;\n    string item;\n    \n    stringstream ss1(line1);\n    while (ss1 >> item) {\n        combined.push_back(item);\n    }\n    \n    stringstream ss2(line2);\n    while (ss2 >> item) {\n        combined.push_back(item);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < combined.size(); i++) {\n        cout << \"'\" << combined[i] << \"'\";\n        if (i < combined.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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