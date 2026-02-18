module.exports = {
    "title": "HTML Tag Stripper",
    "difficulty": "Hard",
    "acceptance": "45%",
  
    "description": `
      <p>You have a string containing HTML text. Your task is to remove all HTML tags from the string, leaving only the visible text.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A string containing text mixed with HTML tags (e.g., <code>&lt;b&gt;Text&lt;/b&gt;</code>).</li>
        <li><b>Logic:</b> Identify substrings that start with <code>&lt;</code> and end with <code>&gt;</code> and remove them.</li>
        <li><b>Output Format:</b> The cleaned text string.</li>
      </ul>
      <p><i>Note: Assume tags are well-formed and do not contain nested brackets within attributes.</i></p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
&lt;p&gt;Hello World&lt;/p&gt;
Output: Hello World</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
&lt;b&gt;Bold&lt;/b&gt; and &lt;i&gt;Italic&lt;/i&gt;
Output: Bold and Italic</pre>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
&lt;a href="xyz"&gt;Link&lt;/a&gt;
Output: Link</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello World", "stdinput": "<p>Hello World</p>" },
      { "id": 2, "input": [], "expected": "Bold and Italic", "stdinput": "<b>Bold</b> and <i>Italic</i>" },
      { "id": 3, "input": [], "expected": "Link", "stdinput": "<a href=\"xyz\">Link</a>" },
      { "id": 4, "input": [], "expected": "Plain text", "stdinput": "Plain text" },
      { "id": 5, "input": [], "expected": "", "stdinput": "<br><hr>" },
      { "id": 6, "input": [], "expected": "Header", "stdinput": "<h1>Header</h1>" },
      { "id": 7, "input": [], "expected": "Nested", "stdinput": "<div><span>Nested</span></div>" }
    ],
  
    "templates": {
      "python": "import re\ns = input()\n# Replace pattern <...> with empty string\nclean = re.sub('<[^>]*>', '', s)\nprint(clean)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        // Regex <[^>]*> matches < followed by anything not > followed by >\n        System.out.println(s.replaceAll(\"<[^>]*>\", \"\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Replace regex /<[^>]*>/g with empty string\n    console.log(line.replace(/<[^>]*>/g, ''));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <regex>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    // Use regex_replace to remove tags\n    regex e(\"<[^>]*>\");\n    cout << regex_replace(s, e, \"\") << endl;\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "import re\ns = input()\n# Replace pattern <...> with empty string\nclean = re.sub('<[^>]*>', '', s)\nprint(clean)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        // Regex <[^>]*> matches < followed by anything not > followed by >\n        System.out.println(s.replaceAll(\"<[^>]*>\", \"\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Replace regex /<[^>]*>/g with empty string\n    console.log(line.replace(/<[^>]*>/g, ''));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <regex>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    // Use regex_replace to remove tags\n    regex e(\"<[^>]*>\");\n    cout << regex_replace(s, e, \"\") << endl;\n    return 0;\n}"
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