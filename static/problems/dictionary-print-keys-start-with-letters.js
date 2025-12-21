module.exports = {
  "title": "Check Key Starts With Letter",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Find and print all dictionary keys that start with a specific letter.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of key-value pairs</li>
      <li>Next <code>n</code> lines: each line contains a key (string) and a value (string) separated by a space</li>
      <li>Last line: a single character to check against the keys</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of key-value pairs from the first input line</li>
      <li>For each following line, read the key and value and store them in a dictionary</li>
      <li>Read the target character from the last line</li>
      <li>Check each key in the dictionary to see if it starts with the target character</li>
      <li>Print all matching keys separated by a space</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Keys and values are both strings</li>
      <li>The target character is case-sensitive (uppercase and lowercase are different)</li>
      <li>Print keys in the order they appear in the dictionary</li>
      <li>If no keys match, print nothing (empty line)</li>
      <li>Output should be keys separated by single spaces, no extra spaces at the end</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
apple red
age 20
ball blue
cat black
a

Output:
apple age</pre>
    <p><b>Explanation:</b> Keys <code>apple</code> and <code>age</code> start with <code>a</code>. Keys <code>ball</code> and <code>cat</code> do not.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
book novel
pen tool
paper material
p

Output:
pen paper</pre>
    <p><b>Explanation:</b> Keys <code>pen</code> and <code>paper</code> start with <code>p</code>. Key <code>book</code> does not.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "apple age", 
      "stdinput": "4\napple red\nage 20\nball blue\ncat black\na",
      "explanation": "Keys starting with 'a': apple, age" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "pen paper", 
      "stdinput": "3\nbook novel\npen tool\npaper material\np",
      "explanation": "Keys starting with 'p': pen, paper" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "3\none 1\ntwo 2\nthree 3\nz",
      "explanation": "No keys start with 'z', empty output" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Apple", 
      "stdinput": "2\nApple fruit\nbanana fruit\nA",
      "explanation": "Case-sensitive: Only 'Apple' starts with 'A'" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "test trial try", 
      "stdinput": "5\ntest 1\ntrial 2\ntry 3\nsample 4\nexample 5\nt",
      "explanation": "Keys starting with 't': test, trial, try" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "sun", 
      "stdinput": "4\nmoon light\nsun star\nearth planet\nmars planet\ns",
      "explanation": "Only 'sun' starts with 's'" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "first fourth fifth", 
      "stdinput": "6\nfirst 1\nsecond 2\nthird 3\nfourth 4\nfifth 5\nsixth 6\nf",
      "explanation": "Keys starting with 'f': first, fourth, fifth" 
    }
  ],

  "templates": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nch = input()\n\nfor x in d:\n    if x.startswith(ch):\n        print(x, end=\" \")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        String ch = scanner.nextLine();\n        \n        StringBuilder result = new StringBuilder();\n        for (String key : d.keySet()) {\n            if (key.startsWith(ch)) {\n                result.append(key).append(\" \");\n            }\n        }\n        \n        if (result.length() > 0) {\n            result.setLength(result.length() - 1);\n        }\n        System.out.print(result.toString());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0]) + 1) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        const ch = lines[n + 1];\n        const result = [];\n        \n        for (const key in d) {\n            if (key.startsWith(ch)) {\n                result.push(key);\n            }\n        }\n        \n        console.log(result.join(' '));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    string ch;\n    cin >> ch;\n    \n    bool first = true;\n    for (const auto& entry : d) {\n        if (entry.first.rfind(ch, 0) == 0) {\n            if (!first) {\n                cout << \" \";\n            }\n            cout << entry.first;\n            first = false;\n        }\n    }\n    \n    cout << endl;\n    return 0;\n}"
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