module.exports = {
    "title": "Safe Division – Exception Handling",
    "difficulty": "easy",
    "acceptance": "95%",
  
    "description": `
      <p>Write a function that safely divides two numbers and handles division by zero exception.</p>
      <p><b>Your Task:</b></p>
      <ol>
        <li>Create a function <code>safe_divide(a, b)</code></li>
        <li>The function should return the result of <code>a / b</code></li>
        <li>If <code>b</code> is 0, catch the <code>ZeroDivisionError</code></li>
        <li>Return <code>"Error: Division by zero"</code> when division by zero occurs</li>
        <li>Read two integers from input and call the function</li>
      </ol>
      <p><b>Important:</b> Use try-except block to handle the exception.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
10 0
Output:
Error: Division by zero</pre>
      <p><b>Explanation:</b> Denominator is 0, so catch the exception and return error message.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
15 3
Output:
5.0</pre>
      <p><b>Explanation:</b> Normal division: 15 ÷ 3 = 5.0</p>
    `,
  
    "testCases": [
      { 
        "id": 1, 
        "input": [], 
        "expected": "Error: Division by zero", 
        "stdinput": "10 0",
        "explanation": "Division by zero should return error" 
      },
      { 
        "id": 2, 
        "input": [], 
        "expected": "5.0", 
        "stdinput": "15 3",
        "explanation": "Normal division" 
      },
      { 
        "id": 3, 
        "input": [], 
        "expected": "3.5", 
        "stdinput": "7 2",
        "explanation": "Division with decimal result" 
      },
      { 
        "id": 4, 
        "input": [], 
        "expected": "-2.0", 
        "stdinput": "10 -5",
        "explanation": "Division with negative number" 
      },
      { 
        "id": 5, 
        "input": [], 
        "expected": "0.0", 
        "stdinput": "0 5",
        "explanation": "Zero divided by any number" 
      }
    ],
  
    "templates": {
      "python": 
  `def safe_divide(a, b):
      try:
          return a / b
      except ZeroDivisionError:
          return "Error: Division by zero"
  
# main code
a, b = map(int, input().split())
print(safe_divide(a, b))`,
  
      "java": 
  `import java.util.*;
  
  public class Main {
      public static String safe_divide(int a, int b) {
          try {
              double result = (double) a / b;
              return String.valueOf(result);
          } catch (ArithmeticException e) {
              return "Error: Division by zero";
          }
      }
      
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int a = sc.nextInt();
          int b = sc.nextInt();
          System.out.println(safe_divide(a, b));
      }
  }`,
  
      "javascript": 
  `function safe_divide(a, b) {
      try {
          if (b === 0) throw new Error("Division by zero");
          return a / b;
      } catch (error) {
          return "Error: Division by zero";
      }
  }
  
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  readline.question('', (input) => {
      const [a, b] = input.split(' ').map(Number);
      console.log(safe_divide(a, b));
      readline.close();
  });`,
  
      "c++": 
  `#include <iostream>
  #include <string>
  using namespace std;
  
  string safe_divide(int a, int b) {
      try {
          if (b == 0) throw runtime_error("Division by zero");
          return to_string((double)a / b);
      } catch (runtime_error& e) {
          return "Error: Division by zero";
      }
  }
  
  int main() {
      int a, b;
      cin >> a >> b;
      cout << safe_divide(a, b);
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) {
      return userCode;
    }
  }