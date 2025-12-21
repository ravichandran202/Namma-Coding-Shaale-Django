module.exports = {
  "title": "Print 1 to 5",
  "difficulty": "easy",
  "acceptance": "99%",

  "description": `
    <p>Print numbers from 1 to 5 using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop to iterate from 1 to 5</li>
      <li>Print each number on a separate line</li>
    </ul>
    <p><b>Range Concept:</b></p>
    <p>This problem teaches basic for loop usage with range.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
1
2
3
4
5</pre>
    <p><b>Explanation:</b> Numbers from 1 to 5 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n2\n3\n4\n5", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(1, 6):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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