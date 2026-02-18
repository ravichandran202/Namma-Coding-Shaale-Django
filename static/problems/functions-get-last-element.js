module.exports = {
  "title": "Get Last Element",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Create a function that takes a list as input and returns its last element.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a list of integers from input</li>
      <li>Create a function called <code>get_last_element</code> that takes one parameter (a list)</li>
      <li>The function should return the last element of the list</li>
      <li>Call the function with the input list and print the returned value</li>
    </ol>

  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
1 2 3 4 5
Output:
5</pre>
    <p><b>Explanation:</b> Function returns the last element of list [1, 2, 3, 4, 5], which is 5</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10 20 30
Output:
30</pre>
    <p><b>Explanation:</b> Function returns the last element of list [10, 20, 30], which is 30</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "5", 
      "stdinput": "1 2 3 4 5",
      "explanation": "Returns last element: 5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "30", 
      "stdinput": "10 20 30",
      "explanation": "Returns last element: 30" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "7", 
      "stdinput": "7",
      "explanation": "Returns last element of single-element list: 7" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "100", 
      "stdinput": "10 20 30 40 50 60 70 80 90 100",
      "explanation": "Returns last element: 100" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "0", 
      "stdinput": "-5 -3 -1 0",
      "explanation": "Returns last element: 0" 
    }
  ],

  "templates": {
    "python": "def get_last_element(lst):\n    return lst[-1]\n\n# Main code\nnumbers = list(map(int, input().split()))\nresult = get_last_element(numbers)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int get_last_element(List<Integer> lst) {\n        return lst.get(lst.size() - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> numbers = new ArrayList<>();\n        for (String num : input) {\n            numbers.add(Integer.parseInt(num));\n        }\n        int result = get_last_element(numbers);\n        System.out.println(result);\n    }\n}",
    "javascript": "function get_last_element(lst) {\n    return lst[lst.length - 1];\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const numbers = input.split(' ').map(Number);\n    const result = get_last_element(numbers);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint get_last_element(vector<int> lst) {\n    return lst.back();\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> numbers;\n    int num;\n    while (ss >> num) {\n        numbers.push_back(num);\n    }\n    int result = get_last_element(numbers);\n    cout << result << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def get_last_element(lst):\n    return lst[-1]\n\n# Main code\nnumbers = list(map(int, input().split()))\nresult = get_last_element(numbers)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int get_last_element(List<Integer> lst) {\n        return lst.get(lst.size() - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> numbers = new ArrayList<>();\n        for (String num : input) {\n            numbers.add(Integer.parseInt(num));\n        }\n        int result = get_last_element(numbers);\n        System.out.println(result);\n    }\n}",
    "javascript": "function get_last_element(lst) {\n    return lst[lst.length - 1];\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const numbers = input.split(' ').map(Number);\n    const result = get_last_element(numbers);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint get_last_element(vector<int> lst) {\n    return lst.back();\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> numbers;\n    int num;\n    while (ss >> num) {\n        numbers.push_back(num);\n    }\n    int result = get_last_element(numbers);\n    cout << result << endl;\n    return 0;\n}"
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