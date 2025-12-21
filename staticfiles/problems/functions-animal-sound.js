module.exports = {
  "title": "Animal Sounds",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create three functions that take animal names as input and print their sounds. Call the appropriate function based on input.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>Three lines, each containing an animal name (dog, cat, or cow)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read three animal names from input (one per line)</li>
      <li>Create three separate functions:</li>
      <ul>
        <li><code>dog_sound()</code> - prints "Woof!"</li>
        <li><code>cat_sound()</code> - prints "Meow!"</li>
        <li><code>cow_sound()</code> - prints "Moo!"</li>
      </ul>
      <li>For each input animal name, call the corresponding function</li>
      <li>Print the sound for each animal in the order of input</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
dog
cat
cow
Output:
Woof!
Meow!
Moo!</pre>
    <p><b>Explanation:</b> First input is "dog" → call dog_sound(), second is "cat" → call cat_sound(), third is "cow" → call cow_sound()</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
cat
cat
dog
Output:
Meow!
Meow!
Woof!</pre>
    <p><b>Explanation:</b> First "cat" → Meow!, second "cat" → Meow!, third "dog" → Woof!</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Woof!\nMeow!\nMoo!", 
      "stdinput": "dog\ncat\ncow",
      "explanation": "Calls dog_sound(), cat_sound(), cow_sound() in order" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Meow!\nMeow!\nWoof!", 
      "stdinput": "cat\ncat\ndog",
      "explanation": "Calls cat_sound() twice, then dog_sound()" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Moo!\nMoo!\nMoo!", 
      "stdinput": "cow\ncow\ncow",
      "explanation": "Calls cow_sound() three times" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Woof!\nWoof!\nMeow!", 
      "stdinput": "dog\ndog\ncat",
      "explanation": "Calls dog_sound() twice, then cat_sound()" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Moo!\nWoof!\nCat!", 
      "stdinput": "cow\ndog\ncat",
      "explanation": "Calls cow_sound(), dog_sound(), cat_sound()" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Cat!\nMoo!\nDog!", 
      "stdinput": "cat\ncow\ndog",
      "explanation": "Calls cat_sound(), cow_sound(), dog_sound()" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Dog!\nCat!\nCat!", 
      "stdinput": "dog\ncat\ncat",
      "explanation": "Calls dog_sound(), cat_sound(), cat_sound()" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Moo!\nDog!\nMoo!", 
      "stdinput": "cow\ndog\ncow",
      "explanation": "Calls cow_sound(), dog_sound(), cow_sound()" 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Cat!\nMoo!\nDog!", 
      "stdinput": "cat\ncow\ndog",
      "explanation": "Calls cat_sound(), cow_sound(), dog_sound()" 
    }
  ],

  "templates": {
    "python": "def dog_sound():\n    print(\"Woof!\")\n\ndef cat_sound():\n    print(\"Meow!\")\n\ndef cow_sound():\n    print(\"Moo!\")\n\n# Main code\nanimal1 = input()\nanimal2 = input()\nanimal3 = input()\n\nfor animal in [animal1, animal2, animal3]:\n    if animal == \"dog\":\n        dog_sound()\n    elif animal == \"cat\":\n        cat_sound()\n    elif animal == \"cow\":\n        cow_sound()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void dog_sound() {\n        System.out.println(\"Woof!\");\n    }\n    \n    public static void cat_sound() {\n        System.out.println(\"Meow!\");\n    }\n    \n    public static void cow_sound() {\n        System.out.println(\"Moo!\");\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String animal1 = scanner.nextLine();\n        String animal2 = scanner.nextLine();\n        String animal3 = scanner.nextLine();\n        \n        String[] animals = {animal1, animal2, animal3};\n        for (String animal : animals) {\n            if (animal.equals(\"dog\")) {\n                dog_sound();\n            } else if (animal.equals(\"cat\")) {\n                cat_sound();\n            } else if (animal.equals(\"cow\")) {\n                cow_sound();\n            }\n        }\n    }\n}",
    "javascript": "function dog_sound() {\n    console.log(\"Woof!\");\n}\n\nfunction cat_sound() {\n    console.log(\"Meow!\");\n}\n\nfunction cow_sound() {\n    console.log(\"Moo!\");\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet animals = [];\nlet count = 0;\n\nreadline.on('line', (line) => {\n    animals.push(line.trim());\n    count++;\n    \n    if (count === 3) {\n        for (let animal of animals) {\n            if (animal === \"dog\") {\n                dog_sound();\n            } else if (animal === \"cat\") {\n                cat_sound();\n            } else if (animal === \"cow\") {\n                cow_sound();\n            }\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid dog_sound() {\n    cout << \"Woof!\" << endl;\n}\n\nvoid cat_sound() {\n    cout << \"Meow!\" << endl;\n}\n\nvoid cow_sound() {\n    cout << \"Moo!\" << endl;\n}\n\nint main() {\n    string animal1, animal2, animal3;\n    getline(cin, animal1);\n    getline(cin, animal2);\n    getline(cin, animal3);\n    \n    string animals[3] = {animal1, animal2, animal3};\n    \n    for (int i = 0; i < 3; i++) {\n        if (animals[i] == \"dog\") {\n            dog_sound();\n        } else if (animals[i] == \"cat\") {\n            cat_sound();\n        } else if (animals[i] == \"cow\") {\n            cow_sound();\n        }\n    }\n    \n    return 0;\n}"
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