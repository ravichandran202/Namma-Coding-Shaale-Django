module.exports = {
  "title": "Stars and Hashes",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print two lines with different patterns - first line with stars, second line with hashes.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>First line: N stars separated by spaces</li>
      <li>Second line: N-1 hashes separated by spaces</li>
      <li>Use two separate while loops</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=5: first line 5 stars, second line 4 hashes</li>
      <li>For N=3: first line 3 stars, second line 2 hashes</li>
    </ul>
    <p>This problem teaches pattern variation and loop control.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
* * * * *
# # # #</pre>
    <p><b>Explanation:</b> First line: 5 stars, Second line: 4 hashes</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * *
# #</pre>
    <p><b>Explanation:</b> First line: 3 stars, Second line: 2 hashes</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 2 and 10</li>
      <li>Use two separate while loops</li>
      <li>First loop prints N stars</li>
      <li>Second loop prints N-1 hashes</li>
      <li>Print symbols separated by spaces</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * \n# # # #", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * * \n# #", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "* * \n#", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "* * * * * * \n# # # # #", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "* * * * \n# # #", "stdinput": "4" }
  ],

  "templates": {
    "python": "n = int(input())\n\ni = 0\nwhile i < n:\n    print('*', end=' ')\n    i += 1\n\nprint()\n\nj = 0\nwhile j < n - 1:\n    print('#', end=' ')\n    j += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        int i = 0;\n        while (i < n) {\n            System.out.print(\"* \");\n            i++;\n        }\n        System.out.println();\n        \n        int j = 0;\n        while (j < n - 1) {\n            System.out.print(\"# \");\n            j++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 0;\n    let line1 = '';\n    while (i < n) {\n        line1 += '* ';\n        i++;\n    }\n    \n    let j = 0;\n    let line2 = '';\n    while (j < n - 1) {\n        line2 += '# ';\n        j++;\n    }\n    \n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int i = 0;\n    while (i < n) {\n        cout << \"* \";\n        i++;\n    }\n    cout << endl;\n    \n    int j = 0;\n    while (j < n - 1) {\n        cout << \"# \";\n        j++;\n    }\n    return 0;\n}"
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