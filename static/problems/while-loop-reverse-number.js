module.exports = {
  "title": "Number Reverser",
  "difficulty": "hard",
  "acceptance": "91%",

  "description": `
    <p>Write a program that takes an integer as input and reverses its digits using a while loop.</p>
    <p><b>How to reverse a number?</b></p>
    <p>We can reverse a number by repeatedly extracting the last digit and building the reversed number:</p>
    <ul>
      <li>Start with number 1234</li>
      <li>Extract last digit (4), reverse = 4</li>
      <li>Extract next digit (3), reverse = 4×10 + 3 = 43</li>
      <li>Extract next digit (2), reverse = 43×10 + 2 = 432</li>
      <li>Extract last digit (1), reverse = 432×10 + 1 = 4321</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Use a while loop to extract digits from the end</li>
      <li>Build the reversed number by multiplying by 10 and adding digits</li>
      <li>Print the reversed number</li>
    </ul>
    <p>This problem teaches while loops with modulo operations and number manipulation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1234
Output: 4321</pre>
    <p><b>Explanation:</b> 1234 reversed is 4321</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 98765
Output: 56789</pre>
    <p><b>Explanation:</b> 98765 reversed is 56789</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "4321", "stdinput": "1234" },
    { "id": 2, "input": [], "expected": "56789", "stdinput": "98765" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "100" },
    { "id": 4, "input": [], "expected": "7", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "21", "stdinput": "12" },
  ],

  "templates": {
    "python": "n = int(input())\nrev = 0\nwhile n > 0:\n    digit = n % 10\n    rev = rev * 10 + digit\n    n //= 10\nprint(rev)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int rev = 0;\n        \n        while (n > 0) {\n            int digit = n % 10;\n            rev = rev * 10 + digit;\n            n /= 10;\n        }\n        System.out.println(rev);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let num = parseInt(n);\n    let rev = 0;\n    \n    while (num > 0) {\n        let digit = num % 10;\n        rev = rev * 10 + digit;\n        num = Math.floor(num / 10);\n    }\n    console.log(rev);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int rev = 0;\n    \n    while (n > 0) {\n        int digit = n % 10;\n        rev = rev * 10 + digit;\n        n /= 10;\n    }\n    cout << rev << endl;\n    return 0;\n}"
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