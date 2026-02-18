module.exports =  {
  "title": "Passing Grade Check",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Take a student's marks and passing marks as input and check if the student has passed.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read student's marks and passing marks as integer input</li>
      <li>If passing, print True</li>
      <li>If failing, print False</li>
    </ul>
    <p>This problem teaches comparison operations with real-world application in academic grading.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
75
40

Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
30
35  

Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
40
45

Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Marks will be an integer between 0 and 100</li>
      <li>Passing Marks will be an integer between 0 and 100</li>
      <li>Output must be exactly True or False (boolean)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True",  "stdinput": "75\n40" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "30\n35" },
    { "id": 3, "input": [], "expected": "False",  "stdinput": "40\n45" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "39\n40" },
    { "id": 5, "input": [], "expected": "True",  "stdinput": "100\n40" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "0\n40" },
    { "id": 7, "input": [], "expected": "True","stdinput": "30\n30" }
  ],

  "templates": {
    "python": `marks = int(input())\npassing_marks = int(input())\nprint(marks >= passing_marks)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        System.out.println(marks >= 40);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (marks) => {\n    const marksNum = parseInt(marks);\n    console.log(marksNum >= 40);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int marks;\n    std::cin >> marks;\n    std::cout << std::boolalpha << (marks >= 40) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `marks = int(input())\npassing_marks = int(input())\nprint(marks >= passing_marks)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int marks = scanner.nextInt();\n        System.out.println(marks >= 40);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (marks) => {\n    const marksNum = parseInt(marks);\n    console.log(marksNum >= 40);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int marks;\n    std::cin >> marks;\n    std::cout << std::boolalpha << (marks >= 40) << std::endl;\n    return 0;\n}`
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