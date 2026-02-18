module.exports = {
    "title": "Swap Values",
    "difficulty": "easy",
    "acceptance": "99.0%",
  
    "description": `
      <p>Create two variables <code>a</code> and <code>b</code> with values from input. Swap their values and print both before and after swapping.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create two variables <code>a</code> and <code>b</code> with values from input</li>
        <li>Print the values before swapping with message <br><code>"Before swap - a: [value] b: [value]"</code></li>
        <li>Swap the values of the two variables</li>
        <li>Print the values after swapping with message <br><code>"After swap - a: [value] b: [value]"</code></li>
      </ul>
      <p>This problem teaches the fundamental concept of variable swapping using a temporary variable.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
100
200

Output:
Before swap - a: 100 b: 200
After swap - a: 200 b: 100</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
5
10

Output:
Before swap - a: 5 b: 10
After swap - a: 10 b: 5</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
25
75

Output:
Before swap - a: 25 b: 75
After swap - a: 75 b: 25</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Variable names must be exactly <code>a</code> and <code>b</code></li>
        <li>Must use a temporary variable for swapping</li>
        <li>Read values from input</li>
        <li>Must print both before and after swap messages in the specified format</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Before swap - a: 100 b: 200\nAfter swap - a: 200 b: 100", "stdinput": "100\n200" },
      { "id": 2, "input": [], "expected": "Before swap - a: 5 b: 10\nAfter swap - a: 10 b: 5", "stdinput": "5\n10" },
      { "id": 3, "input": [], "expected": "Before swap - a: 25 b: 75\nAfter swap - a: 75 b: 25", "stdinput": "25\n75" },
      { "id": 4, "input": [], "expected": "Before swap - a: 1 b: 99\nAfter swap - a: 99 b: 1", "stdinput": "1\n99" },
      { "id": 5, "input": [], "expected": "Before swap - a: 42 b: 24\nAfter swap - a: 24 b: 42", "stdinput": "42\n24" },
    ],
  
    "templates": {
      "python": `a = int(input())\nb = int(input())\nprint("Before swap - a:", a, "b:", b)\n\n# Swap values\ntemp = a\na = b\nb = temp\n\nprint("After swap - a:", a, "b:", b)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println("Before swap - a: " + a + " b: " + b);\n        \n        // Swap values\n        int temp = a;\n        a = b;\n        b = temp;\n        \n        System.out.println("After swap - a: " + a + " b: " + b);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(\"Before swap - a:\", inputs[0], \"b:\", inputs[1]);\n        \n        // Swap values\n        let temp = inputs[0];\n        inputs[0] = inputs[1];\n        inputs[1] = temp;\n        \n        console.log(\"After swap - a:\", inputs[0], \"b:\", inputs[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << \"Before swap - a: \" << a << \" b: \" << b << std::endl;\n    \n    // Swap values\n    int temp = a;\n    a = b;\n    b = temp;\n    \n    std::cout << \"After swap - a: \" << a << \" b: \" << b << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `a = int(input())\nb = int(input())\nprint("Before swap - a:", a, "b:", b)\n\n# Swap values\ntemp = a\na = b\nb = temp\n\nprint("After swap - a:", a, "b:", b)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println("Before swap - a: " + a + " b: " + b);\n        \n        // Swap values\n        int temp = a;\n        a = b;\n        b = temp;\n        \n        System.out.println("After swap - a: " + a + " b: " + b);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(\"Before swap - a:\", inputs[0], \"b:\", inputs[1]);\n        \n        // Swap values\n        let temp = inputs[0];\n        inputs[0] = inputs[1];\n        inputs[1] = temp;\n        \n        console.log(\"After swap - a:\", inputs[0], \"b:\", inputs[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << \"Before swap - a: \" << a << \" b: \" << b << std::endl;\n    \n    // Swap values\n    int temp = a;\n    a = b;\n    b = temp;\n    \n    std::cout << \"After swap - a: \" << a << \" b: \" << b << std::endl;\n    return 0;\n}`
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