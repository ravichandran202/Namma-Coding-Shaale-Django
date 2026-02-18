module.exports = {
    "title": "Odd Index Character Extractor",
    "difficulty": "easy",
    "acceptance": "88%",
  
    "description": `
      <p>You have a string of characters. Your task is to extract only the characters located at <b>odd index positions</b> (1, 3, 5, etc.) and display them as a list.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A single line containing a string (words, numbers, or mixed characters).</li>
        <li><b>Logic:</b> Identify characters at indices 1, 3, 5, etc. (Recall that indexing starts at 0).</li>
        <li><b>Output Format:</b> Display a list containing the extracted characters in their original order.</li>
      </ul>
      <p>This problem helps practice string slicing, looping with steps, and understanding 0-based indexing.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
adventure
Output: ['d', 'e', 't', 'r']</pre>
      <p><b>Explanation:</b> 
      <br>Index 0: 'a' 
      <br>Index 1: <b>'d'</b> (Odd)
      <br>Index 2: 'v'
      <br>Index 3: <b>'e'</b> (Odd)
      <br>Index 4: 'n'
      <br>Index 5: <b>'t'</b> (Odd)
      <br>Index 6: 'u'
      <br>Index 7: <b>'r'</b> (Odd)
      <br>Index 8: 'e'
      </p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
Code
Output: ['o', 'e']</pre>
      <p><b>Explanation:</b> Characters at index 1 ('o') and index 3 ('e') are extracted.</p>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
A B C
Output: [' ', ' ']</pre>
      <p><b>Explanation:</b> The input string contains spaces. Index 1 is a space, Index 3 is a space.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "['d', 'e', 't', 'r']", "stdinput": "adventure" },
      { "id": 2, "input": [], "expected": "['o', 'e']", "stdinput": "Code" },
      { "id": 3, "input": [], "expected": "[' ', ' ']", "stdinput": "A B C" },
      { "id": 4, "input": [], "expected": "['y', 'h', 'n']", "stdinput": "Python" },
      { "id": 5, "input": [], "expected": "['2', '4', '6']", "stdinput": "123456" },
      { "id": 6, "input": [], "expected": "['o', 'l', '!']", "stdinput": "World!" },
      { "id": 7, "input": [], "expected": "['a']", "stdinput": "oa" },
      { "id": 8, "input": [], "expected": "[]", "stdinput": "z" },
      { "id": 9, "input": [], "expected": "['b', 'b', 'b']", "stdinput": "ababab" }
    ],
  
    "templates": {
      "python": "s = input()\n# Use slicing to get characters starting from index 1 with step 2\nresult = list(s[1::2])\nprint(result)",
      
      "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        \n        List<String> result = new ArrayList<>();\n        // Start at index 1, increment by 2\n        for (int i = 1; i < s.length(); i += 2) {\n            result.add(\"\" + s.charAt(i));\n        }\n        \n        // Manual formatting to match ['a', 'b'] style\n        System.out.print(\"[\");\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print(\"'\" + result.get(i) + \"'\");\n            if (i < result.size() - 1) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n    }\n}",
      
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Split string, filter by index\n    const result = line.split('').filter((char, index) => index % 2 !== 0);\n    \n    // Format output to match python style list ['a', 'b']\n    const formatted = result.map(char => `'${char}'`);\n    console.log(`[${formatted.join(', ')}]`);\n    readline.close();\n});",
      
      "c++": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    \n    vector<char> result;\n    // Start at 1, step 2\n    for (int i = 1; i < s.length(); i += 2) {\n        result.push_back(s[i]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "s = input()\n# Use slicing to get characters starting from index 1 with step 2\nresult = list(s[1::2])\nprint(result)",
      
      "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        \n        List<String> result = new ArrayList<>();\n        // Start at index 1, increment by 2\n        for (int i = 1; i < s.length(); i += 2) {\n            result.add(\"\" + s.charAt(i));\n        }\n        \n        // Manual formatting to match ['a', 'b'] style\n        System.out.print(\"[\");\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print(\"'\" + result.get(i) + \"'\");\n            if (i < result.size() - 1) System.out.print(\", \");\n        }\n        System.out.println(\"]\");\n    }\n}",
      
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Split string, filter by index\n    const result = line.split('').filter((char, index) => index % 2 !== 0);\n    \n    // Format output to match python style list ['a', 'b']\n    const formatted = result.map(char => `'${char}'`);\n    console.log(`[${formatted.join(', ')}]`);\n    readline.close();\n});",
      
      "c++": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    \n    vector<char> result;\n    // Start at 1, step 2\n    for (int i = 1; i < s.length(); i += 2) {\n        result.push_back(s[i]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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