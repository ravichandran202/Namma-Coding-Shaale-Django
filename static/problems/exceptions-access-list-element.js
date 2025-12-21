module.exports = {
  "title": "Safe List Access – Exception Handling",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Write a function that safely accesses a list element at a given index and handles out-of-range errors.</p>
    <p><b>Your Task:</b></p>
    <ol>
      <li>Read the list size <code>n</code></li>
      <li>Read <code>n</code> integers as a list</li>
      <li>Read an index <code>idx</code></li>
      <li>Create a function <code>get_element(arr, idx)</code></li>
      <li>The function should return the element at index <code>idx</code></li>
      <li>If index is out of range, catch the <code>IndexError</code></li>
      <li>Return <code>"Index Error"</code> when index is invalid</li>
      <li>Call the function and print the result</li>
    </ol>
    <p><b>Important:</b> Use try-except block to handle the exception.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
1 2 3 4 5
10
Output:
Index Error</pre>
    <p><b>Explanation:</b> Index 10 is out of range for a list of size 5.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
1 2 3 4 5
2
Output:
3</pre>
    <p><b>Explanation:</b> Index 2 is valid, returns element 3 (0-based indexing).</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Index Error", 
      "stdinput": "5\n1 2 3 4 5\n10",
      "explanation": "Index 10 out of range for list size 5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "3", 
      "stdinput": "5\n1 2 3 4 5\n2",
      "explanation": "Valid index, returns element 3" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "10", 
      "stdinput": "3\n10 20 30\n0",
      "explanation": "First element at index 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "200", 
      "stdinput": "2\n100 200\n-1",
      "explanation": "Negative index out of range" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "50", 
      "stdinput": "4\n10 20 30 50\n3",
      "explanation": "Last element at index 3" 
    }
  ],

  "templates": {
    "python": 
`def get_element(arr, idx):
    try:
        return arr[idx]
    except IndexError:
        return "Index Error"

# main code
n = int(input())
arr = list(map(int, input().split()))
idx = int(input())
print(get_element(arr, idx))`,

    "java": 
`import java.util.*;

public class Main {
    public static String get_element(int[] arr, int idx) {
        try {
            return String.valueOf(arr[idx]);
        } catch (ArrayIndexOutOfBoundsException e) {
            return "Index Error";
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int idx = sc.nextInt();
        System.out.println(get_element(arr, idx));
    }
}`,

    "javascript": 
`function get_element(arr, idx) {
    try {
        if (idx < 0 || idx >= arr.length) {
            throw new Error("Index out of bounds");
        }
        return arr[idx].toString();
    } catch (error) {
        return "Index Error";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
readline.on('line', (line) => {
    input.push(line);
});

readline.on('close', () => {
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    const idx = parseInt(input[2]);
    console.log(get_element(arr, idx));
});`,

    "c++": 
`#include <iostream>
#include <vector>
#include <string>
using namespace std;

string get_element(vector<int> arr, int idx) {
    try {
        if (idx < 0 || idx >= arr.size()) {
            throw out_of_range("Index out of bounds");
        }
        return to_string(arr[idx]);
    } catch (out_of_range& e) {
        return "Index Error";
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int idx;
    cin >> idx;
    cout << get_element(arr, idx);
    return 0;
}`
  },

  "wrapCode": function(lang, userCode) {
    return userCode;
  }
}