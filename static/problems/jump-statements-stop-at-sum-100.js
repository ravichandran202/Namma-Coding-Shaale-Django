module.exports = {
  "title": "Stop When Sum Reaches 100",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Write a program that reads numbers continuously and keeps adding them until the total sum reaches or exceeds <code>100</code>. When the sum becomes <code>100</code> or more, the program should immediately stop reading more numbers. You must use the <code>break</code> statement to exit the loop when the sum reaches or exceeds <code>100</code>.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A series of positive integers, one per line</li>
      <li>The numbers will be such that their sum will eventually reach or exceed <code>100</code></li>
      <li>There will be enough numbers to make the sum reach at least <code>100</code></li>
      <li>All numbers are positive integers (greater than 0)</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Use a loop to keep reading numbers</li>
      <li>Read one integer from input in each iteration</li>
      <li>Add the number to the running total</li>
      <li>Print the current total after adding each number</li>
      <li>Check if the total has reached or exceeded <code>100</code></li>
      <li>If total <code>≥ 100</code>, exit the loop immediately</li>
      <li>If total <code>&lt; 100</code>, continue to the next iteration</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
30
40
50
20
Output:
30
70
120</pre>
    <p><b>Explanation:</b> Start with total = 0. Read 30, total = 30, print 30. Read 40, total = 70, print 70. Read 50, total = 120, print 120. Since 120 ≥ 100, break and stop. The number 20 is never read because we already broke out of the loop.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10
20
30
40
50
Output:
10
30
60
100</pre>
    <p><b>Explanation:</b> Read 10 (total=10), read 20 (total=30), read 30 (total=60), read 40 (total=100). Since total=100 ≥ 100, break and stop. The number 50 is never read.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "30\n70\n120", 
      "stdinput": "30\n40\n50\n20",
      "explanation": "30+40=70, 70+50=120 ≥ 100, stop" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "10\n30\n60\n100", 
      "stdinput": "10\n20\n30\n40\n50",
      "explanation": "10+20=30, 30+30=60, 60+40=100 ≥ 100, stop" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "50\n100", 
      "stdinput": "50\n50\n50",
      "explanation": "50+50=100 ≥ 100, stop" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n3\n6\n10\n15\n21\n28\n36\n45\n55\n66\n78\n91\n105", 
      "stdinput": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15",
      "explanation": "Triangular numbers until sum ≥ 100" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "99\n199", 
      "stdinput": "99\n100\n1",
      "explanation": "99+100=199 ≥ 100, stop" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "25\n50\n75\n100", 
      "stdinput": "25\n25\n25\n25\n25",
      "explanation": "25+25=50, 50+25=75, 75+25=100 ≥ 100, stop" 
    }
  ],

  "templates": {
    "python": "def stop_at_sum_100():\n    total = 0\n    while total < 100:\n        num = int(input())\n        total += num\n        print(total)\n        if total >= 100:\n            break\n\n# main code\nstop_at_sum_100()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void stop_at_sum_100() {\n        Scanner scanner = new Scanner(System.in);\n        int total = 0;\n        while (total < 100) {\n            int num = scanner.nextInt();\n            total += num;\n            System.out.println(total);\n            if (total >= 100) {\n                break;\n            }\n        }\n    }\n    \n    public static void main(String[] args) {\n        stop_at_sum_100();\n    }\n}",
    "javascript": "function stop_at_sum_100() {\n    const readline = require('readline').createInterface({\n        input: process.stdin,\n        output: process.stdout\n    });\n    \n    const lines = [];\n    readline.on('line', (line) => {\n        lines.push(line);\n    });\n    \n    readline.on('close', () => {\n        let total = 0;\n        for (let line of lines) {\n            const num = parseInt(line);\n            total += num;\n            console.log(total);\n            if (total >= 100) {\n                break;\n            }\n        }\n    });\n}\n\nstop_at_sum_100();",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid stop_at_sum_100() {\n    int total = 0;\n    int num;\n    while (total < 100) {\n        cin >> num;\n        total += num;\n        cout << total << endl;\n        if (total >= 100) {\n            break;\n        }\n    }\n}\n\nint main() {\n    stop_at_sum_100();\n    return 0;\n}"
  },


  "solutions": {
    "python": "def stop_at_sum_100():\n    total = 0\n    while total < 100:\n        num = int(input())\n        total += num\n        print(total)\n        if total >= 100:\n            break\n\n# main code\nstop_at_sum_100()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void stop_at_sum_100() {\n        Scanner scanner = new Scanner(System.in);\n        int total = 0;\n        while (total < 100) {\n            int num = scanner.nextInt();\n            total += num;\n            System.out.println(total);\n            if (total >= 100) {\n                break;\n            }\n        }\n    }\n    \n    public static void main(String[] args) {\n        stop_at_sum_100();\n    }\n}",
    "javascript": "function stop_at_sum_100() {\n    const readline = require('readline').createInterface({\n        input: process.stdin,\n        output: process.stdout\n    });\n    \n    const lines = [];\n    readline.on('line', (line) => {\n        lines.push(line);\n    });\n    \n    readline.on('close', () => {\n        let total = 0;\n        for (let line of lines) {\n            const num = parseInt(line);\n            total += num;\n            console.log(total);\n            if (total >= 100) {\n                break;\n            }\n        }\n    });\n}\n\nstop_at_sum_100();",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid stop_at_sum_100() {\n    int total = 0;\n    int num;\n    while (total < 100) {\n        cin >> num;\n        total += num;\n        cout << total << endl;\n        if (total >= 100) {\n            break;\n        }\n    }\n}\n\nint main() {\n    stop_at_sum_100();\n    return 0;\n}"
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