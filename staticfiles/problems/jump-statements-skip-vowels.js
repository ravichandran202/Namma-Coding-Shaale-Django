module.exports = {
  "title": "Skip Vowels",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>Write a program that prints each character of a given word, but skips all vowel letters. You must use the <code>continue</code> statement to skip vowels when you encounter them.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single string (word) containing lowercase letters only</li>
      <li>The string can have any length from <code>1</code> to <code>100</code> characters</li>
      <li>The word may contain any combination of vowels and consonants</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string (word) from input</li>
      <li>Use a loop to go through each character in the word</li>
      <li>Inside the loop, check if the current character is a vowel</li>
      <li>Vowels are: <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, <code>'u'</code></li>
      <li>If it is a vowel, skip to the next character</li>
      <li>If it is not a vowel (a consonant), print the character</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
programming
Output:
p
r
g
r
m
m
n
g</pre>
    <p><b>Explanation:</b> The word "programming" has vowels: o, a, i. These are skipped. The consonants p, r, g, r, m, m, n, g are printed on separate lines.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
aeiou
Output:</pre>
    <p><b>Explanation:</b> The word "aeiou" contains only vowels. All vowels are skipped, so nothing is printed (empty output).</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "p\nr\ng\nr\nm\nm\nn\ng", 
      "stdinput": "programming",
      "explanation": "Skips vowels o, a, i in 'programming'" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "", 
      "stdinput": "aeiou",
      "explanation": "All letters are vowels, so nothing printed" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "b\nd\ng\ng", 
      "stdinput": "badagegi",
      "explanation": "Skips vowels a, a, e, i" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "p\ny\nt\nh\nn", 
      "stdinput": "python",
      "explanation": "Skips vowel o in 'python'" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "b\nc\nd\nf\ng\nh\nj\nk\nl\nm\nn\np\nq\nr\ns\nt\nv\nw\nx\ny\nz", 
      "stdinput": "abcdefghijklmnopqrstuvwxyz",
      "explanation": "Skips all vowels, prints all consonants" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "h\nl\nl\nt\nh\nr", 
      "stdinput": "hellothere",
      "explanation": "Skips vowels e, o, e, e" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "c\nr\nt\nn", 
      "stdinput": "creation",
      "explanation": "Skips vowels e, a, i, o" 
    }
  ],

  "templates": {
    "python": "def skip_vowels(word):\n    vowels = \"aeiou\"\n    for letter in word:\n        if letter in vowels:\n            continue\n        print(letter)\n\n# main code\nword = input()\nskip_vowels(word)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void skip_vowels(String word) {\n        String vowels = \"aeiou\";\n        for (int i = 0; i < word.length(); i++) {\n            char letter = word.charAt(i);\n            if (vowels.indexOf(letter) != -1) {\n                continue;\n            }\n            System.out.println(letter);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.nextLine();\n        skip_vowels(word);\n    }\n}",
    "javascript": "function skip_vowels(word) {\n    const vowels = \"aeiou\";\n    for (let i = 0; i < word.length; i++) {\n        const letter = word[i];\n        if (vowels.includes(letter)) {\n            continue;\n        }\n        console.log(letter);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (word) => {\n    skip_vowels(word);\n    readline.close();\n});",
    // "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid skip_vowels(string word) {\n    string vowels = "aeiou";\n    for (int i = 0; i < word.length(); i++) {\n        char letter = word[i];\n        if (vowels.find(letter) != string::npos) {\n            continue;\n        }\n        cout << letter << endl;\n    }\n}\n\nint main() {\n    string word;\n    cin >> word;\n    skip_vowels(word);\n    return 0;\n}"
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