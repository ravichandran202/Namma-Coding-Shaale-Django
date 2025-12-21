module.exports = {
  "title": "Temperature Range Checker",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Create functions to find the lowest and highest temperature using <code>min()</code> and <code>max()</code>, then print the temperature range.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing temperatures as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read temperatures from input</li>
      <li>Create two separate functions:</li>
      <ul>
        <li><code>find_lowest(temps)</code> - returns lowest temperature using <code>min()</code></li>
        <li><code>find_highest(temps)</code> - returns highest temperature using <code>max()</code></li>
      </ul>
      <li>Create a third function <code>check_temperature_range(temps)</code> that calls the other two functions and prints the range</li>
      <li>In main code, call <code>check_temperature_range()</code> with the input temperatures</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
18 22 25 19 24
Output:
Temperature range: 18°C to 25°C</pre>
    <p><b>Explanation:</b> Lowest: 18, Highest: 25 → Range: 18°C to 25°C</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
30 30 30
Output:
Temperature range: 30°C to 30°C</pre>
    <p><b>Explanation:</b> All same temperature → Range: 30°C to 30°C</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Temperature range: 18°C to 25°C", 
      "stdinput": "18 22 25 19 24",
      "explanation": "Lowest: 18, Highest: 25" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Temperature range: 30°C to 30°C", 
      "stdinput": "30 30 30",
      "explanation": "All same → range 30 to 30" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Temperature range: -10°C to 10°C", 
      "stdinput": "-10 0 5 10",
      "explanation": "Lowest: -10, Highest: 10" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Temperature range: 25°C to 25°C", 
      "stdinput": "25",
      "explanation": "Single temperature" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Temperature range: 15°C to 35°C", 
      "stdinput": "20 25 15 30 35",
      "explanation": "Lowest: 15, Highest: 35" 
    }
  ],

  "templates": {
    "python": "def find_lowest(temps):\n    return min(temps)\n\ndef find_highest(temps):\n    return max(temps)\n\ndef check_temperature_range(temps):\n    low = find_lowest(temps)\n    high = find_highest(temps)\n    print(f\"Temperature range: {low}°C to {high}°C\")\n\n\n# Main code\ntemperatures = list(map(int, input().split()))\ncheck_temperature_range(temperatures)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int find_lowest(List<Integer> temps) {\n        int min = temps.get(0);\n        for (int temp : temps) {\n            if (temp < min) {\n                min = temp;\n            }\n        }\n        return min;\n    }\n    \n    public static int find_highest(List<Integer> temps) {\n        int max = temps.get(0);\n        for (int temp : temps) {\n            if (temp > max) {\n                max = temp;\n            }\n        }\n        return max;\n    }\n    \n    public static void check_temperature_range(List<Integer> temps) {\n        int low = find_lowest(temps);\n        int high = find_highest(temps);\n        System.out.println(\"Temperature range: \" + low + \"°C to \" + high + \"°C\");\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> temperatures = new ArrayList<>();\n        for (String temp : input) {\n            temperatures.add(Integer.parseInt(temp));\n        }\n        check_temperature_range(temperatures);\n    }\n}",
    "javascript": "function find_lowest(temps) {\n    return Math.min(...temps);\n}\n\nfunction find_highest(temps) {\n    return Math.max(...temps);\n}\n\nfunction check_temperature_range(temps) {\n    const low = find_lowest(temps);\n    const high = find_highest(temps);\n    console.log(`Temperature range: ${low}°C to ${high}°C`);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const temperatures = input.split(' ').map(Number);\n    check_temperature_range(temperatures);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint find_lowest(vector<int> temps) {\n    int min_val = INT_MAX;\n    for (int temp : temps) {\n        if (temp < min_val) {\n            min_val = temp;\n        }\n    }\n    return min_val;\n}\n\nint find_highest(vector<int> temps) {\n    int max_val = INT_MIN;\n    for (int temp : temps) {\n        if (temp > max_val) {\n            max_val = temp;\n        }\n    }\n    return max_val;\n}\n\nvoid check_temperature_range(vector<int> temps) {\n    int low = find_lowest(temps);\n    int high = find_highest(temps);\n    cout << \"Temperature range: \" << low << \"°C to \" << high << \"°C\" << endl;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> temperatures;\n    int temp;\n    while (ss >> temp) {\n        temperatures.push_back(temp);\n    }\n    check_temperature_range(temperatures);\n    return 0;\n}"
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