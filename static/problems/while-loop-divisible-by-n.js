module.exports = {
  "title": "Divisible by N",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Print all numbers between 1 and 50 that are divisible by a given number N.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Iterate through numbers 1 to 50 using while loop</li>
      <li>Print numbers divisible by N</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>If N=5: print 5,10,15,20,25,30,35,40,45,50</li>
      <li>If N=10: print 10,20,30,40,50</li>
      <li>If N=7: print 7,14,21,28,35,42,49</li>
    </ul>
    <p>This problem teaches range iteration and divisibility checking.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
5
10
15
20
25
30
35
40
45
50</pre>
    <p><b>Explanation:</b> All numbers between 1-50 divisible by 5</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: 
10
20
30
40
50</pre>
    <p><b>Explanation:</b> All numbers between 1-50 divisible by 10</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 7
Output: 
7
14
21
28
35
42
49</pre>
    <p><b>Explanation:</b> All numbers between 1-50 divisible by 7</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5\n10\n15\n20\n25\n30\n35\n40\n45\n50", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "10\n20\n30\n40\n50", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "7\n14\n21\n28\n35\n42\n49", "stdinput": "7" },
    { "id": 4, "input": [], "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "25\n50", "stdinput": "25" }
  ],

  "templates": {
    "python": "num = int(input())\ni = 1\nwhile i <= 50:\n    if i % num == 0:\n        print(i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        int i = 1;\n        while (i <= 50) {\n            if (i % num == 0) {\n                System.out.println(i);\n            }\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    let i = 1;\n    while (i <= 50) {\n        if (i % num === 0) {\n            console.log(i);\n        }\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int num;\n    std::cin >> num;\n    int i = 1;\n    while (i <= 50) {\n        if (i % num == 0) {\n            std::cout << i << std::endl;\n        }\n        i++;\n    }\n    return 0;\n}"
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