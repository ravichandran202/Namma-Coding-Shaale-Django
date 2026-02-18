module.exports = {
  "title": "Unique Words Count – Distinct Elements",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>You are given a sentence. Count how many <b>different words</b> are in the sentence.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>You receive one line of input containing a sentence</li>
      <li>The sentence contains words separated by spaces</li>
      <li>Count how many <b>distinct</b> (different) words are in the sentence</li>
      <li>Print the count as a single number</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Words are <b>case-sensitive</b>: "Hello" and "hello" are different words</li>
      <li>Punctuation is part of the word: "hello." and "hello" are different</li>
      <li>If the same word appears multiple times, it's counted only once</li>
      <li>Empty input (no words) should return <code>0</code></li>
      <li>The output is just a number - no additional text</li>
    </ul>
    <p>This is like analyzing vocabulary richness - how many different words are used in a text.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello world hello everyone
Output:
3</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Words: <code>hello</code>, <code>world</code>, <code>hello</code>, <code>everyone</code></li>
      <li>Distinct words: <code>hello</code>, <code>world</code>, <code>everyone</code></li>
      <li>Count: <code>3</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
apple apple apple apple
Output:
1</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All words are the same: <code>apple</code></li>
      <li>Only one distinct word</li>
      <li>Count: <code>1</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "hello world hello everyone" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "apple apple apple apple" },
    { "id": 3, "input": [], "expected": "5", "stdinput": "the quick brown fox jumps" },
    { "id": 4, "input": [], "expected": "4", "stdinput": "cat dog cat bird dog fish" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "" },
    { "id": 6, "input": [], "expected": "6", "stdinput": "one two three four five six" },
    { "id": 7, "input": [], "expected": "3", "stdinput": "Hello hello HELLO" },
    { "id": 8, "input": [], "expected": "4", "stdinput": "python is great python is awesome" },
    { "id": 9, "input": [], "expected": "5", "stdinput": "a a a b b c c d e e" }
  ],

  "templates": {
    "python": "words = input().split()\nprint(len(set(words)))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String line = scanner.nextLine();\n        \n        if (line.trim().isEmpty()) {\n            System.out.println(0);\n            return;\n        }\n        \n        String[] words = line.split(\" \");\n        Set<String> uniqueWords = new HashSet<>();\n        \n        for (String word : words) {\n            uniqueWords.add(word);\n        }\n        \n        System.out.println(uniqueWords.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ').filter(word => word.length > 0);\n    const uniqueWords = new Set(words);\n    console.log(uniqueWords.size);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    \n    if (line.empty()) {\n        cout << 0 << endl;\n        return 0;\n    }\n    \n    unordered_set<string> uniqueWords;\n    stringstream ss(line);\n    string word;\n    \n    while (ss >> word) {\n        uniqueWords.insert(word);\n    }\n    \n    cout << uniqueWords.size() << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "words = input().split()\nprint(len(set(words)))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String line = scanner.nextLine();\n        \n        if (line.trim().isEmpty()) {\n            System.out.println(0);\n            return;\n        }\n        \n        String[] words = line.split(\" \");\n        Set<String> uniqueWords = new HashSet<>();\n        \n        for (String word : words) {\n            uniqueWords.add(word);\n        }\n        \n        System.out.println(uniqueWords.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ').filter(word => word.length > 0);\n    const uniqueWords = new Set(words);\n    console.log(uniqueWords.size);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    \n    if (line.empty()) {\n        cout << 0 << endl;\n        return 0;\n    }\n    \n    unordered_set<string> uniqueWords;\n    stringstream ss(line);\n    string word;\n    \n    while (ss >> word) {\n        uniqueWords.insert(word);\n    }\n    \n    cout << uniqueWords.size() << endl;\n    \n    return 0;\n}"
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