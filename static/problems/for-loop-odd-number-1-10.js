module.exports = {
  "title": "Odd 1 to 10",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print all odd numbers between 1 and 10 (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop with step 2</li>
      <li>Print odd numbers: 1, 3, 5, 7, 9</li>
      <li>Each number on a separate line</li>
    </ul>
    <p>This problem teaches step iteration starting from odd numbers.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
1
3
5
7
9</pre>
    <p><b>Explanation:</b> Odd numbers from 1 to 10 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n3\n5\n7\n9", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(1, 11, 2):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 1; i <= 10; i += 2) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "for i in range(1, 11, 2):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 1; i <= 10; i += 2) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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