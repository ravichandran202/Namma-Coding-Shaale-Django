module.exports = {
  title: 'Convert Kilometers to Miles',
  difficulty: 'easy',
  acceptance: '94.1%',

  description: `
    <p>Create a function that converts a distance from kilometers to miles.</p>
    <p>The conversion formula is: miles = kilometers × 0.621371</p>
  `,

  signatures: `
    <pre><b>Python:</b> def km_to_miles(km)</pre>
    <pre><b>Java:</b> public static double kmToMiles(double km)</pre>
    <pre><b>JavaScript:</b> function kmToMiles(km)</pre>
    <pre><b>C++:</b> double kmToMiles(double km)</pre>
  `,

  examples: `
    <h3>Example 1:</h3>
    <pre>Input: 10\nOutput: 6.21371</pre>
    <h3>Example 2:</h3>
    <pre>Input: 42.195\nOutput: 26.2187</pre>
  `,

  constraints: `
    <ul><li>0 ≤ km ≤ 10000</li></ul>
  `,

  testCases: [
    { id: 1, input: [10], expected: "6.21371" },
    { id: 2, input: [42.195], expected: "26.2187" },
    { id: 3, input: [0], expected: "0.0" },
    { id: 4, input: [1.60934], expected: "1.0" }
  ],

  templates: {
    python: `def km_to_miles(km):\n    # write your code here\n    pass`,
    java: `public static double kmToMiles(double km) {\n    // write your code here\n    return 0.0;\n}`,
    javascript: `function kmToMiles(km) {\n    // write your code here\n    return 0;\n}`,
    "c++": `double kmToMiles(double km) {\n    // write your code here\n    return 0.0;\n}`
  },


  "solutions": {
    python: `def km_to_miles(km):\n    # write your code here\n    pass`,
    java: `public static double kmToMiles(double km) {\n    // write your code here\n    return 0.0;\n}`,
    javascript: `function kmToMiles(km) {\n    // write your code here\n    return 0;\n}`,
    "c++": `double kmToMiles(double km) {\n    // write your code here\n    return 0.0;\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint(km_to_miles(${i}))`;
      case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(kmToMiles(${i}));}\n}`;
      case 'javascript': return `${code}\nconsole.log(kmToMiles(${i}));`;
      case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << kmToMiles(${i}) << endl;\n    return 0;\n}`;
      default: return code;
    }
  }
};