module.exports = {
  "title": "Dynamic Hotel Room Pricing",
  "difficulty": "hard",
  "acceptance": "63%",

  "description": `
    <p>A luxury hotel uses a smart pricing system that changes room prices based on different factors. Think of it like how airline tickets change price - the same room can cost different amounts depending on when you book and who you are!</p>
    
    <p><b>What the program needs to do:</b></p>
    <ul>
      <li>Read the <b>room type</b> (what kind of room you want)</li>
      <li>Read the <b>season</b> (busy time or quiet time)</li>
      <li>Read the <b>guest type</b> (are you a special member?)</li>
      <li>Read the <b>duration type</b> (weekend or weekday)</li>
      <li>Calculate the final price after applying all the rules</li>
    </ul>

    <p><b>How the hotel sets prices:</b></p>
    
    <p><b>1. Room Types (Base Prices):</b></p>
    <ul>
      <li>🏨 <b>Standard Room:</b> 2,000 per night (basic room)</li>
      <li>🏨 <b>Deluxe Room:</b> 3,500 per night (better room)</li>
      <li>🏨 <b>Suite:</b> 6,000 per night (best room)</li>
    </ul>

    <p><b>2. Season Multipliers:</b></p>
    <ul>
      <li>🌞 <b>Peak Season:</b> +50% more expensive (holiday times)</li>
      <li>🌧️ <b>Off-Peak Season:</b> Normal price (regular times)</li>
    </ul>

    <p><b>3. Guest Loyalty Discounts:</b></p>
    <ul>
      <li>👤 <b>Regular Guest:</b> No discount (first time visitor)</li>
      <li>👥 <b>Member:</b> 10% discount (hotel member)</li>
      <li>⭐ <b>VIP:</b> 20% discount (special member)</li>
    </ul>

    <p><b>4. Weekend Surcharge:</b></p>
    <ul>
      <li>🎉 <b>Weekend:</b> +20% more expensive (Friday-Sunday)</li>
      <li>📅 <b>Weekday:</b> Normal price (Monday-Thursday)</li>
    </ul>

    <p><b>How the calculation works step-by-step:</b></p>
    <ol>
      <li>Start with the base room price</li>
      <li>Add seasonal charge if it's peak season</li>
      <li>Add weekend charge if it's weekend</li>
      <li>Apply member discount at the end</li>
    </ol>

    <p><b>Simple Example:</b></p>
    <p>Deluxe Room (3,500) in Peak Season (+50%) for a Member (-10%) on Weekend (+20%)</p>
    <p>Calculation: 3500 × 1.5 = 5250 (season) → 5250 × 1.2 = 6300 (weekend) → 6300 × 0.9 = 5670 (member discount)</p>

    <p><b>What you'll learn:</b></p>
    <ul>
      <li>How to handle multiple pricing factors</li>
      <li>How to apply percentages and multipliers</li>
      <li>How to build a real-world business calculator</li>
      <li>How to organize complex calculations step by step</li>
    </ul>

    <p><b>Think of it like this:</b> You're the hotel manager deciding how much to charge different guests. The price changes like a recipe - you start with basic ingredients (room type) and add different spices (season, weekend, membership) to get the final price!</p>
  `,

  "examples": `
    <h3>Example 1: Deluxe Room, Peak Season, Member, Weekend</h3>
    <pre class="constraints">Input: Deluxe
Peak
Member
Weekend
Output: Final Price: 5670.00</pre>
    <p><b>Step-by-step calculation:</b></p>
    <ol>
      <li>Deluxe room base: 3,500</li>
      <li>Peak season: 3500 × 1.5 = 5,250</li>
      <li>Weekend: 5250 × 1.2 = 6,300</li>
      <li>Member discount: 6300 × 0.9 = 5,670</li>
    </ol>
    
    <h3>Example 2: Standard Room, Off-peak, Regular, Weekday</h3>
    <pre class="constraints">Input: Standard
Off-peak
Regular
Weekday
Output: Final Price: 2000.00</pre>
    <p><b>Why this price:</b> Standard room 2,000 with no extra charges or discounts - simplest case!</p>
    
    <h3>Example 3: Suite, Peak, VIP, Weekday</h3>
    <pre class="constraints">Input: Suite
Peak
VIP
Weekday
Output: Final Price: 7200.00</pre>
    <p><b>Calculation:</b> Suite 6,000 → Peak: 6000 × 1.5 = 9,000 → VIP discount: 9000 × 0.8 = 7,200</p>

    <h3>Example 4: Deluxe, Off-peak, Member, Weekend</h3>
    <pre class="constraints">Input: Deluxe
Off-peak
Member
Weekend
Output: Final Price: 3780.00</pre>
    <p><b>Calculation:</b> Deluxe 3,500 → Weekend: 3500 × 1.2 = 4,200 → Member discount: 4200 × 0.9 = 3,780</p>
  `,

  "conditions": `
    <ul>
      <li>Room type: Must be <code>"Standard"</code> , <code>"Deluxe"</code> , or <code>"Suite"</code></li>
      <li>Season: Must be <code>"Peak"</code> or <code>"Off-peak"</code></li>
      <li>Guest type: Must be <code>"Regular"</code> , <code>"Member"</code>, or <code>"VIP"</code></li>
      <li>Duration: Must be <code>"Weekday"</code> or <code>"Weekend"</code></li>
      
      <li><b>Base Prices:</b></li>
      <ul>
        <li>Standard Room: 2,000</li>
        <li>Deluxe Room: 3,500</li>
        <li>Suite: 6,000</li>
      </ul>
      
      <li><b>Multipliers:</b></li>
      <ul>
        <li>Peak Season: ×1.5 (+50%)</li>
        <li>Off-Peak Season: ×1.0 (no change)</li>
        <li>Weekend: ×1.2 (+20%)</li>
        <li>Weekday: ×1.0 (no change)</li>
      </ul>
      
      <li><b>Discounts:</b></li>
      <ul>
        <li>Regular: ×1.0 (no discount)</li>
        <li>Member: ×0.9 (10% discount)</li>
        <li>VIP: ×0.8 (20% discount)</li>
      </ul>
      
      <li><b>Calculation Order:</b></li>
      <ol>
        <li>Start with base room price</li>
        <li>Apply season multiplier</li>
        <li>Apply weekend multiplier</li>
        <li>Apply guest discount last</li>
      </ol>
      
      <li>Output format: "Final Price: X.XX" with 2 decimal places</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Final Price: 5670.00", "stdinput": "Deluxe\nPeak\nMember\nWeekend" },
    { "id": 2, "input": [], "expected": "Final Price: 2000.00", "stdinput": "Standard\nOff-peak\nRegular\nWeekday" },
    { "id": 3, "input": [], "expected": "Final Price: 7200.00", "stdinput": "Suite\nPeak\nVIP\nWeekday" },
    { "id": 4, "input": [], "expected": "Final Price: 3780.00", "stdinput": "Deluxe\nOff-peak\nMember\nWeekend" },
    { "id": 5, "input": [], "expected": "Final Price: 9000.00", "stdinput": "Suite\nPeak\nRegular\nWeekday" },
    { "id": 6, "input": [], "expected": "Final Price: 2400.00", "stdinput": "Standard\nOff-peak\nRegular\nWeekend" },
    { "id": 8, "input": [], "expected": "Final Price: 1600.00", "stdinput": "Standard\nOff-peak\nVIP\nWeekday" },
    { "id": 10, "input": [], "expected": "Final Price: 8640.00", "stdinput": "Suite\nPeak\nVIP\nWeekend" }
  ],

  "templates": {
    "python": "room_type = input()\nseason = input()\nguest_type = input()\nduration = input()\n\n# Base price based on room type\nif room_type == \"Standard\":\n    base_price = 2000\nelif room_type == \"Deluxe\":\n    base_price = 3500\nelse:  # Suite\n    base_price = 6000\n\n# Seasonal pricing\nif season == \"Peak\":\n    base_price *= 1.5\n\n# Weekend surcharge\nif duration == \"Weekend\":\n    base_price *= 1.2\n\n# Guest type discount\nif guest_type == \"Member\":\n    discount = 0.10\nelif guest_type == \"VIP\":\n    discount = 0.20\nelse:\n    discount = 0\n\n# Apply discount and calculate final price\nfinal_price = base_price * (1 - discount)\n\nprint(f\"Final Price: {final_price:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String room_type = scanner.nextLine();\n        String season = scanner.nextLine();\n        String guest_type = scanner.nextLine();\n        String duration = scanner.nextLine();\n        \n        double base_price;\n        \n        // Base price based on room type\n        if (room_type.equals(\"Standard\")) {\n            base_price = 2000;\n        } else if (room_type.equals(\"Deluxe\")) {\n            base_price = 3500;\n        } else {\n            base_price = 6000;\n        }\n        \n        // Seasonal pricing\n        if (season.equals(\"Peak\")) {\n            base_price *= 1.5;\n        }\n        \n        // Weekend surcharge\n        if (duration.equals(\"Weekend\")) {\n            base_price *= 1.2;\n        }\n        \n        // Guest type discount\n        double discount;\n        if (guest_type.equals(\"Member\")) {\n            discount = 0.10;\n        } else if (guest_type.equals(\"VIP\")) {\n            discount = 0.20;\n        } else {\n            discount = 0;\n        }\n        \n        // Apply discount and calculate final price\n        double final_price = base_price * (1 - discount);\n        \n        System.out.printf(\"Final Price: %.2f\\n\", final_price);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 4) {\n        const room_type = input[0];\n        const season = input[1];\n        const guest_type = input[2];\n        const duration = input[3];\n        \n        let base_price;\n        \n        // Base price based on room type\n        if (room_type === \"Standard\") {\n            base_price = 2000;\n        } else if (room_type === \"Deluxe\") {\n            base_price = 3500;\n        } else {\n            base_price = 6000;\n        }\n        \n        // Seasonal pricing\n        if (season === \"Peak\") {\n            base_price *= 1.5;\n        }\n        \n        // Weekend surcharge\n        if (duration === \"Weekend\") {\n            base_price *= 1.2;\n        }\n        \n        // Guest type discount\n        let discount;\n        if (guest_type === \"Member\") {\n            discount = 0.10;\n        } else if (guest_type === \"VIP\") {\n            discount = 0.20;\n        } else {\n            discount = 0;\n        }\n        \n        // Apply discount and calculate final price\n        const final_price = base_price * (1 - discount);\n        \n        console.log(`Final Price: ${final_price.toFixed(2)}`);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    std::string room_type, season, guest_type, duration;\n    std::cin >> room_type >> season >> guest_type >> duration;\n    \n    double base_price;\n    \n    // Base price based on room type\n    if (room_type == \"Standard\") {\n        base_price = 2000;\n    } else if (room_type == \"Deluxe\") {\n        base_price = 3500;\n    } else {\n        base_price = 6000;\n    }\n    \n    // Seasonal pricing\n    if (season == \"Peak\") {\n        base_price *= 1.5;\n    }\n    \n    // Weekend surcharge\n    if (duration == \"Weekend\") {\n        base_price *= 1.2;\n    }\n    \n    // Guest type discount\n    double discount;\n    if (guest_type == \"Member\") {\n        discount = 0.10;\n    } else if (guest_type == \"VIP\") {\n        discount = 0.20;\n    } else {\n        discount = 0;\n    }\n    \n    // Apply discount and calculate final price\n    double final_price = base_price * (1 - discount);\n    \n    std::cout << \"Final Price: \" << std::fixed << std::setprecision(2) << final_price << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "room_type = input()\nseason = input()\nguest_type = input()\nduration = input()\n\n# Base price based on room type\nif room_type == \"Standard\":\n    base_price = 2000\nelif room_type == \"Deluxe\":\n    base_price = 3500\nelse:  # Suite\n    base_price = 6000\n\n# Seasonal pricing\nif season == \"Peak\":\n    base_price *= 1.5\n\n# Weekend surcharge\nif duration == \"Weekend\":\n    base_price *= 1.2\n\n# Guest type discount\nif guest_type == \"Member\":\n    discount = 0.10\nelif guest_type == \"VIP\":\n    discount = 0.20\nelse:\n    discount = 0\n\n# Apply discount and calculate final price\nfinal_price = base_price * (1 - discount)\n\nprint(f\"Final Price: {final_price:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String room_type = scanner.nextLine();\n        String season = scanner.nextLine();\n        String guest_type = scanner.nextLine();\n        String duration = scanner.nextLine();\n        \n        double base_price;\n        \n        // Base price based on room type\n        if (room_type.equals(\"Standard\")) {\n            base_price = 2000;\n        } else if (room_type.equals(\"Deluxe\")) {\n            base_price = 3500;\n        } else {\n            base_price = 6000;\n        }\n        \n        // Seasonal pricing\n        if (season.equals(\"Peak\")) {\n            base_price *= 1.5;\n        }\n        \n        // Weekend surcharge\n        if (duration.equals(\"Weekend\")) {\n            base_price *= 1.2;\n        }\n        \n        // Guest type discount\n        double discount;\n        if (guest_type.equals(\"Member\")) {\n            discount = 0.10;\n        } else if (guest_type.equals(\"VIP\")) {\n            discount = 0.20;\n        } else {\n            discount = 0;\n        }\n        \n        // Apply discount and calculate final price\n        double final_price = base_price * (1 - discount);\n        \n        System.out.printf(\"Final Price: %.2f\\n\", final_price);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 4) {\n        const room_type = input[0];\n        const season = input[1];\n        const guest_type = input[2];\n        const duration = input[3];\n        \n        let base_price;\n        \n        // Base price based on room type\n        if (room_type === \"Standard\") {\n            base_price = 2000;\n        } else if (room_type === \"Deluxe\") {\n            base_price = 3500;\n        } else {\n            base_price = 6000;\n        }\n        \n        // Seasonal pricing\n        if (season === \"Peak\") {\n            base_price *= 1.5;\n        }\n        \n        // Weekend surcharge\n        if (duration === \"Weekend\") {\n            base_price *= 1.2;\n        }\n        \n        // Guest type discount\n        let discount;\n        if (guest_type === \"Member\") {\n            discount = 0.10;\n        } else if (guest_type === \"VIP\") {\n            discount = 0.20;\n        } else {\n            discount = 0;\n        }\n        \n        // Apply discount and calculate final price\n        const final_price = base_price * (1 - discount);\n        \n        console.log(`Final Price: ${final_price.toFixed(2)}`);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <string>\n\nint main() {\n    std::string room_type, season, guest_type, duration;\n    std::cin >> room_type >> season >> guest_type >> duration;\n    \n    double base_price;\n    \n    // Base price based on room type\n    if (room_type == \"Standard\") {\n        base_price = 2000;\n    } else if (room_type == \"Deluxe\") {\n        base_price = 3500;\n    } else {\n        base_price = 6000;\n    }\n    \n    // Seasonal pricing\n    if (season == \"Peak\") {\n        base_price *= 1.5;\n    }\n    \n    // Weekend surcharge\n    if (duration == \"Weekend\") {\n        base_price *= 1.2;\n    }\n    \n    // Guest type discount\n    double discount;\n    if (guest_type == \"Member\") {\n        discount = 0.10;\n    } else if (guest_type == \"VIP\") {\n        discount = 0.20;\n    } else {\n        discount = 0;\n    }\n    \n    // Apply discount and calculate final price\n    double final_price = base_price * (1 - discount);\n    \n    std::cout << \"Final Price: \" << std::fixed << std::setprecision(2) << final_price << std::endl;\n    return 0;\n}"
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