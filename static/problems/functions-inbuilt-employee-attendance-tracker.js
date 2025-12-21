module.exports = {
  "title": "Employee Attendance Tracker",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Create a function to check if an employee was present every day of the week using the <code>all()</code> function.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing integers separated by spaces (1 = present, 0 = absent)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read attendance records from input</li>
      <li>Create a function called <code>check_attendance(days)</code> that uses <code>all()</code> to check if all days have value 1 (present)</li>
      <li>The function should return <code>True</code> if employee was present all week, <code>False</code> otherwise</li>
      <li>In main code, call the function and print appropriate message based on return value</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
1 1 1 1 1
Output:
Perfect attendance!</pre>
    <p><b>Explanation:</b> All values are 1 (present) → <code>all()</code> returns True</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
1 0 1 1 1
Output:
Some days missed!</pre>
    <p><b>Explanation:</b> Contains 0 (absent) → <code>all()</code> returns False</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Perfect attendance!", 
      "stdinput": "1 1 1 1 1",
      "explanation": "All 1s → perfect attendance" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Some days missed!", 
      "stdinput": "1 0 1 1 1",
      "explanation": "Contains 0 → some days missed" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Perfect attendance!", 
      "stdinput": "1",
      "explanation": "Single day, present" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Some days missed!", 
      "stdinput": "0",
      "explanation": "Single day, absent" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Perfect attendance!", 
      "stdinput": "1 1 1 1 1 1 1",
      "explanation": "Full week present" 
    }
  ],

  "templates": {
    "python": "def check_attendance(days):\n    # 1 = present, 0 = absent\n    return all(days)\n\n# Main code\nattendance = list(map(int, input().split()))\nif check_attendance(attendance):\n    print(\"Perfect attendance!\")\nelse:\n    print(\"Some days missed!\")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static boolean check_attendance(List<Integer> days) {\n        for (int day : days) {\n            if (day == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> attendance = new ArrayList<>();\n        for (String day : input) {\n            attendance.add(Integer.parseInt(day));\n        }\n        \n        if (check_attendance(attendance)) {\n            System.out.println(\"Perfect attendance!\");\n        } else {\n            System.out.println(\"Some days missed!\");\n        }\n    }\n}",
    "javascript": "function check_attendance(days) {\n    for (let day of days) {\n        if (day === 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const attendance = input.split(' ').map(Number);\n    if (check_attendance(attendance)) {\n        console.log(\"Perfect attendance!\");\n    } else {\n        console.log(\"Some days missed!\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nbool check_attendance(vector<int> days) {\n    for (int day : days) {\n        if (day == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> attendance;\n    int day;\n    while (ss >> day) {\n        attendance.push_back(day);\n    }\n    \n    if (check_attendance(attendance)) {\n        cout << \"Perfect attendance!\" << endl;\n    } else {\n        cout << \"Some days missed!\" << endl;\n    }\n    \n    return 0;\n}"
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