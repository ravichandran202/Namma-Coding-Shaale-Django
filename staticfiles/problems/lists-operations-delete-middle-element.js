module.exports = {
  "title": "Delete Middle Element",
  "difficulty": "medium",
  "acceptance": "60%",

  "description": `
    <p>Remove the middle element from a list and print the updated list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the list after removing the middle element</li>
      <li><b>Odd Length Lists:</b> Input always be odd-length lists, remove the exact middle element</li>
    </ul>
    <p>This problem helps practice list manipulation, index calculation, and element removal while maintaining list integrity.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1 2 3 4 5
Output: ['1', '2', '4', '5']</pre>
    <p><b>Explanation:</b> With <code>5</code> elements, the middle is at index <code>2</code> (value <code>3</code>), which is removed from the list.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: Single
Output: []</pre>
    <p><b>Explanation:</b> With only one element, removing the middle leaves an empty list.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['1', '2', '4', '5']", "stdinput": "1 2 3 4 5" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "Single" },
    { "id": 3, "input": [], "expected": "['X', 'Z']", "stdinput": "X Y Z" },
    { "id": 4, "input": [], "expected": "['10', '30']", "stdinput": "10 20 30" },
    { "id": 5, "input": [], "expected": "['A', 'B', 'D', 'E']", "stdinput": "A B C D E" },
    { "id": 6, "input": [], "expected": "['start', 'end']", "stdinput": "start middle end" }
  ],

  "templates": {
    "python": "nums = input().split()\nif nums:\n    mid = len(nums) // 2\n    del nums[mid]\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        \n        ArrayList<String> list = new ArrayList<>(Arrays.asList(nums));\n        if (!list.isEmpty()) {\n            int mid = list.size() / 2;\n            list.remove(mid);\n        }\n        \n        System.out.println(list);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    if (nums.length > 0) {\n        const mid = Math.floor(nums.length / 2);\n        nums.splice(mid, 1);\n    }\n    console.log(JSON.stringify(nums));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    if (!nums.empty()) {\n        int mid = nums.size() / 2;\n        nums.erase(nums.begin() + mid);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << \"'\" << nums[i] << \"'\";\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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