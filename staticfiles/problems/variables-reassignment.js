module.exports =  {
    "title": "Changing Values with Input",
    "difficulty": "easy",
    "acceptance": "99.5%",
  
    "description": `
      <p>Create a variable <code>counter</code> with initial value from input. Then reassign it to a new value from input and print both values.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create a variable named <code>counter</code> with initial value from first input</li>
        <li>Print the initial value with message <code>"Initial value: &ltvalue&gt"</code></li>
        <li>Reassign the variable to value from second input</li>
        <li>Print the updated value with message <code>"Updated value: &ltvalue&gt"</code></li>
      </ul>
      <p>This problem teaches variable reassignment with user input and how variables can hold different values during program execution.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
5
10

Output:
Initial value: 5
Updated value: 10</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
3
7

Output:
Initial value: 3
Updated value: 7</pre>
    `,
  
    "conditions": `
      <ul>
        <li>The variable must be named exactly <code>counter</code></li>
        <li>Must print both values with the specified messages</li>
        <li>Must use only one variable with name <code>counter</code></li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Initial value: 5\nUpdated value: 10", "stdinput": "5\n10" },
      { "id": 2, "input": [], "expected": "Initial value: 3\nUpdated value: 7", "stdinput": "3\n7" },
      { "id": 3, "input": [], "expected": "Initial value: 8\nUpdated value: 15", "stdinput": "8\n15" },
      { "id": 4, "input": [], "expected": "Initial value: 0\nUpdated value: 25", "stdinput": "0\n25" },
      { "id": 5, "input": [], "expected": "Initial value: 12\nUpdated value: 12", "stdinput": "12\n12" },
    ],
  
    "templates": {
      "python": `counter = int(input())\nprint("Initial value:", counter)\ncounter = int(input())\nprint("Updated value:", counter)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int counter = scanner.nextInt();\n        System.out.println("Initial value: " + counter);\n        counter = scanner.nextInt();\n        System.out.println("Updated value: " + counter);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(first);\n    readline.question('', (second) => {\n        inputs.push(second);\n        console.log("Initial value:", inputs[0]);\n        console.log("Updated value:", inputs[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int counter;\n    std::cin >> counter;\n    std::cout << "Initial value: " << counter << std::endl;\n    std::cin >> counter;\n    std::cout << "Updated value: " << counter << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `counter = int(input())\nprint("Initial value:", counter)\ncounter = int(input())\nprint("Updated value:", counter)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int counter = scanner.nextInt();\n        System.out.println("Initial value: " + counter);\n        counter = scanner.nextInt();\n        System.out.println("Updated value: " + counter);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(first);\n    readline.question('', (second) => {\n        inputs.push(second);\n        console.log("Initial value:", inputs[0]);\n        console.log("Updated value:", inputs[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int counter;\n    std::cin >> counter;\n    std::cout << "Initial value: " << counter << std::endl;\n    std::cin >> counter;\n    std::cout << "Updated value: " << counter << std::endl;\n    return 0;\n}`
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