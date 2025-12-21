module.exports = {
    "title": "Hello World",
    "difficulty": "easy",
  
    "description": `
      <p>Write a program that prints <code>Hello, World!</code> to the console.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>The program should output exactly <code>Hello, World!</code> (<b>without quotes</b>)</li>
        <li>This is the traditional first program for beginners learning a new programming language</li>
      </ul>
      <p>This problem tests basic output functionality and serves as an introduction to programming syntax.</p>
    `,
  
    "examples": `
      <h2>Example</h2>
      When you run the program, it should display:
      <pre class="constraints">
  Hello, World!</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello, World!", "stdinput": "" }
    ],
  
    "templates": {
      "python": `print("Hello, World!")`,
      "java": `public class Main {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`,
      "javascript": `console.log("Hello, World!");`,
      "c++": `#include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }`
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