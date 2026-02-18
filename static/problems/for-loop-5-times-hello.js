module.exports = {
  "title": "Hello Repeater",
  "difficulty": "easy",
  "acceptance": "99%",

  "description": `
    <p>Print the word "Hello" five times using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>No input required</li>
      <li>Use for loop to iterate 5 times</li>
      <li>Print <code>"Hello"</code> on each iteration</li>
    </ul>

    <p>This problem teaches simple repetition with for loops.</p>
  `,

  "examples": `
    <h3>Example</h3>
    <pre class="constraints">Output: 
Hello
Hello
Hello
Hello
Hello</pre>
    <p><b>Explanation:</b> "Hello" printed 5 times on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Hello\nHello\nHello\nHello\nHello", "stdinput": "" }
  ],

  "templates": {
    "python": "for _ in range(5):\n    print(\"Hello\")",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(\"Hello\");\n        }\n    }\n}",
    "javascript": "for (let i = 0; i < 5; i++) {\n    console.log(\"Hello\");\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << \"Hello\" << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "for _ in range(5):\n    print(\"Hello\")",
    "java": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(\"Hello\");\n        }\n    }\n}",
    "javascript": "for (let i = 0; i < 5; i++) {\n    console.log(\"Hello\");\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << \"Hello\" << endl;\n    }\n    return 0;\n}"
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