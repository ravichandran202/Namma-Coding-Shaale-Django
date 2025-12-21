module.exports = {
  "title": "Reverse First Half",
  "difficulty": "hard",
  "acceptance": "58%",

  "description": `
    <p>Reverse only the first half of a list while keeping the second half unchanged.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The input contains items as space-separated values</li>
      <li><b>Output Format:</b> Display the list with the first half reversed and second half unchanged</li>
      <li><b>Even Length Lists:</b> Input always be even-length lists, exactly half the elements are reversed</li>
    </ul>
    <p>This problem helps practice selective list manipulation and understanding how to apply different operations to different list segments.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10 20 30 40 50 60
Output: ['30', '20', '10', '40', '50', '60']</pre>
    <p><b>Explanation:</b> The first half <code>10 20 30</code> is reversed to <code>30 20 10</code>, while the second half <code>40 50 60</code> remains unchanged.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: A B C D
Output: ['B', 'A', 'C', 'D']</pre>
    <p><b>Explanation:</b> First half <code>A B</code> becomes <code>B A</code>, second half <code>C D</code> stays the same.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['30', '20', '10', '40', '50', '60']", "stdinput": "10 20 30 40 50 60" },
    { "id": 2, "input": [], "expected": "['B', 'A', 'C', 'D']", "stdinput": "A B C D" },
    { "id": 4, "input": [], "expected": "['X', 'Y']", "stdinput": "X Y" },
    { "id": 5, "input": [], "expected": "['D', 'C', 'B', 'A', 'E', 'F', 'G', 'H']", "stdinput": "A B C D E F G H" },
    { "id": 7, "input": [], "expected": "['second', 'first', 'third', 'fourth']", "stdinput": "first second third fourth" },
    { "id": 8, "input": [], "expected": "['Y', 'X', 'Z', 'W']", "stdinput": "X Y Z W" },
  ],

  "templates": {
    "python": "nums = input().split()\nhalf = len(nums) // 2\nprint(nums[:half][::-1] + nums[half:])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] nums = scanner.nextLine().split(\" \");\n        int half = nums.length / 2;\n        \n        ArrayList<String> firstHalf = new ArrayList<>(Arrays.asList(nums).subList(0, half));\n        ArrayList<String> secondHalf = new ArrayList<>(Arrays.asList(nums).subList(half, nums.length));\n        \n        Collections.reverse(firstHalf);\n        firstHalf.addAll(secondHalf);\n        \n        System.out.println(firstHalf);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const nums = input.split(' ').filter(item => item !== '');\n    const half = Math.floor(nums.length / 2);\n    \n    const firstHalf = nums.slice(0, half).reverse();\n    const secondHalf = nums.slice(half);\n    const result = firstHalf.concat(secondHalf);\n    \n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    vector<string> nums;\n    string num;\n    \n    stringstream ss(input);\n    while (ss >> num) {\n        nums.push_back(num);\n    }\n    \n    int half = nums.size() / 2;\n    vector<string> firstHalf(nums.begin(), nums.begin() + half);\n    vector<string> secondHalf(nums.begin() + half, nums.end());\n    \n    reverse(firstHalf.begin(), firstHalf.end());\n    \n    vector<string> result;\n    result.insert(result.end(), firstHalf.begin(), firstHalf.end());\n    result.insert(result.end(), secondHalf.begin(), secondHalf.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << \"'\" << result[i] << \"'\";\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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