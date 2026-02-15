module.exports = {
  "title": "Hello World",
  "difficulty": "easy",

  "description": `
      <p>Write a program that prints <code>Hello, World!</code> to the console.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>The program should output exactly <code>Hello, World!</code> (<b>without quotes</b>)</li>
        <li>This is the traditional first program for beginners learning a new programming language</li>
      </ul>
      <p>This problem tests basic output functionality and serves as an introduction to programming syntax.</p>
    `,

  "examples": `
      <h2>Example</h2>
      When you run the program, it should display:
      <pre class="constraints">
  Hello, World!</pre>
    `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Hello, World!", "stdinput": "" }
  ],

  "templates": {
    "python": `print("Hello, World!")`,
    "java": `public class Main {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`,
    "javascript": `console.log("Hello, World!");`,
    "c++": `#include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }`
  },

  "solutions": {
    "python": `amount = int(input())\n\nnotes_2000 = amount // 2000\namount %= 2000\n\nnotes_500 = amount // 500\namount %= 500\n\nnotes_100 = amount // 100\namount %= 100\n\nnotes_50 = amount // 50\namount %= 50\n\nnotes_20 = amount // 20\namount %= 20\n\ncoins_10 = amount // 10\namount %= 10\n\ncoins_5 = amount // 5\namount %= 5\n\ncoins_2 = amount // 2\ncoins_1 = amount % 2\n\ntotal = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1\n\nprint(f"₹2000 notes: {notes_2000}")\nprint(f"₹500 notes: {notes_500}")\nprint(f"₹100 notes: {notes_100}")\nprint(f"₹50 notes: {notes_50}")\nprint(f"₹20 notes: {notes_20}")\nprint(f"₹10 coins: {coins_10}")\nprint(f"₹5 coins: {coins_5}")\nprint(f"₹2 coins: {coins_2}")\nprint(f"₹1 coins: {coins_1}")\nprint(f"Total notes/coins: {total}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int amount = scanner.nextInt();\n        \n        int notes_2000 = amount / 2000;\n        amount %= 2000;\n        \n        int notes_500 = amount / 500;\n        amount %= 500;\n        \n        int notes_100 = amount / 100;\n        amount %= 100;\n        \n        int notes_50 = amount / 50;\n        amount %= 50;\n        \n        int notes_20 = amount / 20;\n        amount %= 20;\n        \n        int coins_10 = amount / 10;\n        amount %= 10;\n        \n        int coins_5 = amount / 5;\n        amount %= 5;\n        \n        int coins_2 = amount / 2;\n        int coins_1 = amount % 2;\n        \n        int total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n        \n        System.out.println(\"₹2000 notes: \" + notes_2000);\n        System.out.println(\"₹500 notes: \" + notes_500);\n        System.out.println(\"₹100 notes: \" + notes_100);\n        System.out.println(\"₹50 notes: \" + notes_50);\n        System.out.println(\"₹20 notes: \" + notes_20);\n        System.out.println(\"₹10 coins: \" + coins_10);\n        System.out.println(\"₹5 coins: \" + coins_5);\n        System.out.println(\"₹2 coins: \" + coins_2);\n        System.out.println(\"₹1 coins: \" + coins_1);\n        System.out.println(\"Total notes/coins: \" + total);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (amount) => {\n    let amt = parseInt(amount);\n    \n    const notes_2000 = Math.floor(amt / 2000);\n    amt %= 2000;\n    \n    const notes_500 = Math.floor(amt / 500);\n    amt %= 500;\n    \n    const notes_100 = Math.floor(amt / 100);\n    amt %= 100;\n    \n    const notes_50 = Math.floor(amt / 50);\n    amt %= 50;\n    \n    const notes_20 = Math.floor(amt / 20);\n    amt %= 20;\n    \n    const coins_10 = Math.floor(amt / 10);\n    amt %= 10;\n    \n    const coins_5 = Math.floor(amt / 5);\n    amt %= 5;\n    \n    const coins_2 = Math.floor(amt / 2);\n    const coins_1 = amt % 2;\n    \n    const total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n    \n    console.log(\"₹2000 notes: \" + notes_2000);\n    console.log(\"₹500 notes: \" + notes_500);\n    console.log(\"₹100 notes: \" + notes_100);\n    console.log(\"₹50 notes: \" + notes_50);\n    console.log(\"₹20 notes: \" + notes_20);\n    console.log(\"₹10 coins: \" + coins_10);\n    console.log(\"₹5 coins: \" + coins_5);\n    console.log(\"₹2 coins: \" + coins_2);\n    console.log(\"₹1 coins: \" + coins_1);\n    console.log(\"Total notes/coins: \" + total);\n    \n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int amount;\n    std::cin >> amount;\n    \n    int notes_2000 = amount / 2000;\n    amount %= 2000;\n    \n    int notes_500 = amount / 500;\n    amount %= 500;\n    \n    int notes_100 = amount / 100;\n    amount %= 100;\n    \n    int notes_50 = amount / 50;\n    amount %= 50;\n    \n    int notes_20 = amount / 20;\n    amount %= 20;\n    \n    int coins_10 = amount / 10;\n    amount %= 10;\n    \n    int coins_5 = amount / 5;\n    amount %= 5;\n    \n    int coins_2 = amount / 2;\n    int coins_1 = amount % 2;\n    \n    int total = notes_2000 + notes_500 + notes_100 + notes_50 + notes_20 + coins_10 + coins_5 + coins_2 + coins_1;\n    \n    std::cout << \"₹2000 notes: \" << notes_2000 << std::endl;\n    std::cout << \"₹500 notes: \" << notes_500 << std::endl;\n    std::cout << \"₹100 notes: \" << notes_100 << std::endl;\n    std::cout << \"₹50 notes: \" << notes_50 << std::endl;\n    std::cout << \"₹20 notes: \" << notes_20 << std::endl;\n    std::cout << \"₹10 coins: \" << coins_10 << std::endl;\n    std::cout << \"₹5 coins: \" << coins_5 << std::endl;\n    std::cout << \"₹2 coins: \" << coins_2 << std::endl;\n    std::cout << \"₹1 coins: \" << coins_1 << std::endl;\n    std::cout << \"Total notes/coins: \" << total << std::endl;\n    \n    return 0;\n}`
  },

  "wrapCode": function (lang, userCode, input) {
    switch (lang) {
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