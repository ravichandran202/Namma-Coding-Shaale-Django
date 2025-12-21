module.exports = {
  "title": "Exam Result Checker",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Create a function to check if a student passed any subject using the <code>any()</code> function.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing exam marks as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read exam marks from input</li>
      <li>Create a function called <code>check_results(marks)</code> that uses <code>any()</code> with a generator expression to check if any mark ≥ 40</li>
      <li>The function should return <code>True</code> if student passed any subject, <code>False</code> otherwise</li>
      <li>In main code, call the function and print appropriate message based on return value</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
35 42 38 45
Output:
Student passed!</pre>
    <p><b>Explanation:</b> Contains 42 and 45 (≥40) → <code>any()</code> returns True</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
35 38 39 30
Output:
Student failed all subjects!</pre>
    <p><b>Explanation:</b> All marks < 40 → <code>any()</code> returns False</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Student passed!", 
      "stdinput": "35 42 38 45",
      "explanation": "Contains 42,45 (≥40) → passed" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Student failed all subjects!", 
      "stdinput": "35 38 39 30",
      "explanation": "All marks <40 → failed all" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Student passed!", 
      "stdinput": "40",
      "explanation": "Exactly 40 → passed" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Student failed all subjects!", 
      "stdinput": "39",
      "explanation": "39 <40 → failed" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Student passed!", 
      "stdinput": "100 0 0 0",
      "explanation": "One mark 100 (≥40) → passed" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Student passed!", 
      "stdinput": "50 60 70 80",
      "explanation": "All marks ≥40 → passed" 
    }
  ],

  "templates": {
    "python": "def check_results(marks):\n    return any(mark >= 40 for mark in marks)\n\n# Main code\nmarks = list(map(int, input().split()))\nif check_results(marks):\n    print(\"Student passed!\")\nelse:\n    print(\"Student failed all subjects!\")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static boolean check_results(List<Integer> marks) {\n        for (int mark : marks) {\n            if (mark >= 40) {\n                return true;\n            }\n        }\n        return false;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> marks = new ArrayList<>();\n        for (String mark : input) {\n            marks.add(Integer.parseInt(mark));\n        }\n        \n        if (check_results(marks)) {\n            System.out.println(\"Student passed!\");\n        } else {\n            System.out.println(\"Student failed all subjects!\");\n        }\n    }\n}",
    "javascript": "function check_results(marks) {\n    for (let mark of marks) {\n        if (mark >= 40) {\n            return true;\n        }\n    }\n    return false;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const marks = input.split(' ').map(Number);\n    if (check_results(marks)) {\n        console.log(\"Student passed!\");\n    } else {\n        console.log(\"Student failed all subjects!\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nbool check_results(vector<int> marks) {\n    for (int mark : marks) {\n        if (mark >= 40) {\n            return true;\n        }\n    }\n    return false;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> marks;\n    int mark;\n    while (ss >> mark) {\n        marks.push_back(mark);\n    }\n    \n    if (check_results(marks)) {\n        cout << \"Student passed!\" << endl;\n    } else {\n        cout << \"Student failed all subjects!\" << endl;\n    }\n    \n    return 0;\n}"
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