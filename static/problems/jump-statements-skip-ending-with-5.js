module.exports = {
  "title": "Skip Numbers Ending with 5",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Write a program that prints numbers from <code>1</code> to <code>N</code>, but skips all numbers that end with the digit <code>5</code>. You must use the <code>continue</code> statement to skip numbers ending with <code>5</code>.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single integer <code>N</code> where <code>N ≥ 1</code></li>
      <li><code>N</code> can be any positive integer</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the integer <code>N</code> from input</li>
      <li>Use a loop to go through numbers from <code>1</code> to <code>n</code></li>
      <li>Inside the loop, check if the current number ends with the digit <code>5</code></li>
      <li>A number ends with <code>5</code> if its last digit is <code>5</code> (like 5, 15, 25, 35, etc.)</li>
      <li>If it ends with <code>5</code>,  skip to the next number</li>
      <li>If it does not end with <code>5</code>, print the number</li>
    </ol>

  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
20
Output:
1
2
3
4
6
7
8
9
10
11
12
13
14
16
17
18
19
20</pre>
    <p><b>Explanation:</b> Numbers from 1 to 20: 5 and 15 end with digit 5, so they are skipped. All other numbers are printed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10
Output:
1
2
3
4
6
7
8
9
10</pre>
    <p><b>Explanation:</b> Numbers from 1 to 10: only 5 ends with digit 5, so it is skipped. All other numbers 1-4 and 6-10 are printed.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "1\n2\n3\n4\n6\n7\n8\n9\n10\n11\n12\n13\n14\n16\n17\n18\n19\n20", 
      "stdinput": "20",
      "explanation": "Skips 5 and 15 from 1 to 20" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1\n2\n3\n4\n6\n7\n8\n9\n10", 
      "stdinput": "10",
      "explanation": "Skips only 5 from 1 to 10" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1\n2\n3\n4\n6\n7\n8\n9", 
      "stdinput": "9",
      "explanation": "No numbers ending with 5 from 1 to 9" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n2\n3\n4\n6\n7\n8\n9\n10\n11\n12\n13\n14\n16\n17\n18\n19\n20\n21\n22\n23\n24\n26\n27\n28\n29\n30\n31\n32\n33\n34\n36", 
      "stdinput": "36",
      "explanation": "Skips 5, 15, 25, 35 from 1 to 36" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "1\n2\n3\n4\n6\n7\n8\n9\n10\n11\n12\n13\n14\n16\n17\n18\n19\n20\n21\n22\n23\n24\n26\n27\n28\n29\n30\n31\n32\n33\n34\n36\n37\n38\n39\n40\n41\n42\n43\n44\n46\n47\n48\n49\n50", 
      "stdinput": "50",
      "explanation": "Skips 5, 15, 25, 35, 45 from 1 to 50" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "1\n2\n3\n4", 
      "stdinput": "5",
      "explanation": "Skips 5, prints 1-4" 
    }
  ],

  "templates": {
    "python": "def skip_fives(n):\n    for i in range(1, n+1):\n        if i % 10 == 5:\n            continue\n        print(i)\n\n# main code\nn = int(input())\nskip_fives(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_fives(int n) {\n        for (int i = 1; i <= n; i++) {\n            if (i % 10 == 5) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        skip_fives(n);\n    }\n}",
    "javascript": "function skip_fives(n) {\n    for (let i = 1; i <= n; i++) {\n        if (i % 10 === 5) {\n            continue;\n        }\n        console.log(i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    skip_fives(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid skip_fives(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i % 10 == 5) {\n            continue;\n        }\n        cout << i << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    skip_fives(n);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def skip_fives(n):\n    for i in range(1, n+1):\n        if i % 10 == 5:\n            continue\n        print(i)\n\n# main code\nn = int(input())\nskip_fives(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_fives(int n) {\n        for (int i = 1; i <= n; i++) {\n            if (i % 10 == 5) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        skip_fives(n);\n    }\n}",
    "javascript": "function skip_fives(n) {\n    for (let i = 1; i <= n; i++) {\n        if (i % 10 === 5) {\n            continue;\n        }\n        console.log(i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    skip_fives(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid skip_fives(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i % 10 == 5) {\n            continue;\n        }\n        cout << i << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    skip_fives(n);\n    return 0;\n}"
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