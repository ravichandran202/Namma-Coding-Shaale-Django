module.exports = {
  "title": "Multiplication Table",
  "difficulty": "easy",
  "acceptance": "99.2%",

  "description": `
    <p>Write a program that takes an integer N as input and prints the multiplication table of N from 1 to 10 using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from 1 to 10</li>
      <li>For each number, calculate N × number</li>
      <li>Print each multiplication in the format: <code>"N x number = result"</code></li>
    </ul>
    <p>This problem teaches while loops with formatted output and user-defined multiplication tables.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50</pre>
    <p><b>Explanation:</b> The program prints the multiplication table of 5 from 1 to 10.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30</pre>
    <p><b>Explanation:</b> The program prints the multiplication table of 3 from 1 to 10.</p>
  `,


  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50", 
      "stdinput": "5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30", 
      "stdinput": "3" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10", 
      "stdinput": "1" 
    }
  ],

  "templates": {
    "python": "i = 1\nN = int(input())\nwhile i <= 10:\n    print(N, \"x\", i, \"=\", N * i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int i = 1;\n        while (i <= 10) {\n            System.out.println(N + \" x \" + i + \" = \" + (N * i));\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let i = 1;\n    while (i <= 10) {\n        console.log(`${N} x ${i} = ${N * i}`);\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int i = 1;\n    while (i <= 10) {\n        cout << N << \" x \" << i << \" = \" << N * i << endl;\n        i++;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "i = 1\nN = int(input())\nwhile i <= 10:\n    print(N, \"x\", i, \"=\", N * i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int i = 1;\n        while (i <= 10) {\n            System.out.println(N + \" x \" + i + \" = \" + (N * i));\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let i = 1;\n    while (i <= 10) {\n        console.log(`${N} x ${i} = ${N * i}`);\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int i = 1;\n    while (i <= 10) {\n        cout << N << \" x \" << i << \" = \" << N * i << endl;\n        i++;\n    }\n    return 0;\n}"
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