module.exports = {
  "title": "Alternate Word Picker",
  "difficulty": "beginner",
  "acceptance": "87%",

  "description": `
    <p>Read a list of words from a sentence and print every alternate word starting from the first word.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The user provides a sentence with multiple space-separated words</li>
      <li><b>Output Format:</b> Display every other word as a list, starting from the first word</li>
    </ul>
    <p>This problem helps practice list slicing with step parameters and understanding how to extract specific patterns from sequences.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: I love learning Python every day
Output: ['I', 'learning', 'every']</pre>
    <p><b>Explanation:</b> From the words <code>I, love, learning, Python, every, day</code>, we select every other word starting from 
    <br>first: <code>I</code> (keep), 
    <br><code>love</code> (skip), 
    <br><code>learning</code> (keep), 
    <br><code>Python</code> (skip), 
    <br><code>every</code> (keep), 
    <br><code>day</code> (skip).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: The quick brown fox jumps
Output: ['The', 'brown', 'jumps']</pre>
    <p><b>Explanation:</b> We select <code>The</code> (keep), <code>quick</code> (skip), <code>brown</code> (keep), <code>fox</code> (skip), <code>jumps</code> (keep).</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: Hello World
Output: ['Hello']</pre>
    <p><b>Explanation:</b> With only two words, we take the first word and skip the second.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['I', 'learning', 'every']", "stdinput": "I love learning Python every day" },
    { "id": 2, "input": [], "expected": "['The', 'brown', 'jumps']", "stdinput": "The quick brown fox jumps" },
    { "id": 3, "input": [], "expected": "['Hello']", "stdinput": "Hello World" },
    { "id": 4, "input": [], "expected": "['A', 'C', 'E']", "stdinput": "A B C D E" },
    { "id": 5, "input": [], "expected": "['One', 'Three', 'Five']", "stdinput": "One Two Three Four Five" },
    { "id": 6, "input": [], "expected": "['First']", "stdinput": "First Second" },
  ],

  "templates": {
    "python": "words = input().split()\nprint(words[::2])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] words = scanner.nextLine().split(\" \");\n        ArrayList<String> result = new ArrayList<>();\n        \n        for (int i = 0; i < words.length; i += 2) {\n            result.add(words[i]);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ');\n    const result = words.filter((word, index) => index % 2 === 0);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> words;\n    string word;\n    \n    while (ss >> word) {\n        words.push_back(word);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < words.size(); i += 2) {\n        cout << \"'\" << words[i] << \"'\";\n        if (i + 2 < words.size()) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "words = input().split()\nprint(words[::2])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] words = scanner.nextLine().split(\" \");\n        ArrayList<String> result = new ArrayList<>();\n        \n        for (int i = 0; i < words.length; i += 2) {\n            result.add(words[i]);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ');\n    const result = words.filter((word, index) => index % 2 === 0);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> words;\n    string word;\n    \n    while (ss >> word) {\n        words.push_back(word);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < words.size(); i += 2) {\n        cout << \"'\" << words[i] << \"'\";\n        if (i + 2 < words.size()) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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