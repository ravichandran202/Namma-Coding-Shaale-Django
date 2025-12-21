module.exports = {
  "title": "First Capital Letter",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Write a program that finds and prints the <b>first</b> capital letter (uppercase letter) in a given string. Once you find such a letter, you should immediately stop searching and print it. You must use the <code>break</code> statement to exit the loop when you find the first capital letter.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single string that may contain uppercase letters, lowercase letters, digits, and symbols</li>
      <li>The string can have any length from <code>1</code> to <code>100</code> characters</li>
      <li>The string is guaranteed to contain at least one capital letter</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Use a loop to go through each character in the string</li>
      <li>Inside the loop, check if the current character is an uppercase letter</li>
      <li>If it is an uppercase letter, print that character and exit the loop immediately</li>
      <li>If it is not an uppercase letter, continue to the next character</li>
      <li>The function should print only the first capital letter found</li>
    </ol>
    
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
helloWorld
Output:
W</pre>
    <p><b>Explanation:</b> The string "helloWorld" has characters: h, e, l, l, o, W, o, r, l, d. The first capital letter is 'W', so we print 'W' and stop immediately. We don't check any characters after 'W'.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
123ABCdef
Output:
A</pre>
    <p><b>Explanation:</b> The string "123ABCdef" starts with digits. The first capital letter is 'A', so we print 'A' and stop. Even though 'B' and 'C' are also capital letters, we don't check them because we already found 'A'.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "W", 
      "stdinput": "helloWorld",
      "explanation": "First capital letter in 'helloWorld' is 'W'" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "A", 
      "stdinput": "123ABCdef",
      "explanation": "First capital letter in '123ABCdef' is 'A'" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "P", 
      "stdinput": "Python",
      "explanation": "First capital letter in 'Python' is 'P' (first character)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "J", 
      "stdinput": "JavaScript",
      "explanation": "First capital letter in 'JavaScript' is 'J'" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "P", 
      "stdinput": "cPlusPlus",
      "explanation": "First capital letter in 'cPlusPlus' is 'P'" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "H", 
      "stdinput": "HelloWorld",
      "explanation": "First capital letter in 'HelloWorld' is 'H' (first character)" 
    }
  ],

  "templates": {
    "python": "def first_capital(text):\n    for char in text:\n        if char.isupper():\n            print(char)\n            break\n\n# main code\ntext = input()\nfirst_capital(text)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void first_capital(String text) {\n        for (int i = 0; i < text.length(); i++) {\n            char ch = text.charAt(i);\n            if (Character.isUpperCase(ch)) {\n                System.out.println(ch);\n                break;\n            }\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        first_capital(text);\n    }\n}",
    "javascript": "function first_capital(text) {\n    for (let i = 0; i < text.length; i++) {\n        const char = text[i];\n        if (char >= 'A' && char <= 'Z') {\n            console.log(char);\n            break;\n        }\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    first_capital(text);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nvoid first_capital(string text) {\n    for (int i = 0; i < text.length(); i++) {\n        char ch = text[i];\n        if (isupper(ch)) {\n            cout << ch << endl;\n            break;\n        }\n    }\n}\n\nint main() {\n    string text;\n    getline(cin, text);\n    first_capital(text);\n    return 0;\n}"
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