module.exports = {
  "title": "Height Eligibility Validation",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Create functions to check if all team members meet minimum height requirement using the <code>all()</code> function.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: minimum height (integer)</li>
      <li>Second line: player heights as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read minimum height from first input line</li>
      <li>Read player heights from second input line</li>
      <li>Create a function called <code>check_height(heights, min_height)</code> that uses <code>all()</code> with generator expression to check if all heights ≥ minimum</li>
      <li>Create a second function <code>check_team_eligibility(heights, min_height)</code> that calls the first function and prints appropriate message</li>
      <li>In main code, call <code>check_team_eligibility()</code> with the input values</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
160
165 170 162 168 172

Output:
All team members eligible!</pre>
    <p><b>Explanation:</b> All heights (165,170,162,168,172) ≥ 160 → All eligible</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
170
165 175 168 172

Output:
Some players don't meet height requirement!</pre>
    <p><b>Explanation:</b> 165 < 170 → Not all eligible</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "All team members eligible!", 
      "stdinput": "160\n165 170 162 168 172",
      "explanation": "All heights ≥160" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Some players don't meet height requirement!", 
      "stdinput": "170\n165 175 168 172",
      "explanation": "165 < 170" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "All team members eligible!", 
      "stdinput": "150\n150",
      "explanation": "Exactly minimum height" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Some players don't meet height requirement!", 
      "stdinput": "180\n175",
      "explanation": "175 < 180" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "All team members eligible!", 
      "stdinput": "0\n100 120 130",
      "explanation": "All heights ≥0 (trivial)" 
    }
  ],

  "templates": {
    "python": "def check_height(heights, min_height):\n    return all(h >= min_height for h in heights)\n\ndef check_team_eligibility(heights, min_height):\n    if check_height(heights, min_height):\n        print(\"All team members eligible!\")\n    else:\n        print(\"Some players don't meet height requirement!\")\n\n\n# Main code\nmin_height = int(input())\nplayer_heights = list(map(int, input().split()))\ncheck_team_eligibility(player_heights, min_height)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static boolean check_height(List<Integer> heights, int min_height) {\n        for (int height : heights) {\n            if (height < min_height) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void check_team_eligibility(List<Integer> heights, int min_height) {\n        if (check_height(heights, min_height)) {\n            System.out.println(\"All team members eligible!\");\n        } else {\n            System.out.println(\"Some players don't meet height requirement!\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int min_height = Integer.parseInt(scanner.nextLine());\n        String[] heightInput = scanner.nextLine().split(\" \");\n        List<Integer> player_heights = new ArrayList<>();\n        for (String height : heightInput) {\n            player_heights.add(Integer.parseInt(height));\n        }\n        check_team_eligibility(player_heights, min_height);\n    }\n}",
    "javascript": "function check_height(heights, min_height) {\n    for (let height of heights) {\n        if (height < min_height) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction check_team_eligibility(heights, min_height) {\n    if (check_height(heights, min_height)) {\n        console.log(\"All team members eligible!\");\n    } else {\n        console.log(\"Some players don't meet height requirement!\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const min_height = parseInt(lines[0]);\n        const player_heights = lines[1].split(' ').map(Number);\n        check_team_eligibility(player_heights, min_height);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nbool check_height(vector<int> heights, int min_height) {\n    for (int height : heights) {\n        if (height < min_height) {\n            return false;\n        }\n    }\n    return true;\n}\n\nvoid check_team_eligibility(vector<int> heights, int min_height) {\n    if (check_height(heights, min_height)) {\n        cout << \"All team members eligible!\" << endl;\n    } else {\n        cout << \"Some players don't meet height requirement!\" << endl;\n    }\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    int min_height = stoi(line);\n    \n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> player_heights;\n    int height;\n    while (ss >> height) {\n        player_heights.push_back(height);\n    }\n    \n    check_team_eligibility(player_heights, min_height);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def check_height(heights, min_height):\n    return all(h >= min_height for h in heights)\n\ndef check_team_eligibility(heights, min_height):\n    if check_height(heights, min_height):\n        print(\"All team members eligible!\")\n    else:\n        print(\"Some players don't meet height requirement!\")\n\n\n# Main code\nmin_height = int(input())\nplayer_heights = list(map(int, input().split()))\ncheck_team_eligibility(player_heights, min_height)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static boolean check_height(List<Integer> heights, int min_height) {\n        for (int height : heights) {\n            if (height < min_height) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void check_team_eligibility(List<Integer> heights, int min_height) {\n        if (check_height(heights, min_height)) {\n            System.out.println(\"All team members eligible!\");\n        } else {\n            System.out.println(\"Some players don't meet height requirement!\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int min_height = Integer.parseInt(scanner.nextLine());\n        String[] heightInput = scanner.nextLine().split(\" \");\n        List<Integer> player_heights = new ArrayList<>();\n        for (String height : heightInput) {\n            player_heights.add(Integer.parseInt(height));\n        }\n        check_team_eligibility(player_heights, min_height);\n    }\n}",
    "javascript": "function check_height(heights, min_height) {\n    for (let height of heights) {\n        if (height < min_height) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction check_team_eligibility(heights, min_height) {\n    if (check_height(heights, min_height)) {\n        console.log(\"All team members eligible!\");\n    } else {\n        console.log(\"Some players don't meet height requirement!\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const min_height = parseInt(lines[0]);\n        const player_heights = lines[1].split(' ').map(Number);\n        check_team_eligibility(player_heights, min_height);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nbool check_height(vector<int> heights, int min_height) {\n    for (int height : heights) {\n        if (height < min_height) {\n            return false;\n        }\n    }\n    return true;\n}\n\nvoid check_team_eligibility(vector<int> heights, int min_height) {\n    if (check_height(heights, min_height)) {\n        cout << \"All team members eligible!\" << endl;\n    } else {\n        cout << \"Some players don't meet height requirement!\" << endl;\n    }\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    int min_height = stoi(line);\n    \n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> player_heights;\n    int height;\n    while (ss >> height) {\n        player_heights.push_back(height);\n    }\n    \n    check_team_eligibility(player_heights, min_height);\n    return 0;\n}"
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