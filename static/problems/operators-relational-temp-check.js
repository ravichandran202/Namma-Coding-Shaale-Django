module.exports =  {
  "title": "Freezing Point Check",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Take temperature in Celsius as input and check if the temperature is below freezing point.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read temperature as input - floating value</li>
      <li>Check if temperature is below 0°C</li>
      <li>If below freezing, print True</li>
      <li>If at or above freezing, print False</li>
    </ul>
    <p>This problem teaches comparison operations with real-world application in temperature monitoring.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: -5
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Temperature will be a valid number</li>
      <li>Temperature can be positive, negative, or zero</li>
      <li>Freezing point is below 0°C</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "-5" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "-10.5" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "-0.1" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "0.0" },
  ],

  "templates": {
    "python": `temperature = float(input())\nprint(temperature < 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double temperature = scanner.nextDouble();\n        System.out.println(temperature < 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (temperature) => {\n    const temp = parseFloat(temperature);\n    console.log(temp < 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double temperature;\n    std::cin >> temperature;\n    std::cout << std::boolalpha << (temperature < 0) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `temperature = float(input())\nprint(temperature < 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double temperature = scanner.nextDouble();\n        System.out.println(temperature < 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (temperature) => {\n    const temp = parseFloat(temperature);\n    console.log(temp < 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double temperature;\n    std::cin >> temperature;\n    std::cout << std::boolalpha << (temperature < 0) << std::endl;\n    return 0;\n}`
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