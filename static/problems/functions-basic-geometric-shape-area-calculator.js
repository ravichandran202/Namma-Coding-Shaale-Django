module.exports = {
  "title": "Geometric Shape Area Calculator",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Create three functions to calculate areas of different geometric shapes: circle, rectangle, and triangle. Return the results formatted to two decimal places.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing three integers separated by spaces (radius, length/width, height)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read three integers from input</li>
      <li>Create three separate functions:</li>
      <ul>
        <li><code>calculate_circle_area(radius)</code> - returns area of circle using formula: <code>π × radius²</code> (use π = 3.14)</li>
        <li><code>calculate_rectangle_area(length, width)</code> - returns area of rectangle using formula: <code>length × width</code></li>
        <li><code>calculate_triangle_area(base, height)</code> - returns area of triangle using formula: <code>½ × base × height</code></li>
      </ul>
      <li>Each function should take appropriate parameters and return the area</li>
      <li>Call all three functions with the input values and print each result on a new line formatted to 2 decimal places</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5 3 4

Output:
78.50
12.00
6.00</pre>
    <p><b>Explanation:</b> Circle: 3.14 × 5² = 78.50, Rectangle: 3 × 4 = 12.00, Triangle: ½ × 3 × 4 = 6.00</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
7 2 5

Output:
153.86
10.00
5.00</pre>
    <p><b>Explanation:</b> Circle: 3.14 × 7² = 153.86, Rectangle: 2 × 5 = 10.00, Triangle: ½ × 2 × 5 = 5.00</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "78.50\n12.00\n6.00", 
      "stdinput": "5 3 4",
      "explanation": "Circle: 3.14×5²=78.50, Rectangle: 3×4=12.00, Triangle: 0.5×3×4=6.00" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "153.86\n10.00\n5.00", 
      "stdinput": "7 2 5",
      "explanation": "Circle: 3.14×7²=153.86, Rectangle: 2×5=10.00, Triangle: 0.5×2×5=5.00" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "3.14\n1.00\n0.50", 
      "stdinput": "1 1 1",
      "explanation": "Circle: 3.14×1²=3.14, Rectangle: 1×1=1.00, Triangle: 0.5×1×1=0.50" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "314.00\n20.00\n10.00", 
      "stdinput": "10 4 5",
      "explanation": "Circle: 3.14×10²=314.00, Rectangle: 4×5=20.00, Triangle: 0.5×4×5=10.00" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "12.56\n48.00\n24.00", 
      "stdinput": "2 6 8",
      "explanation": "Circle: 3.14×2²=12.56, Rectangle: 6×8=48.00, Triangle: 0.5×6×8=24.00" 
    }
  ],

  "templates": {
    "python": "def calculate_circle_area(radius):\n    return 3.14 * radius * radius\n\ndef calculate_rectangle_area(length, width):\n    return length * width\n\ndef calculate_triangle_area(base, height):\n    return 0.5 * base * height\n\n# Main code\nr, l, h = map(int, input().split())\nprint(f\"{calculate_circle_area(r):.2f}\")\nprint(f\"{calculate_rectangle_area(l, h):.2f}\")\nprint(f\"{calculate_triangle_area(l, h):.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static double calculate_circle_area(int radius) {\n        return 3.14 * radius * radius;\n    }\n    \n    public static double calculate_rectangle_area(int length, int width) {\n        return length * width;\n    }\n    \n    public static double calculate_triangle_area(int base, int height) {\n        return 0.5 * base * height;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int r = scanner.nextInt();\n        int l = scanner.nextInt();\n        int h = scanner.nextInt();\n        \n        System.out.printf(\"%.2f%n\", calculate_circle_area(r));\n        System.out.printf(\"%.2f%n\", calculate_rectangle_area(l, h));\n        System.out.printf(\"%.2f%n\", calculate_triangle_area(l, h));\n    }\n}",
    "javascript": "function calculate_circle_area(radius) {\n    return 3.14 * radius * radius;\n}\n\nfunction calculate_rectangle_area(length, width) {\n    return length * width;\n}\n\nfunction calculate_triangle_area(base, height) {\n    return 0.5 * base * height;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [r, l, h] = input.split(' ').map(Number);\n    \n    console.log(calculate_circle_area(r).toFixed(2));\n    console.log(calculate_rectangle_area(l, h).toFixed(2));\n    console.log(calculate_triangle_area(l, h).toFixed(2));\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\ndouble calculate_circle_area(int radius) {\n    return 3.14 * radius * radius;\n}\n\ndouble calculate_rectangle_area(int length, int width) {\n    return length * width;\n}\n\ndouble calculate_triangle_area(int base, int height) {\n    return 0.5 * base * height;\n}\n\nint main() {\n    int r, l, h;\n    cin >> r >> l >> h;\n    \n    cout << fixed << setprecision(2);\n    cout << calculate_circle_area(r) << endl;\n    cout << calculate_rectangle_area(l, h) << endl;\n    cout << calculate_triangle_area(l, h) << endl;\n    \n    return 0;\n}"
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