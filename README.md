# ASSIGNMENT (SwiftCart E-Commerce)

## 🎯 Q/A

### 1) What is the difference between `null` and `undefined`?

#### The primary difference is that `undefined` means a variable has been declared but not assigned a value, while `null` is a value that we can explicitly assign to indicate an intentional absence of any object or data value. 

### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

#### The `map()` function in JavaScript is used to transform the elements of an array and return a new array with the results, leaving the original array unchanged. The `forEach()` method, in contrast, is used to execute a function on each element for side effects (like logging to the console or modifying an external variable) and does not return a new array. 

### 3) What is the difference between `==` and `===`?

#### In JavaScript, the primary difference is that the double equals `(==)` operator performs loose equality with type coercion, while the triple equals `(===)` operator performs strict equality without type coercion. 

### 4) What is the significance of `async`/`await` in fetching API data?

#### The significance of `async`/`await` in fetching API data is that it provides a cleaner, more readable, and synchronous-looking syntax for handling asynchronous operations, which simplifies code, improves maintainability, and enhances application responsiveness. It is essentially "syntactic sugar" built on top of JavaScript Promises, offering a more intuitive way to manage complex data flows and error handling. 

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

#### In JavaScript, scope defines the accessibility or visibility of variables, functions, and objects in a particular part of your code. The three main types are Global, Function, and Block scope, which control where variables can be accessed. 

##### Global Scope
- Variables declared outside of any function or block are in the global scope. 
- Accessibility: They are accessible from anywhere in your code, including inside functions and blocks.
- Keywords: `var`, `let`, and `const` all create global variables when declared at the top level of a script.
##### Function Scope
- Variables declared inside a function are in the function scope.
- Accessibility: They are only accessible within the function in which they are defined.
##### Block Scope
- Accessibility: They are only accessible within the specific block (e.g., if statements, for loops, or standalone blocks) where they are declared.
- `var` behavior: Variables declared with `var` do not have block scope; they are function-scoped or globally scoped, meaning they "escape" the block. 