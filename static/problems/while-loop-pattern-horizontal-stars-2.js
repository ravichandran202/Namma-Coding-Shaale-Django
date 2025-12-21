module.exports = {
  "title": "Two-Line Star Pattern",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Print two lines of stars with N stars in each line.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print two lines, each containing N stars separated by spaces</li>
      <li>Use two separate while loops</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=5: two lines with 5 stars each</li>
      <li>For N=3: two lines with 3 stars each</li>
    </ul>
    <p>This problem teaches multiple loop usage and basic pattern printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
* * * * *
* * * * *</pre>
    <p><b>Explanation:</b> Two lines with 5 stars each</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * *
* * *</pre>
    <p><b>Explanation:</b> Two lines with 3 stars each</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 10</li>
      <li>Use two separate while loops</li>
      <li>First loop prints first line, second loop prints second line</li>
      <li>Print stars separated by spaces</li>
      <li>Each line should have exactly N stars</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * \n* * * * *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * * \n* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "* \n*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * * * \n* * * * * *", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "* * \n* *", "stdinput": "2" }
  ],

  "templates": {
    "python": "n = int(input())\n\ni = 0\nwhile i < n:\n    print('*', end=' ')\n    i += 1\n\nprint()\n\nj = 0\nwhile j < n:\n    print('*', end=' ')\n    j += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        int i = 0;\n        while (i < n) {\n            System.out.print(\"* \");\n            i++;\n        }\n        System.out.println();\n        \n        int j = 0;\n        while (j < n) {\n            System.out.print(\"* \");\n            j++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 0;\n    let line1 = '';\n    while (i < n) {\n        line1 += '* ';\n        i++;\n    }\n    \n    let j = 0;\n    let line2 = '';\n    while (j < n) {\n        line2 += '* ';\n        j++;\n    }\n    \n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int i = 0;\n    while (i < n) {\n        cout << \"* \";\n        i++;\n    }\n    cout << endl;\n    \n    int j = 0;\n    while (j < n) {\n        cout << \"* \";\n        j++;\n    }\n    return 0;\n}"
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