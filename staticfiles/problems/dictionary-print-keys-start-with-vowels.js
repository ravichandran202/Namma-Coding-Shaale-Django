module.exports = {
  "title": "Print Keys Whose Values Start With a Vowel",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Find and print all dictionary keys whose corresponding values start with a vowel (a, e, i, o, u).</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of key-value pairs</li>
      <li>Next <code>n</code> lines: each line contains a key (string) and a value (string) separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of key-value pairs from the first input line</li>
      <li>For each following line, read the key and value and store them in a dictionary</li>
      <li>Check each value in the dictionary to see if its first character is a vowel</li>
      <li>Print all keys where the corresponding value starts with a vowel</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Keys and values are both strings</li>
      <li>Vowels include both uppercase and lowercase: <code>a, e, i, o, u, A, E, I, O, U</code></li>
      <li>Print keys in the order they appear in the dictionary</li>
      <li>If no values start with a vowel, print nothing (empty line)</li>
      <li>Output should be keys separated by single spaces</li>
      <li>Only check the FIRST character of each value</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
a apple
b orange
c mango
d ice

Output:
a b d</pre>
    <p><b>Explanation:</b> 
    </br>Values: <code>apple</code> starts with a, <code>orange</code> starts with o, <code>mango</code> starts with m (not vowel), <code>ice</code> starts with i. 
    </br>Keys a, b, d have values starting with vowels.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
x Elephant
y tiger
z Umbrella

Output:
x z</pre>
    <p><b>Explanation:</b> 
    </br>Values: <code>Elephant</code> starts with E (vowel), <code>tiger</code> starts with t (not vowel), <code>Umbrella</code> starts with U (vowel). 
    </br>Keys x and z have values starting with vowels.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "a b d", 
      "stdinput": "4\na apple\nb orange\nc mango\nd ice",
      "explanation": "Values starting with vowels: apple(a), orange(o), ice(i)" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "x z", 
      "stdinput": "3\nx Elephant\ny tiger\nz Umbrella",
      "explanation": "Values starting with vowels: Elephant(E), Umbrella(U)" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "3\none book\ntwo pen\nthree table",
      "explanation": "No values start with vowels" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "a b c d e", 
      "stdinput": "5\na apple\nb egg\nc ice\nd orange\ne umbrella",
      "explanation": "All values start with vowels" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "red white", 
      "stdinput": "4\nred apple\ngreen banana\nwhite orange\nblue grape",
      "explanation": "Values starting with vowels: apple(a), orange(o)" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "first third", 
      "stdinput": "4\nfirst Apple\nsecond Banana\nthird Orange\nfourth Cherry",
      "explanation": "Values starting with vowels: Apple(A), Orange(O)" 
    }
  ],

  "templates": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nvowels = \"aeiouAEIOU\"\n\nfor k, v in d.items():\n    if v[0] in vowels:\n        print(k, end=\" \")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        String vowels = \"aeiouAEIOU\";\n        StringBuilder result = new StringBuilder();\n        \n        for (Map.Entry<String, String> entry : d.entrySet()) {\n            String value = entry.getValue();\n            if (value.length() > 0 && vowels.indexOf(value.charAt(0)) != -1) {\n                result.append(entry.getKey()).append(\" \");\n            }\n        }\n        \n        if (result.length() > 0) {\n            result.setLength(result.length() - 1);\n        }\n        System.out.print(result.toString());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0])) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        const vowels = \"aeiouAEIOU\";\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        const result = [];\n        for (const key in d) {\n            const value = d[key];\n            if (value.length > 0 && vowels.includes(value[0])) {\n                result.push(key);\n            }\n        }\n        \n        console.log(result.join(' '));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    string vowels = \"aeiouAEIOU\";\n    bool first = true;\n    \n    for (const auto& entry : d) {\n        string value = entry.second;\n        if (!value.empty() && vowels.find(value[0]) != string::npos) {\n            if (!first) {\n                cout << \" \";\n            }\n            cout << entry.first;\n            first = false;\n        }\n    }\n    \n    cout << endl;\n    return 0;\n}"
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