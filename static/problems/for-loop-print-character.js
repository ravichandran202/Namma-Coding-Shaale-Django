module.exports = {
  "title": "Print Characters",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Read a word and print each character on a new line using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string (word) as input</li>
      <li>Use for loop to iterate through each character</li>
      <li>Print each character on a separate line</li>
    </ul>
    <p><b>String Iteration Concept:</b></p>
    <ul>
      <li>Strings are sequences of characters</li>
      <li>for loop can iterate directly over string characters</li>
      <li>Each iteration gets one character from the string</li>
      <li>Print character inside the loop</li>
    </ul>
    <p>This problem teaches string iteration with for loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Alex
Output: 
A
l
e
x</pre>
    <p><b>Explanation:</b> Each character of "Alex" printed on separate lines</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Hello
Output: 
H
e
l
l
o</pre>
    <p><b>Explanation:</b> Each character of "Hello" printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A\nl\ne\nx", "stdinput": "Alex" },
    { "id": 2, "input": [], "expected": "H\ne\nl\nl\no", "stdinput": "Hello" },
    { "id": 3, "input": [], "expected": "A", "stdinput": "A" },
    { "id": 4, "input": [], "expected": "P\ny\nt\nh\no\nn", "stdinput": "Python" },
    { "id": 5, "input": [], "expected": "1\n2\n3", "stdinput": "123" }
  ],

  "templates": {
    "python": "word = input()\nfor ch in word:\n    print(ch)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next();\n        for (int i = 0; i < word.length(); i++) {\n            System.out.println(word.charAt(i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    for (let i = 0; i < input.length; i++) {\n        console.log(input[i]);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    for (char ch : word) {\n        cout << ch << endl;\n    }\n    return 0;\n}"
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