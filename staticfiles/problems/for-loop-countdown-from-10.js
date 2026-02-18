module.exports = {
  "title": "Count Down Step 2",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Print numbers from 10 down to 0.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop with negative step</li>
      <li>Print numbers: 10, 8, 6, 4, 2, 0</li>
      <li>Each number on a separate line</li>
    </ul>
    <p><b>Use Reverse Step Concept</b></p>
    <p>This problem teaches complex range parameters with negative steps.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
10
8
6
4
2
0</pre>
    <p><b>Explanation:</b> Numbers from 10 down to 0 with step -2</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10\n8\n6\n4\n2\n0", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(10, -1, -2):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 10; i >= 0; i -= 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 10; i >= 0; i -= 2) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 10; i >= 0; i -= 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "for i in range(10, -1, -2):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 10; i >= 0; i -= 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 10; i >= 0; i -= 2) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 10; i >= 0; i -= 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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