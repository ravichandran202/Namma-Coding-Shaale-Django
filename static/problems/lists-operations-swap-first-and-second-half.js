module.exports = {
  "title": "Swap First and Second Half",
  "difficulty": "medium",
  "acceptance": "75%",

  "description": `
    <p>You have a list of items. Your task is to divide the list into two halves and swap their positions.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the list with the second half appearing first, followed by the first half</li>
      <li><b>Even Length Lists:</b> For even-length lists, exactly half the elements go to each side</li>
      <li><b>Odd Length Lists:</b> For odd-length lists, the middle element is considered with second half</li>
    </ul>
    <p>This problem helps practice list slicing, division operations, and understanding how to rearrange list segments.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A B C D E F
Output: ['D', 'E', 'F', 'A', 'B', 'C']</pre>
    <p><b>Explanation:</b> With <code>6</code> elements, the first half <code>A B C</code> and second half <code>D E F</code> are swapped.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: X Y Z
Output: ['Y', 'Z', 'X']</pre>
    <p><b>Explanation:</b> With <code>3</code> elements (odd length), the middle element <code>Y</code> is considered with second half. 
    <br>first half <code>X</code> and second half <code>Y Z</code> are swapped</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['D', 'E', 'F', 'A', 'B', 'C']", "stdinput": "A B C D E F" },
    { "id": 2, "input": [], "expected": "['Y', 'Z', 'X']", "stdinput": "X Y Z" },
    { "id": 3, "input": [], "expected": "['3', '4', '1', '2']", "stdinput": "1 2 3 4" },
    { "id": 4, "input": [], "expected": "['B', 'A']", "stdinput": "A B" },
    { "id": 5, "input": [], "expected": "['Single']", "stdinput": "Single" },
    { "id": 6, "input": [], "expected": "['E', 'F', 'G', 'H', 'A', 'B', 'C', 'D']", "stdinput": "A B C D E F G H" },
    { "id": 7, "input": [], "expected": "['4', '5', '6', '1', '2', '3']", "stdinput": "1 2 3 4 5 6" },
    { "id": 9, "input": [], "expected": "['last', 'first']", "stdinput": "first last" }
  ],

  "templates": {
    "python": "items = input().split()\n\n# TODO: Swap the first half and second half of the list and print the result\n",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        \n        // TODO: Swap the first half and second half of the list and print the result\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    \n    // TODO: Swap the first half and second half of the list and print the result\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    // TODO: Swap the first half and second half of the list and print the result\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "items = input().split()\nhalf = len(items) // 2\nprint(items[half:] + items[:half])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] items = scanner.nextLine().split(\" \");\n        int half = items.length / 2;\n        \n        String[] firstHalf = Arrays.copyOfRange(items, 0, half);\n        String[] secondHalf = Arrays.copyOfRange(items, half, items.length);\n        \n        String[] result = new String[secondHalf.length + firstHalf.length];\n        System.arraycopy(secondHalf, 0, result, 0, secondHalf.length);\n        System.arraycopy(firstHalf, 0, result, secondHalf.length, firstHalf.length);\n        \n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const items = input.split(' ').filter(item => item !== '');\n    const half = Math.floor(items.length / 2);\n    const result = items.slice(half).concat(items.slice(0, half));\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> items;\n    string item;\n    \n    stringstream ss(input);\n    while (ss >> item) {\n        items.push_back(item);\n    }\n    \n    int half = items.size() / 2;\n    vector<string> result;\n    \n    // Add second half\n    for (int i = half; i < items.size(); i++) {\n        result.push_back(items[i]);\n    }\n    \n    // Add first half\n    for (int i = 0; i < half; i++) {\n        result.push_back(items[i]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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