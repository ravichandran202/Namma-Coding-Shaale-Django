module.exports = {
  "title": "Circular Rotation",
  "difficulty": "hard",
  "acceptance": "68%",

  "description": `
    <p>Rotate the list right by one position. The last element moves to the front, and all other elements shift one position to the right.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the list after performing a right rotation by one position</li>
      <li><b>Rotation Logic:</b> The last element becomes the first element, and all other elements shift one position to the right</li>
      <li><b>Circular Movement:</b> This creates a circular rotation where no elements are lost, just repositioned</li>
      <li><b>Single Element:</b> If the list has only one element, the rotation doesn't change the list</li>
      <li><b>Empty List:</b> If the list is empty, the result remains empty</li>
      <li><b>Element Preservation:</b> All original elements are preserved in the output, just in different positions</li>
    </ul>
    <p>This problem helps practice list slicing techniques and understanding circular data structures and rotation algorithms.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10 20 30 40 50
Output: ['50', '10', '20', '30', '40']</pre>
    <p><b>Explanation:</b> The last element <code>50</code> moves to the front, and all other elements shift right by one position.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: A B C
Output: ['C', 'A', 'B']</pre>
    <p><b>Explanation:</b> <code>C</code> moves to the front, <code>A</code> and <code>B</code> shift right by one position.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['50', '10', '20', '30', '40']", "stdinput": "10 20 30 40 50" },
    { "id": 2, "input": [], "expected": "['C', 'A', 'B']", "stdinput": "A B C" },
    { "id": 3, "input": [], "expected": "['Single']", "stdinput": "Single" },
    { "id": 4, "input": [], "expected": "['Second', 'First']", "stdinput": "First Second" },
    { "id": 5, "input": [], "expected": "[]", "stdinput": "" },
    { "id": 6, "input": [], "expected": "['6', '1', '2', '3', '4', '5']", "stdinput": "1 2 3 4 5 6" },
    { "id": 7, "input": [], "expected": "['Z', 'W', 'X', 'Y']", "stdinput": "W X Y Z" },
  ],

  "templates": {
    "python": "nums = input().split()\nif nums:\n    nums = nums[-1:] + nums[:-1]\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        \n        if (nums.length > 0 && !nums[0].isEmpty()) {\n            String last = nums[nums.length - 1];\n            for (int i = nums.length - 1; i > 0; i--) {\n                nums[i] = nums[i - 1];\n            }\n            nums[0] = last;\n        }\n        \n        System.out.println(Arrays.toString(nums));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    if (nums.length > 0) {\n        const last = nums.pop();\n        nums.unshift(last);\n    }\n    console.log(JSON.stringify(nums));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    if (!nums.empty()) {\n        string last = nums.back();\n        nums.pop_back();\n        nums.insert(nums.begin(), last);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << \"'\" << nums[i] << \"'\";\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "nums = input().split()\nif nums:\n    nums = nums[-1:] + nums[:-1]\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        \n        if (nums.length > 0 && !nums[0].isEmpty()) {\n            String last = nums[nums.length - 1];\n            for (int i = nums.length - 1; i > 0; i--) {\n                nums[i] = nums[i - 1];\n            }\n            nums[0] = last;\n        }\n        \n        System.out.println(Arrays.toString(nums));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    if (nums.length > 0) {\n        const last = nums.pop();\n        nums.unshift(last);\n    }\n    console.log(JSON.stringify(nums));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    if (!nums.empty()) {\n        string last = nums.back();\n        nums.pop_back();\n        nums.insert(nums.begin(), last);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << \"'\" << nums[i] << \"'\";\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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