/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

function greetByName(msg, name) {
  return `${msg}, ${name}`;
}

console.log(greetByName("Hi", "John")); // Hi, John
console.log(greetByName("Hey", "Bob")); // Hey, Bob
console.log(greetByName("Hello", "Mary")); // Hello, Mary

const testDataGreet = [
  ["Hi", "John", "Hi, John"],
  ["Hey", "Bob", "Hey, Bob"],
  ["Hello", "Mary", "Hello, Mary"],
];

document.write(`<br /># 2. greetByName<br />`);

testDataGreet.forEach((test) => {
  const [msg, name, expectedResult] = test;
  const actualResult = greetByName(msg, name);
  document.write(
    `Test greetByName(msg, name) as ${msg}, ${name} equals ${expectedResult}: `,
    actualResult === expectedResult ? "✅" : "🔴",
    "<br />"
  );
});
