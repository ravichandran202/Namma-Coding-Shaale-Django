module.exports = {
  "title": "Print from 5 to 1",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Write a program that prints numbers from 5 to 1 in descending order using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Use a while loop to iterate</li>
      <li>Start from number 5</li>
      <li>Print each number on a separate line</li>
      <li>Stop when you reach 1</li>
    </ul>
    <p>This problem teaches while loops with decrementing counters.</p>
  `,

  "examples": `
    <h3>Example Output</h3>
    <pre class="constraints">Input: 
Output:
5
4
3
2
1</pre>
    <p><b>Explanation:</b> The program prints numbers 5 down to 1, each on a new line.</p>
  `,

  "conditions": `
    <ul>
      <li>No input required</li>
      <li>Output must be exactly 5 lines</li>
      <li>Use a while loop (not for loop)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5\n4\n3\n2\n1", "stdinput": "" }
  ],

  "templates": {
    "python": "num = 5\nwhile num >= 1:\n    print(num)\n    num -= 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int num = 5;\n        while (num >= 1) {\n            System.out.println(num);\n            num--;\n        }\n    }\n}",
    "javascript": "let num = 5;\nwhile (num >= 1) {\n    console.log(num);\n    num--;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 5;\n    while (num >= 1) {\n        cout << num << endl;\n        num--;\n    }\n    return 0;\n}"
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