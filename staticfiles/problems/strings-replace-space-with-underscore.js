module.exports = {
    "title": "Space to Underscore Formatter",
    "difficulty": "Medium",
    "acceptance": "85%",
  
    "description": `
      <p>You have a sentence or phrase containing spaces. Your task is to format this string for use in URLs or file names by replacing all spaces with underscores (<code>_</code>).</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A string containing words separated by spaces.</li>
        <li><b>Logic:</b> Iterate through the string or use a replace function to swap ' ' with '_'.</li>
        <li><b>Output Format:</b> The modified string with no spaces.</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
Hello World
Output: Hello_World</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
Data Science Course
Output: Data_Science_Course</pre>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
Python
Output: Python</pre>
      <p><b>Explanation:</b> No spaces were found, so the string is unchanged.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello_World", "stdinput": "Hello World" },
      { "id": 2, "input": [], "expected": "Data_Science_Course", "stdinput": "Data Science Course" },
      { "id": 3, "input": [], "expected": "Python", "stdinput": "Python" },
      { "id": 4, "input": [], "expected": "a_b_c", "stdinput": "a b c" },
      { "id": 5, "input": [], "expected": "_Start", "stdinput": " Start" },
      { "id": 6, "input": [], "expected": "End_", "stdinput": "End " },
      { "id": 7, "input": [], "expected": "Multi__Space", "stdinput": "Multi  Space" }
    ],
  
    "templates": {
      "python": "s = input()\nprint(s.replace(' ', '_'))",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        System.out.println(s.replace(\" \", \"_\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Use regex with global flag to replace all occurrences\n    console.log(line.replace(/ /g, '_'));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    for(int i = 0; i < s.length(); i++) {\n        if(s[i] == ' ') s[i] = '_';\n    }\n    cout << s << endl;\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "s = input()\nprint(s.replace(' ', '_'))",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        System.out.println(s.replace(\" \", \"_\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Use regex with global flag to replace all occurrences\n    console.log(line.replace(/ /g, '_'));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    for(int i = 0; i < s.length(); i++) {\n        if(s[i] == ' ') s[i] = '_';\n    }\n    cout << s << endl;\n    return 0;\n}"
    },
  
    "wrapCode": function(lang, userCode, input) {
      switch(lang) {
        case 'python': return `${userCode}`;
        case 'java': return userCode;
        case 'javascript': return `${userCode}`;
        case 'c++': return userCode;
        default: return userCode;
      }
    }
  }