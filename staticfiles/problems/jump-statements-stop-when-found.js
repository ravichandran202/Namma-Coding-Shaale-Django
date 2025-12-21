module.exports = {
  "title": "Stop When Found",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Write a program that reads numbers continuously until it encounters the number <code>99</code>. When <code>99</code> is found, the program should immediately stop reading more numbers. You must use the <code>break</code> statement to exit the loop when the target number is found.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A series of integers, one per line</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read one integer from input in each iteration</li>
      <li>Check if the current number is equal to <code>99</code></li>
      <li>If it is <code>99</code>,exit the loop immediately</li>
      <li>If it is not <code>99</code>, print the number</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10
25
99
30
Output:
10
25</pre>
    <p><b>Explanation:</b> The program reads 10 and prints it, reads 25 and prints it, reads 99 and immediately breaks out of the loop. The number 30 is never read or processed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
10
15
99
Output:
5
10
15</pre>
    <p><b>Explanation:</b> The program prints 5, 10, and 15. When it reads 99, it breaks and stops. The numbers are printed until 99 is encountered.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "10\n25", 
      "stdinput": "10\n25\n99\n30",
      "explanation": "Prints numbers until 99, then stops" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "5\n10\n15", 
      "stdinput": "5\n10\n15\n99",
      "explanation": "Prints 5, 10, 15, stops at 99" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "99\n100\n200",
      "explanation": "First number is 99, so nothing is printed and loop stops immediately" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", 
      "stdinput": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n99\n11\n12",
      "explanation": "Prints numbers 1-10, stops at 99" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "50\n25\n75", 
      "stdinput": "50\n25\n75\n99\n100",
      "explanation": "Prints 50, 25, 75, stops at 99" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "7\n14\n21\n28\n35", 
      "stdinput": "7\n14\n21\n28\n35\n99\n42\n49",
      "explanation": "Prints multiples of 7 until 99" 
    }
  ],

  "templates": {
    "python": "def stop_at_target():\n    while True:\n        num = int(input())\n        if num == 99:\n            break\n        print(num)\n\n# main code\nstop_at_target()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void stop_at_target() {\n        Scanner scanner = new Scanner(System.in);\n        while (true) {\n            int num = scanner.nextInt();\n            if (num == 99) {\n                break;\n            }\n            System.out.println(num);\n        }\n    }\n    \n    public static void main(String[] args) {\n        stop_at_target();\n    }\n}",
    "javascript": "function stop_at_target() {\n    const readline = require('readline').createInterface({\n        input: process.stdin,\n        output: process.stdout\n    });\n    \n    const lines = [];\n    readline.on('line', (line) => {\n        lines.push(line);\n    });\n    \n    readline.on('close', () => {\n        for (let line of lines) {\n            const num = parseInt(line);\n            if (num === 99) {\n                break;\n            }\n            console.log(num);\n        }\n    });\n}\n\nstop_at_target();",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid stop_at_target() {\n    int num;\n    while (true) {\n        cin >> num;\n        if (num == 99) {\n            break;\n        }\n        cout << num << endl;\n    }\n}\n\nint main() {\n    stop_at_target();\n    return 0;\n}"
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