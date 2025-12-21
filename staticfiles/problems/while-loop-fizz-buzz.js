module.exports = {
  "title": "Fizz Buzz",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Write a program that takes an integer N as input and prints numbers from 1 to N with the following rules:</p>
    <ul>
      <li>If the number is divisible by 3, print "Fizz" instead of the number</li>
      <li>If the number is divisible by 5, print "Buzz" instead of the number</li>
      <li>If the number is divisible by both 3 and 5, print "Fizz Buzz" instead of the number</li>
      <li>Otherwise, print the number itself</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from 1 to N</li>
      <li>Apply the Fizz Buzz rules for each number</li>
      <li>Print the result for each number on a separate line</li>
    </ul>
    <p>This problem teaches while loops with multiple conditional checks and string manipulation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 1
2
Fizz
4
Buzz</pre>
    <p><b>Explanation:</b> 
    1 → 1 (normal)
    2 → 2 (normal) 
    3 → Fizz (divisible by 3)
    4 → 4 (normal)
    5 → Buzz (divisible by 5)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 15
Output: 1
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
Fizz Buzz</pre>
    <p><b>Explanation:</b> 15 is divisible by both 3 and 5, so it prints "Fizz Buzz"</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a positive integer N</li>
      <li>Use a while loop (not for loop)</li>
      <li>Start from 1 and go up to N</li>
      <li>Check divisibility in this order: both 3 and 5, then 3, then 5</li>
      <li>Print "Fizz" for numbers divisible by 3</li>
      <li>Print "Buzz" for numbers divisible by 5</li>
      <li>Print "Fizz Buzz" for numbers divisible by both 3 and 5</li>
      <li>Print the number itself for all other cases</li>
      <li>Each output should be on a separate line</li>
    </ul>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "1\n2\nFizz\n4\nBuzz", 
      "stdinput": "5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizz Buzz", 
      "stdinput": "15" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1\n2\nFizz", 
      "stdinput": "3" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz", 
      "stdinput": "10" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1" 
    }
  ],

  "templates": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"Fizz Buzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            if (i % 3 == 0 && i % 5 == 0) {\n                System.out.println(\"Fizz Buzz\");\n            } else if (i % 3 == 0) {\n                System.out.println(\"Fizz\");\n            } else if (i % 5 == 0) {\n                System.out.println(\"Buzz\");\n            } else {\n                System.out.println(i);\n            }\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let i = 1;\n    while (i <= parseInt(n)) {\n        if (i % 3 === 0 && i % 5 === 0) {\n            console.log(\"Fizz Buzz\");\n        } else if (i % 3 === 0) {\n            console.log(\"Fizz\");\n        } else if (i % 5 === 0) {\n            console.log(\"Buzz\");\n        } else {\n            console.log(i);\n        }\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        if (i % 3 == 0 && i % 5 == 0) {\n            cout << \"Fizz Buzz\" << endl;\n        } else if (i % 3 == 0) {\n            cout << \"Fizz\" << endl;\n        } else if (i % 5 == 0) {\n            cout << \"Buzz\" << endl;\n        } else {\n            cout << i << endl;\n        }\n        i++;\n    }\n    return 0;\n}"
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