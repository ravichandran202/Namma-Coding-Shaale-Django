module.exports = {
  "title": "Functions: Basic Grade Evaluation",
  "difficulty": "Easy",
  "acceptance": "85%",

  "description": `
    <p>You need to write a function that evaluates a student's numerical score and returns their corresponding letter grade.</p>
    <p><b>Grading Logic:</b></p>
    <ul>
      <li><b>90 and above:</b> 'A'</li>
      <li><b>80 to 89:</b> 'B'</li>
      <li><b>70 to 79:</b> 'C'</li>
      <li><b>60 to 69:</b> 'D'</li>
      <li><b>Below 60:</b> 'F'</li>
    </ul>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input:</b> A single integer representing the score.</li>
      <li><b>Logic:</b> Use conditional statements (if-else) to map the score to the correct character.</li>
      <li><b>Output Format:</b> The single character grade.</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
95
Output: A</pre>
    <p><b>Explanation:</b> The score 95 is greater than or equal to 90.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
82
Output: B</pre>
    <p><b>Explanation:</b> The score 82 falls between 80 and 89.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
55
Output: F</pre>
    <p><b>Explanation:</b> The score 55 is below 60.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A", "stdinput": "95" },
    { "id": 2, "input": [], "expected": "B", "stdinput": "82" },
    { "id": 3, "input": [], "expected": "C", "stdinput": "70" },
    { "id": 4, "input": [], "expected": "D", "stdinput": "69" },
    { "id": 5, "input": [], "expected": "F", "stdinput": "59" },
    { "id": 6, "input": [], "expected": "A", "stdinput": "100" },
    { "id": 7, "input": [], "expected": "F", "stdinput": "0" },
    { "id": 8, "input": [], "expected": "C", "stdinput": "79" },
    { "id": 9, "input": [], "expected": "B", "stdinput": "89" }
  ],

  "templates": {
    "python": "def get_grade(score):\n    # Write your logic here\n    if score >= 90: return 'A'\n    elif score >= 80: return 'B'\n    elif score >= 70: return 'C'\n    elif score >= 60: return 'D'\n    else: return 'F'\n\n# Do not change the code below\nscore = int(input())\nprint(get_grade(score))",
    
    "java": "import java.util.Scanner;\n\npublic class Main {\n    // Function to calculate grade\n    public static char getGrade(int score) {\n        if (score >= 90) return 'A';\n        else if (score >= 80) return 'B';\n        else if (score >= 70) return 'C';\n        else if (score >= 60) return 'D';\n        else return 'F';\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int score = scanner.nextInt();\n        System.out.println(getGrade(score));\n    }\n}",
    
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction getGrade(score) {\n    if (score >= 90) return 'A';\n    else if (score >= 80) return 'B';\n    else if (score >= 70) return 'C';\n    else if (score >= 60) return 'D';\n    else return 'F';\n}\n\nreadline.on('line', (line) => {\n    const score = parseInt(line);\n    console.log(getGrade(score));\n    readline.close();\n});",
    
    "c++": "#include <iostream>\nusing namespace std;\n\nchar getGrade(int score) {\n    if (score >= 90) return 'A';\n    else if (score >= 80) return 'B';\n    else if (score >= 70) return 'C';\n    else if (score >= 60) return 'D';\n    else return 'F';\n}\n\nint main() {\n    int score;\n    cin >> score;\n    cout << getGrade(score) << endl;\n    return 0;\n}"
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