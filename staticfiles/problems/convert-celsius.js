module.exports = {
  title: 'Convert Celsius to Fahrenheit',
  difficulty: 'easy',
  acceptance: '93.7%',

  description: `
    <p>Create a function that converts a temperature from Celsius to Fahrenheit.</p>
    <p>The formula is: F = (C × 9/5) + 32</p>
  `,

  signatures: `
    <pre><b>Python:</b> def celsius_to_fahrenheit(celsius)</pre>
    <pre><b>Java:</b> public static double celsiusToFahrenheit(double celsius)</pre>
    <pre><b>JavaScript:</b> function celsiusToFahrenheit(celsius)</pre>
    <pre><b>C++:</b> double celsiusToFahrenheit(double celsius)</pre>
  `,

  examples: `
    <h3>Example:</h3>
    <pre>Input: 25\nOutput: 77.0</pre>
  `,

  constraints: `
    <ul><li>-273.15 ≤ celsius ≤ 1000</li></ul>
  `,

  testCases: [
    { id: 1, input: [25], expected: "77.0" },
    { id: 2, input: [0], expected: "32.0" },
    { id: 3, input: [-40], expected: "-40.0" },
    { id: 4, input: [100], expected: "212.0" }
  ],

  templates: {
    python: `def celsius_to_fahrenheit(celsius):\n    # write your code here\n    pass`,
    java: `public static double celsiusToFahrenheit(double celsius) {\n    // write your code here\n    return 0.0;\n}`,
    javascript: `function celsiusToFahrenheit(celsius) {\n    // write your code here\n    return 0;\n}`,
    "c++": `double celsiusToFahrenheit(double celsius) {\n    // write your code here\n    return 0.0;\n}`
  },


  "solutions": {
    python: `def celsius_to_fahrenheit(celsius):\n    # write your code here\n    pass`,
    java: `public static double celsiusToFahrenheit(double celsius) {\n    // write your code here\n    return 0.0;\n}`,
    javascript: `function celsiusToFahrenheit(celsius) {\n    // write your code here\n    return 0;\n}`,
    "c++": `double celsiusToFahrenheit(double celsius) {\n    // write your code here\n    return 0.0;\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint(celsius_to_fahrenheit(${i}))`;
      case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(celsiusToFahrenheit(${i}));}\n}`;
      case 'javascript': return `${code}\nconsole.log(celsiusToFahrenheit(${i}));`;
      case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << celsiusToFahrenheit(${i}) << endl;\n    return 0;\n}`;
      default: return code;
    }
  }
};