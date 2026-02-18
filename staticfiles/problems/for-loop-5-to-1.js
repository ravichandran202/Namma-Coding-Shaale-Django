module.exports = {
  "title": "Countdown 5 to 1",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print numbers from 5 down to 1 using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop to iterate from 5 down to 1</li>
      <li>Print each number on a separate line</li>
    </ul>
    <p>This problem teaches reverse iteration with for loop.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
5
4
3
2
1</pre>
    <p><b>Explanation:</b> Numbers from 5 down to 1 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5\n4\n3\n2\n1", "stdinput": "" }
  ],

  "templates": {
    "python": "for i in range(5, 0, -1):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 5; i >= 1; i--) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 5; i >= 1; i--) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "for i in range(5, 0, -1):\n    print(i)",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "for (let i = 5; i >= 1; i--) {\n    console.log(i);\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 5; i >= 1; i--) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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