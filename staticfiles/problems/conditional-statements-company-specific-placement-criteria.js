module.exports = {
  "title": "Company-Specific Placement Criteria",
  "difficulty": "hard",
  "acceptance": "57%",

  "description": `
    <p>A college placement cell needs to check if students are eligible for different companies. Each company has its own special requirements beyond the basic rules. Think of it like different clubs in school - each has its own entry rules!</p>
    
    <p><b>What the program needs to do:</b></p>
    <ul>
      <li>Read the student's <b>CGPA</b> (overall grade point average)</li>
      <li>Read if they have any <b>backlogs</b> (failed subjects)</li>
      <li>Read which <b>company</b> they're applying to</li>
      <li>Read their <b>coding test score</b> (programming test percentage)</li>
      <li>Read how many <b>projects</b> they've completed</li>
      <li>Check if they meet all requirements for that specific company</li>
    </ul>

    <p><b>How the eligibility system works:</b></p>
    
    <p><b>🎓 Basic Eligibility (Required for ALL companies):</b></p>
    <ul>
      <li>✅ <b>CGPA ≥ 7.0/10:</b> Must have good overall grades</li>
      <li>✅ <b>No Active Backlogs:</b> Cannot have any failed subjects</li>
      <li><i>If these basic rules are not met, student cannot apply to ANY company</i></li>
    </ul>

    <p><b>🏢 Company-Specific Rules (Extra requirements):</b></p>
    
    <p><b>Company A - Top Tech Company (Very Strict):</b></p>
    <ul>
      <li>🥇 <b>CGPA ≥ 8.5:</b> Excellent grades required</li>
      <li>💻 <b>Coding Test ≥ 80%:</b> Must be very good at programming</li>
      <li><i>Must meet BOTH requirements</i></li>
    </ul>

    <p><b>Company B - Mid-Tier Tech Company (Flexible):</b></p>
    <ul>
      <li>🥈 <b>CGPA ≥ 8.0 OR Coding Test ≥ 85%:</b></li>
      <li><i>Can qualify with good grades OR good coding skills</i></li>
    </ul>

    <p><b>Company C - Product Based Company (Project Focused):</b></p>
    <ul>
      <li>🥉 <b>CGPA ≥ 7.5:</b> Good grades required</li>
      <li>📁 <b>Projects ≥ 3:</b> Must have practical experience</li>
      <li><i>Must meet BOTH requirements</i></li>
    </ul>

    <p><b>Step-by-step checking:</b></p>
    <ol>
      <li>First check basic eligibility (CGPA ≥ 7.0 and no backlogs)</li>
      <li>If basic eligibility passed, check company-specific rules</li>
      <li>If basic eligibility failed, student cannot apply anywhere</li>
    </ol>

    <p><b>Simple Example:</b></p>
    <p>Student with CGPA 8.2, no backlogs, applying to Company B, coding test 82%, 4 projects</p>
    <p>Step 1: Basic eligibility ✅ (CGPA 8.2 ≥ 7.0, no backlogs)</p>
    <p>Step 2: Company B rules ✅ (CGPA 8.2 ≥ 8.0 - meets the grade requirement)</p>
    <p>Result: Eligible for Company B</p>

    <p><b>What you'll learn:</b></p>
    <ul>
      <li>How to handle multiple levels of conditions</li>
      <li>How to use AND/OR logical operators</li>
      <li>How to build complex eligibility systems</li>
      <li>How to organize different company rules</li>
    </ul>

    <p><b>Think of it like this:</b> You're the placement coordinator. First you check if the student is generally eligible (basic rules). Then you check if they meet the specific requirements for each company. Some companies are very strict (need both good grades AND coding skills), while others are more flexible (need good grades OR coding skills).</p>
  `,

  "examples": `
    <h3>Example 1: Good Student for Flexible Company</h3>
    <pre class="constraints">Input: 
8.2
no
B
82
4
Output: Eligible for Company B</pre>
    <p><b>Why eligible:</b> Basic rules ✅ (CGPA 8.2 ≥ 7.0, no backlogs) + Company B rules ✅ (CGPA 8.2 ≥ 8.0 meets grade requirement)</p>
    
    <h3>Example 2: Excellent Student for Top Company</h3>
    <pre class="constraints">Input: 
8.7
no
A
85
2
Output: Eligible for Company A</pre>
    <p><b>Why eligible:</b> Basic rules ✅ + Company A rules ✅ (CGPA 8.7 ≥ 8.5 AND coding 85% ≥ 80%)</p>
    
    <h3>Example 3: Project-Focused Student</h3>
    <pre class="constraints">Input: 
7.8
no
C
75
4
Output: Eligible for Company C</pre>
    <p><b>Why eligible:</b> Basic rules ✅ + Company C rules ✅ (CGPA 7.8 ≥ 7.5 AND projects 4 ≥ 3)</p>

    <h3>Example 4: Fails Basic Eligibility</h3>
    <pre class="constraints">Input: 
6.8
no
A
90
5
Output: Basic eligibility criteria not met</pre>
    <p><b>Why not eligible:</b> CGPA 6.8 < 7.0 fails basic rules, so cannot apply to any company</p>

    <h3>Example 5: Good Coder for Flexible Company</h3>
    <pre class="constraints">Input: 
7.5
no
B
88
2
Output: Eligible for Company B</pre>
    <p><b>Why eligible:</b> Basic rules ✅ + Company B rules ✅ (coding 88% ≥ 85% meets coding requirement, even though CGPA 7.5 < 8.0)</p>
  `,

  "conditions": `
    <ul>
      <li>CGPA: Number between 0.0 and 10.0</li>
      <li>Backlog status: Must be "yes" or "no"</li>
      <li>Company name: Must be "A", "B", or "C"</li>
      <li>Coding test: Integer between 0 and 100</li>
      <li>Projects: Integer between 0 and 10</li>
      
      <li><b>Basic Eligibility (Required for ALL companies):</b></li>
      <ul>
        <li>CGPA ≥ 7.0</li>
        <li>Backlogs = "no"</li>
        <li>If these fail → "Basic eligibility criteria not met"</li>
      </ul>
      
      <li><b>Company A Requirements (Top Tech):</b></li>
      <ul>
        <li>CGPA ≥ 8.5</li>
        <li>Coding test ≥ 80</li>
        <li>Both conditions must be true (AND)</li>
        <li>Output: "Eligible for Company A" or "Not eligible for Company A"</li>
      </ul>
      
      <li><b>Company B Requirements (Mid-Tier Tech):</b></li>
      <ul>
        <li>CGPA ≥ 8.0 OR Coding test ≥ 85</li>
        <li>Either condition can be true (OR)</li>
        <li>Output: "Eligible for Company B" or "Not eligible for Company B"</li>
      </ul>
      
      <li><b>Company C Requirements (Product Based):</b></li>
      <ul>
        <li>CGPA ≥ 7.5</li>
        <li>Projects ≥ 3</li>
        <li>Both conditions must be true (AND)</li>
        <li>Output: "Eligible for Company C" or "Not eligible for Company C"</li>
      </ul>
      
      <li><b>Check Order:</b></li>
      <ol>
        <li>First check basic eligibility</li>
        <li>If basic eligibility passed, check specific company rules</li>
        <li>If company not recognized, output "Company not recognized"</li>
      </ol>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Eligible for Company B", "stdinput": "8.2\nno\nB\n82\n4" },
    { "id": 2, "input": [], "expected": "Eligible for Company A", "stdinput": "8.7\nno\nA\n85\n2" },
    { "id": 3, "input": [], "expected": "Eligible for Company C", "stdinput": "7.8\nno\nC\n75\n4" },
    { "id": 4, "input": [], "expected": "Basic eligibility criteria not met", "stdinput": "6.8\nno\nA\n90\n5" },
    { "id": 5, "input": [], "expected": "Eligible for Company B", "stdinput": "7.5\nno\nB\n88\n2" },
    { "id": 6, "input": [], "expected": "Not eligible for Company A", "stdinput": "8.0\nno\nA\n85\n3" },
    { "id": 7, "input": [], "expected": "Not eligible for Company B", "stdinput": "7.9\nno\nB\n84\n3" },
    { "id": 8, "input": [], "expected": "Not eligible for Company C", "stdinput": "7.6\nno\nC\n80\n2" },
    { "id": 9, "input": [], "expected": "Basic eligibility criteria not met", "stdinput": "8.5\nyes\nA\n90\n4" },
    { "id": 10, "input": [], "expected": "Eligible for Company B", "stdinput": "7.2\nno\nB\n90\n1" }
  ],

  "templates": {
    "python": "cgpa = float(input())\nbacklogs = input()\ncompany = input()\ncoding_test = int(input())\nprojects = int(input())\n\n# Check basic eligibility\nif cgpa >= 7.0 and backlogs == \"no\":\n    # Company-specific criteria\n    if company == \"A\":\n        if cgpa >= 8.5 and coding_test >= 80:\n            print(\"Eligible for Company A\")\n        else:\n            print(\"Not eligible for Company A\")\n    elif company == \"B\":\n        if cgpa >= 8.0 or coding_test >= 85:\n            print(\"Eligible for Company B\")\n        else:\n            print(\"Not eligible for Company B\")\n    elif company == \"C\":\n        if cgpa >= 7.5 and projects >= 3:\n            print(\"Eligible for Company C\")\n        else:\n            print(\"Not eligible for Company C\")\n    else:\n        print(\"Company not recognized\")\nelse:\n    print(\"Basic eligibility criteria not met\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double cgpa = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String backlogs = scanner.nextLine();\n        String company = scanner.nextLine();\n        int coding_test = scanner.nextInt();\n        int projects = scanner.nextInt();\n        \n        // Check basic eligibility\n        if (cgpa >= 7.0 && backlogs.equals(\"no\")) {\n            // Company-specific criteria\n            if (company.equals(\"A\")) {\n                if (cgpa >= 8.5 && coding_test >= 80) {\n                    System.out.println(\"Eligible for Company A\");\n                } else {\n                    System.out.println(\"Not eligible for Company A\");\n                }\n            } else if (company.equals(\"B\")) {\n                if (cgpa >= 8.0 || coding_test >= 85) {\n                    System.out.println(\"Eligible for Company B\");\n                } else {\n                    System.out.println(\"Not eligible for Company B\");\n                }\n            } else if (company.equals(\"C\")) {\n                if (cgpa >= 7.5 && projects >= 3) {\n                    System.out.println(\"Eligible for Company C\");\n                } else {\n                    System.out.println(\"Not eligible for Company C\");\n                }\n            } else {\n                System.out.println(\"Company not recognized\");\n            }\n        } else {\n            System.out.println(\"Basic eligibility criteria not met\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 5) {\n        const cgpa = parseFloat(input[0]);\n        const backlogs = input[1];\n        const company = input[2];\n        const coding_test = parseInt(input[3]);\n        const projects = parseInt(input[4]);\n        \n        // Check basic eligibility\n        if (cgpa >= 7.0 && backlogs === \"no\") {\n            // Company-specific criteria\n            if (company === \"A\") {\n                if (cgpa >= 8.5 && coding_test >= 80) {\n                    console.log(\"Eligible for Company A\");\n                } else {\n                    console.log(\"Not eligible for Company A\");\n                }\n            } else if (company === \"B\") {\n                if (cgpa >= 8.0 || coding_test >= 85) {\n                    console.log(\"Eligible for Company B\");\n                } else {\n                    console.log(\"Not eligible for Company B\");\n                }\n            } else if (company === \"C\") {\n                if (cgpa >= 7.5 && projects >= 3) {\n                    console.log(\"Eligible for Company C\");\n                } else {\n                    console.log(\"Not eligible for Company C\");\n                }\n            } else {\n                console.log(\"Company not recognized\");\n            }\n        } else {\n            console.log(\"Basic eligibility criteria not met\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    double cgpa;\n    std::string backlogs, company;\n    int coding_test, projects;\n    std::cin >> cgpa >> backlogs >> company >> coding_test >> projects;\n    \n    // Check basic eligibility\n    if (cgpa >= 7.0 && backlogs == \"no\") {\n        // Company-specific criteria\n        if (company == \"A\") {\n            if (cgpa >= 8.5 && coding_test >= 80) {\n                std::cout << \"Eligible for Company A\" << std::endl;\n            } else {\n                std::cout << \"Not eligible for Company A\" << std::endl;\n            }\n        } else if (company == \"B\") {\n            if (cgpa >= 8.0 || coding_test >= 85) {\n                std::cout << \"Eligible for Company B\" << std::endl;\n            } else {\n                std::cout << \"Not eligible for Company B\" << std::endl;\n            }\n        } else if (company == \"C\") {\n            if (cgpa >= 7.5 && projects >= 3) {\n                std::cout << \"Eligible for Company C\" << std::endl;\n            } else {\n                std::cout << \"Not eligible for Company C\" << std::endl;\n            }\n        } else {\n            std::cout << \"Company not recognized\" << std::endl;\n        }\n    } else {\n        std::cout << \"Basic eligibility criteria not met\" << std::endl;\n    }\n    return 0;\n}"
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