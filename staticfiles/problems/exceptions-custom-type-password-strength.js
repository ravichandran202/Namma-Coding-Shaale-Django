module.exports = {
    "title": "Weak Password Checker – Custom Exception",
    "difficulty": "medium",
    "acceptance": "88%",
  
    "description": `
      <p>Create a custom exception to check password strength.</p>
      <p><b>Your Task:</b></p>
      <ol>
        <li>Create a custom exception class <code>WeakPasswordError</code> that inherits from <code>Exception</code></li>
        <li>Create a function <code>check_password(pwd)</code></li>
        <li>In the function, check if password length is less than 6 characters</li>
        <li>If password length < 6, raise <code>WeakPasswordError</code> with message <code>"Weak Password"</code></li>
        <li>Otherwise, return <code>"Strong Password"</code></li>
        <li>Use try-except block to catch the custom exception</li>
        <li>Read password from input and call the function</li>
      </ol>
      <p><b>Important:</b> You must create and use the custom exception class.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
  abc
  Output:
  Weak Password</pre>
      <p><b>Explanation:</b> Password "abc" has only 3 characters (< 6), so raise WeakPasswordError.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
  password123
  Output:
  Strong Password</pre>
      <p><b>Explanation:</b> Password "password123" has 11 characters (≥ 6), so return "Strong Password".</p>
      
    `,
  
    "testCases": [
      { 
        "id": 1, 
        "input": [], 
        "expected": "Weak Password", 
        "stdinput": "abc",
        "explanation": "3-character password is weak" 
      },
      { 
        "id": 2, 
        "input": [], 
        "expected": "Strong Password", 
        "stdinput": "password123",
        "explanation": "11-character password is strong" 
      },
      { 
        "id": 3, 
        "input": [], 
        "expected": "Weak Password", 
        "stdinput": "12345",
        "explanation": "5-character password is weak" 
      },
      { 
        "id": 4, 
        "input": [], 
        "expected": "Strong Password", 
        "stdinput": "123456",
        "explanation": "Exactly 6 characters is strong" 
      },
      { 
        "id": 5, 
        "input": [], 
        "expected": "Weak Password", 
        "stdinput": "a",
        "explanation": "Single character password is weak" 
      },
      { 
        "id": 6, 
        "input": [], 
        "expected": "Strong Password", 
        "stdinput": "verylongpassword123",
        "explanation": "19-character password is strong" 
      }
    ],
  
    "templates": {
      "python": 
  `class WeakPasswordError(Exception):
      pass
  
def check_password(pwd):
      try:
          if len(pwd) < 6:
              raise WeakPasswordError("Weak Password")
          return "Strong Password"
      except WeakPasswordError as e:
          return str(e)
  
# main code
pwd = input()
print(check_password(pwd))`,
  
      "java": 
  `import java.util.*;
  
  class WeakPasswordError extends Exception {
      public WeakPasswordError(String message) {
          super(message);
      }
  }
  
  public class Main {
      public static String check_password(String pwd) {
          try {
              if (pwd.length() < 6) {
                  throw new WeakPasswordError("Weak Password");
              }
              return "Strong Password";
          } catch (WeakPasswordError e) {
              return e.getMessage();
          }
      }
      
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          String pwd = sc.nextLine();
          System.out.println(check_password(pwd));
      }
  }`,
  
      "javascript": 
  `class WeakPasswordError extends Error {
      constructor(message) {
          super(message);
          this.name = "WeakPasswordError";
      }
  }
  
  function check_password(pwd) {
      try {
          if (pwd.length < 6) {
              throw new WeakPasswordError("Weak Password");
          }
          return "Strong Password";
      } catch (error) {
          if (error instanceof WeakPasswordError) {
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
      console.log(check_password(input));
      readline.close();
  });`,
  
      "c++": 
  `#include <iostream>
  #include <string>
  #include <exception>
  using namespace std;
  
  class WeakPasswordError : public exception {
  public:
      const char* what() const noexcept override {
          return "Weak Password";
      }
  };
  
  string check_password(string pwd) {
      try {
          if (pwd.length() < 6) {
              throw WeakPasswordError();
          }
          return "Strong Password";
      } catch (WeakPasswordError& e) {
          return e.what();
      }
  }
  
  int main() {
      string pwd;
      getline(cin, pwd);
      cout << check_password(pwd);
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) {
      return userCode;
    }
  }