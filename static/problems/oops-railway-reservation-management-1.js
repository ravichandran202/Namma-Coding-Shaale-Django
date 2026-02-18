module.exports =  {
    "title": "Railway System – Class Instantiation",
    "difficulty": "easy",
    "acceptance": "95%",
  
    "description": `
      <p>Create a basic <code>RailwaySystem</code> class that initializes a train with seats using a constructor.</p>
      <p><b>Your Task:</b></p>
      <ol>
        <li>Create a class <code>RailwaySystem</code> with a constructor that accepts total seats.</li>
        <li>Initialize all seats as available in a list/dictionary.</li>
        <li>Create an object of the class.</li>
        <li>Print the total number of seats.</li>
      </ol>
      <p><b>Note:</b> Seats are numbered from 1 to total_seats. All seats start as "available".</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
10

Output:
Total Seats: 10
Available: {1: 'available', 2: 'available', 3: 'available', 4: 'available', 5: 'available', 6: 'available', 7: 'available', 8: 'available', 9: 'available', 10: 'available'}</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
5

Output:
Total Seats: 5
Available: {1: 'available', 2: 'available', 3: 'available', 4: 'available', 5: 'available'}</pre>
    `,
  
    "testCases": [
        { 
          "id": 1, 
          "input": [], 
          "expected": "Total Seats: 10\nAvailable: {1: 'available', 2: 'available', 3: 'available', 4: 'available', 5: 'available', 6: 'available', 7: 'available', 8: 'available', 9: 'available', 10: 'available'}", 
          "stdinput": "10" 
        },
        { 
          "id": 2, 
          "input": [], 
          "expected": "Total Seats: 5\nAvailable: {1: 'available', 2: 'available', 3: 'available', 4: 'available', 5: 'available'}", 
          "stdinput": "5" 
        },
        { 
          "id": 4, 
          "input": [], 
          "expected": "Total Seats: 1\nAvailable: {1: 'available'}", 
          "stdinput": "1" 
        },
        { 
            "id": 4, 
            "input": [], 
            "expected": "Total Seats: 2\nAvailable: {1: 'available', 2: 'available'}", 
            "stdinput": "2" 
          },
      ],
  
    "templates": {
      "python": 
`class RailwaySystem:
    def __init__(self, total_seats):
        self.total_seats = total_seats
        self.seats = {}
        for i in range(1, total_seats + 1):
            self.seats[i] = "available"

# main code
total_seats = int(input())
train = RailwaySystem(total_seats)
print("Total Seats:", train.total_seats)
print("Available:", train.seats)`,
  
      "java": 
  `import java.util.*;
  
  class RailwaySystem {
      int total_seats;
      HashMap<Integer, String> seats;
      
      RailwaySystem(int total_seats) {
          this.total_seats = total_seats;
          this.seats = new HashMap<>();
          for (int i = 1; i <= total_seats; i++) {
              seats.put(i, "available");
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int total_seats = sc.nextInt();
          RailwaySystem train = new RailwaySystem(total_seats);
          System.out.println("Total Seats: " + train.total_seats);
      }
  }`,
  
      "javascript": 
  `class RailwaySystem {
      constructor(total_seats) {
          this.total_seats = total_seats;
          this.seats = {};
          for (let i = 1; i <= total_seats; i++) {
              this.seats[i] = "available";
          }
      }
  }
  
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  readline.question('', (input) => {
      const total_seats = parseInt(input);
      const train = new RailwaySystem(total_seats);
      console.log("Total Seats:", train.total_seats);
      readline.close();
  });`,
  
      "c++": 
  `#include <iostream>
  #include <map>
  using namespace std;
  
  class RailwaySystem {
  public:
      int total_seats;
      map<int, string> seats;
      
      RailwaySystem(int total_seats) {
          this->total_seats = total_seats;
          for (int i = 1; i <= total_seats; i++) {
              seats[i] = "available";
          }
      }
  };
  
  int main() {
      int total_seats;
      cin >> total_seats;
      RailwaySystem train(total_seats);
      cout << "Total Seats: " << train.total_seats;
      return 0;
  }`
    },

  
    "solutions": {
      "python": 
`class RailwaySystem:
    def __init__(self, total_seats):
        self.total_seats = total_seats
        self.seats = {}
        for i in range(1, total_seats + 1):
            self.seats[i] = "available"

# main code
total_seats = int(input())
train = RailwaySystem(total_seats)
print("Total Seats:", train.total_seats)
print("Available:", train.seats)`,
  
      "java": 
  `import java.util.*;
  
  class RailwaySystem {
      int total_seats;
      HashMap<Integer, String> seats;
      
      RailwaySystem(int total_seats) {
          this.total_seats = total_seats;
          this.seats = new HashMap<>();
          for (int i = 1; i <= total_seats; i++) {
              seats.put(i, "available");
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int total_seats = sc.nextInt();
          RailwaySystem train = new RailwaySystem(total_seats);
          System.out.println("Total Seats: " + train.total_seats);
      }
  }`,
  
      "javascript": 
  `class RailwaySystem {
      constructor(total_seats) {
          this.total_seats = total_seats;
          this.seats = {};
          for (let i = 1; i <= total_seats; i++) {
              this.seats[i] = "available";
          }
      }
  }
  
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  readline.question('', (input) => {
      const total_seats = parseInt(input);
      const train = new RailwaySystem(total_seats);
      console.log("Total Seats:", train.total_seats);
      readline.close();
  });`,
  
      "c++": 
  `#include <iostream>
  #include <map>
  using namespace std;
  
  class RailwaySystem {
  public:
      int total_seats;
      map<int, string> seats;
      
      RailwaySystem(int total_seats) {
          this->total_seats = total_seats;
          for (int i = 1; i <= total_seats; i++) {
              seats[i] = "available";
          }
      }
  };
  
  int main() {
      int total_seats;
      cin >> total_seats;
      RailwaySystem train(total_seats);
      cout << "Total Seats: " << train.total_seats;
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) {
      return userCode;
    }
  }