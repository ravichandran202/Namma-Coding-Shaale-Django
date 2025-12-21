module.exports = {
  "title": "Even 1 to 10",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print all even numbers between 1 and 10 (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Print even numbers: 2, 4, 6, 8, 10</li>
      <li>Each number on a separate line</li>
    </ul>
    <p>This problem teaches step iteration with for loops.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
2
4
6
8
10</pre>
    <p><b>Explanation:</b> Even numbers from 1 to 10 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2\n4\n6\n8\n10", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(2, 11, 2):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 2; i <= 10; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 2; i <= 10; i += 2) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 2; i <= 10; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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