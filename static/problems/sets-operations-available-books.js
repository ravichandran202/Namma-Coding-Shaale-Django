module.exports = {
  "title": "Books Still Available",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>A library has books in its inventory. Some books have been sold. Find which books are still available (not sold).</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, read a number <code>n</code> - the count of all books in inventory</li>
      <li>Next, read a list of <code>n</code> book titles from the inventory</li>
      <li>Then, read a number <code>m</code> - the count of sold books</li>
      <li>Finally, read list <code>m</code> sold book titles</li>
      <li>Print all books that are in inventory but <b>not sold</b>, in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Only include books that are in inventory and <b>not</b> in sold list</li>
      <li>Book titles are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical order</b></li>
      <li>If all books are sold, print an empty list</li>
      <li>Each book appears only once in output</li>
    </ul>
    <p>This helps track which books are still in stock after some sales have occurred.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
6
Python Java C++ JavaScript Ruby PHP
3
Java PHP C++
Output:
['JavaScript', 'Python', 'Ruby']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All books: <code>Python, Java, C++, JavaScript, Ruby, PHP</code></li>
      <li>Sold: <code>Java, PHP, C++</code></li>
      <li>Still available: <code>Python, JavaScript, Ruby</code></li>
      <li>Sorted: <code>JavaScript, Python, Ruby</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['JavaScript', 'Python', 'Ruby']", "stdinput": "6\nPython Java C++ JavaScript Ruby PHP\n3\nJava PHP C++" },
    { "id": 3, "input": [], "expected": "[]", "stdinput": "3\nX Y Z\n3\nX Y Z" },
    { "id": 6, "input": [], "expected": "['fiction', 'mystery']", "stdinput": "5\nfiction romance mystery sci-fi biography\n3\nromance sci-fi biography" },
    { "id": 7, "input": [], "expected": "['art', 'music']", "stdinput": "4\nart music sports cooking\n2\nsports cooking" },
    { "id": 8, "input": [], "expected": "['level1', 'level2', 'level3']", "stdinput": "5\nlevel1 level2 level3 level4 level5\n2\nlevel4 level5" },
    { "id": 9, "input": [], "expected": "['red', 'yellow']", "stdinput": "4\nred blue green yellow\n2\nblue green" }
  ],

  "templates": {
    "python": "n = int(input())\nallb = set(input().split())\nm = int(input())\nsold = set(input().split())\nresult = sorted(allb - sold)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> allBooks = new HashSet<>();\n        String[] booksArray = scanner.nextLine().split(\" \");\n        for (String book : booksArray) {\n            allBooks.add(book);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> soldBooks = new HashSet<>();\n        if (m > 0) {\n            String[] soldArray = scanner.nextLine().split(\" \");\n            for (String book : soldArray) {\n                soldBooks.add(book);\n            }\n        }\n        \n        Set<String> available = new TreeSet<>(allBooks);\n        available.removeAll(soldBooks);\n        \n        System.out.println(available);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const allBooks = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const soldBooks = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        const available = new Set([...allBooks].filter(book => !soldBooks.has(book)));\n        const result = Array.from(available).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> allBooks;\n    for (int i = 0; i < n; i++) {\n        string book;\n        cin >> book;\n        allBooks.insert(book);\n    }\n    \n    cin >> m;\n    unordered_set<string> soldBooks;\n    for (int i = 0; i < m; i++) {\n        string book;\n        cin >> book;\n        soldBooks.insert(book);\n    }\n    \n    set<string> available;\n    for (const string& book : allBooks) {\n        if (soldBooks.find(book) == soldBooks.end()) {\n            available.insert(book);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& book : available) {\n        if (!first) cout << \", \";\n        cout << \"'\" << book << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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