module.exports = {
  "title": "Shopping Cart – Price Analysis Functions",
  "difficulty": "medium",
  "acceptance": "98%",

  "description": `
    <p>Create separate functions to analyze shopping cart prices: calculate total, find cheapest item, and find most expensive item.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing item prices as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read item prices from input</li>
      <li>Create three separate functions:</li>
      <ul>
        <li><code>get_total(prices)</code> - returns sum of all prices using <code>sum()</code></li>
        <li><code>get_cheapest(prices)</code> - returns smallest price using <code>min()</code></li>
        <li><code>get_most_expensive(prices)</code> - returns largest price using <code>max()</code></li>
      </ul>
      <li>Create a fourth function <code>calculate_cart(prices)</code> that calls the other three functions and prints results</li>
      <li>In main code, call <code>calculate_cart()</code> with the input prices</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
250 150 300 75 400

Output:
Total: 1175
Cheapest: 75
Most Expensive: 400</pre>
    <p><b>Explanation:</b> Total: 250+150+300+75+400=1175, Cheapest: 75, Most Expensive: 400</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
100 200 300

Output:
Total: 600
Cheapest: 100
Most Expensive: 300</pre>
    <p><b>Explanation:</b> Total: 100+200+300=600, Cheapest: 100, Most Expensive: 300</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Total: 1175\nCheapest: 75\nMost Expensive: 400", 
      "stdinput": "250 150 300 75 400",
      "explanation": "Total: 1175, Cheapest: 75, Most Expensive: 400" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Total: 600\nCheapest: 100\nMost Expensive: 300", 
      "stdinput": "100 200 300",
      "explanation": "Total: 600, Cheapest: 100, Most Expensive: 300" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Total: 500\nCheapest: 500\nMost Expensive: 500", 
      "stdinput": "500",
      "explanation": "Single item: all values same" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Total: 0\nCheapest: 0\nMost Expensive: 0", 
      "stdinput": "0",
      "explanation": "Zero price item" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Total: 1500\nCheapest: 100\nMost Expensive: 500", 
      "stdinput": "100 200 300 400 500",
      "explanation": "Increasing prices" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Total: 2000\nCheapest: 200\nMost Expensive: 800", 
      "stdinput": "200 400 600 800",
      "explanation": "Even increments" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Total: 15\nCheapest: 1\nMost Expensive: 5", 
      "stdinput": "1 2 3 4 5",
      "explanation": "Consecutive numbers" 
    }
  ],

  "templates": {
    "python": "def get_total(prices):\n    return sum(prices)\n\ndef get_cheapest(prices):\n    return min(prices)\n\ndef get_most_expensive(prices):\n    return max(prices)\n\ndef calculate_cart(prices):\n    total = get_total(prices)\n    cheapest = get_cheapest(prices)\n    most_expensive = get_most_expensive(prices)\n\n    print(\"Total:\", total)\n    print(\"Cheapest:\", cheapest)\n    print(\"Most Expensive:\", most_expensive)\n\n\n# Main code\nprices = list(map(int, input().split()))\ncalculate_cart(prices)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static int get_total(List<Integer> prices) {\n        int sum = 0;\n        for (int price : prices) {\n            sum += price;\n        }\n        return sum;\n    }\n    \n    public static int get_cheapest(List<Integer> prices) {\n        int min = prices.get(0);\n        for (int price : prices) {\n            if (price < min) {\n                min = price;\n            }\n        }\n        return min;\n    }\n    \n    public static int get_most_expensive(List<Integer> prices) {\n        int max = prices.get(0);\n        for (int price : prices) {\n            if (price > max) {\n                max = price;\n            }\n        }\n        return max;\n    }\n    \n    public static void calculate_cart(List<Integer> prices) {\n        int total = get_total(prices);\n        int cheapest = get_cheapest(prices);\n        int most_expensive = get_most_expensive(prices);\n        \n        System.out.println(\"Total: \" + total);\n        System.out.println(\"Cheapest: \" + cheapest);\n        System.out.println(\"Most Expensive: \" + most_expensive);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> prices = new ArrayList<>();\n        for (String price : input) {\n            prices.add(Integer.parseInt(price));\n        }\n        calculate_cart(prices);\n    }\n}",
    "javascript": "function get_total(prices) {\n    return prices.reduce((a, b) => a + b, 0);\n}\n\nfunction get_cheapest(prices) {\n    return Math.min(...prices);\n}\n\nfunction get_most_expensive(prices) {\n    return Math.max(...prices);\n}\n\nfunction calculate_cart(prices) {\n    const total = get_total(prices);\n    const cheapest = get_cheapest(prices);\n    const most_expensive = get_most_expensive(prices);\n    \n    console.log(\"Total: \" + total);\n    console.log(\"Cheapest: \" + cheapest);\n    console.log(\"Most Expensive: \" + most_expensive);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const prices = input.split(' ').map(Number);\n    calculate_cart(prices);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint get_total(vector<int> prices) {\n    int sum = 0;\n    for (int price : prices) {\n        sum += price;\n    }\n    return sum;\n}\n\nint get_cheapest(vector<int> prices) {\n    int min_val = INT_MAX;\n    for (int price : prices) {\n        if (price < min_val) {\n            min_val = price;\n        }\n    }\n    return min_val;\n}\n\nint get_most_expensive(vector<int> prices) {\n    int max_val = INT_MIN;\n    for (int price : prices) {\n        if (price > max_val) {\n            max_val = price;\n        }\n    }\n    return max_val;\n}\n\nvoid calculate_cart(vector<int> prices) {\n    int total = get_total(prices);\n    int cheapest = get_cheapest(prices);\n    int most_expensive = get_most_expensive(prices);\n    \n    cout << \"Total: \" << total << endl;\n    cout << \"Cheapest: \" << cheapest << endl;\n    cout << \"Most Expensive: \" << most_expensive << endl;\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> prices;\n    int price;\n    while (ss >> price) {\n        prices.push_back(price);\n    }\n    calculate_cart(prices);\n    return 0;\n}"
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