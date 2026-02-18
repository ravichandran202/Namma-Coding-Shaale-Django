module.exports = {
  "title": "Count Votes for Each Candidate – Dictionary Vote Count",
  "difficulty": "hard",
  "acceptance": "93%",

  "description": `
    <p>Count how many votes each candidate received in an election.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>Space-separated candidate names</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read candidate names from input</li>
      <li>Count occurrences of each candidate name</li>
      <li>Print dictionary with candidate names and their vote counts</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Candidate names are case-sensitive</li>
      <li>Each occurrence represents one vote</li>
      <li>Output counts as integers</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
Ravi Kiran Ravi Manu Ravi Kiran
Output:
{'Ravi': 3, 'Kiran': 2, 'Manu': 1}</pre>
    <p><b>Count:</b> Ravi appears 3 times, Kiran 2 times, Manu 1 time</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Alice Bob Alice Charlie Bob
Output:
{'Alice': 2, 'Bob': 2, 'Charlie': 1}</pre>
    <p><b>Count:</b> Alice: 2, Bob: 2, Charlie: 1</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'Ravi': 3, 'Kiran': 2, 'Manu': 1}", 
      "stdinput": "Ravi Kiran Ravi Manu Ravi Kiran",
      "explanation": "Ravi: 3 votes, Kiran: 2, Manu: 1" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'Alice': 2, 'Bob': 2, 'Charlie': 1}", 
      "stdinput": "Alice Bob Alice Charlie Bob",
      "explanation": "Alice: 2, Bob: 2, Charlie: 1" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "",
      "explanation": "No votes, empty dictionary" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'X': 5}", 
      "stdinput": "X X X X X",
      "explanation": "X gets all 5 votes" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'Red': 3, 'Blue': 2, 'Green': 1}", 
      "stdinput": "Red Blue Red Green Red Blue",
      "explanation": "Red: 3, Blue: 2, Green: 1" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'Python': 2, 'Java': 2, 'C++': 1, 'JavaScript': 1}", 
      "stdinput": "Python Java C++ JavaScript Python Java",
      "explanation": "Python: 2, Java: 2, C++: 1, JavaScript: 1" 
    }
  ],

  "templates": {
    "python": "votes = input().split()\nresult = {}\n\nfor name in votes:\n    if name in result:\n        result[name] = result[name] + 1\n    else:\n        result[name] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] votes = input.split(\" \");\n            for (String name : votes) {\n                result.put(name, result.getOrDefault(name, 0) + 1);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const votes = input.split(' ');\n        for (const name of votes) {\n            result[name] = (result[name] || 0) + 1;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string name;\n    \n    while (ss >> name) {\n        result[name]++;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "votes = input().split()\nresult = {}\n\nfor name in votes:\n    if name in result:\n        result[name] = result[name] + 1\n    else:\n        result[name] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] votes = input.split(\" \");\n            for (String name : votes) {\n                result.put(name, result.getOrDefault(name, 0) + 1);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const votes = input.split(' ');\n        for (const name of votes) {\n            result[name] = (result[name] || 0) + 1;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string name;\n    \n    while (ss >> name) {\n        result[name]++;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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