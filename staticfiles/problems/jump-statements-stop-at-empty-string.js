module.exports = {
  "title": "Stop at Empty String",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Write a program that reads words continuously until it encounters an empty string (a line with no characters). When an empty string is entered, the program should immediately stop reading more words. You must use the <code>break</code> statement to exit the loop when the empty string is found.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A series of strings (words or phrases), one per line</li>
      <li>The last line will always be an empty string (just pressing Enter without typing anything)</li>
      <li>There will be at least one non-empty string before the empty string</li>
      <li>Empty string means a line with zero characters (not even spaces)</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Use an infinite loop (like <code>while True</code>) to keep reading strings</li>
      <li>Read one string from input in each iteration</li>
      <li>Check if the current string is empty (has zero length)</li>
      <li>If it is empty, exit the loop immediately</li>
      <li>If it is not empty, print the string</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
apple
banana

cherry
Output:
apple
banana</pre>
    <p><b>Explanation:</b> The program reads "apple" and prints it, reads "banana" and prints it, reads an empty string (third line) and immediately breaks out of the loop. The word "cherry" is never read or processed because the program stopped at the empty string.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
hello
world

Output:
hello
world</pre>
    <p><b>Explanation:</b> The program prints "hello" and "world". When it reads an empty string (third line), it breaks and stops. The empty string acts as a signal to stop reading.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "apple\nbanana", 
      "stdinput": "apple\nbanana\n\ncherry",
      "explanation": "Prints until empty string, then stops" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "hello\nworld", 
      "stdinput": "hello\nworld\n\n",
      "explanation": "Prints hello and world, stops at empty string" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "one", 
      "stdinput": "one\n\n",
      "explanation": "Prints only 'one', stops at next empty string" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "a\nb\nc\nd\ne", 
      "stdinput": "a\nb\nc\nd\ne\n\nf\ng",
      "explanation": "Prints a-e, stops at empty string" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "cat\ndog\nbird", 
      "stdinput": "cat\ndog\nbird\n\nfish",
      "explanation": "Prints cat, dog, bird, stops at empty string" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Python\nJava\nC++", 
      "stdinput": "Python\nJava\nC++\n\nJavaScript",
      "explanation": "Prints three languages, stops at empty string" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "first\nsecond", 
      "stdinput": "first\nsecond\n\nthird\nfourth",
      "explanation": "Prints first and second, stops at empty string" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "red\ngreen\nblue", 
      "stdinput": "red\ngreen\nblue\n\nyellow",
      "explanation": "Prints three colors, stops at empty string" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "hello", 
      "stdinput": "hello\n\nworld",
      "explanation": "Prints hello, stops at empty string" 
    }
  ],

  "templates": {
    "python": "def stop_at_empty():\n    while True:\n        word = input()\n        if word == \"\":\n            break\n        print(word)\n\n# main code\nstop_at_empty()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void stop_at_empty() {\n        Scanner scanner = new Scanner(System.in);\n        while (true) {\n            String word = scanner.nextLine();\n            if (word.equals(\"\")) {\n                break;\n            }\n            System.out.println(word);\n        }\n    }\n    \n    public static void main(String[] args) {\n        stop_at_empty();\n    }\n}",
    "javascript": "function stop_at_empty() {\n    const readline = require('readline').createInterface({\n        input: process.stdin,\n        output: process.stdout\n    });\n    \n    const lines = [];\n    readline.on('line', (line) => {\n        lines.push(line);\n    });\n    \n    readline.on('close', () => {\n        for (let line of lines) {\n            if (line === '') {\n                break;\n            }\n            console.log(line);\n        }\n    });\n}\n\nstop_at_empty();",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid stop_at_empty() {\n    string word;\n    while (true) {\n        getline(cin, word);\n        if (word == \"\") {\n            break;\n        }\n        cout << word << endl;\n    }\n}\n\nint main() {\n    stop_at_empty();\n    return 0;\n}"
  },


  "solutions": {
    "python": "def stop_at_empty():\n    while True:\n        word = input()\n        if word == \"\":\n            break\n        print(word)\n\n# main code\nstop_at_empty()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void stop_at_empty() {\n        Scanner scanner = new Scanner(System.in);\n        while (true) {\n            String word = scanner.nextLine();\n            if (word.equals(\"\")) {\n                break;\n            }\n            System.out.println(word);\n        }\n    }\n    \n    public static void main(String[] args) {\n        stop_at_empty();\n    }\n}",
    "javascript": "function stop_at_empty() {\n    const readline = require('readline').createInterface({\n        input: process.stdin,\n        output: process.stdout\n    });\n    \n    const lines = [];\n    readline.on('line', (line) => {\n        lines.push(line);\n    });\n    \n    readline.on('close', () => {\n        for (let line of lines) {\n            if (line === '') {\n                break;\n            }\n            console.log(line);\n        }\n    });\n}\n\nstop_at_empty();",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid stop_at_empty() {\n    string word;\n    while (true) {\n        getline(cin, word);\n        if (word == \"\") {\n            break;\n        }\n        cout << word << endl;\n    }\n}\n\nint main() {\n    stop_at_empty();\n    return 0;\n}"
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