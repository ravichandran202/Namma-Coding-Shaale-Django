module.exports =  {
  "title": "Weekend Check",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Check if a given day is a weekend. <br>Weekend days are <b>Saturday</b> and <b>Sunday</b>.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a day name as input</li>
      <li>Check if the day is "Saturday" or "Sunday"</li>
      <li>If it's a weekend day, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches string comparison and logical OR operations with real-world application.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Saturday
Output: True</pre>
    <p><b>Explanation:</b> Saturday is a weekend day.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Monday
Output: False</pre>
    <p><b>Explanation:</b> Monday is a weekday, not a weekend.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: Sunday
Output: True</pre>
    <p><b>Explanation:</b> Sunday is a weekend day.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid day name in English</li>
      <li>Day names are case-sensitive ("Saturday" not "saturday")</li>
      <li>Weekend days are Saturday and Sunday</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "Saturday" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "Monday" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "Sunday" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "Tuesday" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "Wednesday" },
  ],

  "templates": {
    "python": `day = input()\nis_weekend = day == "Saturday" or day == "Sunday"\nprint(is_weekend)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String day = scanner.nextLine();\n        boolean is_weekend = day.equals(\"Saturday\") || day.equals(\"Sunday\");\n        System.out.println(is_weekend);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (day) => {\n    const is_weekend = day === \"Saturday\" || day === \"Sunday\";\n    console.log(is_weekend);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string day;\n    std::getline(std::cin, day);\n    bool is_weekend = (day == \"Saturday\" || day == \"Sunday\");\n    std::cout << std::boolalpha << is_weekend << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `day = input()\nis_weekend = day == "Saturday" or day == "Sunday"\nprint(is_weekend)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String day = scanner.nextLine();\n        boolean is_weekend = day.equals(\"Saturday\") || day.equals(\"Sunday\");\n        System.out.println(is_weekend);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (day) => {\n    const is_weekend = day === \"Saturday\" || day === \"Sunday\";\n    console.log(is_weekend);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string day;\n    std::getline(std::cin, day);\n    bool is_weekend = (day == \"Saturday\" || day == \"Sunday\");\n    std::cout << std::boolalpha << is_weekend << std::endl;\n    return 0;\n}`
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