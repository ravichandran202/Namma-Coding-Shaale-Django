module.exports = {
  "title": "Extract Middle Values",
  "difficulty": "medium",
  "acceptance": "65%",

  "description": `
    <p>Given a list of elements, extract and print the three middle elements from the list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display exactly three elements that form the middle of the list</li>
      <li><b>Length Lists:</b> List always will be odd length, and length will be greater or equals to three</li>      
    </ul>
    <p>This problem helps practice advanced list slicing, mathematical indexing, and handling different list length scenarios.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10 20 30 40 50 60 70
Output: ['30', '40', '50']</pre>
    <p><b>Explanation:</b> With <code>7</code> elements, the middle is at index <code>3</code> (value <code>40</code>), so we take one before (<code>30</code>) and one after (<code>50</code>).</p>
    
    <h3>Example 4</h3>
    <pre class="constraints">Input: X Y Z
Output: ['X', 'Y', 'Z']</pre>
    <p><b>Explanation:</b> With exactly <code>3</code> elements, we take all three as they form the complete middle.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['30', '40', '50']", "stdinput": "10 20 30 40 50 60 70" },
    { "id": 2, "input": [], "expected": "['X', 'Y', 'Z']", "stdinput": "X Y Z" },
    { "id": 3, "input": [], "expected": "['B', 'C', 'D']", "stdinput": "A B C D E" },
    { "id": 4, "input": [], "expected": "['2', '3', '4']", "stdinput": "1 2 3 4 5" },
    { "id": 5, "input": [], "expected": "['3', '4', '5']", "stdinput": "1 2 3 4 5 6 7" },
  ],

  "templates": {
    "python": "nums = input().split()\nmid = len(nums) // 2\nprint(nums[mid-1:mid+2])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        int mid = nums.length / 2;\n        \n        String[] result;\n        if (nums.length >= 3) {\n            result = Arrays.copyOfRange(nums, mid - 1, mid + 2);\n        } else {\n            result = new String[0];\n        }\n        \n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    const mid = Math.floor(nums.length / 2);\n    let result = [];\n    \n    if (nums.length >= 3) {\n        result = nums.slice(mid - 1, mid + 2);\n    }\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    vector<string> result;\n    if (nums.size() >= 3) {\n        int mid = nums.size() / 2;\n        result.push_back(nums[mid - 1]);\n        result.push_back(nums[mid]);\n        result.push_back(nums[mid + 1]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "nums = input().split()\nmid = len(nums) // 2\nprint(nums[mid-1:mid+2])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        int mid = nums.length / 2;\n        \n        String[] result;\n        if (nums.length >= 3) {\n            result = Arrays.copyOfRange(nums, mid - 1, mid + 2);\n        } else {\n            result = new String[0];\n        }\n        \n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    const mid = Math.floor(nums.length / 2);\n    let result = [];\n    \n    if (nums.length >= 3) {\n        result = nums.slice(mid - 1, mid + 2);\n    }\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    vector<string> result;\n    if (nums.size() >= 3) {\n        int mid = nums.size() / 2;\n        result.push_back(nums[mid - 1]);\n        result.push_back(nums[mid]);\n        result.push_back(nums[mid + 1]);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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