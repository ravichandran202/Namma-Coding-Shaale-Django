module.exports = {
  "title": "First Multiple of 7",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>Write a program that finds and prints the <b>first</b> number in a given list that is divisible by <code>7</code>. Once you find such a number, you should immediately stop searching and print it. You must use the <code>break</code> statement to exit the loop when you find the first multiple of <code>7</code>.</p>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Use a loop to go through each number in the list</li>
      <li>Inside the loop, check if the current number is divisible by <code>7</code></li>
      <li>If it is divisible by <code>7</code>, print that number and to exit the loop immediately</li>
      <li>If it is not divisible by <code>7</code>, continue to the next number</li>
    </ol>
  
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input (predefined list):
[3, 14, 5, 21, 8]
Output:
14</pre>
    <p><b>Explanation:</b> The program checks numbers in order: 3 (not divisible by 7), 14 (divisible by 7). It prints 14 and immediately stops. Even though 21 is also divisible by 7, it is not checked because we already found 14.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input (predefined list):
[1, 2, 3, 28, 4, 5]
Output:
28</pre>
    <p><b>Explanation:</b> The program checks 1, 2, 3 (none divisible by 7), then finds 28 which is divisible by 7. It prints 28 and stops immediately.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "14", 
      "stdinput": "3, 14, 5, 21, 8",
      "explanation": "First multiple of 7 in [3, 14, 5, 21, 8] is 14" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "28", 
      "stdinput": "1, 2, 3, 28, 4, 5",
      "explanation": "First multiple of 7 in [1, 2, 3, 28, 4, 5] is 28" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "7", 
      "stdinput": "7, 14, 21",
      "explanation": "First multiple of 7 in [7, 14, 21] is 7 (first element)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "21", 
      "stdinput": "1, 2, 3, 4, 5, 6, 21, 8, 9",
      "explanation": "First multiple of 7 in [1, 2, 3, 4, 5, 6, 21, 8, 9] is 21" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "49", 
      "stdinput": "10, 20, 30, 40, 49, 50, 56",
      "explanation": "First multiple of 7 in [10, 20, 30, 40, 49, 50, 56] is 49" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "70", 
      "stdinput": "70, 71, 72",
      "explanation": "First multiple of 7 in [70, 71, 72] is 70 (first element)" 
    }
  ],

  "templates": {
    "python": "def first_multiple_of_7(numbers):\n    for num in numbers:\n        if num % 7 == 0:\n            print(num)\n            break\n\n# main code\nnumbers = [3, 14, 5, 21, 8]\nfirst_multiple_of_7(numbers)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void first_multiple_of_7(int[] numbers) {\n        for (int num : numbers) {\n            if (num % 7 == 0) {\n                System.out.println(num);\n                break;\n            }\n        }\n    }\n    \n    public static void main(String[] args) {\n        int[] numbers = {3, 14, 5, 21, 8};\n        first_multiple_of_7(numbers);\n    }\n}",
    "javascript": "function first_multiple_of_7(numbers) {\n    for (let i = 0; i < numbers.length; i++) {\n        if (numbers[i] % 7 === 0) {\n            console.log(numbers[i]);\n            break;\n        }\n    }\n}\n\n// main code\nconst numbers = [3, 14, 5, 21, 8];\nfirst_multiple_of_7(numbers);",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid first_multiple_of_7(vector<int> numbers) {\n    for (int num : numbers) {\n        if (num % 7 == 0) {\n            cout << num << endl;\n            break;\n        }\n    }\n}\n\nint main() {\n    vector<int> numbers = {3, 14, 5, 21, 8};\n    first_multiple_of_7(numbers);\n    return 0;\n}"
  },

  "wrapCode": function(lang, userCode, input) {
    switch(lang) {
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