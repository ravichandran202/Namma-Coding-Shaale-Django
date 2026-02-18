module.exports = {
    "title": "Bank Account – Deposit & Withdraw",
    "difficulty": "medium",
    "acceptance": "92%",
  
    "description": `
      <p>Extend the <code>BankAccount</code> class by adding <b>deposit</b> and <b>withdraw</b> methods.</p>
      <p><b>Rules:</b></p>
      <ul>
        <li><code>deposit(amount)</code> adds money to the balance</li>
        <li><code>withdraw(amount)</code> subtracts money only if balance is sufficient</li>
        <li>If not enough balance → print <code>Insufficient Balance</code></li>
      </ul>
  
      <p>You will receive multiple commands like:</p>
      <pre>deposit 200
withdraw 500</pre>
    `,
  
    "examples": `
      <h3>Example</h3>
      <pre class="constraints">Input:
1000
deposit 200
withdraw 500
withdraw 900

Output:
Balance: 1200
Balance: 700
Insufficient Balance</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Balance: 1200\nBalance: 700\nInsufficient Balance", "stdinput": "1000\ndeposit 200\nwithdraw 500\nwithdraw 900" },
      { "id": 2, "input": [], "expected": "Balance: 1500\nBalance: 500", "stdinput": "1000\ndeposit 500\nwithdraw 1000" },
      { "id": 3, "input": [], "expected": "Insufficient Balance", "stdinput": "200\nwithdraw 500" }
    ],
  
    "templates": {
      "python":
  `class BankAccount:
      def __init__(self, balance):
          self.balance = balance
  
      def deposit(self, amount):
          self.balance += amount
          print("Balance:", self.balance)
  
      def withdraw(self, amount):
          if self.balance >= amount:
              self.balance -= amount
              print("Balance:", self.balance)
          else:
              print("Insufficient Balance")
  
  # main code
initial_balance = int(input())
account = BankAccount(initial_balance)

while True:
    try:
        cmd = input().split()
    except EOFError:
        break

    if cmd[0] == "deposit":
        account.deposit(int(cmd[1]))
    elif cmd[0] == "withdraw":
        account.withdraw(int(cmd[1]))`,
      
      "java":
  `import java.util.*;
  
  class BankAccount {
      int balance;
      BankAccount(int balance) { this.balance = balance; }
  
      void deposit(int amount) {
          balance += amount;
          System.out.println("Balance: " + balance);
      }
  
      void withdraw(int amount) {
          if (balance >= amount) {
              balance -= amount;
              System.out.println("Balance: " + balance);
          } else {
              System.out.println("Insufficient Balance");
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int balance = Integer.parseInt(sc.nextLine());
          BankAccount acc = new BankAccount(balance);
  
          while (sc.hasNextLine()) {
              String[] cmd = sc.nextLine().split(" ");
              if (cmd[0].equals("deposit")) acc.deposit(Integer.parseInt(cmd[1]));
              else if (cmd[0].equals("withdraw")) acc.withdraw(Integer.parseInt(cmd[1]));
          }
      }
  }`,
      
      "javascript":
  `class BankAccount {
      constructor(balance) { this.balance = balance; }
  
      deposit(amount) {
          this.balance += amount;
          console.log("Balance:", this.balance);
      }
  
      withdraw(amount) {
          if (this.balance >= amount) {
              this.balance -= amount;
              console.log("Balance:", this.balance);
          } else {
              console.log("Insufficient Balance");
          }
      }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split("\\n");
  
  let acc = new BankAccount(parseInt(input[0]));
  
  for (let i = 1; i < input.length; i++) {
      const [cmd, val] = input[i].split(" ");
      if (cmd === "deposit") acc.deposit(parseInt(val));
      else if (cmd === "withdraw") acc.withdraw(parseInt(val));
  }`,
      
      "c++":
  `#include <iostream>
  #include <sstream>
  using namespace std;
  
  class BankAccount {
  public:
      int balance;
      BankAccount(int balance) { this->balance = balance; }
  
      void deposit(int amount) {
          balance += amount;
          cout << "Balance: " << balance << endl;
      }
  
      void withdraw(int amount) {
          if (balance >= amount) {
              balance -= amount;
              cout << "Balance: " << balance << endl;
          } else {
              cout << "Insufficient Balance" << endl;
          }
      }
  };
  
  int main() {
      int bal;
      cin >> bal;
      cin.ignore();
      BankAccount acc(bal);
  
      string line;
      while (getline(cin, line)) {
          if (line == "") continue;
          stringstream ss(line);
          string cmd; int val;
          ss >> cmd >> val;
  
          if (cmd == "deposit") acc.deposit(val);
          else if (cmd == "withdraw") acc.withdraw(val);
      }
      return 0;
  }`
    },

  
    "solutions": {
      "python":
  `class BankAccount:
      def __init__(self, balance):
          self.balance = balance
  
      def deposit(self, amount):
          self.balance += amount
          print("Balance:", self.balance)
  
      def withdraw(self, amount):
          if self.balance >= amount:
              self.balance -= amount
              print("Balance:", self.balance)
          else:
              print("Insufficient Balance")
  
  # main code
initial_balance = int(input())
account = BankAccount(initial_balance)

while True:
    try:
        cmd = input().split()
    except EOFError:
        break

    if cmd[0] == "deposit":
        account.deposit(int(cmd[1]))
    elif cmd[0] == "withdraw":
        account.withdraw(int(cmd[1]))`,
      
      "java":
  `import java.util.*;
  
  class BankAccount {
      int balance;
      BankAccount(int balance) { this.balance = balance; }
  
      void deposit(int amount) {
          balance += amount;
          System.out.println("Balance: " + balance);
      }
  
      void withdraw(int amount) {
          if (balance >= amount) {
              balance -= amount;
              System.out.println("Balance: " + balance);
          } else {
              System.out.println("Insufficient Balance");
          }
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int balance = Integer.parseInt(sc.nextLine());
          BankAccount acc = new BankAccount(balance);
  
          while (sc.hasNextLine()) {
              String[] cmd = sc.nextLine().split(" ");
              if (cmd[0].equals("deposit")) acc.deposit(Integer.parseInt(cmd[1]));
              else if (cmd[0].equals("withdraw")) acc.withdraw(Integer.parseInt(cmd[1]));
          }
      }
  }`,
      
      "javascript":
  `class BankAccount {
      constructor(balance) { this.balance = balance; }
  
      deposit(amount) {
          this.balance += amount;
          console.log("Balance:", this.balance);
      }
  
      withdraw(amount) {
          if (this.balance >= amount) {
              this.balance -= amount;
              console.log("Balance:", this.balance);
          } else {
              console.log("Insufficient Balance");
          }
      }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf8').trim().split("\\n");
  
  let acc = new BankAccount(parseInt(input[0]));
  
  for (let i = 1; i < input.length; i++) {
      const [cmd, val] = input[i].split(" ");
      if (cmd === "deposit") acc.deposit(parseInt(val));
      else if (cmd === "withdraw") acc.withdraw(parseInt(val));
  }`,
      
      "c++":
  `#include <iostream>
  #include <sstream>
  using namespace std;
  
  class BankAccount {
  public:
      int balance;
      BankAccount(int balance) { this->balance = balance; }
  
      void deposit(int amount) {
          balance += amount;
          cout << "Balance: " << balance << endl;
      }
  
      void withdraw(int amount) {
          if (balance >= amount) {
              balance -= amount;
              cout << "Balance: " << balance << endl;
          } else {
              cout << "Insufficient Balance" << endl;
          }
      }
  };
  
  int main() {
      int bal;
      cin >> bal;
      cin.ignore();
      BankAccount acc(bal);
  
      string line;
      while (getline(cin, line)) {
          if (line == "") continue;
          stringstream ss(line);
          string cmd; int val;
          ss >> cmd >> val;
  
          if (cmd == "deposit") acc.deposit(val);
          else if (cmd == "withdraw") acc.withdraw(val);
      }
      return 0;
  }`
    },
  
    "wrapCode": function(lang, userCode) { return userCode; }
  }
  