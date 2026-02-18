module.exports = {
  "title": "Print Greeting – Basic Function",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Create a function that takes a name as input and prints a greeting message.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a name (string)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a name from input</li>
      <li>Create a function called <code>print_greeting</code> that takes one parameter</li>
      <li>The function should print a greeting message in the format: <code>Hello, [name]!</code></li>
      <li>Call the function with the input name</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The name can contain any characters</li>
      <li>Output should match the exact format with comma and exclamation mark</li>
      <li>Function must be named exactly <code>print_greeting</code></li>
      <li>Print the greeting message exactly as shown in examples</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
Alice
Output:
Hello, Alice!</pre>
    <p><b>Explanation:</b> The function takes "Alice" and prints <code>Hello, Alice!</code></p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Hello, Alice!", 
      "stdinput": "Alice",
      "explanation": "Greeting for Alice" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Hello, Bob!", 
      "stdinput": "Bob",
      "explanation": "Greeting for Bob" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Hello, John Doe!", 
      "stdinput": "John Doe",
      "explanation": "Greeting for full name" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Hello, Python!", 
      "stdinput": "Python",
      "explanation": "Greeting for programming language name" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Hello, 123!", 
      "stdinput": "123",
      "explanation": "Greeting for numeric string" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Hello, !", 
      "stdinput": "",
      "explanation": "Greeting for empty string" 
    }
  ],

  "templates": {
    "python": "def print_greeting(name):\n    print(f\"Hello, {name}!\")\n\n# Main code\nname = input()\nprint_greeting(name)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_greeting(String name) {\n        System.out.println(\"Hello, \" + name + \"!\");\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        print_greeting(name);\n    }\n}",
    "javascript": "function print_greeting(name) {\n    console.log(`Hello, ${name}!`);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    print_greeting(name);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid print_greeting(string name) {\n    cout << \"Hello, \" << name << \"!\" << endl;\n}\n\nint main() {\n    string name;\n    getline(cin, name);\n    print_greeting(name);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_greeting(name):\n    print(f\"Hello, {name}!\")\n\n# Main code\nname = input()\nprint_greeting(name)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_greeting(String name) {\n        System.out.println(\"Hello, \" + name + \"!\");\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        print_greeting(name);\n    }\n}",
    "javascript": "function print_greeting(name) {\n    console.log(`Hello, ${name}!`);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    print_greeting(name);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid print_greeting(string name) {\n    cout << \"Hello, \" << name << \"!\" << endl;\n}\n\nint main() {\n    string name;\n    getline(cin, name);\n    print_greeting(name);\n    return 0;\n}"
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