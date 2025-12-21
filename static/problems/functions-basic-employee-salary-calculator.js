module.exports = {
  "title": "Employee Salary Calculator – Four Salary Calculation Functions",
  "difficulty": "hard",
  "acceptance": "96%",

  "description": `
    <p>Create four functions to calculate different components of an employee's salary: basic salary, overtime pay, gross salary, and net salary.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing two integers separated by a space:
        <ul>
          <li>Hours worked</li>
          <li>Hourly rate</li>
        </ul>
      </li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read hours worked and hourly rate from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>calculate_basic_salary(hours, rate)</code> - returns basic salary for regular hours (first 40 hours at normal rate)</li>
        <li><code>calculate_overtime(hours, rate)</code> - returns overtime pay for hours beyond 40 (overtime rate = 1.5 × normal rate)</li>
        <li><code>calculate_gross_salary(basic, overtime)</code> - returns gross salary (basic + overtime)</li>
        <li><code>calculate_net_salary(gross)</code> - returns net salary after 10% tax deduction (gross × 0.9)</li>
      </ul>
      <li>Call the functions in sequence and print all salary components</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
45 20
Output:
Basic Salary: 800.00
Overtime Pay: 150.00
Gross Salary: 950.00
Net Salary: 855.00</pre>
    <p><b>Explanation:</b> Basic: 40×20=800.00, Overtime: 5×20×1.5=150.00, Gross: 800+150=950.00, Net: 950×0.9=855.00</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
35 15
Output:
Basic Salary: 525.00
Overtime Pay: 0.00
Gross Salary: 525.00
Net Salary: 472.50</pre>
    <p><b>Explanation:</b> Basic: 35×15=525.00, Overtime: 0.00 (≤40 hours), Gross: 525+0=525.00, Net: 525×0.9=472.50</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Basic Salary: 800.00\nOvertime Pay: 150.00\nGross Salary: 950.00\nNet Salary: 855.00", 
      "stdinput": "45 20",
      "explanation": "Basic: 40×20=800.00, Overtime: 5×20×1.5=150.00, Gross: 950.00, Net: 855.00" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Basic Salary: 525.00\nOvertime Pay: 0.00\nGross Salary: 525.00\nNet Salary: 472.50", 
      "stdinput": "35 15",
      "explanation": "Basic: 35×15=525.00, Overtime: 0.00, Gross: 525.00, Net: 472.50" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Basic Salary: 800.00\nOvertime Pay: 0.00\nGross Salary: 800.00\nNet Salary: 720.00", 
      "stdinput": "40 20",
      "explanation": "Exactly 40 hours: Basic: 40×20=800.00, Overtime: 0.00, Gross: 800.00, Net: 720.00" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Basic Salary: 400.00\nOvertime Pay: 225.00\nGross Salary: 625.00\nNet Salary: 562.50", 
      "stdinput": "55 10",
      "explanation": "Basic: 40×10=400.00, Overtime: 15×10×1.5=225.00, Gross: 625.00, Net: 562.50" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Basic Salary: 0.00\nOvertime Pay: 0.00\nGross Salary: 0.00\nNet Salary: 0.00", 
      "stdinput": "0 25",
      "explanation": "Zero hours worked: all amounts 0.00" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Basic Salary: 2000.00\nOvertime Pay: 750.00\nGross Salary: 2750.00\nNet Salary: 2475.00", 
      "stdinput": "50 50",
      "explanation": "Basic: 40×50=2000.00, Overtime: 10×50×1.5=750.00, Gross: 2750.00, Net: 2475.00" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Basic Salary: 1200.00\nOvertime Pay: 90.00\nGross Salary: 1290.00\nNet Salary: 1161.00", 
      "stdinput": "42 30",
      "explanation": "Basic: 40×30=1200.00, Overtime: 2×30×1.5=90.00, Gross: 1290.00, Net: 1161.00" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Basic Salary: 80.00\nOvertime Pay: 0.00\nGross Salary: 80.00\nNet Salary: 72.00", 
      "stdinput": "8 10",
      "explanation": "Basic: 8×10=80.00, Overtime: 0.00, Gross: 80.00, Net: 72.00" 
    }
  ],

  "templates": {
    "python": "def calculate_basic_salary(hours, rate):\n    regular_hours = min(hours, 40)\n    return regular_hours * rate\n\ndef calculate_overtime(hours, rate):\n    if hours > 40:\n        return (hours - 40) * rate * 1.5\n    return 0\n\ndef calculate_gross_salary(basic, overtime):\n    return basic + overtime\n\ndef calculate_net_salary(gross):\n    return gross * 0.9\n\n# Main code\nhours_worked, hourly_rate = map(int, input().split())\nbasic = calculate_basic_salary(hours_worked, hourly_rate)\novertime = calculate_overtime(hours_worked, hourly_rate)\ngross = calculate_gross_salary(basic, overtime)\nnet = calculate_net_salary(gross)\n\nprint(f\"Basic Salary: {basic:.2f}\")\nprint(f\"Overtime Pay: {overtime:.2f}\")\nprint(f\"Gross Salary: {gross:.2f}\")\nprint(f\"Net Salary: {net:.2f}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static double calculate_basic_salary(int hours, int rate) {\n        int regular_hours = Math.min(hours, 40);\n        return regular_hours * rate;\n    }\n    \n    public static double calculate_overtime(int hours, int rate) {\n        if (hours > 40) {\n            return (hours - 40) * rate * 1.5;\n        }\n        return 0;\n    }\n    \n    public static double calculate_gross_salary(double basic, double overtime) {\n        return basic + overtime;\n    }\n    \n    public static double calculate_net_salary(double gross) {\n        return gross * 0.9;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int hours_worked = scanner.nextInt();\n        int hourly_rate = scanner.nextInt();\n        \n        double basic = calculate_basic_salary(hours_worked, hourly_rate);\n        double overtime = calculate_overtime(hours_worked, hourly_rate);\n        double gross = calculate_gross_salary(basic, overtime);\n        double net = calculate_net_salary(gross);\n        \n        System.out.printf(\"Basic Salary: %.2f%n\", basic);\n        System.out.printf(\"Overtime Pay: %.2f%n\", overtime);\n        System.out.printf(\"Gross Salary: %.2f%n\", gross);\n        System.out.printf(\"Net Salary: %.2f%n\", net);\n    }\n}",
    "javascript": "function calculate_basic_salary(hours, rate) {\n    const regular_hours = Math.min(hours, 40);\n    return regular_hours * rate;\n}\n\nfunction calculate_overtime(hours, rate) {\n    if (hours > 40) {\n        return (hours - 40) * rate * 1.5;\n    }\n    return 0;\n}\n\nfunction calculate_gross_salary(basic, overtime) {\n    return basic + overtime;\n}\n\nfunction calculate_net_salary(gross) {\n    return gross * 0.9;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [hours_worked, hourly_rate] = input.split(' ').map(Number);\n    const basic = calculate_basic_salary(hours_worked, hourly_rate);\n    const overtime = calculate_overtime(hours_worked, hourly_rate);\n    const gross = calculate_gross_salary(basic, overtime);\n    const net = calculate_net_salary(gross);\n    \n    console.log(`Basic Salary: ${basic.toFixed(2)}`);\n    console.log(`Overtime Pay: ${overtime.toFixed(2)}`);\n    console.log(`Gross Salary: ${gross.toFixed(2)}`);\n    console.log(`Net Salary: ${net.toFixed(2)}`);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\n#include <algorithm>\nusing namespace std;\n\ndouble calculate_basic_salary(int hours, int rate) {\n    int regular_hours = min(hours, 40);\n    return regular_hours * rate;\n}\n\ndouble calculate_overtime(int hours, int rate) {\n    if (hours > 40) {\n        return (hours - 40) * rate * 1.5;\n    }\n    return 0;\n}\n\ndouble calculate_gross_salary(double basic, double overtime) {\n    return basic + overtime;\n}\n\ndouble calculate_net_salary(double gross) {\n    return gross * 0.9;\n}\n\nint main() {\n    int hours_worked, hourly_rate;\n    cin >> hours_worked >> hourly_rate;\n    \n    double basic = calculate_basic_salary(hours_worked, hourly_rate);\n    double overtime = calculate_overtime(hours_worked, hourly_rate);\n    double gross = calculate_gross_salary(basic, overtime);\n    double net = calculate_net_salary(gross);\n    \n    cout << fixed << setprecision(2);\n    cout << \"Basic Salary: \" << basic << endl;\n    cout << \"Overtime Pay: \" << overtime << endl;\n    cout << \"Gross Salary: \" << gross << endl;\n    cout << \"Net Salary: \" << net << endl;\n    \n    return 0;\n}"
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