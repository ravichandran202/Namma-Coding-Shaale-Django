module.exports = {
    title: 'Find Quadratic Roots',
    difficulty: 'medium',
    acceptance: '78.5%',
  
    description: `
      <p>Given coefficients a, b, and c of a quadratic equation <code>ax² + bx + c = 0</code>, find its real roots.</p>
      <p>If the roots are real, return them in an array. If imaginary, return <code>null</code> or <code>[]</code>.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def quadratic_roots(a, b, c):</pre>
      <pre><b>Java:</b> public static double[] quadraticRoots(double a, double b, double c)</pre>
      <pre><b>JavaScript:</b> function quadraticRoots(a, b, c)</pre>
      <pre><b>C++:</b> vector<double> quadraticRoots(double a, double b, double c)</pre>
    `,
  
    examples: `
      <pre>Input: 1, -3, 2\nOutput: [2.0, 1.0]</pre>
      <pre>Input: 1, 2, 5\nOutput: []</pre>
    `,
  
    constraints: `
      <ul>
        <li>Do not use external math libraries unless built-in</li>
        <li>Return the roots in descending order</li>
      </ul>
    `,
  
    testCases: [
      { id: 1, input: [1, -3, 2], expected: "[2.0, 1.0]" },
      { id: 2, input: [1, -2, 1], expected: "[1.0, 1.0]" },
      { id: 3, input: [1, 2, 5], expected: "[]" },
      { id: 4, input: [1, 0, -4], expected: "[2.0, -2.0]" },
      { id: 5, input: [2, 5, 3], expected: "[-1.0, -1.5]" }
    ],
  
    templates: {
      python: `def quadratic_roots(a, b, c):\n    # write your code here\n    pass`,
      java: `public static double[] quadraticRoots(double a, double b, double c) {\n    // write your code here\n    return new double[0];\n}`,
      javascript: `function quadraticRoots(a, b, c) {\n    // write your code here\n    return [];\n}`,
      "c++": `vector<double> quadraticRoots(double a, double b, double c) {\n    // write your code here\n    return {};\n}`
    },

  
    "solutions": {
      python: `def quadratic_roots(a, b, c):\n    # write your code here\n    pass`,
      java: `public static double[] quadraticRoots(double a, double b, double c) {\n    // write your code here\n    return new double[0];\n}`,
      javascript: `function quadraticRoots(a, b, c) {\n    // write your code here\n    return [];\n}`,
      "c++": `vector<double> quadraticRoots(double a, double b, double c) {\n    // write your code here\n    return {};\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(quadratic_roots(${i}))`;
        case 'java': return `${code}\npublic static void main(String[] args) {\n    System.out.println(Arrays.toString(quadraticRoots(${i})));\n}`;
        case 'javascript': return `${code}\nconsole.log(quadraticRoots(${i}));`;
        case 'c++': return `#include <iostream>\n#include <vector>\nusing namespace std;\n${code}\nint main() {\n    auto res = quadraticRoots(${i});\n    for (double r : res) cout << r << " "; cout << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  