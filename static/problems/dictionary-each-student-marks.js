module.exports = {
  "title": "Total Marks of Each Student – Dictionary Total Marks",
  "difficulty": "hard",
  "acceptance": "91%",

  "description": `
    <p>Calculate total marks for each student from student-subject-mark entries.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>Space-separated <code>student=subject=mark</code> triples</li>
      <li>Marks are integers</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read student-subject-mark triples from input</li>
      <li>Extract student name and mark from each triple</li>
      <li>Sum up marks for each student</li>
      <li>Print dictionary with student names and their total marks</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Student names are case-sensitive</li>
      <li>Same student can have multiple subjects</li>
      <li>Output marks as integers</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
Ravi=Maths=40 Ravi=Science=35 Kiran=Maths=50 Kiran=English=45 Ravi=English=25
Output:
{'Ravi': 100, 'Kiran': 95}</pre>
    <p><b>Calculation:</b> Ravi: 40+35+25=100, Kiran: 50+45=95</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Alice=Math=80 Alice=Science=75 Bob=Math=90
Output:
{'Alice': 155, 'Bob': 90}</pre>
    <p><b>Calculation:</b> Alice: 80+75=155, Bob: 90</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'Ravi': 100, 'Kiran': 95}", 
      "stdinput": "Ravi=Maths=40 Ravi=Science=35 Kiran=Maths=50 Kiran=English=45 Ravi=English=25",
      "explanation": "Ravi: 40+35+25=100, Kiran: 50+45=95" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'Alice': 155, 'Bob': 90}", 
      "stdinput": "Alice=Math=80 Alice=Science=75 Bob=Math=90",
      "explanation": "Alice: 80+75=155, Bob: 90" 
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
      "expected": "{'John': 300}", 
      "stdinput": "John=Math=100 John=Science=100 John=English=100",
      "explanation": "John: 100+100+100=300" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'A': 10, 'B': 20, 'C': 30}", 
      "stdinput": "A=Math=10 B=Math=20 C=Math=30",
      "explanation": "Each student has one subject" 
    }
  ],

  "templates": {
    "python": "pairs = input().split()\nresult = {}\n\nfor pair in pairs:\n    student, subject, mark = pair.split(\"=\")\n    mark = int(mark)\n    \n    if student in result:\n        result[student] = result[student] + mark\n    else:\n        result[student] = mark\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] triples = input.split(\" \");\n            for (String triple : triples) {\n                String[] parts = triple.split(\"=\");\n                String student = parts[0];\n                int mark = Integer.parseInt(parts[2]);\n                result.put(student, result.getOrDefault(student, 0) + mark);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const triples = input.split(' ');\n        for (const triple of triples) {\n            const [student, subject, mark] = triple.split('=');\n            const numMark = parseInt(mark);\n            result[student] = (result[student] || 0) + numMark;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string triple;\n    \n    while (ss >> triple) {\n        size_t pos1 = triple.find('=');\n        size_t pos2 = triple.find('=', pos1 + 1);\n        \n        if (pos1 != string::npos && pos2 != string::npos) {\n            string student = triple.substr(0, pos1);\n            string markStr = triple.substr(pos2 + 1);\n            int mark = stoi(markStr);\n            result[student] += mark;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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