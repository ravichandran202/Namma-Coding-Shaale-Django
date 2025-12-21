module.exports = module.exports = {
  "title": "Unique Phone Numbers",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>You are given a list of phone numbers. Print all the <b>distinct phone numbers</b> in <b>sorted order</b>.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of phone numbers</li>
      <li>Next, you receive <code>n</code> phone numbers</li>
      <li>Print all the <b>different phone numbers</b>, each appearing only once</li>
      <li>The output should be in <b>sorted order</b> (numerical/lexicographical)</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>If a phone number appears <b>multiple times</b> in input, it appears <b>only once</b> in output</li>
      <li>Phone numbers are treated as <b>strings</b>, not numbers</li>
      <li>Sorting is <b>lexicographical</b> (like dictionary order for strings)</li>
      <li>Output format: a sorted list of unique phone numbers</li>
    </ul>
    <p>This is like creating a clean contact list without duplicates, sorted for easy lookup.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
9876543210 1234567890 9876543210 5555555555 1234567890
Output:
['1234567890', '5555555555', '9876543210']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Input has 5 numbers with duplicates</li>
      <li>Unique numbers: <code>9876543210</code>, <code>1234567890</code>, <code>5555555555</code></li>
      <li>Sorted: <code>1234567890</code>, <code>5555555555</code>, <code>9876543210</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
1111111111 2222222222 1111111111 3333333333
Output:
['1111111111', '2222222222', '3333333333']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Input has 4 numbers with <code>1111111111</code> appearing twice</li>
      <li>Unique numbers: <code>1111111111</code>, <code>2222222222</code>, <code>3333333333</code></li>
      <li>Already in sorted order</li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['1234567890', '5555555555', '9876543210']", "stdinput": "5\n9876543210 1234567890 9876543210 5555555555 1234567890" },
    { "id": 2, "input": [], "expected": "['1111111111', '2222222222', '3333333333']", "stdinput": "4\n1111111111 2222222222 1111111111 3333333333" },
    { "id": 3, "input": [], "expected": "['0000000000', '1111111111', '9999999999']", "stdinput": "6\n9999999999 1111111111 0000000000 1111111111 9999999999 0000000000" },
    { "id": 4, "input": [], "expected": "['123', '456', '789']", "stdinput": "5\n123 456 789 123 456" },
    { "id": 5, "input": [], "expected": "['0123456789', '9876543210']", "stdinput": "3\n9876543210 0123456789 9876543210" },
    { "id": 6, "input": [], "expected": "['555-1234', '555-5678', '555-9012']", "stdinput": "5\n555-1234 555-5678 555-1234 555-9012 555-5678" },
    { "id": 7, "input": [], "expected": "['0', '00', '000', '0000']", "stdinput": "6\n000 00 0 0000 00 000" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = input().split()\nunique_sorted = sorted(set(nums))\nprint(unique_sorted)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] numbers = scanner.nextLine().split(\" \");\n        Set<String> uniqueNumbers = new TreeSet<>();\n        \n        for (String num : numbers) {\n            uniqueNumbers.add(num);\n        }\n        \n        System.out.println(uniqueNumbers);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const numbers = lines[1].split(' ');\n        const uniqueNumbers = [...new Set(numbers)].sort();\n        \n        console.log(JSON.stringify(uniqueNumbers));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<string> numbers(n);\n    for (int i = 0; i < n; i++) {\n        cin >> numbers[i];\n    }\n    \n    set<string> uniqueNumbers;\n    for (const string& num : numbers) {\n        uniqueNumbers.insert(num);\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& num : uniqueNumbers) {\n        if (!first) cout << \", \";\n        cout << \"'\" << num << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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