module.exports = {
  "title": "Odd Numbers",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Write a program that takes an integer N as input and prints all odd numbers from 1 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate</li>
      <li>Start from number 1</li>
      <li>Print each odd number on a separate line</li>
      <li>Stop when you reach N</li>
    </ul>
    <p>This problem teaches while loops with conditional increments for odd numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 9
Output: 
1
3
5
7
9</pre>
    <p><b>Explanation:</b> The program prints odd numbers from 1 to 9.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 6
Output: 
1
3
5</pre>
    <p><b>Explanation:</b> The program prints odd numbers from 1 to 6 (1, 3, 5).</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "1\n3\n5\n7\n9", "stdinput": "9" },
    { "id": 2, "input": [], "expected": "1\n3\n5", "stdinput": "6" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n3\n5\n7\n9\n11", "stdinput": "11" },
    { "id": 5, "input": [], "expected": "", "stdinput": "0" }
  ],

  "templates": {
    "python": "N = int(input())\nnum = 1\nwhile num <= N:\n    print(num)\n    num += 2",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int num = 1;\n        while (num <= N) {\n            System.out.println(num);\n            num += 2;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let num = 1;\n    while (num <= parseInt(N)) {\n        console.log(num);\n        num += 2;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int num = 1;\n    while (num <= N) {\n        cout << num << endl;\n        num += 2;\n    }\n    return 0;\n}"
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