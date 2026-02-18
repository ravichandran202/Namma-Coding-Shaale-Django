module.exports = {
  title: 'Swap Two Variables',
  difficulty: 'easy',
  acceptance: '95.2%',

  description: `
    <p>Create a function that takes two variables and swaps their values.</p>
    <p>The function should return the swapped values as an array where the first element is the original second value and the second element is the original first value.</p>
  `,

  signatures: `
    <pre><b>Python:</b> def swap_vars(a, b)</pre>
    <pre><b>Java:</b> public static int[] swapVars(int a, int b)</pre>
    <pre><b>JavaScript:</b> function swapVars(a, b)</pre>
    <pre><b>C++:</b> int* swapVars(int a, int b)</pre>
  `,

  examples: `
    <h3>Example 1:</h3>
    <pre>Input: 5, 10
Output: [10, 5]</pre>
    
    <h3>Example 2:</h3>
    <pre>Input: -1, 1
Output: [1, -1]</pre>
  `,

  constraints: `
    <ul>
      <li>-10<sup>6</sup> ≤ a, b ≤ 10<sup>6</sup></li>
      <li>For C++ implementation, return the result as a pointer to an array</li>
    </ul>
  `,

  testCases: [
    { 
      id: 1, 
      input: [5, 10], 
      expected: "[10,5]",
      explanation: "Simple positive integer swap"
    },
    { 
      id: 2, 
      input: [-1, 1], 
      expected: "[1,-1]",
      explanation: "Negative and positive integer swap"
    },
    { 
      id: 3, 
      input: [0, 0], 
      expected: "[0,0]",
      explanation: "Edge case: equal values"
    },
    { 
      id: 4, 
      input: [1000000, -1000000], 
      expected: "[-1000000,1000000]",
      explanation: "Boundary value test"
    }
  ],

  templates: {
    python: `def swap_vars(a, b):\n    # Swap the values here\n    return [b, a]`,
    java: `public static int[] swapVars(int a, int b) {\n    // Return new array with swapped values\n    return new int[]{b, a};\n}`,
    javascript: `function swapVars(a, b) {\n    // Return swapped array\n    return [b, a];\n}`,
    "c++": `int* swapVars(int a, int b) {\n    static int result[2];\n    result[0] = b;\n    result[1] = a;\n    return result;\n}`
  },


  "solutions": {
    python: `def swap_vars(a, b):\n    # Swap the values here\n    return [b, a]`,
    java: `public static int[] swapVars(int a, int b) {\n    // Return new array with swapped values\n    return new int[]{b, a};\n}`,
    javascript: `function swapVars(a, b) {\n    // Return swapped array\n    return [b, a];\n}`,
    "c++": `int* swapVars(int a, int b) {\n    static int result[2];\n    result[0] = b;\n    result[1] = a;\n    return result;\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint(swap_vars(${i}))`;
      case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    int[] result = swapVars(${i});\n    System.out.println("[" + result[0] + "," + result[1] + "]");}\n}`;
      case 'javascript': return `${code}\nconsole.log(swapVars(${i}));`;
      case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    int* result = swapVars(${i});\n    cout << "[" << result[0] << "," << result[1] << "]" << endl;\n    return 0;\n}`;
      default: return code;
    }
  }
};