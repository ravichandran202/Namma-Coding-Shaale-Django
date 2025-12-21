module.exports = {
    "title": "Comma Separator",
    "difficulty": "easy",
    "acceptance": "98.8%",
  
    "description": `
      <p>Print the 4 cities separated by commas on the same line.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read four city names as input</li>
        <li>Print all four cities on one line separated by commas (<code>,</code>)</li>
        <li>Use the sep parameter in the print function to control the separator</li>
        <li>There should be no spaces between the commas and city names</li>
      </ul>
      <p>This problem teaches how to use the sep parameter in print statements for custom separators.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <pre class="constraints">Input: 
London
Tokyo
Delhi
Mysore

Output: London,Tokyo,Delhi,Mysore</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Each input will be a single word containing only alphabetical characters</li>
        <li>Each city name length will be between 1 and 50 characters</li>
        <li>Must use exactly one print statement with sep parameter</li>
        <li>Output must show all four cities on one line separated by commas without spaces</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "London,Tokyo,Delhi,Mysore", "stdinput": "London\nTokyo\nDelhi\nMysore" },
      { "id": 2, "input": [], "expected": "Paris,NewYork,Beijing,Moscow", "stdinput": "Paris\nNewYork\nBeijing\nMoscow" },
      { "id": 3, "input": [], "expected": "Chicago,Boston,Seattle,Denver", "stdinput": "Chicago\nBoston\nSeattle\nDenver" },
      { "id": 4, "input": [], "expected": "Sydney,Melbourne,Perth,Brisbane", "stdinput": "Sydney\nMelbourne\nPerth\nBrisbane" },
      { "id": 5, "input": [], "expected": "Toronto,Vancouver,Montreal,Calgary", "stdinput": "Toronto\nVancouver\nMontreal\nCalgary" },
    ],
  
    "templates": {
      "python": `city1 = input()\ncity2 = input()\ncity3 = input()\ncity4 = input()\nprint(city1, city2, city3, city4, sep=",")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String city1 = scanner.nextLine();\n        String city2 = scanner.nextLine();\n        String city3 = scanner.nextLine();\n        String city4 = scanner.nextLine();\n        System.out.println(city1 + "," + city2 + "," + city3 + "," + city4);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet cities = [];\nreadline.question('', (city1) => {\n    cities.push(city1);\n    readline.question('', (city2) => {\n        cities.push(city2);\n        readline.question('', (city3) => {\n            cities.push(city3);\n            readline.question('', (city4) => {\n                cities.push(city4);\n                console.log(cities.join(','));\n                readline.close();\n            });\n        });\n    });\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string city1, city2, city3, city4;\n    std::getline(std::cin, city1);\n    std::getline(std::cin, city2);\n    std::getline(std::cin, city3);\n    std::getline(std::cin, city4);\n    std::cout << city1 << "," << city2 << "," << city3 << "," << city4 << std::endl;\n    return 0;\n}`
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