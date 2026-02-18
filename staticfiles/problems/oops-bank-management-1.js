module.exports = {
  "title": "Bank Account – Class Instantiation",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Create a simple <code>BankAccount</code> class that stores the initial balance using a constructor.</p>
    <p><b>Your Task:</b></p>
    <ol>
      <li>Read an integer representing the initial balance.</li>
      <li>Create a class <code>BankAccount</code> with a constructor that accepts this balance.</li>
      <li>Create an object of the class.</li>
      <li>Print the initial balance.</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
1000
Output:
Initial Balance: 1000</pre>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Initial Balance: 1000", "stdinput": "1000" },
    { "id": 2, "input": [], "expected": "Initial Balance: 500", "stdinput": "500" },
    { "id": 3, "input": [], "expected": "Initial Balance: 7500", "stdinput": "7500" }
  ],

  "templates": {
    "python": 
`class BankAccount:
    def __init__(self, balance):
        self.balance = balance

# main code
initial_balance = int(input())
account = BankAccount(initial_balance)
print("Initial Balance:", account.balance)`,
    
    "java": 
`import java.util.*;

class BankAccount {
    int balance;
    BankAccount(int balance) {
        this.balance = balance;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        BankAccount acc = new BankAccount(balance);
        System.out.println("Initial Balance: " + acc.balance);
    }
}`,
    
    "javascript": 
`class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    const balance = parseInt(input);
    const acc = new BankAccount(balance);
    console.log("Initial Balance:", acc.balance);
    readline.close();
});`,

    "c++": 
`#include <iostream>
using namespace std;

class BankAccount {
public:
    int balance;
    BankAccount(int balance) {
        this->balance = balance;
    }
};

int main() {
    int balance;
    cin >> balance;
    BankAccount acc(balance);
    cout << "Initial Balance: " << acc.balance;
    return 0;
}`
  },


  "solutions": {
    "python": 
`class BankAccount:
    def __init__(self, balance):
        self.balance = balance

# main code
initial_balance = int(input())
account = BankAccount(initial_balance)
print("Initial Balance:", account.balance)`,
    
    "java": 
`import java.util.*;

class BankAccount {
    int balance;
    BankAccount(int balance) {
        this.balance = balance;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int balance = sc.nextInt();
        BankAccount acc = new BankAccount(balance);
        System.out.println("Initial Balance: " + acc.balance);
    }
}`,
    
    "javascript": 
`class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (input) => {
    const balance = parseInt(input);
    const acc = new BankAccount(balance);
    console.log("Initial Balance:", acc.balance);
    readline.close();
});`,

    "c++": 
`#include <iostream>
using namespace std;

class BankAccount {
public:
    int balance;
    BankAccount(int balance) {
        this->balance = balance;
    }
};

int main() {
    int balance;
    cin >> balance;
    BankAccount acc(balance);
    cout << "Initial Balance: " << acc.balance;
    return 0;
}`
  },

  "wrapCode": function(lang, userCode) {
    return userCode;
  }
}
