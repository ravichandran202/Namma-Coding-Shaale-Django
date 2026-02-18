module.exports = {
  "title": "Sum of All Values",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Calculate and print the sum of all numeric values in a dictionary.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line with space-separated <code>key=value</code> pairs</li>
      <li>All values will be integers (convert using <code>int()</code>)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the dictionary data from input</li>
      <li>Convert string values to integers</li>
      <li>Calculate the sum of all values</li>
      <li>Print the total sum as an integer</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
a=10 b=20 c=30

Output:
60</pre>
    <p><b>Calculation:</b> 10 + 20 + 30 = 60</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
x=5 y=15 z=25

Output:
45</pre>
    <p><b>Calculation:</b> 5 + 15 + 25 = 45</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "60", 
      "stdinput": "a=10 b=20 c=30",
      "explanation": "10 + 20 + 30 = 60" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "45", 
      "stdinput": "x=5 y=15 z=25",
      "explanation": "5 + 15 + 25 = 45" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "",
      "explanation": "Empty dictionary sum = 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "100", 
      "stdinput": "single=100",
      "explanation": "Single value 100" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "330", 
      "stdinput": "a=100 b=200 c=30",
      "explanation": "100 + 200 + 30 = 330" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "55", 
      "stdinput": "a=1 b=2 c=3 d=4 e=5 f=6 g=7 h=8 i=9 j=10",
      "explanation": "Sum of 1 to 10 = 55" 
    }
  ],

  "templates": {
    "python": "s = input()\nnumbers = dict(item.split(\"=\") for item in s.split())\n\ntotal = 0\nfor k in numbers:\n    total = total + int(numbers[k])\n\nprint(total)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> numbers = new HashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                numbers.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        int total = 0;\n        for (String value : numbers.values()) {\n            total += Integer.parseInt(value);\n        }\n        \n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const numbers = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            numbers[key] = value;\n        }\n    }\n    \n    let total = 0;\n    for (const value of Object.values(numbers)) {\n        total += parseInt(value);\n    }\n    \n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> numbers;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            numbers[key] = value;\n        }\n    }\n    \n    int total = 0;\n    for (const auto& entry : numbers) {\n        total += stoi(entry.second);\n    }\n    \n    cout << total << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\nnumbers = dict(item.split(\"=\") for item in s.split())\n\ntotal = 0\nfor k in numbers:\n    total = total + int(numbers[k])\n\nprint(total)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> numbers = new HashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                numbers.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        int total = 0;\n        for (String value : numbers.values()) {\n            total += Integer.parseInt(value);\n        }\n        \n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const numbers = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            numbers[key] = value;\n        }\n    }\n    \n    let total = 0;\n    for (const value of Object.values(numbers)) {\n        total += parseInt(value);\n    }\n    \n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> numbers;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            numbers[key] = value;\n        }\n    }\n    \n    int total = 0;\n    for (const auto& entry : numbers) {\n        total += stoi(entry.second);\n    }\n    \n    cout << total << endl;\n    \n    return 0;\n}"
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