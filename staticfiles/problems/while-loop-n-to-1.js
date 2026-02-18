module.exports = {
  "title": "Reverse Counter",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Write a program that takes an integer N as input and prints all numbers from N down to 1 using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from N down to 1</li>
      <li>Print each number on a separate line</li>
      <li>Stop when you reach 1</li>
    </ul>
    <p>This problem teaches while loops with decrementing counters and user-defined starting points.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
5
4
3
2
1</pre>
    <p><b>Explanation:</b> The program prints numbers from 5 down to 1.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
3
2
1</pre>
    <p><b>Explanation:</b> The program prints numbers from 3 down to 1.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5\n4\n3\n2\n1", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "3\n2\n1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "7\n6\n5\n4\n3\n2\n1", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1", "stdinput": "10" }
  ],

  "templates": {
    "python": "i = int(input())\nwhile i >= 1:\n    print(i)\n    i -= 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int i = scanner.nextInt();\n        while (i >= 1) {\n            System.out.println(i);\n            i--;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (i) => {\n    let num = parseInt(i);\n    while (num >= 1) {\n        console.log(num);\n        num--;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    cin >> i;\n    while (i >= 1) {\n        cout << i << endl;\n        i--;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "i = int(input())\nwhile i >= 1:\n    print(i)\n    i -= 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int i = scanner.nextInt();\n        while (i >= 1) {\n            System.out.println(i);\n            i--;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (i) => {\n    let num = parseInt(i);\n    while (num >= 1) {\n        console.log(num);\n        num--;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i;\n    cin >> i;\n    while (i >= 1) {\n        cout << i << endl;\n        i--;\n    }\n    return 0;\n}"
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