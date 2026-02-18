module.exports = {
    title: 'Check Leap Year',
    difficulty: 'medium',
    acceptance: '80.5%',
  
    description: `
      <p>Write a function to determine whether a given year is a leap year.</p>
      <p>A year is a leap year if it is divisible by 4 but not 100, unless divisible by 400.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def is_leap_year(year):</pre>
      <pre><b>Java:</b> public static boolean isLeapYear(int year)</pre>
      <pre><b>JavaScript:</b> function isLeapYear(year)</pre>
      <pre><b>C++:</b> bool isLeapYear(int year)</pre>
    `,
  
    examples: `
      <pre>Input: 2000\nOutput: true</pre>
      <pre>Input: 1900\nOutput: false</pre>
    `,
  
    constraints: `<ul><li>1000 ≤ year ≤ 9999</li></ul>`,
  
    testCases: [
      { id: 1, input: [2000], expected: "true" },
      { id: 2, input: [1900], expected: "false" },
      { id: 3, input: [2024], expected: "true" },
      { id: 4, input: [2100], expected: "false" },
      { id: 5, input: [2400], expected: "true" }
    ],
  
    templates: {
      python: `def is_leap_year(year):\n    # write your code here\n    pass`,
      java: `public static boolean isLeapYear(int year) {\n    // write your code here\n    return false;\n}`,
      javascript: `function isLeapYear(year) {\n    // write your code here\n    return false;\n}`,
      "c++": `bool isLeapYear(int year) {\n    // write your code here\n    return false;\n}`
    },

  
    "solutions": {
      python: `def is_leap_year(year):\n    # write your code here\n    pass`,
      java: `public static boolean isLeapYear(int year) {\n    // write your code here\n    return false;\n}`,
      javascript: `function isLeapYear(year) {\n    // write your code here\n    return false;\n}`,
      "c++": `bool isLeapYear(int year) {\n    // write your code here\n    return false;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(is_leap_year(${i}))`;
        case 'java': return `class Main ${code}\npublic static void main(String[] args) {\n    System.out.println(isLeapYear(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(isLeapYear(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << (isLeapYear(${i}) ? "true" : "false") << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  