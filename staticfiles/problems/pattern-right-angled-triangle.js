module.exports = {
  title: 'Print Right-Angled Triangle Pattern',
  difficulty: 'easy',
  acceptance: '94.2%',

  description: `
    <p>Create a function that prints a right-angled triangle pattern using asterisks (<code>*</code>).</p>
    <p>The triangle should have <code>n</code> rows. Each row <code>i</code> must contain <code>i</code> asterisks followed by a space.</p>
    <p>The pattern must be printed directly to the console/output.</p>
  `,

  signatures: `
    <pre><b>Python:</b> def print_triangle(n)</pre>
    <pre><b>Java:</b> public static void printTriangle(int n)</pre>
    <pre><b>JavaScript:</b> function printTriangle(n)</pre>
    <pre><b>C++:</b> void printTriangle(int n)</pre>
  `,

  examples: `
    <h3>Example 1:</h3>
    <pre>Input: 3\nOutput:\n* \n* * \n* * *</pre>
    <h3>Example 2:</h3>
    <pre>Input: 5\nOutput:\n* \n* * \n* * * \n* * * * \n* * * * *</pre>
  `,

  constraints: `
    <ul><li>1 ≤ n ≤ 100</li></ul>
  `,

  testCases: [
    { 
      id: 1, 
      input: [1], 
      expected: "* \n" 
    },
    { 
      id: 2, 
      input: [2], 
      expected: "* \n* * \n" 
    },
    { 
      id: 3, 
      input: [3], 
      expected: "* \n* * \n* * * \n" 
    },
    { 
      id: 4, 
      input: [4], 
      expected: "* \n* * \n* * * \n* * * * \n" 
    },
    { 
      id: 5, 
      input: [5], 
      expected: "* \n* * \n* * * \n* * * * \n* * * * * \n" 
    }
  ],

  templates: {
    python: `def print_triangle(n):\n    for i in range(1, n+1):\n        print("* " * i)`,
    java: `public static void printTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            System.out.print("* ");\n        }\n        System.out.println();\n    }\n}`,
    javascript: `function printTriangle(n) {\n    for (let i = 1; i <= n; i++) {\n        let row = "";\n        for (let j = 1; j <= i; j++) {\n            row += "* ";\n        }\n        console.log(row);\n    }\n}`,
    "c++": `#include <iostream>\nusing namespace std;\nvoid printTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n}`
  },


  "solutions": {
    python: `def print_triangle(n):\n    for i in range(1, n+1):\n        print("* " * i)`,
    java: `public static void printTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            System.out.print("* ");\n        }\n        System.out.println();\n    }\n}`,
    javascript: `function printTriangle(n) {\n    for (let i = 1; i <= n; i++) {\n        let row = "";\n        for (let j = 1; j <= i; j++) {\n            row += "* ";\n        }\n        console.log(row);\n    }\n}`,
    "c++": `#include <iostream>\nusing namespace std;\nvoid printTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint_triangle(${i})`;
      case 'java': return `class Main {\n${code}\npublic static void main(String[] args) {\n    printTriangle(${i});\n}}`;
      case 'javascript': return `${code}\nprintTriangle(${i});`;
      case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    printTriangle(${i});\n    return 0;\n}`;
      default: return code;
    }
  },

  // Custom comparison function for pattern problems
  compareOutput(actual, expected) {
    // Normalize both outputs by trimming and replacing \r\n with \n
    const normalizedActual = actual.trim().replace(/\r\n/g, '\n');
    const normalizedExpected = expected.trim().replace(/\\n/g, '\n');
    
    return normalizedActual === normalizedExpected;
  }
};