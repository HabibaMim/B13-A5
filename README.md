1️⃣ What is the difference between var, let, and const?

Answer: var, let and const are variables but there is difference between them. The values of var and let can be reassigned but for const its value can not be reassigned. var is not block scoped meaning while used inside blocks like for, if its value can be accessible from outside of it. But let and const are block scoped, their value is only accessible inside the block where they are used. It is better to avoid var because it can display unpredictable behaviour.



2️⃣ What is the spread operator (...)?

Answer: Spread operator can be used to expand iterables like arrays or strings into individual elements. It is written with three dots(...). We can use spread operator to quickly copy all the parts of an array or object into another array or object. We can also use it to merge or pass array elements into function without explicitly iterating through them.


3️⃣ What is the difference between map(), filter(), and forEach()?

Answer: In case of arrays, forEach() method runs a function for each element in an array, but it does not create a new array. filter() method creates new array of elements from an existing array, it takes the elements that fulfill a condition. It does not change the original array. Map() transforms each element in an array and creates a new array of the transformed elements.



4️⃣ What is an arrow function?

Answer: Arrow function has a shorter syntax than regular function expression. The keyword "function" is not needed for arrow functions. In case of a single parameter bracket around the parameter is not needed either. For single statement function written in one line, the second bracket {} and "return" are not needed either. But in case of multiple statements they are needed. => is used to write an arrow function. An example of arrow function is: const x =(a,b) => a+b;



5️⃣ What are template literals?

Answer: Template literals can be used to create strings dynamically. It is written using backtick ``. Inside it any variable can be written using ${}. We can also write HTML codes inside template literals. But for the code to execute and display its results in the webpage it must be inserted into the DOM. It can be also used to write multiple line string.