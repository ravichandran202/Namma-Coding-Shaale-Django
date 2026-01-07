module.exports = {
    "title": "CSV String Parser",
    "difficulty": "Medium",
    "acceptance": "60%",
  
    "description": `
      <p>You have a string of Comma-Separated Values (CSV). Your task is to parse this string and convert it into a list format.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A single string containing items separated by commas (e.g., "apple,banana,grape").</li>
        <li><b>Logic:</b> Split the string at every comma delimiter. Remove any extra whitespace around items if necessary.</li>
        <li><b>Output Format:</b> Display the result as a list of strings (e.g., ['apple', 'banana', 'grape']).</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
apple,banana,grape
Output: ['apple', 'banana', 'grape']</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
red,green,blue
Output: ['red', 'green', 'blue']</pre>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
one
Output: ['one']</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "['apple', 'banana', 'grape']", "stdinput": "apple,banana,grape" },
      { "id": 2, "input": [], "expected": "['red', 'green', 'blue']", "stdinput": "red,green,blue" },
      { "id": 3, "input": [], "expected": "['one']", "stdinput": "one" },
      { "id": 4, "input": [], "expected": "['10', '20', '30']", "stdinput": "10,20,30" },
      { "id": 5, "input": [], "expected": "['a', 'b', 'c', 'd']", "stdinput": "a,b,c,d" },
      { "id": 6, "input": [], "expected": "['name', 'age']", "stdinput": "name,age" }
    ],
  
    "templates": {
      "python": "s = input()\n# Split by comma\nprint(s.split(','))",
      "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        String[] parts = s.split(\",\");\n        \n        // Manual output to match list format ['a', 'b']\n        System.out.print(\"[\");\n        for (int i = 0; i < parts.length; i++) {\n            System.out.print(\"'\" + parts[i] + \"'\");\n            if (i < parts.length - 1) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    const parts = line.split(',');\n    const formatted = parts.map(item => `'${item}'`);\n    console.log(`[${formatted.join(', ')}]`);\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    vector<string> parts;\n    stringstream ss(s);\n    string item;\n    \n    while (getline(ss, item, ',')) {\n        parts.push_back(item);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < parts.size(); i++) {\n        cout << \"'\" << parts[i] << \"'\";\n        if (i < parts.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
    },
  
    "wrapCode": function(lang, userCode, input) {
      switch(lang) {
        case 'python': return `${userCode}`;
        case 'java': return userCode;
        case 'javascript': return `${userCode}`;
        case 'c++': return userCode;
        default: return userCode;
      }
    }
  }