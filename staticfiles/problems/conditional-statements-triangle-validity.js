module.exports = {
  "title": "Triangle Validity with Angles",
  "difficulty": "Medium",
  "acceptance": "76%",

  "description": `
    <p>Check if three given angles can form a valid triangle based on geometric properties.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three angles as integer inputs</li>
      <li>Verify triangle validity using angle sum property</li>
      <li>Check all necessary conditions for a valid triangle</li>
      <li>Print whether the angles form a valid triangle</li>
    </ul>
    <p><b>Triangle Validity Conditions:</b></p>
    <ul>
      <li>Sum of all three angles must equal 180 degrees</li>
      <li>Each angle must be greater than 0</li>
      <li>All conditions must be satisfied simultaneously</li>
    </ul>
    <p>This problem teaches geometric validation and logical AND operations with multiple conditions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 60
60
60
Output: Valid Triangle</pre>
    <p><b>Explanation:</b> Sum = 60+60+60 = 180 and all angles > 0, so valid equilateral triangle.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 90
45
45
Output: Valid Triangle</pre>
    <p><b>Explanation:</b> Sum = 90+45+45 = 180 and all angles > 0, so valid right-angled triangle.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 120
30
20
Output: Invalid Triangle</pre>
    <p><b>Explanation:</b> Sum = 120+30+20 = 170 ≠ 180, so invalid triangle.</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 0
90
90
Output: Invalid Triangle</pre>
    <p><b>Explanation:</b> One angle is 0 (not > 0), so invalid triangle despite sum being 180.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three integers representing angles in degrees</li>
      <li>Angles will be between 0 and 180</li>
      <li>Use logical AND to combine all validity conditions</li>
      <li>Output must be exactly one of: "Valid Triangle" or "Invalid Triangle"</li>
      <li>All three conditions must be checked: sum=180 and each angle>0</li>
      <li>Consider integer angles only</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Valid Triangle", "stdinput": "60\n60\n60" },
    { "id": 2, "input": [], "expected": "Valid Triangle", "stdinput": "90\n45\n45" },
    { "id": 3, "input": [], "expected": "Invalid Triangle", "stdinput": "120\n30\n20" },
    { "id": 4, "input": [], "expected": "Invalid Triangle", "stdinput": "0\n90\n90" },
    { "id": 5, "input": [], "expected": "Valid Triangle", "stdinput": "80\n50\n50" },
    { "id": 6, "input": [], "expected": "Invalid Triangle", "stdinput": "100\n80\n0" },
  ],

  "templates": {
    "python": "angle1 = int(input())\nangle2 = int(input())\nangle3 = int(input())\n\nif angle1 + angle2 + angle3 == 180 and angle1 > 0 and angle2 > 0 and angle3 > 0:\n    print(\"Valid Triangle\")\nelse:\n    print(\"Invalid Triangle\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int angle1 = scanner.nextInt();\n        int angle2 = scanner.nextInt();\n        int angle3 = scanner.nextInt();\n        \n        if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n            System.out.println(\"Valid Triangle\");\n        } else {\n            System.out.println(\"Invalid Triangle\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [angle1, angle2, angle3] = input;\n        \n        if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n            console.log(\"Valid Triangle\");\n        } else {\n            console.log(\"Invalid Triangle\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int angle1, angle2, angle3;\n    std::cin >> angle1 >> angle2 >> angle3;\n    \n    if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n        std::cout << \"Valid Triangle\" << std::endl;\n    } else {\n        std::cout << \"Invalid Triangle\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "angle1 = int(input())\nangle2 = int(input())\nangle3 = int(input())\n\nif angle1 + angle2 + angle3 == 180 and angle1 > 0 and angle2 > 0 and angle3 > 0:\n    print(\"Valid Triangle\")\nelse:\n    print(\"Invalid Triangle\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int angle1 = scanner.nextInt();\n        int angle2 = scanner.nextInt();\n        int angle3 = scanner.nextInt();\n        \n        if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n            System.out.println(\"Valid Triangle\");\n        } else {\n            System.out.println(\"Invalid Triangle\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [angle1, angle2, angle3] = input;\n        \n        if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n            console.log(\"Valid Triangle\");\n        } else {\n            console.log(\"Invalid Triangle\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int angle1, angle2, angle3;\n    std::cin >> angle1 >> angle2 >> angle3;\n    \n    if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {\n        std::cout << \"Valid Triangle\" << std::endl;\n    } else {\n        std::cout << \"Invalid Triangle\" << std::endl;\n    }\n    return 0;\n}"
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