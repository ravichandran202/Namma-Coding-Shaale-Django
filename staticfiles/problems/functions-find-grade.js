module.exports = {
  "title": "Return Grade",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Create a function that takes marks as input and returns the corresponding grade.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer (marks between 0 and 100)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read marks from input</li>
      <li>Create a function called <code>get_grade</code> that takes one parameter</li>
      <li>The function should determine the grade based on marks:</li>
      <ul>
        <li>90 or above: return <code>"A"</code></li>
        <li>80 to 89: return <code>"B"</code></li>
        <li>70 to 79: return <code>"C"</code></li>
        <li>Below 70: return <code>"D"</code></li>
      </ul>
      <li>The function should return the grade</li>
      <li>Call the function with the input marks and print the returned value</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Marks range from 0 to 100</li>
      <li>Function must <b>return</b> the grade, not print it</li>
      <li>Function must be named exactly <code>get_grade</code></li>
      <li>Return exact strings: <code>"A"</code>, <code>"B"</code>, <code>"C"</code>, <code>"D"</code> (uppercase)</li>
      <li>Main code should call the function and print the result</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
85
Output:
B</pre>
    <p><b>Explanation:</b> 85 is between 80-89, so function returns "B"</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
95
Output:
A</pre>
    <p><b>Explanation:</b> 95 is 90 or above, so function returns "A"</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "B", 
      "stdinput": "85",
      "explanation": "Returns 'B' for marks 85" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "A", 
      "stdinput": "95",
      "explanation": "Returns 'A' for marks 95" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "C", 
      "stdinput": "75",
      "explanation": "Returns 'C' for marks 75" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "D", 
      "stdinput": "65",
      "explanation": "Returns 'D' for marks 65" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "A", 
      "stdinput": "100",
      "explanation": "Returns 'A' for marks 100" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "A", 
      "stdinput": "90",
      "explanation": "Returns 'A' for marks 90 (inclusive)" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "B", 
      "stdinput": "89",
      "explanation": "Returns 'B' for marks 89" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "B", 
      "stdinput": "80",
      "explanation": "Returns 'B' for marks 80 (inclusive)" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "C", 
      "stdinput": "70",
      "explanation": "Returns 'C' for marks 70 (inclusive)" 
    }
  ],

  "templates": {
    "python": "def get_grade(marks):\n    if marks >= 90:\n        return \"A\"\n    elif marks >= 80:\n        return \"B\"\n    elif marks >= 70:\n        return \"C\"\n    else:\n        return \"D\"\n\n# Main code\nscore = int(input())\nresult = get_grade(score)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static String get_grade(int marks) {\n        if (marks >= 90) {\n            return \"A\";\n        } else if (marks >= 80) {\n            return \"B\";\n        } else if (marks >= 70) {\n            return \"C\";\n        } else {\n            return \"D\";\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int score = scanner.nextInt();\n        String result = get_grade(score);\n        System.out.println(result);\n    }\n}",
    "javascript": "function get_grade(marks) {\n    if (marks >= 90) {\n        return \"A\";\n    } else if (marks >= 80) {\n        return \"B\";\n    } else if (marks >= 70) {\n        return \"C\";\n    } else {\n        return \"D\";\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const score = parseInt(input);\n    const result = get_grade(score);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nstring get_grade(int marks) {\n    if (marks >= 90) {\n        return \"A\";\n    } else if (marks >= 80) {\n        return \"B\";\n    } else if (marks >= 70) {\n        return \"C\";\n    } else {\n        return \"D\";\n    }\n}\n\nint main() {\n    int score;\n    cin >> score;\n    string result = get_grade(score);\n    cout << result << endl;\n    return 0;\n}"
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