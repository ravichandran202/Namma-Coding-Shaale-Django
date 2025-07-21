module.exports = {
    title: 'Find Largest Among Three Numbers',
    difficulty: 'easy',
    acceptance: '86.5%',
  
    description: `
      <p>Write a function to find the largest of three numbers.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def largest_of_three(a, b, c):</pre>
      <pre><b>Java:</b> public static int largestOfThree(int a, int b, int c)</pre>
      <pre><b>JavaScript:</b> function largestOfThree(a, b, c)</pre>
      <pre><b>C++:</b> int largestOfThree(int a, int b, int c)</pre>
    `,
  
    examples: `
      <pre>Input: 10, 5, 7\nOutput: 10</pre>
    `,
  
    constraints: `<ul><li>-10^6 ≤ a, b, c ≤ 10^6</li></ul>`,
  
    testCases: [
      { id: 1, input: [10, 5, 7], expected: "10" },
      { id: 2, input: [3, 3, 3], expected: "3" },
      { id: 3, input: [-1, -5, -2], expected: "-1" },
      { id: 4, input: [100, 200, 150], expected: "200" },
      { id: 5, input: [0, -10, 5], expected: "5" }
    ],
  
    templates: {
      python: `def largest_of_three(a, b, c):\n    # write your code here\n    pass`,
      java: `public static int largestOfThree(int a, int b, int c) {\n    // write your code here\n    return 0;\n}`,
      javascript: `function largestOfThree(a, b, c) {\n    // write your code here\n    return 0;\n}`,
      "c++": `int largestOfThree(int a, int b, int c) {\n    // write your code here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(largest_of_three(${i}))`;
        case 'java': return `class Main ${code}\npublic static void main(String[] args) {\n    System.out.println(largestOfThree(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(largestOfThree(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << largestOfThree(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  