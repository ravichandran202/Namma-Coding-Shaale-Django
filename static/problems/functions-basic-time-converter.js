module.exports = {
  "title": "Time Converter",
  "difficulty": "medium",
  "acceptance": "98%",

  "description": `
    <p>Create four functions to convert time between different units: hours to minutes, minutes to seconds, days to hours, and weeks to days.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer (time value)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a time value from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>hours_to_minutes(hours)</code> - returns hours converted to minutes (hours × 60)</li>
        <li><code>minutes_to_seconds(minutes)</code> - returns minutes converted to seconds (minutes × 60)</li>
        <li><code>days_to_hours(days)</code> - returns days converted to hours (days × 24)</li>
        <li><code>weeks_to_days(weeks)</code> - returns weeks converted to days (weeks × 7)</li>
      </ul>
      <li>Each function should take one parameter and return the converted value</li>
      <li>Call all four functions with the input value and print the conversion results</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
2
Output:
2 hours = 120 minutes
2 minutes = 120 seconds
2 days = 48 hours
2 weeks = 14 days</pre>
    <p><b>Explanation:</b> Hours→Minutes: 2×60=120, Minutes→Seconds: 2×60=120, Days→Hours: 2×24=48, Weeks→Days: 2×7=14</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
Output:
5 hours = 300 minutes
5 minutes = 300 seconds
5 days = 120 hours
5 weeks = 35 days</pre>
    <p><b>Explanation:</b> Hours→Minutes: 5×60=300, Minutes→Seconds: 5×60=300, Days→Hours: 5×24=120, Weeks→Days: 5×7=35</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "2 hours = 120 minutes\n2 minutes = 120 seconds\n2 days = 48 hours\n2 weeks = 14 days", 
      "stdinput": "2",
      "explanation": "2 hours=120min, 2min=120sec, 2days=48hr, 2weeks=14days" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "5 hours = 300 minutes\n5 minutes = 300 seconds\n5 days = 120 hours\n5 weeks = 35 days", 
      "stdinput": "5",
      "explanation": "5 hours=300min, 5min=300sec, 5days=120hr, 5weeks=35days" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1 hours = 60 minutes\n1 minutes = 60 seconds\n1 days = 24 hours\n1 weeks = 7 days", 
      "stdinput": "1",
      "explanation": "1 hour=60min, 1min=60sec, 1day=24hr, 1week=7days" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "0 hours = 0 minutes\n0 minutes = 0 seconds\n0 days = 0 hours\n0 weeks = 0 days", 
      "stdinput": "0",
      "explanation": "All zero conversions" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "10 hours = 600 minutes\n10 minutes = 600 seconds\n10 days = 240 hours\n10 weeks = 70 days", 
      "stdinput": "10",
      "explanation": "10 hours=600min, 10min=600sec, 10days=240hr, 10weeks=70days" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "24 hours = 1440 minutes\n24 minutes = 1440 seconds\n24 days = 576 hours\n24 weeks = 168 days", 
      "stdinput": "24",
      "explanation": "24 hours=1440min, 24min=1440sec, 24days=576hr, 24weeks=168days" 
    }
  ],

  "templates": {
    "python": "def hours_to_minutes(hours):\n    return hours * 60\n\ndef minutes_to_seconds(minutes):\n    return minutes * 60\n\ndef days_to_hours(days):\n    return days * 24\n\ndef weeks_to_days(weeks):\n    return weeks * 7\n\n# Main code\ntime_value = int(input())\nprint(f\"{time_value} hours = {hours_to_minutes(time_value)} minutes\")\nprint(f\"{time_value} minutes = {minutes_to_seconds(time_value)} seconds\")\nprint(f\"{time_value} days = {days_to_hours(time_value)} hours\")\nprint(f\"{time_value} weeks = {weeks_to_days(time_value)} days\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int hours_to_minutes(int hours) {\n        return hours * 60;\n    }\n    \n    public static int minutes_to_seconds(int minutes) {\n        return minutes * 60;\n    }\n    \n    public static int days_to_hours(int days) {\n        return days * 24;\n    }\n    \n    public static int weeks_to_days(int weeks) {\n        return weeks * 7;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int time_value = scanner.nextInt();\n        \n        System.out.println(time_value + \" hours = \" + hours_to_minutes(time_value) + \" minutes\");\n        System.out.println(time_value + \" minutes = \" + minutes_to_seconds(time_value) + \" seconds\");\n        System.out.println(time_value + \" days = \" + days_to_hours(time_value) + \" hours\");\n        System.out.println(time_value + \" weeks = \" + weeks_to_days(time_value) + \" days\");\n    }\n}",
    "javascript": "function hours_to_minutes(hours) {\n    return hours * 60;\n}\n\nfunction minutes_to_seconds(minutes) {\n    return minutes * 60;\n}\n\nfunction days_to_hours(days) {\n    return days * 24;\n}\n\nfunction weeks_to_days(weeks) {\n    return weeks * 7;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const time_value = parseInt(input);\n    \n    console.log(`${time_value} hours = ${hours_to_minutes(time_value)} minutes`);\n    console.log(`${time_value} minutes = ${minutes_to_seconds(time_value)} seconds`);\n    console.log(`${time_value} days = ${days_to_hours(time_value)} hours`);\n    console.log(`${time_value} weeks = ${weeks_to_days(time_value)} days`);\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint hours_to_minutes(int hours) {\n    return hours * 60;\n}\n\nint minutes_to_seconds(int minutes) {\n    return minutes * 60;\n}\n\nint days_to_hours(int days) {\n    return days * 24;\n}\n\nint weeks_to_days(int weeks) {\n    return weeks * 7;\n}\n\nint main() {\n    int time_value;\n    cin >> time_value;\n    \n    cout << time_value << \" hours = \" << hours_to_minutes(time_value) << \" minutes\" << endl;\n    cout << time_value << \" minutes = \" << minutes_to_seconds(time_value) << \" seconds\" << endl;\n    cout << time_value << \" days = \" << days_to_hours(time_value) << \" hours\" << endl;\n    cout << time_value << \" weeks = \" << weeks_to_days(time_value) << \" days\" << endl;\n    \n    return 0;\n}"
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