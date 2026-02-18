module.exports = {
  "title": "Safe Integer Conversion – Exception Handling",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>Write a function that safely converts a string to integer and handles invalid input.</p>
    <p><b>Your Task:</b></p>
    <ol>
      <li>Create a function <code>safe_int(s)</code></li>
      <li>The function should convert string <code>s</code> to integer</li>
      <li>If conversion fails (e.g., input is "abc"), catch the <code>ValueError</code></li>
      <li>Return <code>"Invalid Integer"</code> when conversion fails</li>
      <li>Read a string from input and call the function</li>
    </ol>
    <p><b>Important:</b> Use try-except block to handle the exception.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
abc
Output:
Invalid Integer</pre>
    <p><b>Explanation:</b> "abc" cannot be converted to integer, so return error message.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
123
Output:
123</pre>
    <p><b>Explanation:</b> "123" is a valid integer string.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Invalid Integer", 
      "stdinput": "abc",
      "explanation": "Non-numeric string should return error" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "123", 
      "stdinput": "123",
      "explanation": "Valid positive integer" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "-456", 
      "stdinput": "-456",
      "explanation": "Valid negative integer" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Invalid Integer", 
      "stdinput": "12.34",
      "explanation": "Decimal string is not valid integer" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Invalid Integer", 
      "stdinput": "123abc",
      "explanation": "Mixed alphanumeric string" 
    }
  ],

  "templates": {
    "python": 
`def safe_int(s):
    try:
        return int(s)
    except ValueError:
        return "Invalid Integer"

# main code
s = input()
print(safe_int(s))`,

    "java": 
`import java.util.*;

public class Main {
    public static String safe_int(String s) {
        try {
            return String.valueOf(Integer.parseInt(s));
        } catch (NumberFormatException e) {
            return "Invalid Integer";
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(safe_int(s));
    }
}`,

    "javascript": 
`function safe_int(s) {
    try {
        const num = parseInt(s);
        if (isNaN(num) || !Number.isInteger(parseFloat(s))) {
            throw new Error("Invalid Integer");
        }
        return num.toString();
    } catch (error) {
        return "Invalid Integer";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    console.log(safe_int(input));
    readline.close();
});`,

    "c++": 
`#include <iostream>
#include <string>
#include <sstream>
using namespace std;

string safe_int(string s) {
    try {
        stringstream ss(s);
        int num;
        ss >> num;
        if (ss.fail() || !ss.eof()) {
            throw runtime_error("Invalid Integer");
        }
        return to_string(num);
    } catch (runtime_error& e) {
        return "Invalid Integer";
    }
}

int main() {
    string s;
    getline(cin, s);
    cout << safe_int(s);
    return 0;
}`
  },


  "solutions": {
    "python": 
`def safe_int(s):
    try:
        return int(s)
    except ValueError:
        return "Invalid Integer"

# main code
s = input()
print(safe_int(s))`,

    "java": 
`import java.util.*;

public class Main {
    public static String safe_int(String s) {
        try {
            return String.valueOf(Integer.parseInt(s));
        } catch (NumberFormatException e) {
            return "Invalid Integer";
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(safe_int(s));
    }
}`,

    "javascript": 
`function safe_int(s) {
    try {
        const num = parseInt(s);
        if (isNaN(num) || !Number.isInteger(parseFloat(s))) {
            throw new Error("Invalid Integer");
        }
        return num.toString();
    } catch (error) {
        return "Invalid Integer";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    console.log(safe_int(input));
    readline.close();
});`,

    "c++": 
`#include <iostream>
#include <string>
#include <sstream>
using namespace std;

string safe_int(string s) {
    try {
        stringstream ss(s);
        int num;
        ss >> num;
        if (ss.fail() || !ss.eof()) {
            throw runtime_error("Invalid Integer");
        }
        return to_string(num);
    } catch (runtime_error& e) {
        return "Invalid Integer";
    }
}

int main() {
    string s;
    getline(cin, s);
    cout << safe_int(s);
    return 0;
}`
  },

  "wrapCode": function(lang, userCode) {
    return userCode;
  }
}