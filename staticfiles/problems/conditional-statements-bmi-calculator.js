module.exports = {
  "title": "Health Category Check",
  "difficulty": "medium",
  "acceptance": "79%",

  "description": `
    <p>Calculate Body Mass Index (BMI) and categorize it into health categories.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read weight (in kilograms) and height (in meters) as input</li>
      <li>Calculate BMI using the formula</li>
      <li>Categorize the BMI into appropriate health categories</li>
      <li>Print the health category</li>
    </ul>
    <pre class="constraints">Formula:
BMI = weight / (height × height)

Where:
weight = Weight in kilograms
height = Height in meters</pre>
    <p><b>BMI Categories:</b></p>
    <ul>
      <li>Underweight: BMI < 18.5</li>
      <li>Normal: 18.5 ≤ BMI < 25</li>
      <li>Overweight: 25 ≤ BMI < 30</li>
      <li>Obese: BMI ≥ 30</li>
    </ul>
    <p>This problem teaches floating-point arithmetic, mathematical calculations, and range-based categorization.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
70
1.75
Output: Normal</pre>
    <p><b>Explanation:</b> BMI = 70 / (1.75 × 1.75) = 22.86, which falls in the Normal range (18.5-24.9).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
85
1.70
Output: Overweight</pre>
    <p><b>Explanation:</b> BMI = 85 / (1.70 × 1.70) = 29.4, which falls in the Overweight range.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two floating-point numbers: weight and height</li>
      <li>Weight will be between 1 and 300 kg</li>
      <li>Height will be between 0.5 and 3.0 meters</li>
      <li>Output must be exactly one of: "Underweight", "Normal", "Overweight", "Obese"</li>
      <li>Use inclusive-exclusive ranges as specified</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Normal", "stdinput": "70\n1.75" },
    { "id": 3, "input": [], "expected": "Overweight", "stdinput": "85\n1.70" },
    { "id": 4, "input": [], "expected": "Obese", "stdinput": "100\n1.65" },
    { "id": 5, "input": [], "expected": "Underweight", "stdinput": "45\n1.75" },
    { "id": 6, "input": [], "expected": "Normal", "stdinput": "65\n1.80" },
    { "id": 7, "input": [], "expected": "Overweight", "stdinput": "80\n1.70" },
    { "id": 8, "input": [], "expected": "Obese", "stdinput": "120\n1.70" },
    { "id": 9, "input": [], "expected": "Normal", "stdinput": "58\n1.65" },
    { "id": 10, "input": [], "expected": "Underweight", "stdinput": "40\n1.60" }
  ],

  "templates": {
    "python": "weight = float(input())\nheight = float(input())\n\nbmi = weight / (height * height)\n\nif bmi < 18.5:\n    print(\"Underweight\")\nelif bmi < 25:\n    print(\"Normal\")\nelif bmi < 30:\n    print(\"Overweight\")\nelse:\n    print(\"Obese\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double weight = scanner.nextDouble();\n        double height = scanner.nextDouble();\n        \n        double bmi = weight / (height * height);\n        \n        if (bmi < 18.5) {\n            System.out.println(\"Underweight\");\n        } else if (bmi < 25) {\n            System.out.println(\"Normal\");\n        } else if (bmi < 30) {\n            System.out.println(\"Overweight\");\n        } else {\n            System.out.println(\"Obese\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseFloat(line));\n    if (input.length === 2) {\n        const [weight, height] = input;\n        const bmi = weight / (height * height);\n        \n        if (bmi < 18.5) {\n            console.log(\"Underweight\");\n        } else if (bmi < 25) {\n            console.log(\"Normal\");\n        } else if (bmi < 30) {\n            console.log(\"Overweight\");\n        } else {\n            console.log(\"Obese\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    double weight, height;\n    std::cin >> weight >> height;\n    \n    double bmi = weight / (height * height);\n    \n    if (bmi < 18.5) {\n        std::cout << \"Underweight\" << std::endl;\n    } else if (bmi < 25) {\n        std::cout << \"Normal\" << std::endl;\n    } else if (bmi < 30) {\n        std::cout << \"Overweight\" << std::endl;\n    } else {\n        std::cout << \"Obese\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "weight = float(input())\nheight = float(input())\n\nbmi = weight / (height * height)\n\nif bmi < 18.5:\n    print(\"Underweight\")\nelif bmi < 25:\n    print(\"Normal\")\nelif bmi < 30:\n    print(\"Overweight\")\nelse:\n    print(\"Obese\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double weight = scanner.nextDouble();\n        double height = scanner.nextDouble();\n        \n        double bmi = weight / (height * height);\n        \n        if (bmi < 18.5) {\n            System.out.println(\"Underweight\");\n        } else if (bmi < 25) {\n            System.out.println(\"Normal\");\n        } else if (bmi < 30) {\n            System.out.println(\"Overweight\");\n        } else {\n            System.out.println(\"Obese\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseFloat(line));\n    if (input.length === 2) {\n        const [weight, height] = input;\n        const bmi = weight / (height * height);\n        \n        if (bmi < 18.5) {\n            console.log(\"Underweight\");\n        } else if (bmi < 25) {\n            console.log(\"Normal\");\n        } else if (bmi < 30) {\n            console.log(\"Overweight\");\n        } else {\n            console.log(\"Obese\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    double weight, height;\n    std::cin >> weight >> height;\n    \n    double bmi = weight / (height * height);\n    \n    if (bmi < 18.5) {\n        std::cout << \"Underweight\" << std::endl;\n    } else if (bmi < 25) {\n        std::cout << \"Normal\" << std::endl;\n    } else if (bmi < 30) {\n        std::cout << \"Overweight\" << std::endl;\n    } else {\n        std::cout << \"Obese\" << std::endl;\n    }\n    return 0;\n}"
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