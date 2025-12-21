module.exports = {
  "title": "One and Half Line Pattern",
  "difficulty": "easy",
  "acceptance": "83%",

  "description": `
    <p>Print two lines with different numbers of stars - first line with N stars, second line with N/2 stars.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>First line: N stars separated by spaces</li>
      <li>Second line: floor(N/2) stars separated by spaces</li>
      <li>Use two separate while loops</li>
      <li>Use integer division for second line</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=6: first line 6 stars, second line 3 stars</li>
      <li>For N=4: first line 4 stars, second line 2 stars</li>
    </ul>
    <p>This problem teaches integer division and pattern scaling.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: 
* * * * * *
* * *</pre>
    <p><b>Explanation:</b> First line: 6 stars, Second line: 3 stars (6/2)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
* * * *
* *</pre>
    <p><b>Explanation:</b> First line: 4 stars, Second line: 2 stars (4/2)</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 2 and 10</li>
      <li>Use two separate while loops</li>
      <li>First loop prints N stars</li>
      <li>Second loop prints N//2 stars (integer division)</li>
      <li>Print stars separated by spaces</li>
      <li>N will be even for clean division</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * * \n* * *", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "* * * * \n* *", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "* * \n*", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "* * * * * * * * \n* * * *", "stdinput": "8" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * * \n* * * * *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\n\ni = 0\nwhile i < n:\n    print('*', end=' ')\n    i += 1\n\nprint()\n\nj = 0\nwhile j < n // 2:\n    print('*', end=' ')\n    j += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        int i = 0;\n        while (i < n) {\n            System.out.print(\"* \");\n            i++;\n        }\n        System.out.println();\n        \n        int j = 0;\n        while (j < n / 2) {\n            System.out.print(\"* \");\n            j++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 0;\n    let line1 = '';\n    while (i < n) {\n        line1 += '* ';\n        i++;\n    }\n    \n    let j = 0;\n    let line2 = '';\n    while (j < Math.floor(n / 2)) {\n        line2 += '* ';\n        j++;\n    }\n    \n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int i = 0;\n    while (i < n) {\n        cout << \"* \";\n        i++;\n    }\n    cout << endl;\n    \n    int j = 0;\n    while (j < n / 2) {\n        cout << \"* \";\n        j++;\n    }\n    return 0;\n}"
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