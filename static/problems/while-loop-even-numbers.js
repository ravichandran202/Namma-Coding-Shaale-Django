module.exports = {
  "title": "Even Numbers",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Write a program that takes an integer N as input and prints all even numbers from 2 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate</li>
      <li>Start from number 2</li>
      <li>Print each even number on a separate line</li>
      <li>Stop when you reach N</li>
    </ul>
    <p>This problem teaches while loops with conditional increments.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10
Output: 2
4
6
8
10</pre>
    <p><b>Explanation:</b> The program prints even numbers from 2 to 10.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: 2
4
6</pre>
    <p><b>Explanation:</b> The program prints even numbers from 2 to 7 (2, 4, 6).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2\n4\n6\n8\n10", "stdinput": "10" },
    { "id": 2, "input": [], "expected": "2\n4\n6", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "2\n4\n6\n8\n10\n12", "stdinput": "12" },
    { "id": 5, "input": [], "expected": "", "stdinput": "1" }
  ],

  "templates": {
    "python": "N = int(input())\nnum = 2\nwhile num <= N:\n    print(num)\n    num += 2",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int num = 2;\n        while (num <= N) {\n            System.out.println(num);\n            num += 2;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let num = 2;\n    while (num <= parseInt(N)) {\n        console.log(num);\n        num += 2;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int num = 2;\n    while (num <= N) {\n        cout << num << endl;\n        num += 2;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "N = int(input())\nnum = 2\nwhile num <= N:\n    print(num)\n    num += 2",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int num = 2;\n        while (num <= N) {\n            System.out.println(num);\n            num += 2;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let num = 2;\n    while (num <= parseInt(N)) {\n        console.log(num);\n        num += 2;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int num = 2;\n    while (num <= N) {\n        cout << num << endl;\n        num += 2;\n    }\n    return 0;\n}"
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