module.exports = {
  "title": "Shopping Cart Calculator",
  "difficulty": "hard",
  "acceptance": "96%",

  "description": `
    <p>Create four functions for shopping cart operations: calculate total, apply discount, add tax, and calculate final amount.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing item prices as integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read item prices from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>calculate_total(prices)</code> - returns sum of all item prices</li>
        <li><code>apply_discount(total)</code> - applies 10% discount if total > 1000, otherwise returns total unchanged</li>
        <li><code>add_tax(amount)</code> - adds 8% tax to the amount</li>
        <li><code>final_amount(prices)</code> - calculates total, applies discount, adds tax, and returns all three values</li>
      </ul>
      <li>Each function should take appropriate parameters and return the result</li>
      <li>Call <code>final_amount</code> function and print all intermediate and final amounts</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
200 300 400 500

Output:
Total: 1400
After Discount: 1260.0
After Tax: 1360.8
Final Amount: 1360.8</pre>
    <p><b>Explanation:</b> Total: 1400 (>1000), Discount: 1400×0.9=1260, Tax: 1260×1.08=1360.8</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
100 200 300

Output:
Total: 600
After Discount: 600
After Tax: 648.0
Final Amount: 648.0</pre>
    <p><b>Explanation:</b> Total: 600 (≤1000, no discount), Tax: 600×1.08=648.0</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Total: 1400\nAfter Discount: 1260.0\nAfter Tax: 1360.8\nFinal Amount: 1360.8", 
      "stdinput": "200 300 400 500",
      "explanation": "Total 1400 > 1000, discount 10%, tax 8%" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Total: 600\nAfter Discount: 600.0\nAfter Tax: 648.0\nFinal Amount: 648.0", 
      "stdinput": "100 200 300",
      "explanation": "Total 600 ≤ 1000, no discount, tax 8%" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Total: 1000\nAfter Discount: 1000.0\nAfter Tax: 1080.0\nFinal Amount: 1080.0", 
      "stdinput": "500 300 200",
      "explanation": "Total 1000 ≤ 1000 (no discount as not >1000)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Total: 1001\nAfter Discount: 900.9\nAfter Tax: 972.97\nFinal Amount: 972.97", 
      "stdinput": "1001",
      "explanation": "Total 1001 > 1000, discount 10%, tax 8%" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Total: 2000\nAfter Discount: 1800.0\nAfter Tax: 1944.0\nFinal Amount: 1944.0", 
      "stdinput": "1000 500 300 200",
      "explanation": "Total 2000 > 1000, discount 10%, tax 8%" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Total: 0\nAfter Discount: 0.0\nAfter Tax: 0.0\nFinal Amount: 0.0", 
      "stdinput": "",
      "explanation": "Empty cart, all amounts 0" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Total: 150\nAfter Discount: 150.0\nAfter Tax: 162.0\nFinal Amount: 162.0", 
      "stdinput": "50 50 50",
      "explanation": "Total 150 ≤ 1000, no discount, tax 8%" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Total: 1100\nAfter Discount: 990.0\nAfter Tax: 1069.2\nFinal Amount: 1069.2", 
      "stdinput": "500 600",
      "explanation": "Total 1100 > 1000, discount 10%, tax 8%" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Total: 999\nAfter Discount: 999.0\nAfter Tax: 1078.9\nFinal Amount: 1078.9", 
      "stdinput": "333 333 333",
      "explanation": "Total 999 ≤ 1000, no discount, tax 8%" 
    }
  ],  

  "templates": {
    "python": "def calculate_total(prices):\n    return sum(prices)\n\ndef apply_discount(total):\n    if total > 1000:\n        return total * 0.9\n    return total\n\ndef add_tax(amount):\n    return amount * 1.08\n\ndef final_amount(prices):\n    total = calculate_total(prices)\n    discounted = apply_discount(total)\n    final = add_tax(discounted)\n    return total, discounted, final\n\n# Main code\nitem_prices = list(map(int, input().split()))\ntotal, after_discount, final_amt = final_amount(item_prices)\nprint(\"Total:\", total)\nprint(\"After Discount:\", after_discount)\nprint(\"After Tax:\", final_amt)\nprint(\"Final Amount:\", final_amt)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static double calculate_total(List<Integer> prices) {\n        double sum = 0;\n        for (int price : prices) {\n            sum += price;\n        }\n        return sum;\n    }\n    \n    public static double apply_discount(double total) {\n        if (total > 1000) {\n            return total * 0.9;\n        }\n        return total;\n    }\n    \n    public static double add_tax(double amount) {\n        return amount * 1.08;\n    }\n    \n    public static double[] final_amount(List<Integer> prices) {\n        double total = calculate_total(prices);\n        double discounted = apply_discount(total);\n        double final_amt = add_tax(discounted);\n        return new double[]{total, discounted, final_amt};\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> item_prices = new ArrayList<>();\n        for (String price : input) {\n            if (!price.isEmpty()) {\n                item_prices.add(Integer.parseInt(price));\n            }\n        }\n        \n        double[] results = final_amount(item_prices);\n        System.out.println(\"Total: \" + (int)results[0]);\n        System.out.println(\"After Discount: \" + results[1]);\n        System.out.println(\"After Tax: \" + results[2]);\n        System.out.println(\"Final Amount: \" + results[2]);\n    }\n}",
    "javascript": "function calculate_total(prices) {\n    return prices.reduce((a, b) => a + b, 0);\n}\n\nfunction apply_discount(total) {\n    if (total > 1000) {\n        return total * 0.9;\n    }\n    return total;\n}\n\nfunction add_tax(amount) {\n    return amount * 1.08;\n}\n\nfunction final_amount(prices) {\n    const total = calculate_total(prices);\n    const discounted = apply_discount(total);\n    const final_amt = add_tax(discounted);\n    return [total, discounted, final_amt];\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const item_prices = input.split(' ').filter(x => x).map(Number);\n    const [total, after_discount, final_amt] = final_amount(item_prices);\n    \n    console.log(\"Total: \" + total);\n    console.log(\"After Discount: \" + after_discount);\n    console.log(\"After Tax: \" + final_amt);\n    console.log(\"Final Amount: \" + final_amt);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\ndouble calculate_total(vector<int> prices) {\n    double sum = 0;\n    for (int price : prices) {\n        sum += price;\n    }\n    return sum;\n}\n\ndouble apply_discount(double total) {\n    if (total > 1000) {\n        return total * 0.9;\n    }\n    return total;\n}\n\ndouble add_tax(double amount) {\n    return amount * 1.08;\n}\n\nvoid final_amount(vector<int> prices, double &total, double &discounted, double &final_amt) {\n    total = calculate_total(prices);\n    discounted = apply_discount(total);\n    final_amt = add_tax(discounted);\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> item_prices;\n    int price;\n    while (ss >> price) {\n        item_prices.push_back(price);\n    }\n    \n    double total, after_discount, final_amt;\n    final_amount(item_prices, total, after_discount, final_amt);\n    \n    cout << \"Total: \" << total << endl;\n    cout << \"After Discount: \" << after_discount << endl;\n    cout << \"After Tax: \" << final_amt << endl;\n    cout << \"Final Amount: \" << final_amt << endl;\n    \n    return 0;\n}"
  },
  

  "solutions": {
    "python": "def calculate_total(prices):\n    return sum(prices)\n\ndef apply_discount(total):\n    if total > 1000:\n        return total * 0.9\n    return total\n\ndef add_tax(amount):\n    return amount * 1.08\n\ndef final_amount(prices):\n    total = calculate_total(prices)\n    discounted = apply_discount(total)\n    final = add_tax(discounted)\n    return total, discounted, final\n\n# Main code\nitem_prices = list(map(int, input().split()))\ntotal, after_discount, final_amt = final_amount(item_prices)\nprint(\"Total:\", total)\nprint(\"After Discount:\", after_discount)\nprint(\"After Tax:\", final_amt)\nprint(\"Final Amount:\", final_amt)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static double calculate_total(List<Integer> prices) {\n        double sum = 0;\n        for (int price : prices) {\n            sum += price;\n        }\n        return sum;\n    }\n    \n    public static double apply_discount(double total) {\n        if (total > 1000) {\n            return total * 0.9;\n        }\n        return total;\n    }\n    \n    public static double add_tax(double amount) {\n        return amount * 1.08;\n    }\n    \n    public static double[] final_amount(List<Integer> prices) {\n        double total = calculate_total(prices);\n        double discounted = apply_discount(total);\n        double final_amt = add_tax(discounted);\n        return new double[]{total, discounted, final_amt};\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] input = scanner.nextLine().split(\" \");\n        List<Integer> item_prices = new ArrayList<>();\n        for (String price : input) {\n            if (!price.isEmpty()) {\n                item_prices.add(Integer.parseInt(price));\n            }\n        }\n        \n        double[] results = final_amount(item_prices);\n        System.out.println(\"Total: \" + (int)results[0]);\n        System.out.println(\"After Discount: \" + results[1]);\n        System.out.println(\"After Tax: \" + results[2]);\n        System.out.println(\"Final Amount: \" + results[2]);\n    }\n}",
    "javascript": "function calculate_total(prices) {\n    return prices.reduce((a, b) => a + b, 0);\n}\n\nfunction apply_discount(total) {\n    if (total > 1000) {\n        return total * 0.9;\n    }\n    return total;\n}\n\nfunction add_tax(amount) {\n    return amount * 1.08;\n}\n\nfunction final_amount(prices) {\n    const total = calculate_total(prices);\n    const discounted = apply_discount(total);\n    const final_amt = add_tax(discounted);\n    return [total, discounted, final_amt];\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const item_prices = input.split(' ').filter(x => x).map(Number);\n    const [total, after_discount, final_amt] = final_amount(item_prices);\n    \n    console.log(\"Total: \" + total);\n    console.log(\"After Discount: \" + after_discount);\n    console.log(\"After Tax: \" + final_amt);\n    console.log(\"Final Amount: \" + final_amt);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\ndouble calculate_total(vector<int> prices) {\n    double sum = 0;\n    for (int price : prices) {\n        sum += price;\n    }\n    return sum;\n}\n\ndouble apply_discount(double total) {\n    if (total > 1000) {\n        return total * 0.9;\n    }\n    return total;\n}\n\ndouble add_tax(double amount) {\n    return amount * 1.08;\n}\n\nvoid final_amount(vector<int> prices, double &total, double &discounted, double &final_amt) {\n    total = calculate_total(prices);\n    discounted = apply_discount(total);\n    final_amt = add_tax(discounted);\n}\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    vector<int> item_prices;\n    int price;\n    while (ss >> price) {\n        item_prices.push_back(price);\n    }\n    \n    double total, after_discount, final_amt;\n    final_amount(item_prices, total, after_discount, final_amt);\n    \n    cout << \"Total: \" << total << endl;\n    cout << \"After Discount: \" << after_discount << endl;\n    cout << \"After Tax: \" << final_amt << endl;\n    cout << \"Final Amount: \" << final_amt << endl;\n    \n    return 0;\n}"
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