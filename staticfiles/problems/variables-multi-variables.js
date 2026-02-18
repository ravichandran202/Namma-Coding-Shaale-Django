module.exports = {
    "title": "Multi Variables",
    "difficulty": "easy",
    "acceptance": "99.3%",
  
    "description": `
      <p>Create three variables: <code>student_name</code>, <code>age</code>, and <code>grade</code>. Store appropriate values and print them in a formatted message.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create three variables: <code>student_name</code>, <code>age</code>, and <code>grade</code></li>
        <li>Read values for each variable from user input</li>
        <li>Print a formatted message combining all three variables</li>
      </ul>
      <p>This problem teaches how to use multiple variables and string formatting to create readable output.</p> 
      <p><b>Output Format : </b><br><code> &ltstudent_name&gt is &ltage&gt years old and in &ltgrade&gt grade</code> </p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
Bob
16
10th

Output: Bob is 16 years old and in 10th grade</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
Alice
15
9th

Output: Alice is 15 years old and in 9th grade</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
Charlie
17
11th

Output: Charlie is 17 years old and in 11th grade</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Variable names must be exactly: <code>student_name</code>, <code>age</code>, and <code>grade</code></li>
        <li>Age will be an integer between 10 and 20</li>
        <li>Grade will be a string like "9th", "10th", "11th", etc.</li>
        <li>Name will contain only alphabetical characters</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Bob is 16 years old and in 10th grade", "stdinput": "Bob\n16\n10th" },
      { "id": 2, "input": [], "expected": "Alice is 15 years old and in 9th grade", "stdinput": "Alice\n15\n9th" },
      { "id": 3, "input": [], "expected": "Charlie is 17 years old and in 11th grade", "stdinput": "Charlie\n17\n11th" },
      { "id": 4, "input": [], "expected": "Diana is 14 years old and in 8th grade", "stdinput": "Diana\n14\n8th" },
      { "id": 5, "input": [], "expected": "Ethan is 18 years old and in 12th grade", "stdinput": "Ethan\n18\n12th" },
    ],
  
    "templates": {
      "python": `student_name = input()\nage = int(input())\ngrade = input()\nprint(f"{student_name} is {age} years old and in {grade} grade")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String student_name = scanner.nextLine();\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String grade = scanner.nextLine();\n        System.out.println(student_name + \" is \" + age + \" years old and in \" + grade + \" grade\");\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (name) => {\n    inputs.push(name);\n    readline.question('', (age) => {\n        inputs.push(age);\n        readline.question('', (grade) => {\n            inputs.push(grade);\n            console.log(inputs[0] + \" is \" + inputs[1] + \" years old and in \" + inputs[2] + \" grade\");\n            readline.close();\n        });\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string student_name, grade;\n    int age;\n    std::getline(std::cin, student_name);\n    std::cin >> age;\n    std::cin.ignore(); // ignore newline\n    std::getline(std::cin, grade);\n    std::cout << student_name << \" is \" << age << \" years old and in \" << grade << \" grade\" << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `student_name = input()\nage = int(input())\ngrade = input()\nprint(f"{student_name} is {age} years old and in {grade} grade")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String student_name = scanner.nextLine();\n        int age = scanner.nextInt();\n        scanner.nextLine(); // consume newline\n        String grade = scanner.nextLine();\n        System.out.println(student_name + \" is \" + age + \" years old and in \" + grade + \" grade\");\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (name) => {\n    inputs.push(name);\n    readline.question('', (age) => {\n        inputs.push(age);\n        readline.question('', (grade) => {\n            inputs.push(grade);\n            console.log(inputs[0] + \" is \" + inputs[1] + \" years old and in \" + inputs[2] + \" grade\");\n            readline.close();\n        });\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string student_name, grade;\n    int age;\n    std::getline(std::cin, student_name);\n    std::cin >> age;\n    std::cin.ignore(); // ignore newline\n    std::getline(std::cin, grade);\n    std::cout << student_name << \" is \" << age << \" years old and in \" << grade << \" grade\" << std::endl;\n    return 0;\n}`
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