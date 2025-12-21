module.exports = {
    "title": "Decimal to Whole",
    "difficulty": "easy",
    "acceptance": "99.5%",

    "description": `
    <p>Read a float number from input, print its type, convert it to an integer, and print both the converted value and its type.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a floating-point number from input</li>
      <li>Print the data type of the original input</li>
      <li>Convert the float to an integer using <code>int()</code></li>
      <li>Print the converted integer value</li>
      <li>Print the data type of the converted value</li>
    </ul>
    <p>This problem teaches type checking before and after conversion, showing how floating-point numbers are truncated when converted to integers.</p>
  `,

    "examples": `
  <h3>Example 1</h3>
  <pre class="constraints">Input: 8.7
Output:
&lt;class 'float'&gt;
8
&lt;class 'int'&gt;</pre>
  
  <h3>Example 2</h3>
  <pre class="constraints">Input: 3.14
Output:
&lt;class 'float'&gt;
3
&lt;class 'int'&gt;</pre>
`,

    "conditions": `
<ul>
  <li>Input will be a valid floating-point number as string</li>
  <li>Must print the type of input before conversion</li>
  <li>Must use <code>int()</code> function for conversion after converting to float</li>
  <li>Must print both the converted value and its type</li>
  <li>The conversion will truncate (remove) the decimal part</li>
</ul>
`,

"testCases": [
    { "id": 1, "input": [], "expected": "<class 'float'>\n8\n<class 'int'>", "stdinput": "8.7" },
    { "id": 2, "input": [], "expected": "<class 'float'>\n3\n<class 'int'>", "stdinput": "3.14" },
    { "id": 3, "input": [], "expected": "<class 'float'>\n9\n<class 'int'>", "stdinput": "9.99" },
    { "id": 4, "input": [], "expected": "<class 'float'>\n0\n<class 'int'>", "stdinput": "0.5" },
    { "id": 5, "input": [], "expected": "<class 'float'>\n-2\n<class 'int'>", "stdinput": "-2.9" }
  ],

  "templates": {
    "python": `number_input = input()\nprint(type(number_input))\nnumber = float(number_input)\nconverted = int(number)\nprint(converted)\nprint(type(converted))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String numberInput = scanner.nextLine();\n        System.out.println(numberInput.getClass().getName());\n        float number = Float.parseFloat(numberInput);\n        int converted = (int) number;\n        System.out.println(converted);\n        System.out.println(((Object)converted).getClass().getName());\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (numberInput) => {\n    console.log(typeof numberInput);\n    const number = parseFloat(numberInput);\n    const converted = parseInt(number);\n    console.log(converted);\n    console.log(typeof converted);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n#include <string>\n#include <typeinfo>\n\nint main() {\n    std::string numberInput;\n    std::getline(std::cin, numberInput);\n    std::cout << typeid(numberInput).name() << std::endl;\n    float number = std::stof(numberInput);\n    int converted = static_cast<int>(number);\n    std::cout << converted << std::endl;\n    std::cout << typeid(converted).name() << std::endl;\n    return 0;\n}`
  },

    "wrapCode": function (lang, userCode, input) {
        switch (lang) {
            case 'python':
                return `${userCode}`;
            case 'java':
                return userCode;
            case 'javascript':
                return `${userCode}`;
            case 'c++':
                return userCode;
            default:
                return userCode;
        }
    }
}