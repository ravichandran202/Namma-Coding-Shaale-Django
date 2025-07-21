module.exports = {
    title: 'Add Two Numbers',
    difficulty: 'easy',
    acceptance: '92.3%',
  
    description: `
      <p>Create a function that takes two numbers and returns their sum.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def add_numbers(a, b):</pre>
      <pre><b>Java:</b> public static int addNumbers(int a, int b)</pre>
      <pre><b>JavaScript:</b> function addNumbers(a, b)</pre>
      <pre><b>C++:</b> int addNumbers(int a, int b)</pre>
    `,
  
    examples: `
      <h3>Example:</h3>
      <pre>Input: 2, 3\nOutput: 5</pre>
    `,
  
    constraints: `
      <ul><li>-10^6 ≤ a, b ≤ 10^6</li></ul>
    `,
  
    testCases: [
      { id: 1, input: [2, 3], expected: "5" },
      { id: 2, input: [-4, 9], expected: "5" },
      { id: 3, input: [0, 0], expected: "0" },
      { id: 4, input: [1000000, -1000000], expected: "0" },
      { id: 5, input: [-10, -20], expected: "-30" }
    ],
  
    templates: {
      python: `def add_numbers(a, b):\n    # write your code here\n    pass`,
      java: `public static int addNumbers(int a, int b) {\n    // write your code here\n    return 0;\n}`,
      javascript: `function addNumbers(a, b) {\n    // write your code here\n    return 0;\n}`,
      "c++": `int addNumbers(int a, int b) {\n    // write your code here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(add_numbers(${i}))`;
        case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(addNumbers(${i}));}\n}`;
        case 'javascript': return `${code}\nconsole.log(addNumbers(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << addNumbers(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  