module.exports = module.exports = {
  "title": "Count Employees in Each Department – Department Count",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Count how many employees are in each department based on department-employee pairs.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line with space-separated <code>department=employee</code> pairs</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read department-employee pairs from input</li>
      <li>Count how many employees are in each department</li>
      <li>Print a dictionary with department names as keys and employee counts as values</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Department names are case-sensitive</li>
      <li>Each department can have multiple employees</li>
      <li>Output counts as integers</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
IT=Ravi HR=Kiran IT=Manu Sales=Ajay HR=Ramu

Output:
{'IT': 2, 'HR': 2, 'Sales': 1}</pre>
    <p><b>Count:</b> IT appears twice (Ravi, Manu), HR appears twice (Kiran, Ramu), Sales appears once (Ajay)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Engineering=Alice Marketing=Bob Engineering=Charlie

Output:
{'Engineering': 2, 'Marketing': 1}</pre>
    <p><b>Count:</b> Engineering appears twice (Alice, Charlie), Marketing appears once (Bob)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'IT': 2, 'HR': 2, 'Sales': 1}", 
      "stdinput": "IT=Ravi HR=Kiran IT=Manu Sales=Ajay HR=Ramu",
      "explanation": "IT: 2 employees, HR: 2, Sales: 1" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'Engineering': 2, 'Marketing': 1}", 
      "stdinput": "Engineering=Alice Marketing=Bob Engineering=Charlie",
      "explanation": "Engineering: 2, Marketing: 1" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "",
      "explanation": "Empty input, empty dictionary" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'HR': 5}", 
      "stdinput": "HR=A HR=B HR=C HR=D HR=E",
      "explanation": "HR appears 5 times (5 employees)" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'IT': 3, 'Finance': 2, 'Admin': 1}", 
      "stdinput": "IT=Ravi Finance=Kiran IT=Manu Finance=Ajay IT=Ramu Admin=Sita",
      "explanation": "IT: 3, Finance: 2, Admin: 1" 
    }
  ],

  "templates": {
    "python": "pairs = input().split()\nresult = {}\n\nfor pair in pairs:\n    dept, employee = pair.split(\"=\")\n    if dept in result:\n        result[dept] = result[dept] + 1\n    else:\n        result[dept] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] parts = pair.split(\"=\");\n                String dept = parts[0];\n                result.put(dept, result.getOrDefault(dept, 0) + 1);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [dept, employee] = pair.split('=');\n            result[dept] = (result[dept] || 0) + 1;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string dept = pair.substr(0, pos);\n            result[dept]++;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "pairs = input().split()\nresult = {}\n\nfor pair in pairs:\n    dept, employee = pair.split(\"=\")\n    if dept in result:\n        result[dept] = result[dept] + 1\n    else:\n        result[dept] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] parts = pair.split(\"=\");\n                String dept = parts[0];\n                result.put(dept, result.getOrDefault(dept, 0) + 1);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [dept, employee] = pair.split('=');\n            result[dept] = (result[dept] || 0) + 1;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string dept = pair.substr(0, pos);\n            result[dept]++;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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