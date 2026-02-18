module.exports = {
    title: 'Print Hollow Right-Angled Triangle Pattern',
    difficulty: 'medium',
    acceptance: '84.7%',
  
    description: `
      <p>Create a function that prints a hollow right-angled triangle pattern using asterisks (<code>*</code>).</p>
      <p>The triangle should have <code>n</code> rows with the following properties:</p>
      <ul>
        <li>First row: 1 asterisk</li>
        <li>Last row: n asterisks (with spaces between them)</li>
        <li>Middle rows: asterisks only at the start and end of the row with spaces in between</li>
      </ul>
      <p>The pattern must be printed directly to the console/output.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def print_hollow_triangle(n)</pre>
      <pre><b>Java:</b> public static void printHollowTriangle(int n)</pre>
      <pre><b>JavaScript:</b> function printHollowTriangle(n)</pre>
      <pre><b>C++:</b> void printHollowTriangle(int n)</pre>
    `,
  
    examples: `
      <h3>Example 1:</h3>
      <pre>Input: 4
  Output:
  *
  * *
  *   *
  * * * *</pre>
      <h3>Example 2:</h3>
      <pre>Input: 5
  Output:
  *
  * *
  *   *
  *     *
  * * * * *</pre>
    `,
  
    constraints: `
      <ul><li>1 ≤ n ≤ 100</li></ul>
    `,
  
    testCases: [
      { 
        id: 1, 
        input: [1], 
        expected: "*" 
      },
      { 
        id: 2, 
        input: [2], 
        expected: "*\n* *" 
      },
      { 
        id: 3, 
        input: [3], 
        expected: "*\n* *\n* * *" 
      },
      { 
        id: 4, 
        input: [4], 
        expected: "*\n* *\n*   *\n* * * *" 
      },
      { 
        id: 5, 
        input: [5], 
        expected: "*\n* *\n*   *\n*     *\n* * * * *" 
      }
    ],
  
    templates: {
      python: `def print_hollow_triangle(n):\n    for i in range(1, n+1):\n        if i == 1:\n            print("*")\n        elif i == n:\n            print("* " * (i-1) + "*")\n        else:\n            print("*" + " " * (2*i-3) + "*")\n`,
      java: `public static void printHollowTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            System.out.println("*");\n        } else if (i == n) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j < i ? "* " : "*");\n            }\n            System.out.println();\n        } else {\n            System.out.print("*");\n            for (int j = 2; j < i; j++) {\n                System.out.print("  ");\n            }\n            System.out.println(" *");\n        }\n    }\n}`,
      javascript: `function printHollowTriangle(n) {\n    let output = "";\n    for (let i = 1; i <= n; i++) {\n        if (i === 1) {\n            output += "*";\n        } else if (i === n) {\n            output += "\\n" + "* ".repeat(i-1) + "*";\n        } else {\n            output += "\\n*" + " ".repeat(2*i-3) + "*";\n        }\n    }\n    console.log(output);\n}`,
      "c++": `#include <iostream>\n#include <string>\nusing namespace std;\nvoid printHollowTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            cout << "*" << endl;\n        } else if (i == n) {\n            for (int j = 1; j <= i; j++) {\n                cout << (j < i ? "* " : "*");\n            }\n            cout << endl;\n        } else {\n            cout << "*";\n            for (int j = 2; j < i; j++) {\n                cout << "  ";\n            }\n            cout << " *" << endl;\n        }\n    }\n}`
    },

  
    "solutions": {
      python: `def print_hollow_triangle(n):\n    for i in range(1, n+1):\n        if i == 1:\n            print("*")\n        elif i == n:\n            print("* " * (i-1) + "*")\n        else:\n            print("*" + " " * (2*i-3) + "*")\n`,
      java: `public static void printHollowTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            System.out.println("*");\n        } else if (i == n) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j < i ? "* " : "*");\n            }\n            System.out.println();\n        } else {\n            System.out.print("*");\n            for (int j = 2; j < i; j++) {\n                System.out.print("  ");\n            }\n            System.out.println(" *");\n        }\n    }\n}`,
      javascript: `function printHollowTriangle(n) {\n    let output = "";\n    for (let i = 1; i <= n; i++) {\n        if (i === 1) {\n            output += "*";\n        } else if (i === n) {\n            output += "\\n" + "* ".repeat(i-1) + "*";\n        } else {\n            output += "\\n*" + " ".repeat(2*i-3) + "*";\n        }\n    }\n    console.log(output);\n}`,
      "c++": `#include <iostream>\n#include <string>\nusing namespace std;\nvoid printHollowTriangle(int n) {\n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            cout << "*" << endl;\n        } else if (i == n) {\n            for (int j = 1; j <= i; j++) {\n                cout << (j < i ? "* " : "*");\n            }\n            cout << endl;\n        } else {\n            cout << "*";\n            for (int j = 2; j < i; j++) {\n                cout << "  ";\n            }\n            cout << " *" << endl;\n        }\n    }\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint_hollow_triangle(${i})`;
        case 'java': return `class Main {\n${code}\npublic static void main(String[] args) {\n    printHollowTriangle(${i});\n}}`;
        case 'javascript': return `${code}\nprintHollowTriangle(${i});`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    printHollowTriangle(${i});\n    return 0;\n}`;
        default: return code;
      }
    },
  
    // Custom comparison function for pattern problems
  // Custom comparison function for pattern problems
  compareOutput(actual, expected) {
    // Normalization function that preserves intentional whitespace
    const normalizePattern = (str) => {
      return str
        .replace(/\r\n/g, '\n')      // Convert Windows line endings to Unix
        .replace(/\n$/, '')          // Remove trailing newline if exists
        .replace(/[ \t]+\n/g, '\n')  // Remove trailing spaces before newlines
        .replace(/\n+/g, '\n');      // Collapse multiple newlines
    };
  
    // Get normalized versions
    const normalizedActual = normalizePattern(actual);
    const normalizedExpected = normalizePattern(expected);
  
    // For debugging - comment these out in production
    console.log('Normalized Actual:');
    console.log(JSON.stringify(normalizedActual));
    console.log('Normalized Expected:');
    console.log(JSON.stringify(normalizedExpected));
    console.log('Comparison Result:', normalizedActual === normalizedExpected);
  
    // Compare line by line with trimmed right side only
    const actualLines = normalizedActual.split('\n');
    const expectedLines = normalizedExpected.split('\n');
  
    if (actualLines.length !== expectedLines.length) {
      return false;
    }
  
    for (let i = 0; i < actualLines.length; i++) {
      // Only trim right side to preserve intentional leading spaces
      if (actualLines[i].replace(/\s+$/, '') !== expectedLines[i].replace(/\s+$/, '')) {
        return false;
      }
    }
  
    return true;
  }
  };