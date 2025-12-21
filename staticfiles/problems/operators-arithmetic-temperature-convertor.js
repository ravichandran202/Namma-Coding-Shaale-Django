module.exports =  {
  "title": "Temperature Converter",
  "difficulty": "easy",
  "acceptance": "99.1%",

  "description": `
    <p>Write a program that converts Celsius temperature to Fahrenheit using arithmetic operations.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read temperature in Celsius as input</li>
      <li>Convert to Fahrenheit using the formula</li>
      <li>Print both temperatures with degree symbols</li>
      <li>Print the values with only 1 decimal places</li>
    </ul>
    <pre class="constraints">Formula:
F = (C × 9/5) + 32
Where:
F = Temperature in Fahrenheit
C = Temperature in Celsius</pre>
    <p>This problem teaches formula application and arithmetic operations with real-world use case.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25.0
Output: 25.0°C = 77.0°F</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 0.0
Output: 0.0°C = 32.0°F</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 100.0
Output: 100.0°C = 212.0°F</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid temperature in Celsius</li>
      <li>Temperature can be positive, negative, or zero</li>
      <li>Output must include degree symbols and exact format</li>
      <li>Use the formula: F = (C × 9/5) + 32</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "25.0°C = 77.0°F", "stdinput": "25.0" },
    { "id": 2, "input": [], "expected": "0.0°C = 32.0°F", "stdinput": "0.0" },
    { "id": 3, "input": [], "expected": "100.0°C = 212.0°F", "stdinput": "100.0" },
    { "id": 4, "input": [], "expected": "-40.0°C = -40.0°F", "stdinput": "-40.0" },
    { "id": 5, "input": [], "expected": "-10.0°C = 14.0°F", "stdinput": "-10.0" },
    { "id": 6, "input": [], "expected": "-273.1°C = -459.7°F", "stdinput": "-273.15" },
  ],

  "templates": {
    "python": `celsius = float(input())\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius:.1f}°C = {fahrenheit:.1f}°F")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double celsius = scanner.nextDouble();\n        double fahrenheit = (celsius * 9/5) + 32;\n        System.out.printf(\"%.1f°C = %.1f°F%n\", celsius, fahrenheit);\n    }\n}`,
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