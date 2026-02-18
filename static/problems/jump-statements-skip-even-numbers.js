module.exports = {
  "title": "Skip Even Numbers",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Write a program that prints only the odd numbers from <code>1</code> to <code>N</code>. You must use a loop and the <code>continue</code> statement to skip even numbers.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single integer <code>N</code> where <code>N ≥ 1</code></li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the integer <code>N</code> from input</li>
      <li>If it is even, use <code>continue</code> to skip to the next iteration</li>
      <li>If it is odd, print the number</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
7
Output:
1
3
5
7</pre>
    <p><b>Explanation:</b> The numbers from 1 to 7 are: 1, 2, 3, 4, 5, 6, 7. Even numbers (2, 4, 6) are skipped, so we print 1, 3, 5, 7.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
Output:
1
3</pre>
    <p><b>Explanation:</b> Numbers from 1 to 4: 1, 2, 3, 4. Even numbers (2, 4) are skipped, so we print 1 and 3.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "1\n3\n5\n7", 
      "stdinput": "7",
      "explanation": "Odd numbers from 1 to 7: 1, 3, 5, 7" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1\n3", 
      "stdinput": "4",
      "explanation": "Odd numbers from 1 to 4: 1, 3" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Only number is 1, which is odd" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n3\n5\n7\n9\n11\n13\n15\n17\n19", 
      "stdinput": "20",
      "explanation": "All odd numbers from 1 to 20" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "1\n3\n5\n7\n9", 
      "stdinput": "10",
      "explanation": "Odd numbers from 1 to 10" 
    }
  ],

  "templates": {
    "python": "def skip_evens(n):\n    for i in range(1, n+1):\n        if i % 2 == 0:\n            continue\n        print(i)\n\n# main code\nn = int(input())\nskip_evens(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_evens(int n) {\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        skip_evens(n);\n    }\n}",
    "javascript": "function skip_evens(n) {\n    for (let i = 1; i <= n; i++) {\n        if (i % 2 === 0) {\n            continue;\n        }\n        console.log(i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    skip_evens(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid skip_evens(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 == 0) {\n            continue;\n        }\n        cout << i << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    skip_evens(n);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def skip_evens(n):\n    for i in range(1, n+1):\n        if i % 2 == 0:\n            continue\n        print(i)\n\n# main code\nn = int(input())\nskip_evens(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_evens(int n) {\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println(i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        skip_evens(n);\n    }\n}",
    "javascript": "function skip_evens(n) {\n    for (let i = 1; i <= n; i++) {\n        if (i % 2 === 0) {\n            continue;\n        }\n        console.log(i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    skip_evens(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid skip_evens(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 == 0) {\n            continue;\n        }\n        cout << i << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    skip_evens(n);\n    return 0;\n}"
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