 module.exports = {
  "title": "Fizz Buzz",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Write a program that prints the numbers from 1 to n. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to iterate from 1 to n</li>
      <li>Check divisibility by 3 and/or 5</li>
      <li>Print according to FizzBuzz rules</li>
      <li>Each output on separate line</li>
    </ul>
    <p><b>FizzBuzz Rules:</b></p>
    <ul>
      <li>Multiple of 3 and 5 → "FizzBuzz"</li>
      <li>Multiple of 3 only → "Fizz"</li>
      <li>Multiple of 5 only → "Buzz"</li>
      <li>Otherwise → print the number</li>
    </ul>
    <p>This problem teaches conditional logic and divisibility checking.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 15
Output: 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz</pre>
    <p><b>Explanation:</b> Numbers 1-15 with FizzBuzz substitutions</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 
1
2
Fizz
4
Buzz</pre>
    <p><b>Explanation:</b> Numbers 1-5 with FizzBuzz substitutions</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz", "stdinput": "15" },
    { "id": 2, "input": [], "expected": "1\n2\nFizz\n4\nBuzz", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz", "stdinput": "20" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            if (i % 3 == 0 && i % 5 == 0) {\n                System.out.println(\"FizzBuzz\");\n            } else if (i % 3 == 0) {\n                System.out.println(\"Fizz\");\n            } else if (i % 5 == 0) {\n                System.out.println(\"Buzz\");\n            } else {\n                System.out.println(i);\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        if (i % 3 === 0 && i % 5 === 0) {\n            console.log(\"FizzBuzz\");\n        } else if (i % 3 === 0) {\n            console.log(\"Fizz\");\n        } else if (i % 5 === 0) {\n            console.log(\"Buzz\");\n        } else {\n            console.log(i);\n        }\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 3 == 0 && i % 5 == 0) {\n            cout << \"FizzBuzz\" << endl;\n        } else if (i % 3 == 0) {\n            cout << \"Fizz\" << endl;\n        } else if (i % 5 == 0) {\n            cout << \"Buzz\" << endl;\n        } else {\n            cout << i << endl;\n        }\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            if (i % 3 == 0 && i % 5 == 0) {\n                System.out.println(\"FizzBuzz\");\n            } else if (i % 3 == 0) {\n                System.out.println(\"Fizz\");\n            } else if (i % 5 == 0) {\n                System.out.println(\"Buzz\");\n            } else {\n                System.out.println(i);\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        if (i % 3 === 0 && i % 5 === 0) {\n            console.log(\"FizzBuzz\");\n        } else if (i % 3 === 0) {\n            console.log(\"Fizz\");\n        } else if (i % 5 === 0) {\n            console.log(\"Buzz\");\n        } else {\n            console.log(i);\n        }\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 3 == 0 && i % 5 == 0) {\n            cout << \"FizzBuzz\" << endl;\n        } else if (i % 3 == 0) {\n            cout << \"Fizz\" << endl;\n        } else if (i % 5 == 0) {\n            cout << \"Buzz\" << endl;\n        } else {\n            cout << i << endl;\n        }\n    }\n    return 0;\n}"
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