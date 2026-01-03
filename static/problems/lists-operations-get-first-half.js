module.exports = {
  "title": "Split Class List",
  "difficulty": "easy",
  "acceptance": "85%",

  "description": `
    <p>You are given a list of student names. Your task is to print only the first half of the list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Even Lists:</b> When the list has an even number of students, take exactly the first half</li>
      <li><b>Odd Lists:</b> When the list has an odd number of students, ignore the middle student and take only the first half</li>
      <li><b>Half Calculation:</b> Use integer division to determine how many students are in the first half</li>
      <li><b>Output Format:</b> The result should be displayed as a list of student names</li>
      <li>For example, with <code>5</code> students, take the first <code>2</code> students and ignore the middle one</li>
      <li>With <code>4</code> students, take the first <code>2</code> students</li>
    </ul>
    <p>This problem helps practice list slicing and handling different list lengths while extracting specific portions of data.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Ravi Meena John Sita Ajay
Output: ['Ravi', 'Meena']</pre>
    <p><b>Explanation:</b> There are <code>5</code> students total. The first half (ignoring middle) contains <code>2</code> students: <code>Ravi</code> and <code>Meena</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Alice Bob Charlie David
Output: ['Alice', 'Bob']</pre>
    <p><b>Explanation:</b> With <code>4</code> students, the first half contains exactly <code>2</code> students: <code>Alice</code> and <code>Bob</code>.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: Tom Jerry
Output: ['Tom']</pre>
    <p><b>Explanation:</b> With <code>2</code> students, the first half contains <code>1</code> student: <code>Tom</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['Ravi', 'Meena']", "stdinput": "Ravi Meena John Sita Ajay" },
    { "id": 2, "input": [], "expected": "['Alice', 'Bob']", "stdinput": "Alice Bob Charlie David" },
    { "id": 3, "input": [], "expected": "['Tom']", "stdinput": "Tom Jerry" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'C']", "stdinput": "A B C D E F" },
    { "id": 5, "input": [], "expected": "['X']", "stdinput": "X Y" },
    { "id": 6, "input": [], "expected": "[]", "stdinput": "Single" },
    { "id": 7, "input": [], "expected": "['John', 'Paul']", "stdinput": "John Paul George Ringo" },
    { "id": 8, "input": [], "expected": "['Math', 'Science']", "stdinput": "Math Science English History Art" },
    { "id": 9, "input": [], "expected": "['One', 'Two', 'Three', 'Four']", "stdinput": "One Two Three Four Five Six Seven Eight" }
  ],

  "templates": {
    "python": "students = input().split()\nhalf = len(students) // 2\nprint(students[:half])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] students = scanner.nextLine().split(\" \");\n        int half = students.length / 2;\n        String[] result = Arrays.copyOfRange(students, 0, half);\n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const students = input.split(' ');\n    const half = Math.floor(students.length / 2);\n    const result = students.slice(0, half);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> students;\n    string name;\n    \n    while (ss >> name) {\n        students.push_back(name);\n    }\n    \n    int half = students.size() / 2;\n    cout << \"[\";\n    for (int i = 0; i < half; i++) {\n        cout << \"'\" << students[i] << \"'\";\n        if (i < half - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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