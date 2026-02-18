module.exports = {
  "title": "Age Validator – Custom Exception",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Create a custom exception and use it to validate age.</p>
    <p><b>Your Task:</b></p>
    <ol>
      <li>Create a custom exception class <code>InvalidAgeError</code> that inherits from <code>Exception</code></li>
      <li>Create a function <code>validate_age(age)</code></li>
      <li>In the function, check if age is less than 18</li>
      <li>If age < 18, raise <code>InvalidAgeError</code> with message <code>"Invalid Age"</code></li>
      <li>Otherwise, return <code>"Valid"</code></li>
      <li>Use try-except block to catch the custom exception</li>
      <li>Read age from input and call the function</li>
    </ol>
    <p><b>Important:</b> You must create and use the custom exception class.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
16
Output:
Invalid Age</pre>
    <p><b>Explanation:</b> Age 16 < 18, so raise InvalidAgeError and return error message.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
25
Output:
Valid</pre>
    <p><b>Explanation:</b> Age 25 ≥ 18, so return "Valid".</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Invalid Age", 
      "stdinput": "16",
      "explanation": "Age less than 18 should raise InvalidAgeError" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Valid", 
      "stdinput": "25",
      "explanation": "Age 25 is valid" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Valid", 
      "stdinput": "18",
      "explanation": "Age 18 is minimum valid age" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Invalid Age", 
      "stdinput": "0",
      "explanation": "Age 0 is invalid" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Invalid Age", 
      "stdinput": "17",
      "explanation": "Age 17 is invalid" 
    }
  ],

  "templates": {
    "python": 
`class InvalidAgeError(Exception):
    pass

def validate_age(age):
    try:
        if age < 18:
            raise InvalidAgeError("Invalid Age")
        return "Valid"
    except InvalidAgeError as e:
        return str(e)

# main code
age = int(input())
print(validate_age(age))`,

    "java": 
`import java.util.*;

class InvalidAgeError extends Exception {
    public InvalidAgeError(String message) {
        super(message);
    }
}

public class Main {
    public static String validate_age(int age) {
        try {
            if (age < 18) {
                throw new InvalidAgeError("Invalid Age");
            }
            return "Valid";
        } catch (InvalidAgeError e) {
            return e.getMessage();
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        System.out.println(validate_age(age));
    }
}`,

    "javascript": 
`class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function validate_age(age) {
    try {
        if (age < 18) {
            throw new InvalidAgeError("Invalid Age");
        }
        return "Valid";
    } catch (error) {
        if (error instanceof InvalidAgeError) {
            return error.message;
        }
        return "Error occurred";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    const age = parseInt(input);
    console.log(validate_age(age));
    readline.close();
});`,

    "c++": 
`#include <iostream>
#include <string>
#include <exception>
using namespace std;

class InvalidAgeError : public exception {
public:
    const char* what() const noexcept override {
        return "Invalid Age";
    }
};

string validate_age(int age) {
    try {
        if (age < 18) {
            throw InvalidAgeError();
        }
        return "Valid";
    } catch (InvalidAgeError& e) {
        return e.what();
    }
}

int main() {
    int age;
    cin >> age;
    cout << validate_age(age);
    return 0;
}`
  },


  "solutions": {
    "python": 
`class InvalidAgeError(Exception):
    pass

def validate_age(age):
    try:
        if age < 18:
            raise InvalidAgeError("Invalid Age")
        return "Valid"
    except InvalidAgeError as e:
        return str(e)

# main code
age = int(input())
print(validate_age(age))`,

    "java": 
`import java.util.*;

class InvalidAgeError extends Exception {
    public InvalidAgeError(String message) {
        super(message);
    }
}

public class Main {
    public static String validate_age(int age) {
        try {
            if (age < 18) {
                throw new InvalidAgeError("Invalid Age");
            }
            return "Valid";
        } catch (InvalidAgeError e) {
            return e.getMessage();
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        System.out.println(validate_age(age));
    }
}`,

    "javascript": 
`class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function validate_age(age) {
    try {
        if (age < 18) {
            throw new InvalidAgeError("Invalid Age");
        }
        return "Valid";
    } catch (error) {
        if (error instanceof InvalidAgeError) {
            return error.message;
        }
        return "Error occurred";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    const age = parseInt(input);
    console.log(validate_age(age));
    readline.close();
});`,

    "c++": 
`#include <iostream>
#include <string>
#include <exception>
using namespace std;

class InvalidAgeError : public exception {
public:
    const char* what() const noexcept override {
        return "Invalid Age";
    }
};

string validate_age(int age) {
    try {
        if (age < 18) {
            throw InvalidAgeError();
        }
        return "Valid";
    } catch (InvalidAgeError& e) {
        return e.what();
    }
}

int main() {
    int age;
    cin >> age;
    cout << validate_age(age);
    return 0;
}`
  },

  "wrapCode": function(lang, userCode) {
    return userCode;
  }
}