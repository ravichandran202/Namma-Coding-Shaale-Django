module.exports = {
  "title": "Student Grade Evaluation System",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create two functions: one to calculate the average of three subject marks, and another to determine the grade based on the average.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing three integers separated by spaces (marks for three subjects)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read three integers (marks) from input</li>
      <li>Create two separate functions:</li>
      <ul>
        <li><code>calculate_average(mark1, mark2, mark3)</code> - returns average of three marks</li>
        <li><code>determine_grade(average)</code> - returns grade based on average:
          <ul>
            <li>A: average ≥ 90</li>
            <li>B: average ≥ 80 and < 90</li>
            <li>C: average ≥ 70 and < 80</li>
            <li>D: average ≥ 60 and < 70</li>
            <li>F: average < 60</li>
          </ul>
        </li>
      </ul>
      <li>Call the first function to calculate average, then call the second function to determine grade</li>
      <li>Print the average (formatted to 2 decimal places) and the grade</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
85 90 78
Output:
Average Marks: 84.33
Grade: B</pre>
    <p><b>Explanation:</b> Average = (85+90+78)/3 = 84.33, Grade B (80 ≤ 84.33 < 90)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
95 92 98
Output:
Average Marks: 95.00
Grade: A</pre>
    <p><b>Explanation:</b> Average = (95+92+98)/3 = 95.00, Grade A (95 ≥ 90)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Average Marks: 84.33\nGrade: B", 
      "stdinput": "85 90 78",
      "explanation": "Average: 84.33, Grade: B" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Average Marks: 95.00\nGrade: A", 
      "stdinput": "95 92 98",
      "explanation": "Average: 95.00, Grade: A" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Average Marks: 65.33\nGrade: D", 
      "stdinput": "60 70 66",
      "explanation": "Average: 65.33, Grade: D (≥60)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Average Marks: 75.67\nGrade: C", 
      "stdinput": "70 80 77",
      "explanation": "Average: 75.67, Grade: C (≥70)" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Average Marks: 59.33\nGrade: F", 
      "stdinput": "55 60 63",
      "explanation": "Average: 59.33, Grade: F (<60)" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Average Marks: 80.00\nGrade: B", 
      "stdinput": "80 80 80",
      "explanation": "Average: 80.00, Grade: B (exactly 80)" 
    }
  ],

  "templates": {
    "python": "def calculate_average(mark1, mark2, mark3):\n    return (mark1 + mark2 + mark3) / 3\n\ndef determine_grade(average):\n    if average >= 90:\n        return \"A\"\n    elif average >= 80:\n        return \"B\"\n    elif average >= 70:\n        return \"C\"\n    elif average >= 60:\n        return \"D\"\n    else:\n        return \"F\"\n\n# Main code\nm1, m2, m3 = map(int, input().split())\naverage_marks = calculate_average(m1, m2, m3)\ngrade = determine_grade(average_marks)\nprint(f\"Average Marks: {average_marks:.2f}\")\nprint(f\"Grade: {grade}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static double calculate_average(int mark1, int mark2, int mark3) {\n        return (mark1 + mark2 + mark3) / 3.0;\n    }\n    \n    public static String determine_grade(double average) {\n        if (average >= 90) {\n            return \"A\";\n        } else if (average >= 80) {\n            return \"B\";\n        } else if (average >= 70) {\n            return \"C\";\n        } else if (average >= 60) {\n            return \"D\";\n        } else {\n            return \"F\";\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int m1 = scanner.nextInt();\n        int m2 = scanner.nextInt();\n        int m3 = scanner.nextInt();\n        \n        double average_marks = calculate_average(m1, m2, m3);\n        String grade = determine_grade(average_marks);\n        \n        System.out.printf(\"Average Marks: %.2f%n\", average_marks);\n        System.out.println(\"Grade: \" + grade);\n    }\n}",
    "javascript": "function calculate_average(mark1, mark2, mark3) {\n    return (mark1 + mark2 + mark3) / 3;\n}\n\nfunction determine_grade(average) {\n    if (average >= 90) {\n        return \"A\";\n    } else if (average >= 80) {\n        return \"B\";\n    } else if (average >= 70) {\n        return \"C\";\n    } else if (average >= 60) {\n        return \"D\";\n    } else {\n        return \"F\";\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [m1, m2, m3] = input.split(' ').map(Number);\n    const average_marks = calculate_average(m1, m2, m3);\n    const grade = determine_grade(average_marks);\n    \n    console.log(`Average Marks: ${average_marks.toFixed(2)}`);\n    console.log(`Grade: ${grade}`);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\ndouble calculate_average(int mark1, int mark2, int mark3) {\n    return (mark1 + mark2 + mark3) / 3.0;\n}\n\nstring determine_grade(double average) {\n    if (average >= 90) {\n        return \"A\";\n    } else if (average >= 80) {\n        return \"B\";\n    } else if (average >= 70) {\n        return \"C\";\n    } else if (average >= 60) {\n        return \"D\";\n    } else {\n        return \"F\";\n    }\n}\n\nint main() {\n    int m1, m2, m3;\n    cin >> m1 >> m2 >> m3;\n    \n    double average_marks = calculate_average(m1, m2, m3);\n    string grade = determine_grade(average_marks);\n    \n    cout << fixed << setprecision(2);\n    cout << \"Average Marks: \" << average_marks << endl;\n    cout << \"Grade: \" << grade << endl;\n    \n    return 0;\n}"
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