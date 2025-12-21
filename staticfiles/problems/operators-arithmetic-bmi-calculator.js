module.exports =  {
  "title": "Health Metric",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Write a program that calculates Body Mass Index (BMI) using division and multiplication.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read weight in kilograms and height in meters</li>
      <li>Calculate BMI using the formula</li>
      <li>Print the BMI formatted to 2 decimal places</li>
    </ul>
    <pre class="constraints">Formula:
BMI = weight / (height × height)

Where:
weight = Weight in kilograms
height = Height in meters</pre>
    <p>This problem teaches health-related calculations and practical use of division and exponentiation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
70
1.75

Output: 22.86</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
60
1.65

Output: 22.04</pre>
  `,

  "conditions": `
    <ul>
      <li>Weight will be a positive number between 30 and 200 kg</li>
      <li>Height will be a positive number between 1.0 and 2.5 meters</li>
      <li>Use the formula: BMI = weight / (height × height)</li>
      <li>Output must be formatted to 2 decimal places</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "22.86", "stdinput": "70\n1.75" },
    { "id": 2, "input": [], "expected": "22.04", "stdinput": "60\n1.65" },
    { "id": 3, "input": [], "expected": "27.78", "stdinput": "90\n1.80" },
    { "id": 4, "input": [], "expected": "18.59", "stdinput": "50\n1.64" },
    { "id": 5, "input": [], "expected": "31.25", "stdinput": "80\n1.60" },
    { "id": 6, "input": [], "expected": "24.77", "stdinput": "75\n1.74" },
    { "id": 7, "input": [], "expected": "20.29", "stdinput": "65\n1.79" },
    { "id": 8, "input": [], "expected": "35.86", "stdinput": "100\n1.67" },
    { "id": 9, "input": [], "expected": "16.53", "stdinput": "45\n1.65" },
    { "id": 10, "input": [], "expected": "29.41", "stdinput": "85\n1.70" }
  ],

  "templates": {
    "python": `weight = float(input())\nheight = float(input())\n\nbmi = weight / (height ** 2)\nprint(f"{bmi:.2f}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double weight = scanner.nextDouble();\n        double height = scanner.nextDouble();\n        \n        double bmi = weight / (height * height);\n        System.out.printf(\"%.2f%n\", bmi);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (weight) => {\n    inputs.push(parseFloat(weight));\n    readline.question('', (height) => {\n        inputs.push(parseFloat(height));\n        \n        const bmi = inputs[0] / (inputs[1] * inputs[1]);\n        console.log(bmi.toFixed(2));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    double weight, height;\n    std::cin >> weight >> height;\n    \n    double bmi = weight / (height * height);\n    std::cout << std::fixed << std::setprecision(2);\n    std::cout << bmi << std::endl;\n    \n    return 0;\n}`
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