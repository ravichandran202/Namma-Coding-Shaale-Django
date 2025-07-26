module.exports = {
    title: 'Print Alphabet Rangoli',
    difficulty: 'medium',
    acceptance: '76.3%',

    description: `
      <p>Create a function that prints an alphabet rangoli of size <code>n</code>.</p>
      <p>Rangoli is a form of Indian folk art based on creation of patterns. In this problem, you need to print alphabet rangoli where:</p>
      <ul>
        <li>The center of the rangoli has the first alphabet letter 'a'</li>
        <li>The size <code>n</code> determines the maximum width of the rangoli (number of letters from the center to any edge)</li>
        <li>The letters decrease as you go out from the center</li>
        <li>The pattern should be symmetric both horizontally and vertically</li>
        <li>Each line should be a string of characters separated by hyphens</li>
      </ul>
      <p>The pattern must be printed directly to the console/output.</p>
    `,

    signatures: `
      <pre><b>Python:</b> def print_rangoli(size)</pre>
      <pre><b>Java:</b> public static void printRangoli(int size)</pre>
      <pre><b>JavaScript:</b> function printRangoli(size)</pre>
      <pre><b>C++:</b> void printRangoli(int size)</pre>
    `,

    examples: `
      <h3>Example 1:</h3>
      <pre>Input: 3
Output:
----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----</pre>
      <h3>Example 2:</h3>
      <pre>Input: 5
Output:
--------e--------
------e-d-e------
----e-d-c-d-e----
--e-d-c-b-c-d-e--
e-d-c-b-a-b-c-d-e
--e-d-c-b-c-d-e--
----e-d-c-d-e----
------e-d-e------
--------e--------</pre>
    `,

    constraints: `
      <ul><li>0 < size ≤ 26</li></ul>
    `,

    testCases: [
        {
            id: 1,
            input: [1],
            expected: "a"
        },
        {
            id: 2,
            input: [2],
            expected: "--b--\nb-a-b\n--b--"
        },
        {
            id: 3,
            input: [3],
            expected: "----c----\n--c-b-c--\nc-b-a-b-c\n--c-b-c--\n----c----"
        },
        {
            id: 4,
            input: [4],
            expected: "------d------\n----d-c-d----\n--d-c-b-c-d--\nd-c-b-a-b-c-d\n--d-c-b-c-d--\n----d-c-d----\n------d------"
        },
        {
            id: 5,
            input: [5],
            expected: "--------e--------\n------e-d-e------\n----e-d-c-d-e----\n--e-d-c-b-c-d-e--\ne-d-c-b-a-b-c-d-e\n--e-d-c-b-c-d-e--\n----e-d-c-d-e----\n------e-d-e------\n--------e--------"
        }
    ],

    templates: {
        python: `def print_rangoli(size):
      # Write your code here
      pass`,

        java: `public static void printRangoli(int size) {
      // Write your code here
  }`,

        javascript: `function printRangoli(size) {
      // Write your code here
  }`,

        "c++": `#include <iostream>
  using namespace std;
  
  void printRangoli(int size) {
      // Write your code here
  }`
    },

    wrapCode(lang, code, input) {
        const i = input.join(', ');
        switch (lang) {
            case 'python': return `${code}\nprint_rangoli(${i})`;
            case 'java': return `class Main {\n${code}\npublic static void main(String[] args) {\n    printRangoli(${i});\n}}`;
            case 'javascript': return `${code}\nprintRangoli(${i});`;
            case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    printRangoli(${i});\n    return 0;\n}`;
            default: return code;
        }
    },

    compareOutput(actual, expected) {
        const normalizePattern = (str) => {
            return str
                .replace(/\r\n/g, '\n')
                .replace(/\n$/, '')
                .replace(/[ \t]+\n/g, '\n')
                .replace(/\n+/g, '\n');
        };

        const normalizedActual = normalizePattern(actual);
        const normalizedExpected = normalizePattern(expected);

        const actualLines = normalizedActual.split('\n');
        const expectedLines = normalizedExpected.split('\n');

        if (actualLines.length !== expectedLines.length) {
            return false;
        }

        for (let i = 0; i < actualLines.length; i++) {
            if (actualLines[i].replace(/\s+$/, '') !== expectedLines[i].replace(/\s+$/, '')) {
                return false;
            }
        }

        return true;
    }
};