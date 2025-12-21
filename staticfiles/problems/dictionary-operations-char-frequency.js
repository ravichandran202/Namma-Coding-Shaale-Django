module.exports = {
  "title": "Count Character Frequency",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Read a string and count how many times each character appears.</p>
    <p><b>Input:</b> A single line with a string</p>
    <p><b>Output:</b> Print a dictionary with character counts</p>
    <p><b>Note:</b> Characters include letters, digits, spaces, and symbols.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
apple
Output:
{'a': 1, 'p': 2, 'l': 1, 'e': 1}</pre>
    <p>In "apple": 'a' appears once, 'p' appears twice, 'l' once, 'e' once.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
hello
Output:
{'h': 1, 'e': 1, 'l': 2, 'o': 1}</pre>
    <p>In "hello": 'l' appears twice, all others appear once.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'a': 1, 'p': 2, 'l': 1, 'e': 1}", 
      "stdinput": "apple" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'h': 1, 'e': 1, 'l': 2, 'o': 1}", 
      "stdinput": "hello" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "",
      "explanation": "Empty string produces empty dictionary." 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'a': 3, 'b': 2, 'c': 1}", 
      "stdinput": "aaabbc",
      "explanation": "'a' appears 3 times, 'b' appears 2 times, 'c' appears once." 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'1': 2, '2': 2, '3': 2}", 
      "stdinput": "112233",
      "explanation": "Digits 1, 2, 3 each appear twice." 
    }
  ],

  "templates": {
    "python": "text = input()\n\nresult = {}\n\nfor ch in text:\n    if ch in result:\n        result[ch] = result[ch] + 1\n    else:\n        result[ch] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        \n        Map<Character, Integer> result = new HashMap<>();\n        for (char ch : text.toCharArray()) {\n            result.put(ch, result.getOrDefault(ch, 0) + 1);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    const result = {};\n    for (const ch of text) {\n        result[ch] = (result[ch] || 0) + 1;\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    \n    map<char, int> result;\n    for (char ch : text) {\n        result[ch]++;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': \" << pair.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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