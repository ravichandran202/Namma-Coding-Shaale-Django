module.exports =  {
  "title": "Complete Indian Currency Calculator",
  "difficulty": "hard",
  "acceptance": "99.3%",

  "description": `
  <p>You are working on a billing system that needs to return change to customers using the minimum number of currency notes and coins.  
  Your task is to break down a given amount into standard Indian denominations.</p>

  <p><b>Denominations:</b> ₹2000, ₹500, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1</p>

  <p><b>Requirements:</b></p>
  <ul>
    <li>Read an integer amount as input</li>
    <li>Calculate how many notes and coins of each denomination are required</li>
    <li>Use only arithmetic operations (division and modulus)</li>
    <li>Output the count of each denomination</li>
    <li>Output the total number of notes and coins used</li>
  </ul>

  <p>This problem simulates real-world financial software logic such as ATM cash dispensing, POS billing systems, and digital wallets where currency breakdown calculation is essential.</p>
`,

  "examples": `
  <pre class="constraints">Input: 85
  
Output:
₹2000 notes: 0
₹500 notes: 0
₹100 notes: 0
₹50 notes: 1
₹20 notes: 1
₹10 coins: 1
₹5 coins: 1
₹2 coins: 0
₹1 coins: 0
Total notes/coins: 4
</pre>

<div>
  <p><b>Example Explained: Input = ₹85</b></p>
  <p>
    This example demonstrates how the amount is broken down step-by-step using the largest possible denominations first.  
    Even though ₹85 is a small amount, it still uses multiple different currency types — ₹50, ₹20, ₹10, and ₹5 — showing clearly how the greedy division and modulus logic works.
  </p>

  <ul>
    <li><b>₹50 note:</b> We can take one ₹50 note (remaining: ₹35)</li>
    <li><b>₹20 note:</b> From the remaining amount, one ₹20 note fits (remaining: ₹15)</li>
    <li><b>₹10 coin:</b> Next, one ₹10 coin is taken (remaining: ₹5)</li>
    <li><b>₹5 coin:</b> Finally, one ₹5 coin completes the amount (remaining: ₹0)</li>
  </ul>

  <p>
    Larger notes like ₹2000, ₹500, and ₹100 are not used because the amount isn’t big enough.  
    This example helps students understand how the breakdown covers all types of denominations — starting from the highest and going down to the smallest.
  </p>
</div>

    
    <h3>Example 2</h3>
<pre class="constraints">Input: 2688

Output:
₹2000 notes: 1
₹500 notes: 1
₹100 notes: 1
₹50 notes: 1
₹20 notes: 1
₹10 coins: 1
₹5 coins: 1
₹2 coins: 1
₹1 coins: 1
Total notes/coins: 9
</pre>


<div>
<p><b>Example Explained: Input = ₹2668</b></p>
  <p>
    This example is perfect for showing how <b>every single currency denomination</b> is used.  
    The amount is large enough that the breakdown touches all notes and coins — from ₹2000 down to ₹1.
  </p>

  <ul>
    <li><b>₹2000 note:</b> We first take one ₹2000 note (remaining: ₹688)</li>
    <li><b>₹500 note:</b> From the remaining amount, one ₹500 note fits (remaining: ₹188)</li>
    <li><b>₹100 note:</b> Next, one ₹100 note is taken (remaining: ₹88)</li>
    <li><b>₹50 note:</b> One ₹50 note fits (remaining: ₹38)</li>
    <li><b>₹20 note:</b> One ₹20 note fits (remaining: ₹18)</li>
    <li><b>₹10 coin:</b> One ₹10 coin is used (remaining: ₹8)</li>
    <li><b>₹5 coin:</b> One ₹5 coin fits (remaining: ₹3)</li>
    <li><b>₹2 coin:</b> One ₹2 coin fits (remaining: ₹1)</li>
    <li><b>₹1 coin:</b> Finally, one ₹1 coin completes the exact amount</li>
  </ul>

  <p>
    This breakdown demonstrates a real-life scenario where the greedy method hits <b>every available Indian currency denomination</b>.  
    It clearly shows why division (<code>//</code>) and modulus (<code>%</code>) are essential for currency decomposition logic.
  </p>
</div>

  `,


  "conditions": `
    <ul>
      <li>Amount will be a positive integer between 1 and 100000</li>
      <li>Must use division and modulus operations</li>
      <li>Output must follow the exact format shown in examples</li>
      <li>Include all denominations from ₹2000 to ₹1</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 1\n₹20 notes: 1\n₹10 coins: 1\n₹5 coins: 1\n₹2 coins: 0\n₹1 coins: 0\nTotal notes/coins: 4", "stdinput": "85" },

    { "id": 2, "input": [], "expected": "₹2000 notes: 1\n₹500 notes: 1\n₹100 notes: 1\n₹50 notes: 1\n₹20 notes: 1\n₹10 coins: 1\n₹5 coins: 1\n₹2 coins: 1\n₹1 coins: 1\nTotal notes/coins: 9", "stdinput": "2688" },

    { "id": 3, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 0\n₹1 coins: 0\nTotal notes/coins: 0", "stdinput": "0" },

    { "id": 4, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 0\n₹1 coins: 1\nTotal notes/coins: 1", "stdinput": "1" },
  
    { "id": 5, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 1\n₹1 coins: 1\nTotal notes/coins: 2", "stdinput": "3" },
  
    { "id": 6, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 1\n₹2 coins: 0\n₹1 coins: 0\nTotal notes/coins: 1", "stdinput": "5" },
  
    { "id": 7, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 0\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 1\n₹5 coins: 0\n₹2 coins: 0\n₹1 coins: 0\nTotal notes/coins: 1", "stdinput": "10" },
  
    { "id": 8, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 3\n₹100 notes: 4\n₹50 notes: 0\n₹20 notes: 2\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 0\n₹1 coins: 1\nTotal notes/coins: 10", "stdinput": "1941" },
  
    { "id": 9, "input": [], "expected": "₹2000 notes: 1\n₹500 notes: 1\n₹100 notes: 2\n₹50 notes: 1\n₹20 notes: 2\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 2\n₹1 coins: 0\nTotal notes/coins: 9", "stdinput": "2794" },
  
    { "id": 10, "input": [], "expected": "₹2000 notes: 0\n₹500 notes: 1\n₹100 notes: 1\n₹50 notes: 1\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 2\n₹1 coins: 0\nTotal notes/coins: 5", "stdinput": "654" },
  
    { "id": 11, "input": [], "expected": "₹2000 notes: 49\n₹500 notes: 3\n₹100 notes: 0\n₹50 notes: 0\n₹20 notes: 0\n₹10 coins: 0\n₹5 coins: 0\n₹2 coins: 0\n₹1 coins: 0\nTotal notes/coins: 52", "stdinput": "99500" },
  ],

  "templates": {
    "python": `amount = int(input())\n\nnotes_2000 = amount // 2000\namount %= 2000\n\nnotes_500 = amount // 500\namount %= 500\n\nnotes_100 = amount // 100\namount %= 100\n\nnotes_50 = amount // 50\namount %= 50\n\nnotes_20 = amount // 20\namount %= 20\n\ncoins_10 = amount // 10\namount %= 10\n\ncoins_5 = amount // 5\namount %= 5\n\ncoins_2 = amount // 2\ncoins_1 = amount % 2\n\ntotal = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1\n\nprint(f"₹2000 notes: {notes_2000}")\nprint(f"₹500 notes: {notes_500}")\nprint(f"₹100 notes: {notes_100}")\nprint(f"₹50 notes: {notes_50}")\nprint(f"₹20 notes: {notes_20}")\nprint(f"₹10 coins: {coins_10}")\nprint(f"₹5 coins: {coins_5}")\nprint(f"₹2 coins: {coins_2}")\nprint(f"₹1 coins: {coins_1}")\nprint(f"Total notes/coins: {total}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int amount = scanner.nextInt();\n        \n        int notes_2000 = amount / 2000;\n        amount %= 2000;\n        \n        int notes_500 = amount / 500;\n        amount %= 500;\n        \n        int notes_100 = amount / 100;\n        amount %= 100;\n        \n        int notes_50 = amount / 50;\n        amount %= 50;\n        \n        int notes_20 = amount / 20;\n        amount %= 20;\n        \n        int coins_10 = amount / 10;\n        amount %= 10;\n        \n        int coins_5 = amount / 5;\n        amount %= 5;\n        \n        int coins_2 = amount / 2;\n        int coins_1 = amount % 2;\n        \n        int total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n        \n        System.out.println(\"₹2000 notes: \" + notes_2000);\n        System.out.println(\"₹500 notes: \" + notes_500);\n        System.out.println(\"₹100 notes: \" + notes_100);\n        System.out.println(\"₹50 notes: \" + notes_50);\n        System.out.println(\"₹20 notes: \" + notes_20);\n        System.out.println(\"₹10 coins: \" + coins_10);\n        System.out.println(\"₹5 coins: \" + coins_5);\n        System.out.println(\"₹2 coins: \" + coins_2);\n        System.out.println(\"₹1 coins: \" + coins_1);\n        System.out.println(\"Total notes/coins: \" + total);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (amount) => {\n    let amt = parseInt(amount);\n    \n    const notes_2000 = Math.floor(amt / 2000);\n    amt %= 2000;\n    \n    const notes_500 = Math.floor(amt / 500);\n    amt %= 500;\n    \n    const notes_100 = Math.floor(amt / 100);\n    amt %= 100;\n    \n    const notes_50 = Math.floor(amt / 50);\n    amt %= 50;\n    \n    const notes_20 = Math.floor(amt / 20);\n    amt %= 20;\n    \n    const coins_10 = Math.floor(amt / 10);\n    amt %= 10;\n    \n    const coins_5 = Math.floor(amt / 5);\n    amt %= 5;\n    \n    const coins_2 = Math.floor(amt / 2);\n    const coins_1 = amt % 2;\n    \n    const total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n    \n    console.log(\"₹2000 notes: \" + notes_2000);\n    console.log(\"₹500 notes: \" + notes_500);\n    console.log(\"₹100 notes: \" + notes_100);\n    console.log(\"₹50 notes: \" + notes_50);\n    console.log(\"₹20 notes: \" + notes_20);\n    console.log(\"₹10 coins: \" + coins_10);\n    console.log(\"₹5 coins: \" + coins_5);\n    console.log(\"₹2 coins: \" + coins_2);\n    console.log(\"₹1 coins: \" + coins_1);\n    console.log(\"Total notes/coins: \" + total);\n    \n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int amount;\n    std::cin >> amount;\n    \n    int notes_2000 = amount / 2000;\n    amount %= 2000;\n    \n    int notes_500 = amount / 500;\n    amount %= 500;\n    \n    int notes_100 = amount / 100;\n    amount %= 100;\n    \n    int notes_50 = amount / 50;\n    amount %= 50;\n    \n    int notes_20 = amount / 20;\n    amount %= 20;\n    \n    int coins_10 = amount / 10;\n    amount %= 10;\n    \n    int coins_5 = amount / 5;\n    amount %= 5;\n    \n    int coins_2 = amount / 2;\n    int coins_1 = amount % 2;\n    \n    int total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n    \n    std::cout << \"₹2000 notes: \" << notes_2000 << std::endl;\n    std::cout << \"₹500 notes: \" << notes_500 << std::endl;\n    std::cout << \"₹100 notes: \" << notes_100 << std::endl;\n    std::cout << \"₹50 notes: \" << notes_50 << std::endl;\n    std::cout << \"₹20 notes: \" << notes_20 << std::endl;\n    std::cout << \"₹10 coins: \" << coins_10 << std::endl;\n    std::cout << \"₹5 coins: \" << coins_5 << std::endl;\n    std::cout << \"₹2 coins: \" << coins_2 << std::endl;\n    std::cout << \"₹1 coins: \" << coins_1 << std::endl;\n    std::cout << \"Total notes/coins: \" << total << std::endl;\n    \n    return 0;\n}`
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