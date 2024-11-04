/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}

const actualResult = sumBigIntegers("9007199254740991", "9007199254740991");
const expectedResult = 18014398509481982n;

console.log(actualResult);

document.write(`<br /># 3. sumBigIntegers<br />`);

document.write(
  `Test sumBigIntegers('9007199254740991', '9007199254740991') as ${actualResult} equals ${expectedResult}: `,
  actualResult === expectedResult ? "✅" : "🔴",
  "<br />"
);
