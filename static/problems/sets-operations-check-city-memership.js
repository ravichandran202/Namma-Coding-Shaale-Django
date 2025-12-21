module.exports = {
  "title": "Check City – Membership Test",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>You are given a list of cities and a single city name. Check if the given city exists in the list of cities.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of cities in the list</li>
      <li>Next, you receive <code>n</code> city names</li>
      <li>Finally, you receive one city name to check</li>
      <li>Print <code>True</code> if the city exists in the list</li>
      <li>Print <code>False</code> if the city does not exist in the list</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>City names are <b>case-sensitive</b>: "Delhi" and "delhi" are different cities</li>
      <li>The check is <b>exact match</b> - no partial matching</li>
      <li>Always output exactly <code>True</code> or <code>False</code> (capital T and F)</li>
    </ul>
    <p>This is like checking if a particular destination is available in your travel itinerary.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
mumbai delhi pune
delhi
Output:
True</pre>
    <p><b>Explanation:</b> The city "delhi" is in the list ["mumbai", "delhi", "pune"], so the answer is <code>True</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
london paris tokyo berlin
rome
Output:
False</pre>
    <p><b>Explanation:</b> The city "rome" is not in the list ["london", "paris", "tokyo", "berlin"], so the answer is <code>False</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "3\nmumbai delhi pune\ndelhi" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "4\nlondon paris tokyo berlin\nrome" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "5\nNYC LA Chicago Boston Seattle\nLA" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "3\ncat dog bird\nfish" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "1\nTokyo\nTokyo" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "2\napple orange\nbanana" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "3\nRed Green Blue\nYellow" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "4\nA B C D\nC" },
    { "id": 9, "input": [], "expected": "True", "stdinput": "6\njan feb mar apr may jun\nmay" }
  ],

  "templates": {
    "python": "n = int(input())\ncities = set(input().split())\nx = input()\nif x in cities:\n    print(True)\nelse:\n    print(False)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] cityArray = scanner.nextLine().split(\" \");\n        Set<String> cities = new HashSet<>();\n        for (String city : cityArray) {\n            cities.add(city);\n        }\n        \n        String checkCity = scanner.nextLine();\n        \n        if (cities.contains(checkCity)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 3) {\n        const n = parseInt(lines[0]);\n        const cities = new Set(lines[1].split(' '));\n        const checkCity = lines[2];\n        \n        console.log(cities.has(checkCity));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    unordered_set<string> cities;\n    for (int i = 0; i < n; i++) {\n        string city;\n        cin >> city;\n        cities.insert(city);\n    }\n    \n    string checkCity;\n    cin >> checkCity;\n    \n    if (cities.find(checkCity) != cities.end()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    \n    return 0;\n}"
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