module.exports = {
  "title": "Case Converter",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Write a program that takes a character as input. If it is an uppercase letter, convert it to lowercase using ASCII values. If it is a lowercase letter, convert it to uppercase. If it's neither, print it as is.</p>
    <p><b>How to convert between cases using ASCII?</b></p>
    <p>In ASCII, there's a consistent 32-value difference between uppercase and lowercase letters:</p>
    <ul>
      <li><b>Uppercase to Lowercase:</b> Add 32</li>
      <li>'A' (65) → 'a' (97)</li>
      <li>'B' (66) → 'b' (98)</li>
      <li>'Z' (90) → 'z' (122)</li>
      <li><b>Lowercase to Uppercase:</b> Subtract 32</li>
      <li>'a' (97) → 'A' (65)</li>
      <li>'b' (98) → 'B' (66)</li>
      <li>'z' (122) → 'Z' (90)</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>If uppercase, convert to lowercase</li>
      <li>If lowercase, convert to uppercase</li>
      <li>If neither, print the original character</li>
    </ul>
    <p>This problem teaches selective character transformation using ASCII arithmetic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: H
Output: h</pre>
    <p><b>Explanation:</b> 'H' (72) is uppercase → 'h'</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: h
Output: H</pre>
    <p><b>Explanation:</b> 'h' (104) is lowercase → 72 → 'H'</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 5
Output: 5</pre>
    <p><b>Explanation:</b> '5' is neither uppercase nor lowercase → printed as is</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
      <li>Convert uppercase A-Z to lowercase a-z</li>
      <li>Convert lowercase a-z to uppercase A-Z</li>
      <li>For all other characters: output the original character</li>
      <li>Output should be exactly one character</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "h", "stdinput": "H" },
    { "id": 2, "input": [], "expected": "H", "stdinput": "h" },
    { "id": 3, "input": [], "expected": "5", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "!", "stdinput": "!" },
    { "id": 5, "input": [], "expected": "a", "stdinput": "A" },
  ],

  "templates": {
    "python": `char = input()
ascii_val = ord(char)

if 65 <= ascii_val <= 90:
    # Uppercase to lowercase
    lower_char = chr(ascii_val + 32)
    print(lower_char)
elif 97 <= ascii_val <= 122:
    # Lowercase to uppercase
    upper_char = chr(ascii_val - 32)
    print(upper_char)
else:
    # Other characters
    print(char)`,

    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char character = scanner.next().charAt(0);
        
        if (character >= 'A' && character <= 'Z') {
            // Uppercase to lowercase
            char lower_char = (char)(character + 32);
            System.out.println(lower_char);
        } else if (character >= 'a' && character <= 'z') {
            // Lowercase to uppercase
            char upper_char = (char)(character - 32);
            System.out.println(upper_char);
        } else {
            // Other characters
            System.out.println(character);
        }
    }
}`,

    "javascript": `const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (char) => {
    const ascii_val = char.charCodeAt(0);
    
    if (ascii_val >= 65 && ascii_val <= 90) {
        // Uppercase to lowercase
        const lower_char = String.fromCharCode(ascii_val + 32);
        console.log(lower_char);
    } else if (ascii_val >= 97 && ascii_val <= 122) {
        // Lowercase to uppercase
        const upper_char = String.fromCharCode(ascii_val - 32);
        console.log(upper_char);
    } else {
        // Other characters
        console.log(char);
    }
    readline.close();
});`,

    "c++": `#include <iostream>

int main() {
    char ch;
    std::cin >> ch;
    
    if (ch >= 'A' && ch <= 'Z') {
        // Uppercase to lowercase
        char lower_char = ch + 32;
        std::cout << lower_char << std::endl;
    } else if (ch >= 'a' && ch <= 'z') {
        // Lowercase to uppercase
        char upper_char = ch - 32;
        std::cout << upper_char << std::endl;
    } else {
        // Other characters
        std::cout << ch << std::endl;
    }
    return 0;
}`
  },


  "solutions": {
    "python": `char = input()
ascii_val = ord(char)

if 65 <= ascii_val <= 90:
    # Uppercase to lowercase
    lower_char = chr(ascii_val + 32)
    print(lower_char)
elif 97 <= ascii_val <= 122:
    # Lowercase to uppercase
    upper_char = chr(ascii_val - 32)
    print(upper_char)
else:
    # Other characters
    print(char)`,

    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char character = scanner.next().charAt(0);
        
        if (character >= 'A' && character <= 'Z') {
            // Uppercase to lowercase
            char lower_char = (char)(character + 32);
            System.out.println(lower_char);
        } else if (character >= 'a' && character <= 'z') {
            // Lowercase to uppercase
            char upper_char = (char)(character - 32);
            System.out.println(upper_char);
        } else {
            // Other characters
            System.out.println(character);
        }
    }
}`,

    "javascript": `const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (char) => {
    const ascii_val = char.charCodeAt(0);
    
    if (ascii_val >= 65 && ascii_val <= 90) {
        // Uppercase to lowercase
        const lower_char = String.fromCharCode(ascii_val + 32);
        console.log(lower_char);
    } else if (ascii_val >= 97 && ascii_val <= 122) {
        // Lowercase to uppercase
        const upper_char = String.fromCharCode(ascii_val - 32);
        console.log(upper_char);
    } else {
        // Other characters
        console.log(char);
    }
    readline.close();
});`,

    "c++": `#include <iostream>

int main() {
    char ch;
    std::cin >> ch;
    
    if (ch >= 'A' && ch <= 'Z') {
        // Uppercase to lowercase
        char lower_char = ch + 32;
        std::cout << lower_char << std::endl;
    } else if (ch >= 'a' && ch <= 'z') {
        // Lowercase to uppercase
        char upper_char = ch - 32;
        std::cout << upper_char << std::endl;
    } else {
        // Other characters
        std::cout << ch << std::endl;
    }
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