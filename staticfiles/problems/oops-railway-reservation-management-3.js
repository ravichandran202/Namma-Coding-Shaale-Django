module.exports =  {
    "title": "Railway System – Passenger Details & Waiting List",
    "difficulty": "medium",
    "acceptance": "82%",
  
    "description": `
      <p>Extend the <code>RailwaySystem</code> class from Problem 2 to add passenger details and waiting list functionality.</p>
      <p><b>Your Task (assume Problems 1 & 2 code is present):</b></p>
      <ol>
        <li><b>Modify <code>book_seat</code> method</b> to accept passenger name and age: <code>book_seat(seat_number, name, age)</code></li>
        <li><b>Add <code>cancel_booking(seat_number)</code></b> method that:
          <ul>
            <li>Cancels a booked seat</li>
            <li>Makes seat available again</li>
            <li>Returns "Seat [number] cancelled"</li>
          </ul>
        </li>
        <li><b>Add <code>add_to_waiting_list(name, age)</code></b> method that:
          <ul>
            <li>Adds passenger to waiting list if no seats available</li>
            <li>Max waiting list size: 5 people</li>
            <li>Returns appropriate success/error messages</li>
          </ul>
        </li>
        <li><b>Add <code>show_passenger_details(seat_number)</code></b> method that shows passenger info for booked seat</li>
        <li><b>Auto-booking from waiting list:</b> When seat is cancelled, automatically book it to first person in waiting list</li>
      </ol>
      <p><b>Commands Format:</b></p>
      <ul>
        <li><code>book X Name Age</code> - Book seat X with passenger details</li>
        <li><code>cancel X</code> - Cancel booking for seat X</li>
        <li><code>waiting Name Age</code> - Add to waiting list</li>
        <li><code>details X</code> - Show passenger details for seat X</li>
        <li><code>show</code> - Show available seats (from Problem 2)</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
3
book 1 Alice 25
book 2 Bob 30
book 3 Charlie 35
waiting David 40
waiting Eva 28
cancel 2
details 2
show

Output:
Seat 1 booked successfully for Alice
Seat 2 booked successfully for Bob
Seat 3 booked successfully for Charlie
David added to waiting list
Eva added to waiting list
Seat 2 cancelled
Seat 2 automatically booked for David
Passenger details for seat 2: Name: David, Age: 40
Available seats: []</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
2
book 1 John 45
waiting Mike 30
waiting Sara 25
waiting Tom 35
waiting Lisa 40
waiting Alex 50
waiting Emma 28
cancel 1
show

Output:
Seat 1 booked successfully for John
Mike added to waiting list
Sara added to waiting list
Tom added to waiting list
Lisa added to waiting list
Alex added to waiting list
Waiting list is full
Seat 1 cancelled
Seat 1 automatically booked for Mike
Available seats: []</pre>
    `,
  
    "testCases": [
        
        { 
            "id": 2, 
            "input": [], 
            "expected": "Seat 1 booked successfully for John\nMike added to waiting list\nSara added to waiting list\nTom added to waiting list\nLisa added to waiting list\nAlex added to waiting list\nWaiting list is full\nSeat 1 cancelled\nSeat 1 automatically booked for Mike\nAvailable seats: [2]", 
            "stdinput": "2\nbook 1 John 45\nwaiting Mike 30\nwaiting Sara 25\nwaiting Tom 35\nwaiting Lisa 40\nwaiting Alex 50\nwaiting Emma 28\ncancel 1\nshow" 
          },
      { 
        "id": 1, 
        "input": [], 
        "expected": "Seat 1 booked successfully for Alice\nSeat 2 booked successfully for Bob\nSeat 3 booked successfully for Charlie\nDavid added to waiting list\nEva added to waiting list\nSeat 2 cancelled\nSeat 2 automatically booked for David\nPassenger details for seat 2: Name: David, Age: 40\nAvailable seats: []", 
        "stdinput": "3\nbook 1 Alice 25\nbook 2 Bob 30\nbook 3 Charlie 35\nwaiting David 40\nwaiting Eva 28\ncancel 2\ndetails 2\nshow" 
      },
      { 
        "id": 3, 
        "input": [], 
        "expected": "Seat 1 booked successfully for A\nSeat 2 booked successfully for B\nSeat 3 booked successfully for C\nSeat 4 booked successfully for D\nSeat 5 booked successfully for E\nX added to waiting list\nY added to waiting list\nSeat 3 cancelled\nSeat 3 automatically booked for X\nSeat 2 cancelled\nSeat 2 automatically booked for Y\nAvailable seats: []", 
        "stdinput": "5\nbook 1 A 20\nbook 2 B 25\nbook 3 C 30\nbook 4 D 35\nbook 5 E 40\nwaiting X 45\nwaiting Y 50\ncancel 3\ncancel 2\nshow" 
      },
    { 
        "id": 4, 
        "input": [], 
        "expected": "Seat 2 booked successfully for Bob\nInvalid seat number\nPassenger details for seat 2: Name: Bob, Age: 35\nSeat 2 cancelled\nAvailable seats: [1, 2, 3]\nInvalid seat number", 
        "stdinput": "3\nbook 2 Bob 35\ncancel 5\ndetails 2\ncancel 2\nshow\ncancel 10" 
      },
    ],
  
    "templates": {
      "python": 
  `class RailwaySystem:
      def __init__(self, total_seats):
          self.total_seats = total_seats
          self.seats = {}
          self.passengers = {}
          self.waiting_list = []
          for i in range(1, total_seats + 1):
              self.seats[i] = "available"
      
      def book_seat(self, seat_number, name, age):
          if seat_number < 1 or seat_number > self.total_seats:
              return "Invalid seat number"
          if age <= 0 or age > 120:
              return "Invalid age"
          if self.seats[seat_number] == "available":
              self.seats[seat_number] = "booked"
              self.passengers[seat_number] = {"name": name, "age": age}
              return f"Seat {seat_number} booked successfully for {name}"
          return f"Seat {seat_number} is already booked"
      
      def cancel_booking(self, seat_number):
          if seat_number < 1 or seat_number > self.total_seats:
              return "Invalid seat number"
          if self.seats[seat_number] != "booked":
              return f"Seat {seat_number} is not booked"
          
          self.seats[seat_number] = "available"
          del self.passengers[seat_number]
          
          # Auto-book from waiting list
          if self.waiting_list:
              passenger = self.waiting_list.pop(0)
              self.seats[seat_number] = "booked"
              self.passengers[seat_number] = passenger
              return f"Seat {seat_number} cancelled\\nSeat {seat_number} automatically booked for {passenger['name']}"
          
          return f"Seat {seat_number} cancelled"
      
      def add_to_waiting_list(self, name, age):
          if age <= 0 or age > 120:
              return "Invalid age"
          if len(self.waiting_list) >= 5:
              return "Waiting list is full"
          self.waiting_list.append({"name": name, "age": age})
          return f"{name} added to waiting list"
      
      def show_passenger_details(self, seat_number):
          if seat_number < 1 or seat_number > self.total_seats:
              return "Invalid seat number"
          if seat_number not in self.passengers:
              return f"No passenger on seat {seat_number}"
          passenger = self.passengers[seat_number]
          return f"Passenger details for seat {seat_number}: Name: {passenger['name']}, Age: {passenger['age']}"
      
      def show_available_seats(self):
          available = [seat for seat, status in self.seats.items() if status == "available"]
          return f"Available seats: {available}"
      
      def show_waiting_list(self):
          if not self.waiting_list:
              return "Waiting list is empty"
          return f"Waiting list: {[p['name'] for p in self.waiting_list]}"
  
# main code
total_seats = int(input())
train = RailwaySystem(total_seats)

import sys
for line in sys.stdin:
    cmd = line.strip().split()
    if not cmd:
        continue
    
    if cmd[0] == "book":
        print(train.book_seat(int(cmd[1]), cmd[2], int(cmd[3])))
    elif cmd[0] == "cancel":
        print(train.cancel_booking(int(cmd[1])))
    elif cmd[0] == "waiting":
        print(train.add_to_waiting_list(cmd[1], int(cmd[2])))
    elif cmd[0] == "details":
        print(train.show_passenger_details(int(cmd[1])))
    elif cmd[0] == "show":
        print(train.show_available_seats())
    elif cmd[0] == "show_waiting":
        print(train.show_waiting_list())`,
  
      "java": 
  `import java.util.*;
  
  class RailwaySystem {
      int total_seats;
      HashMap<Integer, String> seats;
      HashMap<Integer, HashMap<String, Object>> passengers;
      ArrayList<HashMap<String, Object>> waitingList;
      
      RailwaySystem(int total_seats) {
          this.total_seats = total_seats;
          this.seats = new HashMap<>();
          this.passengers = new HashMap<>();
          this.waitingList = new ArrayList<>();
          for (int i = 1; i <= total_seats; i++) {
              seats.put(i, "available");
          }
      }
      
      String book_seat(int seat_number, String name, int age) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (seats.get(seat_number).equals("available")) {
              seats.put(seat_number, "booked");
              HashMap<String, Object> passenger = new HashMap<>();
              passenger.put("name", name);
              passenger.put("age", age);
              passengers.put(seat_number, passenger);
              return "Seat " + seat_number + " booked successfully for " + name;
          }
          return "Seat " + seat_number + " is already booked";
      }
      
      String cancel_booking(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (!seats.get(seat_number).equals("booked")) {
              return "Seat " + seat_number + " is not booked";
          }
          
          seats.put(seat_number, "available");
          passengers.remove(seat_number);
          
          // Auto-book from waiting list
          if (!waitingList.isEmpty()) {
              HashMap<String, Object> passenger = waitingList.remove(0);
              seats.put(seat_number, "booked");
              passengers.put(seat_number, passenger);
              return "Seat " + seat_number + " cancelled\\nSeat " + seat_number + 
                     " automatically booked for " + passenger.get("name");
          }
          
          return "Seat " + seat_number + " cancelled";
      }
      
      String add_to_waiting_list(String name, int age) {
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (waitingList.size() >= 5) {
              return "Waiting list is full";
          }
          HashMap<String, Object> passenger = new HashMap<>();
          passenger.put("name", name);
          passenger.put("age", age);
          waitingList.add(passenger);
          return name + " added to waiting list";
      }
      
      String show_passenger_details(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (!passengers.containsKey(seat_number)) {
              return "No passenger on seat " + seat_number;
          }
          HashMap<String, Object> passenger = passengers.get(seat_number);
          return "Passenger details for seat " + seat_number + 
                 ": Name: " + passenger.get("name") + 
                 ", Age: " + passenger.get("age");
      }
      
      String show_available_seats() {
          ArrayList<Integer> available = new ArrayList<>();
          for (int i = 1; i <= total_seats; i++) {
              if (seats.get(i).equals("available")) {
                  available.add(i);
              }
          }
          return "Available seats: " + available;
      }
      
      String show_waiting_list() {
          if (waitingList.isEmpty()) {
              return "Waiting list is empty";
          }
          ArrayList<String> names = new ArrayList<>();
          for (HashMap<String, Object> p : waitingList) {
              names.add((String) p.get("name"));
          }
          return "Waiting list: " + names;
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int total_seats = sc.nextInt();
          sc.nextLine();
          
          RailwaySystem train = new RailwaySystem(total_seats);
          
          while (sc.hasNextLine()) {
              String line = sc.nextLine().trim();
              if (line.isEmpty()) continue;
              String[] cmd = line.split(" ");
              
              switch (cmd[0]) {
                  case "book":
                      System.out.println(train.book_seat(
                          Integer.parseInt(cmd[1]), cmd[2], Integer.parseInt(cmd[3])));
                      break;
                  case "cancel":
                      System.out.println(train.cancel_booking(Integer.parseInt(cmd[1])));
                      break;
                  case "waiting":
                      System.out.println(train.add_to_waiting_list(cmd[1], Integer.parseInt(cmd[2])));
                      break;
                  case "details":
                      System.out.println(train.show_passenger_details(Integer.parseInt(cmd[1])));
                      break;
                  case "show":
                      System.out.println(train.show_available_seats());
                      break;
                  case "show_waiting":
                      System.out.println(train.show_waiting_list());
                      break;
              }
          }
      }
  }`,
  
      "javascript": 
  `class RailwaySystem {
      constructor(total_seats) {
          this.total_seats = total_seats;
          this.seats = {};
          this.passengers = {};
          this.waitingList = [];
          for (let i = 1; i <= total_seats; i++) {
              this.seats[i] = "available";
          }
      }
      
      book_seat(seat_number, name, age) {
          if (seat_number < 1 || seat_number > this.total_seats) {
              return "Invalid seat number";
          }
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (this.seats[seat_number] === "available") {
              this.seats[seat_number] = "booked";
              this.passengers[seat_number] = { name, age };
              return \`Seat \${seat_number} booked successfully for \${name}\`;
          }
          return \`Seat \${seat_number} is already booked\`;
      }
      
      cancel_booking(seat_number) {
          if (seat_number < 1 || seat_number > this.total_seats) {
              return "Invalid seat number";
          }
          if (this.seats[seat_number] !== "booked") {
              return \`Seat \${seat_number} is not booked\`;
          }
          
          this.seats[seat_number] = "available";
          delete this.passengers[seat_number];
          
          // Auto-book from waiting list
          if (this.waitingList.length > 0) {
              const passenger = this.waitingList.shift();
              this.seats[seat_number] = "booked";
              this.passengers[seat_number] = passenger;
              return \`Seat \${seat_number} cancelled\\nSeat \${seat_number} automatically booked for \${passenger.name}\`;
          }
          
          return \`Seat \${seat_number} cancelled\`;
      }
      
      add_to_waiting_list(name, age) {
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (this.waitingList.length >= 5) {
              return "Waiting list is full";
          }
          this.waitingList.push({ name, age });
          return \`\${name} added to waiting list\`;
      }
      
      show_passenger_details(seat_number) {
          if (seat_number < 1 || seat_number > this.total_seats) {
              return "Invalid seat number";
          }
          if (!this.passengers[seat_number]) {
              return \`No passenger on seat \${seat_number}\`;
          }
          const passenger = this.passengers[seat_number];
          return \`Passenger details for seat \${seat_number}: Name: \${passenger.name}, Age: \${passenger.age}\`;
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
      
      show_waiting_list() {
          if (this.waitingList.length === 0) {
              return "Waiting list is empty";
          }
          const names = this.waitingList.map(p => p.name);
          return \`Waiting list: [\${names.join(", ")}]\`;
      }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split('\\n');
  
  const total_seats = parseInt(input[0]);
  const train = new RailwaySystem(total_seats);
  
  for (let i = 1; i < input.length; i++) {
      const cmd = input[i].trim().split(' ');
      if (cmd.length === 0) continue;
      
      switch (cmd[0]) {
          case "book":
              console.log(train.book_seat(parseInt(cmd[1]), cmd[2], parseInt(cmd[3])));
              break;
          case "cancel":
              console.log(train.cancel_booking(parseInt(cmd[1])));
              break;
          case "waiting":
              console.log(train.add_to_waiting_list(cmd[1], parseInt(cmd[2])));
              break;
          case "details":
              console.log(train.show_passenger_details(parseInt(cmd[1])));
              break;
          case "show":
              console.log(train.show_available_seats());
              break;
          case "show_waiting":
              console.log(train.show_waiting_list());
              break;
      }
  }`,
  
      "c++": 
  `#include <iostream>
  #include <map>
  #include <vector>
  #include <sstream>
  #include <algorithm>
  using namespace std;
  
  struct Passenger {
      string name;
      int age;
  };
  
  class RailwaySystem {
  public:
      int total_seats;
      map<int, string> seats;
      map<int, Passenger> passengers;
      vector<Passenger> waitingList;
      
      RailwaySystem(int total_seats) {
          this->total_seats = total_seats;
          for (int i = 1; i <= total_seats; i++) {
              seats[i] = "available";
          }
      }
      
      string book_seat(int seat_number, string name, int age) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (seats[seat_number] == "available") {
              seats[seat_number] = "booked";
              passengers[seat_number] = {name, age};
              return "Seat " + to_string(seat_number) + " booked successfully for " + name;
          }
          return "Seat " + to_string(seat_number) + " is already booked";
      }
      
      string cancel_booking(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (seats[seat_number] != "booked") {
              return "Seat " + to_string(seat_number) + " is not booked";
          }
          
          seats[seat_number] = "available";
          passengers.erase(seat_number);
          
          // Auto-book from waiting list
          if (!waitingList.empty()) {
              Passenger passenger = waitingList.front();
              waitingList.erase(waitingList.begin());
              seats[seat_number] = "booked";
              passengers[seat_number] = passenger;
              return "Seat " + to_string(seat_number) + " cancelled\\nSeat " + 
                     to_string(seat_number) + " automatically booked for " + passenger.name;
          }
          
          return "Seat " + to_string(seat_number) + " cancelled";
      }
      
      string add_to_waiting_list(string name, int age) {
          if (age <= 0 || age > 120) {
              return "Invalid age";
          }
          if (waitingList.size() >= 5) {
              return "Waiting list is full";
          }
          waitingList.push_back({name, age});
          return name + " added to waiting list";
      }
      
      string show_passenger_details(int seat_number) {
          if (seat_number < 1 || seat_number > total_seats) {
              return "Invalid seat number";
          }
          if (passengers.find(seat_number) == passengers.end()) {
              return "No passenger on seat " + to_string(seat_number);
          }
          Passenger passenger = passengers[seat_number];
          return "Passenger details for seat " + to_string(seat_number) + 
                 ": Name: " + passenger.name + ", Age: " + to_string(passenger.age);
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
      
      string show_waiting_list() {
          if (waitingList.empty()) {
              return "Waiting list is empty";
          }
          string result = "Waiting list: [";
          for (size_t i = 0; i < waitingList.size(); i++) {
              result += waitingList[i].name;
              if (i != waitingList.size() - 1) {
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
              int seat_num, age;
              string name;
              ss >> seat_num >> name >> age;
              cout << train.book_seat(seat_num, name, age) << endl;
          } else if (cmd == "cancel") {
              int seat_num;
              ss >> seat_num;
              cout << train.cancel_booking(seat_num) << endl;
          } else if (cmd == "waiting") {
              string name;
              int age;
              ss >> name >> age;
              cout << train.add_to_waiting_list(name, age) << endl;
          } else if (cmd == "details") {
              int seat_num;
              ss >> seat_num;
              cout << train.show_passenger_details(seat_num) << endl;
          } else if (cmd == "show") {
              cout << train.show_available_seats() << endl;
          } else if (cmd == "show_waiting") {
              cout << train.show_waiting_list() << endl;
          }
      }
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) {
      return userCode;
    }
  }