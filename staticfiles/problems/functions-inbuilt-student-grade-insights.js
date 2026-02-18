module.exports = {
  "title": "Student Grade Analyzer",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create separate functions to analyze student grades: count subjects, calculate average, find highest and lowest grades.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing grades as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read student grades from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>get_count(grades)</code> - returns number of subjects using <code>len()</code></li>
        <li><code>get_average(grades)</code> - returns average grade using <code>sum()</code> and <code>len()</code></li>
        <li><code>get_highest(grades)</code> - returns highest grade using <code>max()</code></li>
        <li><code>get_lowest(grades)</code> - returns lowest grade using <code>min()</code></li>
      </ul>
      <li>Create a fifth function <code>analyze_grades(grades)</code> that calls all four functions and prints results</li>
      <li>In main code, call <code>analyze_grades()</code> with the input grades</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
85 92 78 65 88 90

Output:
Number of subjects: 6
Average: 83.0
Highest: 92
Lowest: 65</pre>
    <p><b>Explanation:</b> Count: 6, Average: (85+92+78+65+88+90)/6=83.0, Highest: 92, Lowest: 65</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
70 80 90

Output:
Number of subjects: 3
Average: 80.0
Highest: 90
Lowest: 70</pre>
    <p><b>Explanation:</b> Count: 3, Average: (70+80+90)/3=80.0, Highest: 90, Lowest: 70</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Number of subjects: 6\nAverage: 83.0\nHighest: 92\nLowest: 65", 
      "stdinput": "85 92 78 65 88 90",
      "explanation": "Count: 6, Average: 83.0, Highest: 92, Lowest: 65" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Number of subjects: 3\nAverage: 80.0\nHighest: 90\nLowest: 70", 
      "stdinput": "70 80 90",
      "explanation": "Count: 3, Average: 80.0, Highest: 90, Lowest: 70" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Number of subjects: 1\nAverage: 100.0\nHighest: 100\nLowest: 100", 
      "stdinput": "100",
      "explanation": "Single subject" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Number of subjects: 5\nAverage: 60.0\nHighest: 80\nLowest: 40", 
      "stdinput": "40 50 60 70 80",
      "explanation": "Count: 5, Average: 60.0, Highest: 80, Lowest: 40" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Number of subjects: 7\nAverage: 70.0\nHighest: 100\nLowest: 40", 
      "stdinput": "40 50 60 70 80 90 100",
      "explanation": "Count: 7, Average: 70.0, Highest: 100, Lowest: 40" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Number of subjects: 2\nAverage: 75.0\nHighest: 80\nLowest: 70", 
      "stdinput": "70 80",
      "explanation": "Count: 2, Average: 75.0, Highest: 80, Lowest: 70" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Number of subjects: 5\nAverage: 0.0\nHighest: 0\nLowest: 0", 
      "stdinput": "0 0 0 0 0",
      "explanation": "All zero grades" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Number of subjects: 4\nAverage: 52.5\nHighest: 70\nLowest: 35", 
      "stdinput": "35 45 60 70",
      "explanation": "Count: 4, Average: 52.5, Highest: 70, Lowest: 35" 
    }
  ],

  "templates": {
    "python": "def get_count(grades):\n    return len(grades)\n\ndef get_average(grades):\n    return sum(grades) / len(grades)\n\ndef get_highest(grades):\n    return max(grades)\n\ndef get_lowest(grades):\n    return min(grades)\n\ndef analyze_grades(grades):\n    count = get_count(grades)\n    average = get_average(grades)\n    highest = get_highest(grades)\n    lowest = get_lowest(grades)\n\n    print(\"Number of subjects:\", count)\n    print(\"Average:\", average)\n    print(\"Highest:\", highest)\n    print(\"Lowest:\", lowest)\n\n\n# Main code\ngrades = list(map(int, input().split()))\nanalyze_grades(grades)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int get_count(List<Integer> grades) {\n        return grades.size();\n    }\n    \n    public static double get_average(List<Integer> grades) {\n        int sum = 0;\n        for (int grade : grades) {\n            sum += grade;\n        }\n        return (double) sum / grades.size();\n    }\n    \n    public static int get_highest(List<Integer> grades) {\n        int max = grades.get(0);\n        for (int grade : grades) {\n            if (grade > max) {\n                max = grade;\n            }\n        }\n        return max;\n    }\n    \n    public static int get_lowest(List<Integer> grades) {\n        int min = grades.get(0);\n        for (int grade : grades) {\n            if (grade < min) {\n                min = grade;\n            }\n        }\n        return min;\n    }\n    \n    public static void analyze_grades(List<Integer> grades) {\n        int count = get_count(grades);\n        double average = get_average(grades);\n        int highest = get_highest(grades);\n        int lowest = get_lowest(grades);\n        \n        System.out.println(\"Number of subjects: \" + count);\n        System.out.println(\"Average: \" + average);\n        System.out.println(\"Highest: \" + highest);\n        System.out.println(\"Lowest: \" + lowest);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> grades = new ArrayList<>();\n        for (String grade : input) {\n            grades.add(Integer.parseInt(grade));\n        }\n        analyze_grades(grades);\n    }\n}",
    "javascript": "function get_count(grades) {\n    return grades.length;\n}\n\nfunction get_average(grades) {\n    const sum = grades.reduce((a, b) => a + b, 0);\n    return sum / grades.length;\n}\n\nfunction get_highest(grades) {\n    return Math.max(...grades);\n}\n\nfunction get_lowest(grades) {\n    return Math.min(...grades);\n}\n\nfunction analyze_grades(grades) {\n    const count = get_count(grades);\n    const average = get_average(grades);\n    const highest = get_highest(grades);\n    const lowest = get_lowest(grades);\n    \n    console.log(\"Number of subjects: \" + count);\n    console.log(\"Average: \" + average);\n    console.log(\"Highest: \" + highest);\n    console.log(\"Lowest: \" + lowest);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const grades = input.split(' ').map(Number);\n    analyze_grades(grades);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint get_count(vector<int> grades) {\n    return grades.size();\n}\n\ndouble get_average(vector<int> grades) {\n    int sum = 0;\n    for (int grade : grades) {\n        sum += grade;\n    }\n    return (double) sum / grades.size();\n}\n\nint get_highest(vector<int> grades) {\n    int max_val = INT_MIN;\n    for (int grade : grades) {\n        if (grade > max_val) {\n            max_val = grade;\n        }\n    }\n    return max_val;\n}\n\nint get_lowest(vector<int> grades) {\n    int min_val = INT_MAX;\n    for (int grade : grades) {\n        if (grade < min_val) {\n            min_val = grade;\n        }\n    }\n    return min_val;\n}\n\nvoid analyze_grades(vector<int> grades) {\n    int count = get_count(grades);\n    double average = get_average(grades);\n    int highest = get_highest(grades);\n    int lowest = get_lowest(grades);\n    \n    cout << \"Number of subjects: \" << count << endl;\n    cout << \"Average: \" << average << endl;\n    cout << \"Highest: \" << highest << endl;\n    cout << \"Lowest: \" << lowest << endl;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> grades;\n    int grade;\n    while (ss >> grade) {\n        grades.push_back(grade);\n    }\n    analyze_grades(grades);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def get_count(grades):\n    return len(grades)\n\ndef get_average(grades):\n    return sum(grades) / len(grades)\n\ndef get_highest(grades):\n    return max(grades)\n\ndef get_lowest(grades):\n    return min(grades)\n\ndef analyze_grades(grades):\n    count = get_count(grades)\n    average = get_average(grades)\n    highest = get_highest(grades)\n    lowest = get_lowest(grades)\n\n    print(\"Number of subjects:\", count)\n    print(\"Average:\", average)\n    print(\"Highest:\", highest)\n    print(\"Lowest:\", lowest)\n\n\n# Main code\ngrades = list(map(int, input().split()))\nanalyze_grades(grades)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int get_count(List<Integer> grades) {\n        return grades.size();\n    }\n    \n    public static double get_average(List<Integer> grades) {\n        int sum = 0;\n        for (int grade : grades) {\n            sum += grade;\n        }\n        return (double) sum / grades.size();\n    }\n    \n    public static int get_highest(List<Integer> grades) {\n        int max = grades.get(0);\n        for (int grade : grades) {\n            if (grade > max) {\n                max = grade;\n            }\n        }\n        return max;\n    }\n    \n    public static int get_lowest(List<Integer> grades) {\n        int min = grades.get(0);\n        for (int grade : grades) {\n            if (grade < min) {\n                min = grade;\n            }\n        }\n        return min;\n    }\n    \n    public static void analyze_grades(List<Integer> grades) {\n        int count = get_count(grades);\n        double average = get_average(grades);\n        int highest = get_highest(grades);\n        int lowest = get_lowest(grades);\n        \n        System.out.println(\"Number of subjects: \" + count);\n        System.out.println(\"Average: \" + average);\n        System.out.println(\"Highest: \" + highest);\n        System.out.println(\"Lowest: \" + lowest);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> grades = new ArrayList<>();\n        for (String grade : input) {\n            grades.add(Integer.parseInt(grade));\n        }\n        analyze_grades(grades);\n    }\n}",
    "javascript": "function get_count(grades) {\n    return grades.length;\n}\n\nfunction get_average(grades) {\n    const sum = grades.reduce((a, b) => a + b, 0);\n    return sum / grades.length;\n}\n\nfunction get_highest(grades) {\n    return Math.max(...grades);\n}\n\nfunction get_lowest(grades) {\n    return Math.min(...grades);\n}\n\nfunction analyze_grades(grades) {\n    const count = get_count(grades);\n    const average = get_average(grades);\n    const highest = get_highest(grades);\n    const lowest = get_lowest(grades);\n    \n    console.log(\"Number of subjects: \" + count);\n    console.log(\"Average: \" + average);\n    console.log(\"Highest: \" + highest);\n    console.log(\"Lowest: \" + lowest);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const grades = input.split(' ').map(Number);\n    analyze_grades(grades);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint get_count(vector<int> grades) {\n    return grades.size();\n}\n\ndouble get_average(vector<int> grades) {\n    int sum = 0;\n    for (int grade : grades) {\n        sum += grade;\n    }\n    return (double) sum / grades.size();\n}\n\nint get_highest(vector<int> grades) {\n    int max_val = INT_MIN;\n    for (int grade : grades) {\n        if (grade > max_val) {\n            max_val = grade;\n        }\n    }\n    return max_val;\n}\n\nint get_lowest(vector<int> grades) {\n    int min_val = INT_MAX;\n    for (int grade : grades) {\n        if (grade < min_val) {\n            min_val = grade;\n        }\n    }\n    return min_val;\n}\n\nvoid analyze_grades(vector<int> grades) {\n    int count = get_count(grades);\n    double average = get_average(grades);\n    int highest = get_highest(grades);\n    int lowest = get_lowest(grades);\n    \n    cout << \"Number of subjects: \" << count << endl;\n    cout << \"Average: \" << average << endl;\n    cout << \"Highest: \" << highest << endl;\n    cout << \"Lowest: \" << lowest << endl;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> grades;\n    int grade;\n    while (ss >> grade) {\n        grades.push_back(grade);\n    }\n    analyze_grades(grades);\n    return 0;\n}"
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