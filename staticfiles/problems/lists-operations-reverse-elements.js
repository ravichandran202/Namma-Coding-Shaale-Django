module.exports = {
  "title": "Reverse Elements",
  "difficulty": "beginner",
  "acceptance": "90%",

  "description": `
    <p>A person enters their daily tasks as a list. Your task is to print the list in reverse order.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The user provides all tasks as space-separated words</li>
      <li><b>Output Format:</b> Display the tasks in reverse order as a list</li>
    </ul>
    <p>This problem helps practice list reversal techniques and understanding how to manipulate the order of elements in a sequence.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Eat Code Sleep Repeat
Output: ['Repeat', 'Sleep', 'Code', 'Eat']</pre>
    <p><b>Explanation:</b> 
    <br>The original order <code>Eat → Code → Sleep → Repeat</code> 
    <br>becomes <code>Repeat → Sleep → Code → Eat</code>.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: Study
Output: ['Study']</pre>
    <p><b>Explanation:</b> With only one task, the output remains unchanged.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['Repeat', 'Sleep', 'Code', 'Eat']", "stdinput": "Eat Code Sleep Repeat" },
    { "id": 2, "input": [], "expected": "['Study']", "stdinput": "Study" },
    { "id": 3, "input": [], "expected": "['Dinner', 'Work', 'Wakeup']", "stdinput": "Wakeup Work Dinner" },
    { "id": 4, "input": [], "expected": "['Three', 'Two', 'One']", "stdinput": "One Two Three" },
    { "id": 5, "input": [], "expected": "['Z', 'Y', 'X', 'W', 'V']", "stdinput": "V W X Y Z" },
    { "id": 6, "input": [], "expected": "['End', 'Middle', 'Start']", "stdinput": "Start Middle End" },
    { "id": 7, "input": [], "expected": "['Last', 'First']", "stdinput": "First Last" },
    { "id": 8, "input": [], "expected": "['Five', 'Four', 'Three', 'Two', 'One']", "stdinput": "One Two Three Four Five" },
    { "id": 9, "input": [], "expected": "['B', 'A']", "stdinput": "A B" }
  ],

  "templates": {
    "python": "tasks = input().split()\n\n# TODO: Reverse the list and print it\n",
    "java": "import java.util.Scanner;\nimport java.util.Collections;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] tasks = scanner.nextLine().split(\" \");\n        \n        // TODO: Reverse the list and print it\n        \n    }\n}",
    "javascript": "const readline = require(\'readline\').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question(\'\', (input) => {\n    const tasks = input.split(\' \');\n    \n    // TODO: Reverse the list and print it\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> tasks;\n    string task;\n    \n    while (ss >> task) {\n        tasks.push_back(task);\n    }\n    \n    // TODO: Reverse the list and print it\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "tasks = input().split()\nprint(tasks[::-1])",
    "java": "import java.util.Scanner;\nimport java.util.Collections;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] tasks = scanner.nextLine().split(\" \");\n        List<String> taskList = Arrays.asList(tasks);\n        Collections.reverse(taskList);\n        System.out.println(taskList);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const tasks = input.split(' ');\n    const result = tasks.reverse();\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> tasks;\n    string task;\n    \n    while (ss >> task) {\n        tasks.push_back(task);\n    }\n    \n    reverse(tasks.begin(), tasks.end());\n    cout << \"[\";\n    for (int i = 0; i < tasks.size(); i++) {\n        cout << \"'\" << tasks[i] << \"'\";\n        if (i < tasks.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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