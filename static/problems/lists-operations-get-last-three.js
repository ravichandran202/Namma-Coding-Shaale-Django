module.exports = {
  "title": "Travel Cities – Last Three",
  "difficulty": "easy",
  "acceptance": "88%",

  "description": `
    <p>A user enters city names they visited during their travel. Your task is to print only the last three cities from their travel list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input Format:</b> The user provides all visited cities as space-separated names</li>
      <li><b>Output Format:</b> Display the last three cities as a list</li>
      <li><b>Edge Cases:</b> If there are fewer than three cities, return all available cities</li>
      <li><b>Order Preservation:</b> Maintain the original order of the cities as they appear in the input</li>
    </ul>
    <p>This problem helps practice working with list slicing and negative indices to extract specific portions from the end of a sequence.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Delhi Mumbai Pune Goa Mysore
Output: ['Pune', 'Goa', 'Mysore']</pre>
    <p><b>Explanation:</b> From <code>5</code> cities, the last three are <code>Pune</code>, <code>Goa</code>, and <code>Mysore</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Paris London
Output: ['Paris', 'London']</pre>
    <p><b>Explanation:</b> With only <code>2</code> cities, both are returned since we have fewer than three cities.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: Tokyo
Output: ['Tokyo']</pre>
    <p><b>Explanation:</b> With only <code>1</code> city, just that single city is returned.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['Pune', 'Goa', 'Mysore']", "stdinput": "Delhi Mumbai Pune Goa Mysore" },
    { "id": 2, "input": [], "expected": "['Paris', 'London']", "stdinput": "Paris London" },
    { "id": 3, "input": [], "expected": "['Tokyo']", "stdinput": "Tokyo" },
    { "id": 4, "input": [], "expected": "['C', 'D', 'E']", "stdinput": "A B C D E" },
    { "id": 6, "input": [], "expected": "['Spring', 'Summer', 'Fall']", "stdinput": "Winter Spring Summer Fall" },
    { "id": 7, "input": [], "expected": "['Red', 'Green', 'Blue']", "stdinput": "Yellow Orange Red Green Blue" },
    { "id": 8, "input": [], "expected": "['One', 'Two', 'Three']", "stdinput": "One Two Three" },
  ],

  "templates": {
    "python": "cities = input().split()\nprint(cities[-3:])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] cities = scanner.nextLine().split(\" \");\n        int start = Math.max(0, cities.length - 3);\n        String[] result = Arrays.copyOfRange(cities, start, cities.length);\n        System.out.println(Arrays.toString(result));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const cities = input.split(' ');\n    const result = cities.slice(-3);\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    stringstream ss(input);\n    vector<string> cities;\n    string city;\n    \n    while (ss >> city) {\n        cities.push_back(city);\n    }\n    \n    int start = max(0, (int)cities.size() - 3);\n    cout << \"[\";\n    for (int i = start; i < cities.size(); i++) {\n        cout << \"'\" << cities[i] << \"'\";\n        if (i < cities.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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