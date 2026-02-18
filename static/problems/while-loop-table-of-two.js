module.exports = {
  "title": "Multiplication Table of 2",
  "difficulty": "easy",
  "acceptance": "99.9%",

  "description": `
    <p>Write a program that prints the multiplication table of 2 from 1 to 10 using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Use a while loop to iterate from 1 to 10</li>
      <li>For each number, calculate 2 × number</li>
      <li>Print each multiplication in the format: <code>"2 × 1 = 2"</code></li>
    </ul>
    <p>This problem teaches while loops with formatted output and basic arithmetic operations.</p>
  `,

  "examples": `
    <h3>Example Output</h3>
    <pre class="constraints">2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
2 × 4 = 8
2 × 5 = 10
2 × 6 = 12
2 × 7 = 14
2 × 8 = 16
2 × 9 = 18
2 × 10 = 20</pre>
    <p><b>Explanation:</b> The program prints the multiplication table of 2 from 1 to 10.</p>
  `,

  "conditions": `
    <ul>
      <li>No input required</li>
      <li>Start from 1 and go up to 10</li>
      <li>Use the exact format: <code>"2 × number = result"</code></li>
    </ul>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "2 × 1 = 2\n2 × 2 = 4\n2 × 3 = 6\n2 × 4 = 8\n2 × 5 = 10\n2 × 6 = 12\n2 × 7 = 14\n2 × 8 = 16\n2 × 9 = 18\n2 × 10 = 20", 
      "stdinput": "" 
    }
  ],

  "templates": {
    "python": "num = 1\nwhile num <= 10:\n    result = 2 * num\n    print(f\"2 × {num} = {result}\")\n    num += 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        while (num <= 10) {\n            int result = 2 * num;\n            System.out.println(\"2 × \" + num + \" = \" + result);\n            num++;\n        }\n    }\n}",
    "javascript": "let num = 1;\nwhile (num <= 10) {\n    let result = 2 * num;\n    console.log(`2 × ${num} = ${result}`);\n    num++;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 1;\n    while (num <= 10) {\n        int result = 2 * num;\n        cout << \"2 × \" << num << \" = \" << result << endl;\n        num++;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = 1\nwhile num <= 10:\n    result = 2 * num\n    print(f\"2 × {num} = {result}\")\n    num += 1",
    "java": "public class Main {\n    public static void main(String[] args) {\n        int num = 1;\n        while (num <= 10) {\n            int result = 2 * num;\n            System.out.println(\"2 × \" + num + \" = \" + result);\n            num++;\n        }\n    }\n}",
    "javascript": "let num = 1;\nwhile (num <= 10) {\n    let result = 2 * num;\n    console.log(`2 × ${num} = ${result}`);\n    num++;\n}",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 1;\n    while (num <= 10) {\n        int result = 2 * num;\n        cout << \"2 × \" << num << \" = \" << result << endl;\n        num++;\n    }\n    return 0;\n}"
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