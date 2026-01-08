module.exports = {
  "title": "Animal Sounds",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create three functions that take an animal name as a reference (though the input logic handles the naming) and print their specific sounds.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Input:</b> Three separate lines, each containing an animal name (<code>dog</code>, <code>cat</code>, or <code>cow</code>).</li>
      <li><b>Logic:</b> You must define three specific functions:
        <ul>
          <li><code>dog_sound()</code>: Prints "Woof!"</li>
          <li><code>cat_sound()</code>: Prints "Meow!"</li>
          <li><code>cow_sound()</code>: Prints "Moo!"</li>
        </ul>
      </li>
      <li><b>Output Format:</b> The sound corresponding to each animal input, printed on a new line.</li>
    </ul>
    <p>This problem practices defining functions and using conditional logic to call them.</p>
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
    <p><b>Explanation:</b> 
    1. Input "dog" triggers <code>dog_sound()</code>.
    2. Input "cat" triggers <code>cat_sound()</code>.
    3. Input "cow" triggers <code>cow_sound()</code>.
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
cat
cat
dog
Output:
Meow!
Meow!
Woof!</pre>
    <p><b>Explanation:</b> The function <code>cat_sound()</code> is called twice, followed by <code>dog_sound()</code>.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Woof!\nMeow!\nMoo!", 
      "stdinput": "dog\ncat\ncow"
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Meow!\nMeow!\nWoof!", 
      "stdinput": "cat\ncat\ndog"
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Moo!\nMoo!\nMoo!", 
      "stdinput": "cow\ncow\ncow"
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Woof!\nWoof!\nMeow!", 
      "stdinput": "dog\ndog\ncat"
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Moo!\nWoof!\nMeow!",
      "stdinput": "cow\ndog\ncat"
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Meow!\nMoo!\nWoof!",
      "stdinput": "cat\ncow\ndog"
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Woof!\nMeow!\nMeow!", 
      "stdinput": "dog\ncat\ncat"
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "Moo!\nWoof!\nMoo!", 
      "stdinput": "cow\ndog\ncow"
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "Woof!\nMoo!\nMeow!", 
      "stdinput": "dog\ncow\ncat",
      "explanation": "Mixed order check"
    }
  ],

  "templates": {
    "python": "def dog_sound():\n    print(\"Woof!\")\n\ndef cat_sound():\n    print(\"Meow!\")\n\ndef cow_sound():\n    print(\"Moo!\")\n\n# Main Code\ninputs = []\ntry:\n    # Read 3 lines of input\n    for _ in range(3):\n        inputs.append(input())\nexcept EOFError:\n    pass\n\nfor animal in inputs:\n    if animal == \"dog\":\n        dog_sound()\n    elif animal == \"cat\":\n        cat_sound()\n    elif animal == \"cow\":\n        cow_sound()",
    
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void dog_sound() {\n        System.out.println(\"Woof!\");\n    }\n    \n    public static void cat_sound() {\n        System.out.println(\"Meow!\");\n    }\n    \n    public static void cow_sound() {\n        System.out.println(\"Moo!\");\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        // Read 3 lines\n        String[] animals = new String[3];\n        for(int i=0; i<3; i++) {\n            if(scanner.hasNextLine()) animals[i] = scanner.nextLine();\n        }\n        \n        for (String animal : animals) {\n            if (animal.equals(\"dog\")) {\n                dog_sound();\n            } else if (animal.equals(\"cat\")) {\n                cat_sound();\n            } else if (animal.equals(\"cow\")) {\n                cow_sound();\n            }\n        }\n    }\n}",
    
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction dog_sound() {\n    console.log(\"Woof!\");\n}\n\nfunction cat_sound() {\n    console.log(\"Meow!\");\n}\n\nfunction cow_sound() {\n    console.log(\"Moo!\");\n}\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line.trim());\n    if (lines.length === 3) {\n        lines.forEach(animal => {\n            if (animal === \"dog\") dog_sound();\n            else if (animal === \"cat\") cat_sound();\n            else if (animal === \"cow\") cow_sound();\n        });\n        readline.close();\n    }\n});",
    
    "c++": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvoid dog_sound() {\n    cout << \"Woof!\" << endl;\n}\n\nvoid cat_sound() {\n    cout << \"Meow!\" << endl;\n}\n\nvoid cow_sound() {\n    cout << \"Moo!\" << endl;\n}\n\nint main() {\n    string temp;\n    vector<string> animals;\n    \n    // Read 3 lines\n    for(int i=0; i<3; i++) {\n        getline(cin, temp);\n        animals.push_back(temp);\n    }\n    \n    for(string animal : animals) {\n        if (animal == \"dog\") {\n            dog_sound();\n        } else if (animal == \"cat\") {\n            cat_sound();\n        } else if (animal == \"cow\") {\n            cow_sound();\n        }\n    }\n    return 0;\n}"
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