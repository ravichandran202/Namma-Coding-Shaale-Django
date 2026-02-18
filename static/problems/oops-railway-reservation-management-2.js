module.exports =  {
    "title": "Railway System",
    "difficulty": "medium",
    "acceptance": "88%",
  
    "description": `
  <p>Extend the <code>RailwaySystem</code> class from Problem 1 to add basic booking functionality.</p>
  <p><b>Your Task:</b></p>
  <ol>
    <li>Assume Problem 1 code (constructor) is already present.</li>
    <li>Add a method <code>book_seat(seat_number)</code> that:
      <ul>
        <li>Books a seat if it exists and is available</li>
        <li>Changes seat status to "booked"</li>
        <li><b>Returns these exact messages:</b>
          <ul>
            <li>If seat is available: <code>"Seat [seat_number] booked successfully"</code></li>
            <li>If seat is already booked: <code>"Seat [seat_number] is already booked"</code></li>
            <li>If seat number is invalid (out of range): <code>"Invalid seat number"</code></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Add a method <code>show_available_seats()</code> that:
      <ul>
        <li>Returns list of available seat numbers in ascending order</li>
        <li><b>Returns this exact format:</b> <code>"Available seats: [comma-separated list in square brackets]"</code></li>
        <li>Example: <code>"Available seats: [1, 3, 5]"</code> or <code>"Available seats: []"</code> for no seats</li>
      </ul>
    </li>
    <li>Handle commands from input to test the methods.</li>
  </ol>
  <p><b>Commands Format:</b></p>
  <ul>
    <li><code>book X</code> - Book seat number X (where X is an integer)</li>
    <li><code>show</code> - Show available seats</li>
    <li>Process commands until end of input (EOF)</li>
  </ul>
  <p><b>Error Cases to Handle:</b></p>
  <ul>
    <li>Seat number less than 1</li>
    <li>Seat number greater than total seats</li>
    <li>Booking an already booked seat</li>
  </ul>`,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
5
book 2
book 4
show
book 2
book 1
show

Output:
Seat 2 booked successfully
Seat 4 booked successfully
Available seats: [1, 3, 5]
Seat 2 is already booked
Seat 1 booked successfully
Available seats: [3, 5]</pre>
    `,
  
    "testCases": [
      { 
        "id": 1, 
        "input": [], 
        "expected": "Seat 2 booked successfully\nSeat 4 booked successfully\nAvailable seats: [1, 3, 5]\nSeat 2 is already booked\nSeat 1 booked successfully\nAvailable seats: [3, 5]", 
        "stdinput": "5\nbook 2\nbook 4\nshow\nbook 2\nbook 1\nshow" 
      },
      { 
        "id": 2, 
        "input": [], 
        "expected": "Seat 10 booked successfully\nAvailable seats: [1, 2, 3, 4, 5, 6, 7, 8, 9]\nInvalid seat number\nAvailable seats: [1, 2, 3, 4, 5, 6, 7, 8, 9]", 
        "stdinput": "10\nbook 10\nshow\nbook 15\nshow" 
      },
      { 
        "id": 3, 
        "input": [], 
        "expected": "Available seats: [1, 2]\nSeat 1 booked successfully\nAvailable seats: [2]\nSeat 2 booked successfully\nAvailable seats: []", 
        "stdinput": "2\nshow\nbook 1\nshow\nbook 2\nshow" 
      },
      { 
        "id": 4, 
        "input": [], 
        "expected": "Invalid seat number\nInvalid seat number\nAvailable seats: [1, 2, 3]\nSeat 1 booked successfully\nSeat 1 is already booked\nSeat 3 booked successfully\nAvailable seats: [2]", 
        "stdinput": "3\nbook 0\nbook 5\nshow\nbook 1\nbook 1\nbook 3\nshow" 
      },
      { 
        "id": 5, 
        "input": [], 
        "expected": "Seat 1 booked successfully\nSeat 2 booked successfully\nSeat 3 booked successfully\nAvailable seats: [4, 5]\nSeat 2 is already booked\nSeat 4 booked successfully\nSeat 3 is already booked\nAvailable seats: [5]", 
        "stdinput": "5\nbook 1\nbook 2\nbook 3\nshow\nbook 2\nbook 4\nbook 3\nshow" 
      },
      { 
        "id": 6, 
        "input": [], 
        "expected": "Invalid seat number\nAvailable seats: [1]\nSeat 1 booked successfully\nAvailable seats: []\nSeat 1 is already booked\nInvalid seat number", 
        "stdinput": "1\nbook -1\nshow\nbook 1\nshow\nbook 1\nbook 2" 
      }
    ],
  
    "templates": {
      "python": 
  `class RailwaySystem:
      def __init__(self, total_seats):
          self.total_seats = total_seats
          self.seats = {}
          for i in range(1, total_seats + 1):
              self.seats[i] = "available"
      
      def book_seat(self, seat_number):
          if seat_number < 1 or seat_number > self.total_seats:
              return "Invalid seat number"
          if self.seats[seat_number] == "available":
              self.seats[seat_number] = "booked"
              return f"Seat {seat_number} booked successfully"
          return f"Seat {seat_number} is already booked"
      
      def show_available_seats(self):
          available = [seat for seat, status in self.seats.items() if status == "available"]
          return f"Available seats: {available}"
  
# main code
total_seats = int(input())
train = RailwaySystem(total_seats)

import sys
for line in sys.stdin:
    cmd = line.strip().split()
    if not cmd:
        continue
    if cmd[0] == "book":
        print(train.book_seat(int(cmd[1])))
    elif cmd[0] == "show":
        print(train.show_available_seats())`,
  
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
      
      String book_seat(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (seats.get(seat_number).equals("available")) {
              seats.put(seat_number, "booked");
              return "Seat " + seat_number + " booked successfully";
          }
          return "Seat " + seat_number + " is already booked";
      }
      
      String show_available_seats() {
          List<Integer> available = new ArrayList<>();
          for (int i = 1; i <= total_seats; i++) {
              if (seats.get(i).equals("available")) {
                  available.add(i);
              }
          }
          return "Available seats: " + available;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int total_seats = sc.nextInt();
          sc.nextLine(); // consume newline
          
          RailwaySystem train = new RailwaySystem(total_seats);
          
          while (sc.hasNextLine()) {
              String line = sc.nextLine().trim();
              if (line.isEmpty()) continue;
              String[] cmd = line.split(" ");
              
              if (cmd[0].equals("book")) {
                  System.out.println(train.book_seat(Integer.parseInt(cmd[1])));
              } else if (cmd[0].equals("show")) {
                  System.out.println(train.show_available_seats());
              }
          }
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
      
      book_seat(seat_number) {
          if (seat_number < 1 || seat_number > this.total_seats) {
              return "Invalid seat number";
          }
          if (this.seats[seat_number] === "available") {
              this.seats[seat_number] = "booked";
              return \`Seat \${seat_number} booked successfully\`;
          }
          return \`Seat \${seat_number} is already booked\`;
      }
      
      show_available_seats() {
          const available = [];
          for (let i = 1; i <= this.total_seats; i++) {
              if (this.seats[i] === "available") {
                  available.push(i);
              }
          }
          return \`Available seats: [\${available.join(", ")}]\`;
      }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split('\\n');
  
  const total_seats = parseInt(input[0]);
  const train = new RailwaySystem(total_seats);
  
  for (let i = 1; i < input.length; i++) {
      const cmd = input[i].trim().split(' ');
      if (cmd.length === 0) continue;
      
      if (cmd[0] === "book") {
          console.log(train.book_seat(parseInt(cmd[1])));
      } else if (cmd[0] === "show") {
          console.log(train.show_available_seats());
      }
  }`,
  
      "c++": 
  `#include <iostream>
  #include <map>
  #include <vector>
  #include <sstream>
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
      
      string book_seat(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (seats[seat_number] == "available") {
              seats[seat_number] = "booked";
              return "Seat " + to_string(seat_number) + " booked successfully";
          }
          return "Seat " + to_string(seat_number) + " is already booked";
      }
      
      string show_available_seats() {
          vector<int> available;
          for (int i = 1; i <= total_seats; i++) {
              if (seats[i] == "available") {
                  available.push_back(i);
              }
          }
          string result = "Available seats: [";
          for (size_t i = 0; i < available.size(); i++) {
              result += to_string(available[i]);
              if (i != available.size() - 1) {
                  result += ", ";
              }
          }
          result += "]";
          return result;
      }
  };
  
  int main() {
      int total_seats;
      cin >> total_seats;
      cin.ignore();
      
      RailwaySystem train(total_seats);
      string line;
      
      while (getline(cin, line)) {
          if (line.empty()) continue;
          
          stringstream ss(line);
          string cmd;
          ss >> cmd;
          
          if (cmd == "book") {
              int seat_num;
              ss >> seat_num;
              cout << train.book_seat(seat_num) << endl;
          } else if (cmd == "show") {
              cout << train.show_available_seats() << endl;
          }
      }
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
      
      def book_seat(self, seat_number):
          if seat_number < 1 or seat_number > self.total_seats:
              return "Invalid seat number"
          if self.seats[seat_number] == "available":
              self.seats[seat_number] = "booked"
              return f"Seat {seat_number} booked successfully"
          return f"Seat {seat_number} is already booked"
      
      def show_available_seats(self):
          available = [seat for seat, status in self.seats.items() if status == "available"]
          return f"Available seats: {available}"
  
# main code
total_seats = int(input())
train = RailwaySystem(total_seats)

import sys
for line in sys.stdin:
    cmd = line.strip().split()
    if not cmd:
        continue
    if cmd[0] == "book":
        print(train.book_seat(int(cmd[1])))
    elif cmd[0] == "show":
        print(train.show_available_seats())`,
  
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
      
      String book_seat(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (seats.get(seat_number).equals("available")) {
              seats.put(seat_number, "booked");
              return "Seat " + seat_number + " booked successfully";
          }
          return "Seat " + seat_number + " is already booked";
      }
      
      String show_available_seats() {
          List<Integer> available = new ArrayList<>();
          for (int i = 1; i <= total_seats; i++) {
              if (seats.get(i).equals("available")) {
                  available.add(i);
              }
          }
          return "Available seats: " + available;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int total_seats = sc.nextInt();
          sc.nextLine(); // consume newline
          
          RailwaySystem train = new RailwaySystem(total_seats);
          
          while (sc.hasNextLine()) {
              String line = sc.nextLine().trim();
              if (line.isEmpty()) continue;
              String[] cmd = line.split(" ");
              
              if (cmd[0].equals("book")) {
                  System.out.println(train.book_seat(Integer.parseInt(cmd[1])));
              } else if (cmd[0].equals("show")) {
                  System.out.println(train.show_available_seats());
              }
          }
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
      
      book_seat(seat_number) {
          if (seat_number < 1 || seat_number > this.total_seats) {
              return "Invalid seat number";
          }
          if (this.seats[seat_number] === "available") {
              this.seats[seat_number] = "booked";
              return \`Seat \${seat_number} booked successfully\`;
          }
          return \`Seat \${seat_number} is already booked\`;
      }
      
      show_available_seats() {
          const available = [];
          for (let i = 1; i <= this.total_seats; i++) {
              if (this.seats[i] === "available") {
                  available.push(i);
              }
          }
          return \`Available seats: [\${available.join(", ")}]\`;
      }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split('\\n');
  
  const total_seats = parseInt(input[0]);
  const train = new RailwaySystem(total_seats);
  
  for (let i = 1; i < input.length; i++) {
      const cmd = input[i].trim().split(' ');
      if (cmd.length === 0) continue;
      
      if (cmd[0] === "book") {
          console.log(train.book_seat(parseInt(cmd[1])));
      } else if (cmd[0] === "show") {
          console.log(train.show_available_seats());
      }
  }`,
  
      "c++": 
  `#include <iostream>
  #include <map>
  #include <vector>
  #include <sstream>
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
      
      string book_seat(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (seats[seat_number] == "available") {
              seats[seat_number] = "booked";
              return "Seat " + to_string(seat_number) + " booked successfully";
          }
          return "Seat " + to_string(seat_number) + " is already booked";
      }
      
      string show_available_seats() {
          vector<int> available;
          for (int i = 1; i <= total_seats; i++) {
              if (seats[i] == "available") {
                  available.push_back(i);
              }
          }
          string result = "Available seats: [";
          for (size_t i = 0; i < available.size(); i++) {
              result += to_string(available[i]);
              if (i != available.size() - 1) {
                  result += ", ";
              }
          }
          result += "]";
          return result;
      }
  };
  
  int main() {
      int total_seats;
      cin >> total_seats;
      cin.ignore();
      
      RailwaySystem train(total_seats);
      string line;
      
      while (getline(cin, line)) {
          if (line.empty()) continue;
          
          stringstream ss(line);
          string cmd;
          ss >> cmd;
          
          if (cmd == "book") {
              int seat_num;
              ss >> seat_num;
              cout << train.book_seat(seat_num) << endl;
          } else if (cmd == "show") {
              cout << train.show_available_seats() << endl;
          }
      }
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) {
      return userCode;
    }
  }