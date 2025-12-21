module.exports = {
  "title": "Swap and Reverse Halves",
  "difficulty": "hard",
  "acceptance": "62%",

  "description": `
    <p>Split a list into two halves, reverse both halves, and then join them together.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the list after splitting, reversing both halves, and joining them</li>
      <li><b>Even Length Lists:</b> For even-length lists, split exactly in half and reverse both halves</li>
      <li><b>Odd Length Lists:</b> For odd-length lists, the middle element becomes part of the second half before reversal</li>
    </ul>
    <p>This problem helps practice multiple list operations including splitting, reversing, and concatenating lists with complex transformations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A B C D E F
Output: ['C', 'B', 'A', 'F', 'E', 'D']</pre>
    <p><b>Explanation:</b> 
    <br>Split into <code>A B C</code> and <code>D E F</code>, 
    <br>reverse first half to <code>C B A</code>, 
    <br>reverse second half to <code>F E D</code>, 
    <br>then join.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1 2 3 4
Output: ['2', '1', '4', '3']</pre>
    <p><b>Explanation:</b> 
    <br>Split into <code>1 2</code> and <code>3 4</code>, 
    <br>reverse first half to <code>2 1</code>, 
    <br>reverse second half to <code>4 3</code>, 
    <br>then join.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: X Y Z
Output: ['X', 'Z', 'Y']</pre>
    <p><b>Explanation:</b> Split into <code>X</code> (first half) and <code>Y Z</code> (second half), reverse first half to <code>X</code>, reverse second half to <code>Z Y</code>, then join.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['C', 'B', 'A', 'F', 'E', 'D']", "stdinput": "A B C D E F" },
    { "id": 2, "input": [], "expected": "['2', '1', '4', '3']", "stdinput": "1 2 3 4" },
    { "id": 3, "input": [], "expected": "['X', 'Z', 'Y']", "stdinput": "X Y Z" },
    { "id": 4, "input": [], "expected": "['Q', 'P', 'T', 'S', 'R']", "stdinput": "P Q R S T" },
    { "id": 5, "input": [], "expected": "['B', 'A', 'D', 'C']", "stdinput": "A B C D" },
    { "id": 6, "input": [], "expected": "['D', 'C', 'B', 'A', 'H', 'G', 'F', 'E']", "stdinput": "A B C D E F G H" },
    { "id": 7, "input": [], "expected": "['M', 'L', 'K', 'P', 'O', 'N']", "stdinput": "K L M N O P" },
    { "id": 8, "input": [], "expected": "['second', 'first', 'fourth', 'third']", "stdinput": "first second third fourth" },
    { "id": 9, "input": [], "expected": "['1', '3', '2']", "stdinput": "1 2 3" }
  ],

  "templates": {
    "python": "items = input().split()\nhalf = len(items) // 2\nprint(items[:half][::-1] + items[half:][::-1])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\nimport java.util.Collections;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        int half = items.length / 2;\n        \n        String[] firstHalf = Arrays.copyOfRange(items, 0, half);\n        String[] secondHalf = Arrays.copyOfRange(items, half, items.length);\n        \n        ArrayList<String> firstList = new ArrayList<>(Arrays.asList(firstHalf));\n        ArrayList<String> secondList = new ArrayList<>(Arrays.asList(secondHalf));\n        \n        Collections.reverse(firstList);\n        Collections.reverse(secondList);\n        \n        firstList.addAll(secondList);\n        System.out.println(firstList);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const half = Math.floor(items.length / 2);\n    \n    const firstHalf = items.slice(0, half).reverse();\n    const secondHalf = items.slice(half).reverse();\n    const result = firstHalf.concat(secondHalf);\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    int half = items.size() / 2;\n    vector<string> firstHalf(items.begin(), items.begin() + half);\n    vector<string> secondHalf(items.begin() + half, items.end());\n    \n    reverse(firstHalf.begin(), firstHalf.end());\n    reverse(secondHalf.begin(), secondHalf.end());\n    \n    vector<string> result;\n    result.insert(result.end(), firstHalf.begin(), firstHalf.end());\n    result.insert(result.end(), secondHalf.begin(), secondHalf.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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