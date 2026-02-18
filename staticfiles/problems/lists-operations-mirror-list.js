module.exports = {
  "title": "Create a Palindrome List",
  "difficulty": "medium",
  "acceptance": "63%",

  "description": `
    <p>Create a mirrored list by adding the reverse of the original list at the end.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the original list followed by its reverse, creating a palindrome structure</li>
      <li><b>Mirror Logic:</b> The original list is preserved in the first half, and its exact reverse forms the second half</li>
      <li><b>Palindrome Creation:</b> The resulting list reads the same forwards and backwards</li>
    </ul>
    <p>This problem helps practice list reversal and concatenation while creating symmetrical data structures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A B C
Output: ['A', 'B', 'C', 'C', 'B', 'A']</pre>
    <p><b>Explanation:</b> The original <code>A B C</code> is followed by its reverse <code>C B A</code>, creating a palindrome list.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1 2
Output: ['1', '2', '2', '1']</pre>
    <p><b>Explanation:</b> Original <code>1 2</code> followed by reverse <code>2 1</code> creates a four-element palindrome.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: X
Output: ['X', 'X']</pre>
    <p><b>Explanation:</b> A single element becomes two identical elements, forming the smallest possible palindrome.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['A', 'B', 'C', 'C', 'B', 'A']", "stdinput": "A B C" },
    { "id": 2, "input": [], "expected": "['1', '2', '2', '1']", "stdinput": "1 2" },
    { "id": 3, "input": [], "expected": "['X', 'X']", "stdinput": "X" },
    { "id": 4, "input": [], "expected": "['red', 'blue', 'green', 'green', 'blue', 'red']", "stdinput": "red blue green" },
    { "id": 5, "input": [], "expected": "[]", "stdinput": "" },
    { "id": 6, "input": [], "expected": "['one', 'two', 'three', 'three', 'two', 'one']", "stdinput": "one two three" },
    { "id": 7, "input": [], "expected": "['A', 'B', 'C', 'D', 'D', 'C', 'B', 'A']", "stdinput": "A B C D" },
    { "id": 8, "input": [], "expected": "['start', 'middle', 'end', 'end', 'middle', 'start']", "stdinput": "start middle end" },
    { "id": 9, "input": [], "expected": "['1', '2', '3', '4', '5', '5', '4', '3', '2', '1']", "stdinput": "1 2 3 4 5" }
  ],

  "templates": {
    "python": "items = input().split()\nprint(items + items[::-1])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>(Arrays.asList(items));\n        ArrayList<String> reversed = new ArrayList<>(Arrays.asList(items));\n        Collections.reverse(reversed);\n        result.addAll(reversed);\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const reversed = items.slice().reverse();\n    const result = items.concat(reversed);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    vector<string> reversed = items;\n    reverse(reversed.begin(), reversed.end());\n    \n    vector<string> result = items;\n    result.insert(result.end(), reversed.begin(), reversed.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "items = input().split()\nprint(items + items[::-1])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> result = new ArrayList<>(Arrays.asList(items));\n        ArrayList<String> reversed = new ArrayList<>(Arrays.asList(items));\n        Collections.reverse(reversed);\n        result.addAll(reversed);\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const reversed = items.slice().reverse();\n    const result = items.concat(reversed);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    vector<string> reversed = items;\n    reverse(reversed.begin(), reversed.end());\n    \n    vector<string> result = items;\n    result.insert(result.end(), reversed.begin(), reversed.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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