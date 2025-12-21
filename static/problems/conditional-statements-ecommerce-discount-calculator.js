module.exports = {
  "title": "E-commerce Discount Calculator",
  "difficulty": "hard",
  "acceptance": "59%",

  "description": `
    <p>An e-commerce platform uses a smart discount system that gives multiple discounts based on how much you buy, your membership level, and special promotions. Think of it like getting discounts on discounts - the more you qualify for, the more you save!</p>
    
    <p><b>What the program needs to do:</b></p>
    <ul>
      <li>Read the <b>cart value</b> (total amount of items in your shopping cart)</li>
      <li>Read your <b>membership type</b> (what level of customer you are)</li>
      <li>Read if there's a <b>seasonal promotion</b> (special sale going on)</li>
      <li>Calculate the final price after applying all discounts one by one</li>
    </ul>

    <p><b>How the discount system works:</b></p>
    
    <p><b>1. Cart Value Discount (Based on how much you spend):</b></p>
    <ul>
      <li>🛒 <b>Above 10,000:</b> 15% discount (big spender discount)</li>
      <li>🛒 <b>5,000 - 10,000:</b> 10% discount (medium spender discount)</li>
      <li>🛒 <b>2,000 - 5,000:</b> 5% discount (small spender discount)</li>
      <li>🛒 <b>Below 2,000:</b> No discount (buy more to save more!)</li>
    </ul>

    <p><b>2. Membership Discount (Based on customer loyalty):</b></p>
    <ul>
      <li>🥇 <b>Gold:</b> Additional 10% discount (best customers)</li>
      <li>🥈 <b>Silver:</b> Additional 5% discount (good customers)</li>
      <li>👤 <b>Regular:</b> No additional discount (new customers)</li>
    </ul>

    <p><b>3. Seasonal Promotion (Special sales):</b></p>
    <ul>
      <li>🎉 <b>Active:</b> Additional 5% discount (sale time!)</li>
      <li>📅 <b>Not Active:</b> Standard pricing (regular days)</li>
    </ul>

    <p><b>Important Rule:</b> Discounts are applied in sequence, not all at once!</p>
    <p><b>Calculation Order:</b></p>
    <ol>
      <li>First apply cart value discount</li>
      <li>Then apply membership discount on the reduced price</li>
      <li>Finally apply seasonal discount on the further reduced price</li>
    </ol>

    <p><b>Simple Example:</b></p>
    <p>Cart: 12,000, Gold Member, Seasonal Promotion "yes"</p>
    <p>Step 1: 12000 × 0.85 = 10,200 (15% cart discount)</p>
    <p>Step 2: 10200 × 0.90 = 9,180 (10% Gold member discount)</p>
    <p>Step 3: 9180 × 0.95 = 8,721 (5% seasonal discount)</p>

    <p><b>What you'll learn:</b></p>
    <ul>
      <li>How to apply multiple discounts sequentially</li>
      <li>How to calculate percentages step by step</li>
      <li>How to build realistic e-commerce pricing logic</li>
      <li>How to handle different customer categories</li>
    </ul>

    <p><b>Think of it like this:</b> You're shopping during a big sale. First you get a discount for buying a lot, then an extra discount for being a loyal customer, and finally a special sale discount. Each discount applies to the already reduced price!</p>
  `,

  "examples": `
    <h3>Example 1: High Cart Value, Gold Member, Seasonal Sale</h3>
    <pre class="constraints">Input: 
12000
Gold
yes
Output: Final Price: 8721.00</pre>
    <p><b>Step-by-step calculation:</b></p>
    <ol>
      <li>Cart 12,000 → 15% discount: 12000 × 0.85 = 10,200</li>
      <li>Gold member → 10% discount: 10200 × 0.90 = 9,180</li>
      <li>Seasonal → 5% discount: 9180 × 0.95 = 8,721</li>
    </ol>
    
    <h3>Example 2: Medium Cart Value, Silver Member, No Sale</h3>
    <pre class="constraints">Input: 
8000
Silver
no
Output: Final Price: 6840.00</pre>
    <p><b>Calculation:</b> 8000 × 0.90 = 7,200 (10% cart) → 7200 × 0.95 = 6,840 (5% Silver)</p>
    
    <h3>Example 3: Low Cart Value, Regular Customer, Seasonal Sale</h3>
    <pre class="constraints">Input: 
1500
Regular
yes
Output: Final Price: 1425.00</pre>
    <p><b>Why this price:</b> Cart 1,500 (no cart discount) → Regular (no member discount) → Seasonal: 1500 × 0.95 = 1,425</p>

    <h3>Example 4: High Cart Value, Regular Customer, No Sale</h3>
    <pre class="constraints">Input: 
15000
Regular
no
Output: Final Price: 12750.00</pre>
    <p><b>Calculation:</b> 15000 × 0.85 = 12,750 (only cart discount applies)</p>
  `,

  "conditions": `
    <ul>
      <li>Cart value: Positive number up to 1,00,000</li>
      <li>Membership type: Must be "Gold", "Silver", or "Regular"</li>
      <li>Seasonal promotion: Must be "yes" or "no"</li>
      
      <li><b>Cart Value Discounts:</b></li>
      <ul>
        <li>Above 10,000: 15% discount (×0.85)</li>
        <li>5,000 - 10,000: 10% discount (×0.90)</li>
        <li>2,000 - 5,000: 5% discount (×0.95)</li>
        <li>Below 2,000: No discount (×1.0)</li>
      </ul>
      
      <li><b>Membership Discounts:</b></li>
      <ul>
        <li>Gold: 10% discount (×0.90)</li>
        <li>Silver: 5% discount (×0.95)</li>
        <li>Regular: No discount (×1.0)</li>
      </ul>
      
      <li><b>Seasonal Discount:</b></li>
      <ul>
        <li>Active: 5% discount (×0.95)</li>
        <li>Not active: No discount (×1.0)</li>
      </ul>
      
      <li><b>Important Calculation Rule:</b></li>
      <ol>
        <li>First apply cart value discount to original price</li>
        <li>Then apply membership discount to the result</li>
        <li>Finally apply seasonal discount to that result</li>
        <li>DO NOT add all discounts together and apply at once</li>
      </ol>
      
      <li>Output format: "Final Price: X.XX" with 2 decimal places</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Final Price: 8721.00", "stdinput": "12000\nGold\nyes" },
    { "id": 2, "input": [], "expected": "Final Price: 6840.00", "stdinput": "8000\nSilver\nno" },
    { "id": 3, "input": [], "expected": "Final Price: 1425.00", "stdinput": "1500\nRegular\nyes" },
    { "id": 4, "input": [], "expected": "Final Price: 12750.00", "stdinput": "15000\nRegular\nno" },
    { "id": 5, "input": [], "expected": "Final Price: 6480.00", "stdinput": "8000\nGold\nno" },
    { "id": 6, "input": [], "expected": "Final Price: 2572.12", "stdinput": "3000\nSilver\nyes" },
    { "id": 7, "input": [], "expected": "Final Price: 6925.50", "stdinput": "9000\nGold\nyes" },
    { "id": 8, "input": [], "expected": "Final Price: 1714.75", "stdinput": "2000\nSilver\nyes" },
    { "id": 9, "input": [], "expected": "Final Price: 8100.00", "stdinput": "10000\nGold\nno" },
    { "id": 10, "input": [], "expected": "Final Price: 4873.50", "stdinput": "6000\nSilver\nyes" }
  ],

  "templates": {
    "python": "cart_value = float(input())\nmember_type = input()\nseasonal_offer = input()\n\n# Cart value discount\nif cart_value > 10000:\n    discount1 = 0.15\nelif cart_value >= 5000:\n    discount1 = 0.10\nelif cart_value >= 2000:\n    discount1 = 0.05\nelse:\n    discount1 = 0\n\n# Member discount\nif member_type == \"Gold\":\n    discount2 = 0.10\nelif member_type == \"Silver\":\n    discount2 = 0.05\nelse:\n    discount2 = 0\n\n# Seasonal discount\nif seasonal_offer == \"yes\":\n    discount3 = 0.05\nelse:\n    discount3 = 0\n\n# Calculate final price with sequential discounts\nprice_after_discount1 = cart_value * (1 - discount1)\nprice_after_discount2 = price_after_discount1 * (1 - discount2)\nfinal_price = price_after_discount2 * (1 - discount3)\n\nprint(f\"Final Price: {final_price:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double cart_value = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String member_type = scanner.nextLine();\n        String seasonal_offer = scanner.nextLine();\n        \n        double discount1, discount2, discount3;\n        \n        // Cart value discount\n        if (cart_value > 10000) {\n            discount1 = 0.15;\n        } else if (cart_value >= 5000) {\n            discount1 = 0.10;\n        } else if (cart_value >= 2000) {\n            discount1 = 0.05;\n        } else {\n            discount1 = 0;\n        }\n        \n        // Member discount\n        if (member_type.equals(\"Gold\")) {\n            discount2 = 0.10;\n        } else if (member_type.equals(\"Silver\")) {\n            discount2 = 0.05;\n        } else {\n            discount2 = 0;\n        }\n        \n        // Seasonal discount\n        if (seasonal_offer.equals(\"yes\")) {\n            discount3 = 0.05;\n        } else {\n            discount3 = 0;\n        }\n        \n        // Calculate final price with sequential discounts\n        double price_after_discount1 = cart_value * (1 - discount1);\n        double price_after_discount2 = price_after_discount1 * (1 - discount2);\n        double final_price = price_after_discount2 * (1 - discount3);\n        \n        System.out.printf(\"Final Price: %.2f\\n\", final_price);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const cart_value = parseFloat(input[0]);\n        const member_type = input[1];\n        const seasonal_offer = input[2];\n        \n        let discount1, discount2, discount3;\n        \n        // Cart value discount\n        if (cart_value > 10000) {\n            discount1 = 0.15;\n        } else if (cart_value >= 5000) {\n            discount1 = 0.10;\n        } else if (cart_value >= 2000) {\n            discount1 = 0.05;\n        } else {\n            discount1 = 0;\n        }\n        \n        // Member discount\n        if (member_type === \"Gold\") {\n            discount2 = 0.10;\n        } else if (member_type === \"Silver\") {\n            discount2 = 0.05;\n        } else {\n            discount2 = 0;\n        }\n        \n        // Seasonal discount\n        if (seasonal_offer === \"yes\") {\n            discount3 = 0.05;\n        } else {\n            discount3 = 0;\n        }\n        \n        // Calculate final price with sequential discounts\n        const price_after_discount1 = cart_value * (1 - discount1);\n        const price_after_discount2 = price_after_discount1 * (1 - discount2);\n        const final_price = price_after_discount2 * (1 - discount3);\n        \n        console.log(`Final Price: ${final_price.toFixed(2)}`);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    double cart_value;\n    std::string member_type, seasonal_offer;\n    std::cin >> cart_value >> member_type >> seasonal_offer;\n    \n    double discount1, discount2, discount3;\n    \n    // Cart value discount\n    if (cart_value > 10000) {\n        discount1 = 0.15;\n    } else if (cart_value >= 5000) {\n        discount1 = 0.10;\n    } else if (cart_value >= 2000) {\n        discount1 = 0.05;\n    } else {\n        discount1 = 0;\n    }\n    \n    // Member discount\n    if (member_type == \"Gold\") {\n        discount2 = 0.10;\n    } else if (member_type == \"Silver\") {\n        discount2 = 0.05;\n    } else {\n        discount2 = 0;\n    }\n    \n    // Seasonal discount\n    if (seasonal_offer == \"yes\") {\n        discount3 = 0.05;\n    } else {\n        discount3 = 0;\n    }\n    \n    // Calculate final price with sequential discounts\n    double price_after_discount1 = cart_value * (1 - discount1);\n    double price_after_discount2 = price_after_discount1 * (1 - discount2);\n    double final_price = price_after_discount2 * (1 - discount3);\n    \n    std::cout << \"Final Price: \" << std::fixed << std::setprecision(2) << final_price << std::endl;\n    return 0;\n}"
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