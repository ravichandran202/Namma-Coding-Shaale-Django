module.exports = {
  "title": "Age Eligibility Checker",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create four functions that check different age-based eligibilities, each returning a boolean (True/False) value.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer (age)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer (age) from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>is_child(age)</code> - returns True if age < 13, otherwise False</li>
        <li><code>can_vote(age)</code> - returns True if age ≥ 18, otherwise False</li>
        <li><code>is_senior_citizen(age)</code> - returns True if age ≥ 60, otherwise False</li>
        <li><code>is_teenager(age)</code> - returns True if 13 ≤ age ≤ 19, otherwise False</li>
      </ul>
      <li>Each function should take an age parameter and return a boolean value</li>
      <li>Call all four functions with the input age and print results as "Yes" or "No"</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
25

Output:
Child: No
Can Vote: Yes
Senior Citizen: No
Teenager: No</pre>
    <p><b>Explanation:</b> Age 25: child? No (<13), can vote? Yes (≥18), senior? No (<60), teenager? No (not 13-19)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15

Output:
Child: No
Can Vote: No
Senior Citizen: No
Teenager: Yes</pre>
    <p><b>Explanation:</b> Age 15: child? No (≥13), can vote? No (<18), senior? No (<60), teenager? Yes (13-19)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Child: No\nCan Vote: Yes\nSenior Citizen: No\nTeenager: No", 
      "stdinput": "25",
      "explanation": "Age 25: child=No, vote=Yes, senior=No, teenager=No" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Child: No\nCan Vote: No\nSenior Citizen: No\nTeenager: Yes", 
      "stdinput": "15",
      "explanation": "Age 15: child=No, vote=No, senior=No, teenager=Yes" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Child: Yes\nCan Vote: No\nSenior Citizen: No\nTeenager: No", 
      "stdinput": "10",
      "explanation": "Age 10: child=Yes, vote=No, senior=No, teenager=No" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Child: No\nCan Vote: Yes\nSenior Citizen: Yes\nTeenager: No", 
      "stdinput": "65",
      "explanation": "Age 65: child=No, vote=Yes, senior=Yes, teenager=No" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Child: No\nCan Vote: Yes\nSenior Citizen: Yes\nTeenager: No", 
      "stdinput": "60",
      "explanation": "Age 60: child=No, vote=Yes, senior=Yes, teenager=No" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Child: Yes\nCan Vote: No\nSenior Citizen: No\nTeenager: No", 
      "stdinput": "0",
      "explanation": "Age 0: child=Yes, vote=No, senior=No, teenager=No" 
    }
  ],

  "templates": {
    "python": "def is_child(age):\n    return age < 13\n\ndef can_vote(age):\n    return age >= 18\n\ndef is_senior_citizen(age):\n    return age >= 60\n\ndef is_teenager(age):\n    return 13 <= age <= 19\n\n# Main code\nage = int(input())\nprint(\"Child:\", \"Yes\" if is_child(age) else \"No\")\nprint(\"Can Vote:\", \"Yes\" if can_vote(age) else \"No\")\nprint(\"Senior Citizen:\", \"Yes\" if is_senior_citizen(age) else \"No\")\nprint(\"Teenager:\", \"Yes\" if is_teenager(age) else \"No\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean is_child(int age) {\n        return age < 13;\n    }\n    \n    public static boolean can_vote(int age) {\n        return age >= 18;\n    }\n    \n    public static boolean is_senior_citizen(int age) {\n        return age >= 60;\n    }\n    \n    public static boolean is_teenager(int age) {\n        return age >= 13 && age <= 19;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        \n        System.out.println(\"Child: \" + (is_child(age) ? \"Yes\" : \"No\"));\n        System.out.println(\"Can Vote: \" + (can_vote(age) ? \"Yes\" : \"No\"));\n        System.out.println(\"Senior Citizen: \" + (is_senior_citizen(age) ? \"Yes\" : \"No\"));\n        System.out.println(\"Teenager: \" + (is_teenager(age) ? \"Yes\" : \"No\"));\n    }\n}",
    "javascript": "function is_child(age) {\n    return age < 13;\n}\n\nfunction can_vote(age) {\n    return age >= 18;\n}\n\nfunction is_senior_citizen(age) {\n    return age >= 60;\n}\n\nfunction is_teenager(age) {\n    return age >= 13 && age <= 19;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const age = parseInt(input);\n    \n    console.log(\"Child: \" + (is_child(age) ? \"Yes\" : \"No\"));\n    console.log(\"Can Vote: \" + (can_vote(age) ? \"Yes\" : \"No\"));\n    console.log(\"Senior Citizen: \" + (is_senior_citizen(age) ? \"Yes\" : \"No\"));\n    console.log(\"Teenager: \" + (is_teenager(age) ? \"Yes\" : \"No\"));\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nbool is_child(int age) {\n    return age < 13;\n}\n\nbool can_vote(int age) {\n    return age >= 18;\n}\n\nbool is_senior_citizen(int age) {\n    return age >= 60;\n}\n\nbool is_teenager(int age) {\n    return age >= 13 && age <= 19;\n}\n\nint main() {\n    int age;\n    cin >> age;\n    \n    cout << \"Child: \" << (is_child(age) ? \"Yes\" : \"No\") << endl;\n    cout << \"Can Vote: \" << (can_vote(age) ? \"Yes\" : \"No\") << endl;\n    cout << \"Senior Citizen: \" << (is_senior_citizen(age) ? \"Yes\" : \"No\") << endl;\n    cout << \"Teenager: \" << (is_teenager(age) ? \"Yes\" : \"No\") << endl;\n    \n    return 0;\n}"
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