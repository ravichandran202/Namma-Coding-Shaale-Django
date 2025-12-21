module.exports = {
  "title": "Day Type Classifier",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Classify days of the week into weekdays or weekends using pattern matching.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a day name as string input</li>
      <li>Use match-case (switch-case) statement for classification</li>
      <li>Categorize the day into appropriate type</li>
      <li>Handle invalid inputs gracefully</li>
    </ul>
    <p><b>Classification Rules:</b></p>
    <ul>
      <li>Monday, Tuesday, Wednesday, Thursday, Friday → "Weekday"</li>
      <li>Saturday, Sunday → "Weekend"</li>
      <li>Any other input → "Invalid day"</li>
    </ul>
    <p>This problem teaches pattern matching with match-case statements and multiple condition handling in a clean, readable way.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Saturday
Output: Weekend</pre>
    <p><b>Explanation:</b> "Saturday" matches the weekend category.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Wednesday
Output: Weekday</pre>
    <p><b>Explanation:</b> "Wednesday" matches the weekday category.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: Holiday
Output: Invalid day</pre>
    <p><b>Explanation:</b> "Holiday" doesn't match any valid day name.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a string representing a day name</li>
      <li>Day names are case-sensitive (capitalized first letter)</li>
      <li>Use match-case statement (Python 3.10+) or switch-case equivalent</li>
      <li>Output must be exactly one of: "Weekday", "Weekend", or "Invalid day"</li>
      <li>Handle all seven valid days and any invalid input</li>
      <li>Use pattern matching with multiple cases per category</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Weekend", "stdinput": "Saturday" },
    { "id": 2, "input": [], "expected": "Weekday", "stdinput": "Wednesday" },
    { "id": 3, "input": [], "expected": "Invalid day", "stdinput": "Holiday" },
    { "id": 4, "input": [], "expected": "Weekday", "stdinput": "Monday" },
    { "id": 5, "input": [], "expected": "Weekend", "stdinput": "Sunday" },
    { "id": 6, "input": [], "expected": "Weekday", "stdinput": "Tuesday" },
    { "id": 7, "input": [], "expected": "Invalid day", "stdinput": "saturday" },
    { "id": 8, "input": [], "expected": "Invalid day", "stdinput": "Mon" }
  ],

  "templates": {
    "python": "day = input()\n\nmatch day:\n    case \"Monday\" | \"Tuesday\" | \"Wednesday\" | \"Thursday\" | \"Friday\":\n        print(\"Weekday\")\n    case \"Saturday\" | \"Sunday\":\n        print(\"Weekend\")\n    case _:\n        print(\"Invalid day\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String day = scanner.nextLine();\n        \n        switch (day) {\n            case \"Monday\":\n            case \"Tuesday\":\n            case \"Wednesday\":\n            case \"Thursday\":\n            case \"Friday\":\n                System.out.println(\"Weekday\");\n                break;\n            case \"Saturday\":\n            case \"Sunday\":\n                System.out.println(\"Weekend\");\n                break;\n            default:\n                System.out.println(\"Invalid day\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (day) => {\n    switch (day) {\n        case \"Monday\":\n        case \"Tuesday\":\n        case \"Wednesday\":\n        case \"Thursday\":\n        case \"Friday\":\n            console.log(\"Weekday\");\n            break;\n        case \"Saturday\":\n        case \"Sunday\":\n            console.log(\"Weekend\");\n            break;\n        default:\n            console.log(\"Invalid day\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string day;\n    std::getline(std::cin, day);\n    \n    if (day == \"Monday\" || day == \"Tuesday\" || day == \"Wednesday\" || \n        day == \"Thursday\" || day == \"Friday\") {\n        std::cout << \"Weekday\" << std::endl;\n    } else if (day == \"Saturday\" || day == \"Sunday\") {\n        std::cout << \"Weekend\" << std::endl;\n    } else {\n        std::cout << \"Invalid day\" << std::endl;\n    }\n    return 0;\n}"
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