module.exports = {
  "title": "Print from 1 to 5",
  "difficulty": "easy",
  "acceptance": "99.9%",

  "description": `
    <p>Write a program that prints numbers from 1 to 5 using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Use a while loop to iterate</li>
      <li>Start from number 1</li>
      <li>Print each number on a separate line</li>
      <li>Stop when you reach 5</li>
    </ul>
    <p>This problem teaches the basic structure of while loops with a counter variable.</p>
  `,

  "examples": `
    <h3>Example Output</h3>
    <pre class="constraints">Input: 
Output :
1
2
3
4
5</pre>
    <p><b>Explanation:</b> The program prints numbers 1 through 5, each on a new line.</p>
  `,

  "conditions": `
    <ul>
      <li>No input required</li>
      <li>Output must be exactly 5 lines</li>
      <li>Use a while loop (not for loop)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n2\n3\n4\n5", "stdinput": "" }
  ],

  "templates": {
    "python": "num = 1\nwhile num <= 5:\n    print(num)\n    num += 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        while (num <= 5) {\n            System.out.println(num);\n            num++;\n        }\n    }\n}",
    "javascript": "let num = 1;\nwhile (num <= 5) {\n    console.log(num);\n    num++;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 1;\n    while (num <= 5) {\n        cout << num << endl;\n        num++;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = 1\nwhile num <= 5:\n    print(num)\n    num += 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        while (num <= 5) {\n            System.out.println(num);\n            num++;\n        }\n    }\n}",
    "javascript": "let num = 1;\nwhile (num <= 5) {\n    console.log(num);\n    num++;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 1;\n    while (num <= 5) {\n        cout << num << endl;\n        num++;\n    }\n    return 0;\n}"
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