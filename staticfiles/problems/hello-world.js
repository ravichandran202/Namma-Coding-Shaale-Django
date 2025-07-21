module.exports = {
    title: 'Hello World',
    difficulty: 'easy',
    acceptance: '99.9%',
    
    description: `
      <p>Write a function that prints <code>"Hello, World!"</code> to the standard output.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>The function should be named <code>hello_world</code> (Python) or <code>helloWorld</code> (Java/JavaScript/C++)</li>
        <li>It should not accept any parameters</li>
        <li>It should print the string <code>Hello, World!</code> exactly</li>
      </ul>
      <p>This problem tests your ability to write and run a basic function in the language of your choice.</p>
    `,
    
    signatures: `
      <pre><b>Python:</b> def hello_world():</pre>
      <pre><b>Java:</b> public static void helloWorld()</pre>
      <pre><b>JavaScript:</b> function helloWorld()</pre>
      <pre><b>C++:</b> void helloWorld()</pre>
    `,
    
    examples: `
      <h3>Example</h3>
      <pre>Output: Hello, World!</pre>
    `,
    
    constraints: `
      <ul>
        <li>There are no constraints for this problem.</li>
        <li>Just ensure correct spelling and casing: <code>Hello, World!</code></li>
      </ul>
    `,
    
    followUp: 'Can you modify the function to accept a name and print "Hello, [Name]!"?',
    
    testCases: [
      { id: 1, input: [], expected: 'Hello, World!' }
    ],
    
    templates: {
      python: `def hello_world():\n   # write your code here\n   pass`,
      java: `public class Main {\n  public static void helloWorld() {\n    System.out.println("Hello, World!");\n  }\n\n  public static void main(String[] args) {\n    // Test case here\n  }\n}`,
      javascript: `function helloWorld() {\n  console.log("Hello, World!");\n}`,
      "c++": `#include <iostream>\nusing namespace std;\n\nvoid helloWorld() {\n  cout << "Hello, World!" << endl;\n}\n\nint main() {\n  // Test case here\n  return 0;\n}`
    },
    
    wrapCode: function(lang, userCode, input) {
      switch(lang) {
        case 'python':
          return `${userCode}\nhello_world()`;
        case 'java':
          return userCode.replace('// Test case here', `helloWorld();`);
        case 'javascript':
          return `${userCode}\nhelloWorld();`;
        case 'c++':
          return userCode.replace('// Test case here', `helloWorld();`);
        default:
          return userCode;
      }
    }
  };
  