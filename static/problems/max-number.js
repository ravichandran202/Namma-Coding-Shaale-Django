module.exports = {
    title: 'Find Largest Among Two Numbers',
    difficulty: 'easy',
    acceptance: '91.2%',
  
    description: `
      <p>Write a function to find the largest of two numbers.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def largest_of_two(a, b):</pre>
      <pre><b>Java:</b> public static int largestOfTwo(int a, int b)</pre>
      <pre><b>JavaScript:</b> function largestOfTwo(a, b)</pre>
      <pre><b>C++:</b> int largestOfTwo(int a, int b)</pre>
    `,
  
    examples: `
      <pre>Input: 10, 5\nOutput: 10</pre>
    `,
  
    constraints: `<ul><li>-10^6 ≤ a, b ≤ 10^6</li></ul>`,
  
    testCases: [
      { id: 1, input: [10, 5], expected: "10" },
      { id: 2, input: [3, 3], expected: "3" },
      { id: 3, input: [-1, -5], expected: "-1" },
      { id: 4, input: [100, 200], expected: "200" },
      { id: 5, input: [0, -10], expected: "0" }
    ],
  
    templates: {
      python: `def largest_of_two(a, b):\n    # write your code here\n    pass`,
      java: `public static int largestOfTwo(int a, int b) {\n    // write your code here\n    return 0;\n}`,
      javascript: `function largestOfTwo(a, b) {\n    // write your code here\n    return 0;\n}`,
      "c++": `int largestOfTwo(int a, int b) {\n    // write your code here\n    return 0;\n}`
    },

  
    "solutions": {
      python: `def largest_of_two(a, b):\n    # write your code here\n    pass`,
      java: `public static int largestOfTwo(int a, int b) {\n    // write your code here\n    return 0;\n}`,
      javascript: `function largestOfTwo(a, b) {\n    // write your code here\n    return 0;\n}`,
      "c++": `int largestOfTwo(int a, int b) {\n    // write your code here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(largest_of_two(${i}))`;
        case 'java': return `class Main ${code}\npublic static void main(String[] args) {\n    System.out.println(largestOfTwo(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(largestOfTwo(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << largestOfTwo(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  