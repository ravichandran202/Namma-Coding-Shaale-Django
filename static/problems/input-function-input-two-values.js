module.exports = {
    "title": "Input Two Values",
    "difficulty": "easy",
    "acceptance": "99.5%",
  
    "description": `
      <p>Write a program that asks the user to enter two words using input(), and then prints them together on one line.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Use two <code>input()</code> functions to read two separate words</li>
        <li>Print both words on the same line with a space between them</li>
        <li>The program should output the words in the same order they were entered</li>
      </ul>
      <p>This problem teaches how to handle multiple inputs and basic string output formatting.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
Hello
World

Output: Hello World</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
Python
Programming

Output: Python Programming</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
Good
Morning

Output: Good Morning</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Each input will be a single word containing only alphabetical characters</li>
        <li>Output must show both words on one line separated by a space</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello World", "stdinput": "Hello\nWorld" },
      { "id": 2, "input": [], "expected": "Python Programming", "stdinput": "Python\nProgramming" },
      { "id": 3, "input": [], "expected": "Good Morning", "stdinput": "Good\nMorning" },
      { "id": 4, "input": [], "expected": "Java Script", "stdinput": "Java\nScript" },
      { "id": 5, "input": [], "expected": "Web Development", "stdinput": "Web\nDevelopment" },
    ],
  
    "templates": {
      "python": `word1 = input()\nword2 = input()\nprint(word1, word2)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word1 = scanner.nextLine();\n        String word2 = scanner.nextLine();\n        System.out.println(word1 + " " + word2);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet words = [];\nreadline.question('', (word1) => {\n    words.push(word1);\n    readline.question('', (word2) => {\n        words.push(word2);\n        console.log(words[0] + " " + words[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string word1, word2;\n    std::getline(std::cin, word1);\n    std::getline(std::cin, word2);\n    std::cout << word1 << " " << word2 << std::endl;\n    return 0;\n}`
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