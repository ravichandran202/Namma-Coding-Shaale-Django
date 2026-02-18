module.exports = {
    "title": "Two Word Printer",
    "difficulty": "easy",
    "acceptance": "99.6%",
  
    "description": `
      <p>Write a program that reads two words.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>You must use two print() statements</li>
        <li>The first print should print the first word and should not end the line (use <code>end=' '</code>)</li>
        <li>The second print should print the second word</li>
        <li>You cannot use a single print statement to solve this</li>
      </ul>
      <p>This problem teaches how to control line endings in print statements and handle multiple inputs.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
Hello
Python

Output: Hello Python</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
Good
Morning

Output: Good Morning</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
Python
Code

Output: Python Code</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Each input will be a single word containing only alphabetical characters</li>
        <li>Must use exactly two print statements</li>
        <li>First print statement must use end=' ' parameter</li>
        <li>Output must show both words on one line separated by a space</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello Python", "stdinput": "Hello\nPython" },
      { "id": 2, "input": [], "expected": "Good Morning", "stdinput": "Good\nMorning" },
      { "id": 3, "input": [], "expected": "Python Code", "stdinput": "Python\nCode" },
      { "id": 4, "input": [], "expected": "Java Programming", "stdinput": "Java\nProgramming" },
      { "id": 5, "input": [], "expected": "Web Development", "stdinput": "Web\nDevelopment" },
    ],
  
    "templates": {
      "python": `w1 = input()\nw2 = input()\n\nprint(w1, end=' ')\nprint(w2)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String w1 = scanner.nextLine();\n        String w2 = scanner.nextLine();\n        System.out.print(w1 + " ");\n        System.out.print(w2);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet words = [];\nreadline.question('', (w1) => {\n    words.push(w1);\n    readline.question('', (w2) => {\n        words.push(w2);\n        process.stdout.write(words[0] + " ");\n        process.stdout.write(words[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string w1, w2;\n    std::getline(std::cin, w1);\n    std::getline(std::cin, w2);\n    std::cout << w1 << " ";\n    std::cout << w2;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `w1 = input()\nw2 = input()\n\nprint(w1, end=' ')\nprint(w2)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String w1 = scanner.nextLine();\n        String w2 = scanner.nextLine();\n        System.out.print(w1 + " ");\n        System.out.print(w2);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet words = [];\nreadline.question('', (w1) => {\n    words.push(w1);\n    readline.question('', (w2) => {\n        words.push(w2);\n        process.stdout.write(words[0] + " ");\n        process.stdout.write(words[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string w1, w2;\n    std::getline(std::cin, w1);\n    std::getline(std::cin, w2);\n    std::cout << w1 << " ";\n    std::cout << w2;\n    return 0;\n}`
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