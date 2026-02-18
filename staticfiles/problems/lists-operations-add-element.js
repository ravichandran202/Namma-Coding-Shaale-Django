module.exports = {
  "title": "Add Item to List",
  "difficulty": "easy",
  "acceptance": "91%",

  "description": `
    <p>You have a list of movies. Your task is to add a new movie name at the end of the list and print the updated list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains existing movies as space-separated names</li>
      <li><b>Second Input:</b> The second line contains a single new movie name to add</li>
      <li><b>Output Format:</b> Display the complete list with the new movie added at the end</li>
    </ul>
    <p>This problem helps practice list concatenation and understanding how to add single elements to existing lists.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
Avatar Inception Interstellar
Titanic
Output: ['Avatar', 'Inception', 'Interstellar', 'Titanic']</pre>
    <p><b>Explanation:</b> The new movie <code>Titanic</code> is added to the end of the existing list containing <code>Avatar, Inception, Interstellar</code>.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
Star Wars
Avengers
Output: ['Star', 'Wars', 'Avengers']</pre>
    <p><b>Explanation:</b> The original two-word movie becomes two separate list items, and the new movie is added as the third item.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['Avatar', 'Inception', 'Interstellar', 'Titanic']", "stdinput": "Avatar Inception Interstellar\nTitanic" },
    { "id": 2, "input": [], "expected": "['Star', 'Wars', 'Avengers']", "stdinput": "Star Wars\nAvengers" },
    { "id": 3, "input": [], "expected": "['The', 'Matrix', 'John Wick']", "stdinput": "The Matrix\nJohn Wick" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'C']", "stdinput": "A B\nC" },
    { "id": 5, "input": [], "expected": "['Movie']", "stdinput": "\nMovie" },
    { "id": 6, "input": [], "expected": "['Action', 'Comedy', 'Drama', 'Horror']", "stdinput": "Action Comedy Drama\nHorror" },
  ],

  "templates": {
    "python": "movies = input().split()\nnew_movie = input()\nprint(movies + [new_movie])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] movies = scanner.nextLine().split(\" \");\n        String newMovie = scanner.nextLine();\n        \n        ArrayList<String> updated = new ArrayList<>(Arrays.asList(movies));\n        updated.add(newMovie);\n        \n        System.out.println(updated);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const movies = inputLines[0].split(' ').filter(item => item !== '');\n        const newMovie = inputLines[1];\n        const updated = [...movies, newMovie];\n        console.log(JSON.stringify(updated));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, newMovie;\n    getline(cin, line1);\n    getline(cin, newMovie);\n    \n    vector<string> movies;\n    string movie;\n    \n    stringstream ss(line1);\n    while (ss >> movie) {\n        movies.push_back(movie);\n    }\n    \n    movies.push_back(newMovie);\n    \n    cout << \"[\";\n    for (int i = 0; i < movies.size(); i++) {\n        cout << \"'\" << movies[i] << \"'\";\n        if (i < movies.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "movies = input().split()\nnew_movie = input()\nprint(movies + [new_movie])",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String[] movies = scanner.nextLine().split(\" \");\n        String newMovie = scanner.nextLine();\n        \n        ArrayList<String> updated = new ArrayList<>(Arrays.asList(movies));\n        updated.add(newMovie);\n        \n        System.out.println(updated);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const movies = inputLines[0].split(' ').filter(item => item !== '');\n        const newMovie = inputLines[1];\n        const updated = [...movies, newMovie];\n        console.log(JSON.stringify(updated));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, newMovie;\n    getline(cin, line1);\n    getline(cin, newMovie);\n    \n    vector<string> movies;\n    string movie;\n    \n    stringstream ss(line1);\n    while (ss >> movie) {\n        movies.push_back(movie);\n    }\n    \n    movies.push_back(newMovie);\n    \n    cout << \"[\";\n    for (int i = 0; i < movies.size(); i++) {\n        cout << \"'\" << movies[i] << \"'\";\n        if (i < movies.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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