module.exports = module.exports = {
  "title": "Find Product With Highest Sales",
  "difficulty": "hard",
  "acceptance": "91%",

  "description": `
    <p>Find which product has the highest total sales from given product-sales data.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of product entries</li>
      <li>Next <code>n</code> lines: each line contains a product name and its sales amount separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of product entries from the first input line</li>
      <li>For each following line, read the product name and its sales amount</li>
      <li>Find the product with the maximum sales amount</li>
      <li>Print only the name of that product</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Product names are case-sensitive</li>
      <li>Sales amounts are integers</li>
      <li>Each product appears only once in the input</li>
      <li>If multiple products have the same highest sales, print the first one encountered</li>
      <li>Output should be only the product name, not the amount</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
apple 120
banana 50
mango 200

Output:
mango</pre>
    <p><b>Explanation:</b> Mango has <code>200</code> sales, which is higher than apple's <code>120</code> and banana's <code>50</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
laptop 800
phone 1300
tablet 600
watch 1200

Output:
phone</pre>
    <p><b>Explanation:</b> Both phone and watch have <code>1200</code> sales, but laptop is read first and has <code>800</code>, so we track from beginning</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "mango", 
      "stdinput": "3\napple 120\nbanana 50\nmango 200",
      "explanation": "Mango has highest sales: 200" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "phone", 
      "stdinput": "4\nlaptop 800\nphone 1300\ntablet 600\nwatch 1200",
      "explanation": "Laptop is first, phone and watch have same higher but laptop is first encountered" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "single", 
      "stdinput": "1\nsingle 500",
      "explanation": "Only one product, so it's automatically the highest" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "A", 
      "stdinput": "5\nA 1000\nB 500\nC 750\nD 250\nE 900",
      "explanation": "A has highest with 1000" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "car", 
      "stdinput": "3\nbike 50000\ncar 250000\ncycle 15000",
      "explanation": "Car has highest sales: 250000" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "zebra", 
      "stdinput": "4\napple 50\nbanana 75\nzebra 100\ncherry 25",
      "explanation": "Zebra has highest: 100" 
    }
  ],

  "templates": {
    "python": "n = int(input())\ndata = {}\n\nfor _ in range(n):\n    name, value = input().split()\n    value = int(value)\n    data[name] = value\n\nfirst = True\nmax_key = \"\"\nmax_val = 0\n\nfor k in data:\n    if first:\n        max_key = k\n        max_val = data[k]\n        first = False\n    else:\n        if data[k] > max_val:\n            max_val = data[k]\n            max_key = k\n\nprint(max_key)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, Integer> data = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            String name = parts[0];\n            int value = Integer.parseInt(parts[1]);\n            data.put(name, value);\n        }\n        \n        boolean first = true;\n        String maxKey = \"\";\n        int maxVal = 0;\n        \n        for (Map.Entry<String, Integer> entry : data.entrySet()) {\n            if (first) {\n                maxKey = entry.getKey();\n                maxVal = entry.getValue();\n                first = false;\n            } else {\n                if (entry.getValue() > maxVal) {\n                    maxVal = entry.getValue();\n                    maxKey = entry.getKey();\n                }\n            }\n        }\n        \n        System.out.println(maxKey);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount === 0) {\n        // First line hasn't been read yet\n    } else if (lineCount === 1) {\n        // First line (n) read, wait for more lines\n    } else if (lineCount > parseInt(lines[0]) + 1) {\n        const n = parseInt(lines[0]);\n        const data = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [name, value] = lines[i].split(' ');\n            data[name] = parseInt(value);\n        }\n        \n        let first = true;\n        let maxKey = \"\";\n        let maxVal = 0;\n        \n        for (const key in data) {\n            if (first) {\n                maxKey = key;\n                maxVal = data[key];\n                first = false;\n            } else {\n                if (data[key] > maxVal) {\n                    maxVal = data[key];\n                    maxKey = key;\n                }\n            }\n        }\n        \n        console.log(maxKey);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, int> data;\n    \n    for (int i = 0; i < n; i++) {\n        string name;\n        int value;\n        cin >> name >> value;\n        data[name] = value;\n    }\n    \n    bool first = true;\n    string maxKey;\n    int maxVal;\n    \n    for (const auto& entry : data) {\n        if (first) {\n            maxKey = entry.first;\n            maxVal = entry.second;\n            first = false;\n        } else {\n            if (entry.second > maxVal) {\n                maxVal = entry.second;\n                maxKey = entry.first;\n            }\n        }\n    }\n    \n    cout << maxKey << endl;\n    \n    return 0;\n}"
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