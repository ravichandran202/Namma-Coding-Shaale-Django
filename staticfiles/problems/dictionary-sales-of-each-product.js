module.exports = {
  "title": "Sum of Sales for Each Product",
  "difficulty": "hard",
  "acceptance": "89%",

  "description": `
    <p>Calculate the total sales amount for each product from multiple sales records.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of sales records</li>
      <li>Next <code>n</code> lines: each line contains a product name and a sales amount separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of sales records from the first input line</li>
      <li>For each following line, read the product name and sales amount</li>
      <li>Add up all sales amounts for each product</li>
      <li>Print a dictionary showing each product with its total sales</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Product names are case-sensitive</li>
      <li>Sales amounts are integers</li>
      <li>If the same product appears multiple times, sum all its amounts</li>
      <li>Output should be in dictionary format with products as keys and totals as values</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
apple 100
banana 50
apple 40
banana 20

Output:
{'apple': 140, 'banana': 70}</pre>
    <p><b>Explanation:</b> Apple has two sales: <code>100 + 40 = 140</code>. Banana has two sales: <code>50 + 20 = 70</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
laptop 500
mouse 30
laptop 200

Output:
{'laptop': 700, 'mouse': 30}</pre>
    <p><b>Explanation:</b> Laptop total: <code>500 + 200 = 700</code>. Mouse has only one sale: <code>30</code></p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'apple': 140, 'banana': 70}", 
      "stdinput": "4\napple 100\nbanana 50\napple 40\nbanana 20",
      "explanation": "Apple: 100+40=140, Banana: 50+20=70" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'laptop': 700, 'mouse': 30}", 
      "stdinput": "3\nlaptop 500\nmouse 30\nlaptop 200",
      "explanation": "Laptop: 500+200=700, Mouse: 30" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "0",
      "explanation": "No sales records, empty dictionary" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'chair': 4500}", 
      "stdinput": "5\nchair 1000\nchair 500\nchair 1000\nchair 1000\nchair 1000",
      "explanation": "Single product chair: total 4500 from 5 sales" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'A': 10, 'B': 20, 'C': 30, 'D': 40}", 
      "stdinput": "4\nA 10\nB 20\nC 30\nD 40",
      "explanation": "Each product appears once with different amounts" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'pen': 25, 'book': 150, 'eraser': 15}", 
      "stdinput": "6\npen 10\nbook 50\npen 5\neraser 15\nbook 100\npen 10",
      "explanation": "Pen: 10+5+10=25, Book: 50+100=150, Eraser: 15" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "{'bread': 250, 'milk': 180, 'eggs': 120}", 
      "stdinput": "5\nbread 100\nmilk 60\neggs 120\nbread 150\nmilk 120",
      "explanation": "Bread: 100+150=250, Milk: 60+120=180, Eggs: 120" 
    }
  ],

  "templates": {
    "python": "n = int(input())\nresult = {}\n\nfor _ in range(n):\n    product, amount = input().split()\n    amount = int(amount)\n    \n    if product in result:\n        result[product] = result[product] + amount\n    else:\n        result[product] = amount\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            String product = parts[0];\n            int amount = Integer.parseInt(parts[1]);\n            \n            result.put(product, result.getOrDefault(product, 0) + amount);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount === 0) {\n        // First line hasn't been read yet\n    } else if (lineCount === 1) {\n        // First line (n) read, wait for more lines\n    } else if (lineCount > parseInt(lines[0]) + 1) {\n        const n = parseInt(lines[0]);\n        const result = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [product, amount] = lines[i].split(' ');\n            const numAmount = parseInt(amount);\n            \n            if (result[product]) {\n                result[product] += numAmount;\n            } else {\n                result[product] = numAmount;\n            }\n        }\n        \n        console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, int> result;\n    \n    for (int i = 0; i < n; i++) {\n        string product;\n        int amount;\n        cin >> product >> amount;\n        \n        result[product] += amount;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nresult = {}\n\nfor _ in range(n):\n    product, amount = input().split()\n    amount = int(amount)\n    \n    if product in result:\n        result[product] = result[product] + amount\n    else:\n        result[product] = amount\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, Integer> result = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            String product = parts[0];\n            int amount = Integer.parseInt(parts[1]);\n            \n            result.put(product, result.getOrDefault(product, 0) + amount);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount === 0) {\n        // First line hasn't been read yet\n    } else if (lineCount === 1) {\n        // First line (n) read, wait for more lines\n    } else if (lineCount > parseInt(lines[0]) + 1) {\n        const n = parseInt(lines[0]);\n        const result = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [product, amount] = lines[i].split(' ');\n            const numAmount = parseInt(amount);\n            \n            if (result[product]) {\n                result[product] += numAmount;\n            } else {\n                result[product] = numAmount;\n            }\n        }\n        \n        console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, int> result;\n    \n    for (int i = 0; i < n; i++) {\n        string product;\n        int amount;\n        cin >> product >> amount;\n        \n        result[product] += amount;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': \" << entry.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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