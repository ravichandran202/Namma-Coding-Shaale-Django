module.exports = {
  "title": "Password Strength Checker",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Create functions to check password strength based on length and uppercase character requirements.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a password string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a password from input</li>
      <li>Create two separate functions:</li>
      <ul>
        <li><code>has_uppercase(password)</code> - returns True if password contains at least one uppercase letter</li>
        <li><code>is_long_enough(password)</code> - returns True if password length greater then 7 </li>
      </ul>
      <li>Create a third function <code>check_password_strength(password)</code> that calls the other two functions and prints the strength result</li>
      <li>In main code, call <code>check_password_strength()</code> with the input password</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
Hello123
Output:
Password is strong!</pre>
    <p><b>Explanation:</b> Length: 8 (≥8), Has uppercase: H (True) → Strong</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
hello123
Output:
Password is weak!</pre>
    <p><b>Explanation:</b> Length: 8 (≥8), Has uppercase: No uppercase → Weak</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Password is strong!", 
      "stdinput": "Hello123",
      "explanation": "Length 8, has uppercase H → Strong" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Password is weak!", 
      "stdinput": "hello123",
      "explanation": "Length 8, no uppercase → Weak" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Password is weak!", 
      "stdinput": "HELLO",
      "explanation": "Length 5 (<8), has uppercase → Weak" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Password is strong!", 
      "stdinput": "Password123",
      "explanation": "Length 11, has uppercase P → Strong" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Password is weak!", 
      "stdinput": "12345678",
      "explanation": "Length 8, no letters → Weak" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Password is strong!", 
      "stdinput": "A!@#$%^&*",
      "explanation": "Length 8, has uppercase A → Strong" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Password is weak!", 
      "stdinput": "abc",
      "explanation": "Length 3, no uppercase → Weak" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Password is strong!", 
      "stdinput": "VeryLongPassword123",
      "explanation": "Length 19, has uppercase V → Strong" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Password is weak!", 
      "stdinput": "lowercaseonly",
      "explanation": "Length 13, no uppercase → Weak" 
    }
  ],

  "templates": {
    "python": "def has_uppercase(password):\n    return any(char.isupper() for char in password)\n\ndef is_long_enough(password):\n    return len(password) >= 8\n\ndef check_password_strength(password):\n    if has_uppercase(password) and is_long_enough(password):\n        print(\"Password is strong!\")\n    else:\n        print(\"Password is weak!\")\n\n\n# Main code\npassword = input()\ncheck_password_strength(password)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean has_uppercase(String password) {\n        for (int i = 0; i < password.length(); i++) {\n            if (Character.isUpperCase(password.charAt(i))) {\n                return true;\n            }\n        }\n        return false;\n    }\n    \n    public static boolean is_long_enough(String password) {\n        return password.length() >= 8;\n    }\n    \n    public static void check_password_strength(String password) {\n        if (has_uppercase(password) && is_long_enough(password)) {\n            System.out.println(\"Password is strong!\");\n        } else {\n            System.out.println(\"Password is weak!\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String password = scanner.nextLine();\n        check_password_strength(password);\n    }\n}",
    "javascript": "function has_uppercase(password) {\n    for (let i = 0; i < password.length; i++) {\n        if (password[i] >= 'A' && password[i] <= 'Z') {\n            return true;\n        }\n    }\n    return false;\n}\n\nfunction is_long_enough(password) {\n    return password.length >= 8;\n}\n\nfunction check_password_strength(password) {\n    if (has_uppercase(password) && is_long_enough(password)) {\n        console.log(\"Password is strong!\");\n    } else {\n        console.log(\"Password is weak!\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (password) => {\n    check_password_strength(password);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool has_uppercase(string password) {\n    for (char ch : password) {\n        if (isupper(ch)) {\n            return true;\n        }\n    }\n    return false;\n}\n\nbool is_long_enough(string password) {\n    return password.length() >= 8;\n}\n\nvoid check_password_strength(string password) {\n    if (has_uppercase(password) && is_long_enough(password)) {\n        cout << \"Password is strong!\" << endl;\n    } else {\n        cout << \"Password is weak!\" << endl;\n    }\n}\n\nint main() {\n    string password;\n    getline(cin, password);\n    check_password_strength(password);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def has_uppercase(password):\n    return any(char.isupper() for char in password)\n\ndef is_long_enough(password):\n    return len(password) >= 8\n\ndef check_password_strength(password):\n    if has_uppercase(password) and is_long_enough(password):\n        print(\"Password is strong!\")\n    else:\n        print(\"Password is weak!\")\n\n\n# Main code\npassword = input()\ncheck_password_strength(password)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean has_uppercase(String password) {\n        for (int i = 0; i < password.length(); i++) {\n            if (Character.isUpperCase(password.charAt(i))) {\n                return true;\n            }\n        }\n        return false;\n    }\n    \n    public static boolean is_long_enough(String password) {\n        return password.length() >= 8;\n    }\n    \n    public static void check_password_strength(String password) {\n        if (has_uppercase(password) && is_long_enough(password)) {\n            System.out.println(\"Password is strong!\");\n        } else {\n            System.out.println(\"Password is weak!\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String password = scanner.nextLine();\n        check_password_strength(password);\n    }\n}",
    "javascript": "function has_uppercase(password) {\n    for (let i = 0; i < password.length; i++) {\n        if (password[i] >= 'A' && password[i] <= 'Z') {\n            return true;\n        }\n    }\n    return false;\n}\n\nfunction is_long_enough(password) {\n    return password.length >= 8;\n}\n\nfunction check_password_strength(password) {\n    if (has_uppercase(password) && is_long_enough(password)) {\n        console.log(\"Password is strong!\");\n    } else {\n        console.log(\"Password is weak!\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (password) => {\n    check_password_strength(password);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool has_uppercase(string password) {\n    for (char ch : password) {\n        if (isupper(ch)) {\n            return true;\n        }\n    }\n    return false;\n}\n\nbool is_long_enough(string password) {\n    return password.length() >= 8;\n}\n\nvoid check_password_strength(string password) {\n    if (has_uppercase(password) && is_long_enough(password)) {\n        cout << \"Password is strong!\" << endl;\n    } else {\n        cout << \"Password is weak!\" << endl;\n    }\n}\n\nint main() {\n    string password;\n    getline(cin, password);\n    check_password_strength(password);\n    return 0;\n}"
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