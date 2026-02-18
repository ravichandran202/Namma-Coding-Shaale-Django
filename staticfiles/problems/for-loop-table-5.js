module.exports = {
  "title": "Table of 5",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Print multiplication table of 5 from 1 to 10.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop to iterate from 1 to 10</li>
      <li>Print multiplication table format</li>
      <li>Each multiplication on a separate line</li>
    </ul>
    <p><b>Multiplication Table Concept:</b></p>
    <ul>
      <li>5 × 1 = 5</li>
      <li>5 × 2 = 10</li>
      <li>....</li>
      <li>5 × 10 = 50</li>
      <li>Format: <code>"5 x i = result"</code></li>
    </ul>
    <p>This problem teaches formatted output with loops.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50</pre>
    <p><b>Explanation:</b> Multiplication table of 5 from 1 to 10</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(1, 11):\n    print(\"5 x\", i, \"=\", 5 * i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(\"5 x \" + i + \" = \" + (5 * i));\n        }\n    }\n}",
    "javascript": "for (let i = 1; i <= 10; i++) {\n    console.log(\"5 x \" + i + \" = \" + (5 * i));\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << \"5 x \" << i << \" = \" << 5 * i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "for i in range(1, 11):\n    print(\"5 x\", i, \"=\", 5 * i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(\"5 x \" + i + \" = \" + (5 * i));\n        }\n    }\n}",
    "javascript": "for (let i = 1; i <= 10; i++) {\n    console.log(\"5 x \" + i + \" = \" + (5 * i));\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << \"5 x \" << i << \" = \" << 5 * i << endl;\n    }\n    return 0;\n}"
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