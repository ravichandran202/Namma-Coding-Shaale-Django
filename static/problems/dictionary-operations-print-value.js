module.exports = {
  "title": "Print Value of a Key",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Access and print the value associated with a given key in a dictionary. You will read a key, then look up and print its corresponding value from a pre-defined dictionary.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">fruit_prices = {"apple": 50, "banana": 20}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>A single line containing a string representing the <b>key</b> to look up</li>
    </ul>
    <p><b>Output:</b> Print the value associated with the given key. If the key exists, print its value. The key will always exist in the dictionary for this problem.</p>
    <p><b>Example Walkthrough:</b></p>
    <p>Starting with: <code>fruit_prices = {"apple": 50, "banana": 20}</code></p>
    <p>If input is:</p>
    <pre class="constraints">apple</pre>
    <ol>
      <li>The input <code>"apple"</code> is the key to look up</li>
      <li>Access the dictionary: <code>fruit_prices["apple"]</code></li>
      <li>Returns the value <code>50</code></li>
      <li>Output: <code>50</code></li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
apple

Output:
50</pre>
    <p><b>Explanation:</b> The key "apple" has value 50 in the dictionary.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
banana

Output:
20</pre>
    <p><b>Explanation:</b> The key "banana" has value 20 in the dictionary.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "50", "stdinput": "apple" },
    { "id": 2, "input": [], "expected": "20", "stdinput": "banana" },
    { "id": 3, "input": [], "expected": "50", "stdinput": "apple" },
    { "id": 4, "input": [], "expected": "20", "stdinput": "banana" },
    { "id": 5, "input": [], "expected": "50", "stdinput": "apple" }
  ],

  "templates": {
    "python": "fruit_prices = {\"apple\": 50, \"banana\": 20}\n\nkey_name = input()\nprint(fruit_prices[key_name])",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, Integer> fruitPrices = new HashMap<>();\n        fruitPrices.put(\"apple\", 50);\n        fruitPrices.put(\"banana\", 20);\n        \n        String keyName = scanner.nextLine();\n        System.out.println(fruitPrices.get(keyName));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (keyName) => {\n    const fruitPrices = {\"apple\": 50, \"banana\": 20};\n    \n    console.log(fruitPrices[keyName]);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> fruitPrices;\n    fruitPrices[\"apple\"] = 50;\n    fruitPrices[\"banana\"] = 20;\n    \n    string keyName;\n    getline(cin, keyName);\n    \n    cout << fruitPrices[keyName] << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "fruit_prices = {\"apple\": 50, \"banana\": 20}\n\nkey_name = input()\nprint(fruit_prices[key_name])",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, Integer> fruitPrices = new HashMap<>();\n        fruitPrices.put(\"apple\", 50);\n        fruitPrices.put(\"banana\", 20);\n        \n        String keyName = scanner.nextLine();\n        System.out.println(fruitPrices.get(keyName));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (keyName) => {\n    const fruitPrices = {\"apple\": 50, \"banana\": 20};\n    \n    console.log(fruitPrices[keyName]);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> fruitPrices;\n    fruitPrices[\"apple\"] = 50;\n    fruitPrices[\"banana\"] = 20;\n    \n    string keyName;\n    getline(cin, keyName);\n    \n    cout << fruitPrices[keyName] << endl;\n    \n    return 0;\n}"
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