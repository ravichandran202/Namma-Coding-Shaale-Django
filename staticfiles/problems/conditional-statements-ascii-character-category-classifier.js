module.exports = {
  "title": "Character Category Classifier",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Write a program that takes a character as input and classifies it into one of four categories using ASCII values.</p>
    <p><b>Character Categories:</b></p>
    <ul>
      <li><b>Uppercase Letter:</b> A-Z (ASCII 65-90)</li>
      <li><b>Lowercase Letter:</b> a-z (ASCII 97-122)</li>
      <li><b>Digit:</b> 0-9 (ASCII 48-57)</li>
      <li><b>Special Character:</b> Anything else (symbols, spaces, punctuation)</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Print the appropriate category name : <code>Special Character</code> , <code>Uppercase Letter</code> , <code>Lowercase Letter</code> , <code>Digit</code>  </li>
    </ul>
    <p>This problem teaches comprehensive character classification using ASCII ranges and multiple conditional checks.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: $
Output: Special Character</pre>
    <p><b>Explanation:</b> '$' has ASCII value 36, which doesn't fall into letter or digit ranges.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: M
Output: Uppercase Letter</pre>
    <p><b>Explanation:</b> 'M' has ASCII value 77, which is between 65-90 (uppercase range).</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Special Character", "stdinput": "$" },
    { "id": 2, "input": [], "expected": "Uppercase Letter", "stdinput": "M" },
    { "id": 3, "input": [], "expected": "Lowercase Letter", "stdinput": "k" },
    { "id": 4, "input": [], "expected": "Digit", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "Uppercase Letter", "stdinput": "Z" },
    { "id": 6, "input": [], "expected": "Lowercase Letter", "stdinput": "a" },
    { "id": 7, "input": [], "expected": "Digit", "stdinput": "0" },
  ],

  "templates": {
    "python": "char = input()\nascii_val = ord(char)\n\nif 65 <= ascii_val <= 90:\n    print(\"Uppercase Letter\")\nelif 97 <= ascii_val <= 122:\n    print(\"Lowercase Letter\")\nelif 48 <= ascii_val <= 57:\n    print(\"Digit\")\nelse:\n    print(\"Special Character\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int ascii_val = (int) character;\n        \n        if (ascii_val >= 65 && ascii_val <= 90) {\n            System.out.println(\"Uppercase Letter\");\n        } else if (ascii_val >= 97 && ascii_val <= 122) {\n            System.out.println(\"Lowercase Letter\");\n        } else if (ascii_val >= 48 && ascii_val <= 57) {\n            System.out.println(\"Digit\");\n        } else {\n            System.out.println(\"Special Character\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const ascii_val = char.charCodeAt(0);\n    \n    if (ascii_val >= 65 && ascii_val <= 90) {\n        console.log(\"Uppercase Letter\");\n    } else if (ascii_val >= 97 && ascii_val <= 122) {\n        console.log(\"Lowercase Letter\");\n    } else if (ascii_val >= 48 && ascii_val <= 57) {\n        console.log(\"Digit\");\n    } else {\n        console.log(\"Special Character\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int ascii_val = (int)ch;\n    \n    if (ascii_val >= 65 && ascii_val <= 90) {\n        std::cout << \"Uppercase Letter\" << std::endl;\n    } else if (ascii_val >= 97 && ascii_val <= 122) {\n        std::cout << \"Lowercase Letter\" << std::endl;\n    } else if (ascii_val >= 48 && ascii_val <= 57) {\n        std::cout << \"Digit\" << std::endl;\n    } else {\n        std::cout << \"Special Character\" << std::endl;\n    }\n    return 0;\n}"
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