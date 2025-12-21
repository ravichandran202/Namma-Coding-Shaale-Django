module.exports = {
  "title": "Repeat Text",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Write a program that prints the word "Hello" three times using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Use a while loop to iterate</li>
      <li>Print "Hello" on each iteration</li>
      <li>Repeat exactly 3 times</li>
    </ul>
    <p>This problem teaches while loops for repeating actions a fixed number of times.</p>
  `,

  "examples": `
    <h3>Example Output</h3>
    <pre class="constraints">Hello
Hello
Hello</pre>
    <p><b>Explanation:</b> The program prints "Hello" three times, each on a new line.</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "Hello\nHello\nHello", "stdinput": "" }
  ],

  "templates": {
    "python": "count = 1\nwhile count <= 3:\n    print(\"Hello\")\n    count += 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int count = 1;\n        while (count <= 3) {\n            System.out.println(\"Hello\");\n            count++;\n        }\n    }\n}",
    "javascript": "let count = 1;\nwhile (count <= 3) {\n    console.log(\"Hello\");\n    count++;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 1;\n    while (count <= 3) {\n        cout << \"Hello\" << endl;\n        count++;\n    }\n    return 0;\n}"
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