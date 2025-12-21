module.exports = {
  "title": "Skip Spaces",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Write a program that prints each character of a given string, but skips all space characters. You must use the <code>continue</code> statement to skip spaces when you encounter them.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single string that may contain letters, numbers, symbols, and spaces</li>
      <li>The string can have any length from <code>1</code> to <code>100</code> characters</li>
      <li>The string may contain multiple spaces in different positions</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Use a loop to go through each character in the string</li>
      <li>Inside the loop, check if the current character is a space (<code>' '</code>)</li>
      <li>If it is a space, skip to the next character</li>
      <li>If it is not a space, print the character</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello world
Output:
h
e
l
l
o
w
o
r
l
d</pre>
    <p><b>Explanation:</b> The string "hello world" has characters: h, e, l, l, o, (space), w, o, r, l, d. The space is skipped, so we print all other characters on separate lines.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
a b c d
Output:
a
b
c
d</pre>
    <p><b>Explanation:</b> The string "a b c d" has letters separated by spaces. All spaces are skipped, so we print a, b, c, d on separate lines.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "h\ne\nl\nl\no\nw\no\nr\nl\nd", 
      "stdinput": "hello world",
      "explanation": "Skips the space in 'hello world'" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "a\nb\nc\nd", 
      "stdinput": "a b c d",
      "explanation": "Skips three spaces between letters" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "P\ny\nt\nh\no\nn", 
      "stdinput": "Python",
      "explanation": "No spaces in 'Python', so all letters printed" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "H\ni\n!\nH\no\nw\n?\nI\n'\nm\nf\ni\nn\ne", 
      "stdinput": "Hi! How? I'm fine",
      "explanation": "Skips four spaces in the sentence" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "n\no\ns\np\na\nc\ne\ns", 
      "stdinput": "no spaces",
      "explanation": "No spaces in 'nospaces'" 
    }
  ],

  "templates": {
    "python": "def skip_spaces(text):\n    for char in text:\n        if char == ' ':\n            continue\n        print(char)\n\n# main code\ntext = input()\nskip_spaces(text)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_spaces(String text) {\n        for (int i = 0; i < text.length(); i++) {\n            char ch = text.charAt(i);\n            if (ch == ' ') {\n                continue;\n            }\n            System.out.println(ch);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        skip_spaces(text);\n    }\n}",
    "javascript": "function skip_spaces(text) {\n    for (let i = 0; i < text.length; i++) {\n        const char = text[i];\n        if (char === ' ') {\n            continue;\n        }\n        console.log(char);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    skip_spaces(text);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid skip_spaces(string text) {\n    for (int i = 0; i < text.length(); i++) {\n        char ch = text[i];\n        if (ch == ' ') {\n            continue;\n        }\n        cout << ch << endl;\n    }\n}\n\nint main() {\n    string text;\n    getline(cin, text);\n    skip_spaces(text);\n    return 0;\n}"
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