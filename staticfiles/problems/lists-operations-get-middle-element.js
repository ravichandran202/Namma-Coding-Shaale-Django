module.exports = {
  "title": "Get the Middle Element",
  "difficulty": "easy",
  "acceptance": "78%",

  "description": `
    <p>You have a list of items. Your task is to find and print the middle element of the list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display only the middle element of the list</li>
      <li><b>Odd Length Only:</b> The list is guaranteed to have an odd number of elements</li>
    </ul>
    <p>This problem helps practice list indexing and mathematical calculation of middle positions in sequences.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A B C D E
Output: C</pre>
    <p><b>Explanation:</b> With <code>5</code> elements, the middle is at index <code>2</code> (position 3 in 1-based counting), which is <code>C</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: X Y Z
Output: Y</pre>
    <p><b>Explanation:</b> With <code>3</code> elements, the middle is at index <code>1</code>, which is <code>Y</code>.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: Middle
Output: Middle</pre>
    <p><b>Explanation:</b> With only one element, that single element is automatically the middle.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "C", "stdinput": "A B C D E" },
    { "id": 2, "input": [], "expected": "Y", "stdinput": "X Y Z" },
    { "id": 3, "input": [], "expected": "Middle", "stdinput": "Middle" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "1 2 3 4 5" },
    { "id": 5, "input": [], "expected": "B", "stdinput": "B" },
  ],

  "templates": {
    "python": "items = input().split()\nhalf = len(items) // 2\nprint(items[half])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        int half = items.length / 2;\n        System.out.println(items[half]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const half = Math.floor(items.length / 2);\n    console.log(items[half]);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    int half = items.size() / 2;\n    cout << items[half] << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "items = input().split()\nhalf = len(items) // 2\nprint(items[half])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        int half = items.length / 2;\n        System.out.println(items[half]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const half = Math.floor(items.length / 2);\n    console.log(items[half]);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    int half = items.size() / 2;\n    cout << items[half] << endl;\n    return 0;\n}"
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