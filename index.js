// Task 1

// function numberSplit(number) {
//   let firstHalf = Math.floor(number / 2);
//   let secondHalf = number - firstHalf;
//   return [firstHalf, secondHalf];
// }

// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9));

// Task 2

// function sumOfCub(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//   }
//   return sum;
// }

// console.log(sumOfCub([1, 5, 9]));
// console.log(sumOfCub([3, 4, 5]));
// console.log(sumOfCub([2]));
// console.log(sumOfCub([]));

// Task 3

// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return [min, max];
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([-10, 0, 10, 100]));

// Task 4

// function findPrimeNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// console.log(findPrimeNumber([4, 12, 42, 9, 12, 3]));
// console.log(findPrimeNumber([123, 42, 93, 21, 11]));

// Task 5

// function func(arr) {
//   let num1 = arr[0];
//   let num2 = arr[1];
//   let result = 0;

//   for (let i = 0; i < Math.abs(num2); i++) {
//     result += num1;
//   }

//   if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
//     result = -result;
//   }

//   return result;
// }

// console.log(func([3, 4]));
// console.log(func([2, 4]));

// Task 6

// function returnVowel(arr) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let result = [];

//   for (let word of arr) {
//     let onlyVowels = '';
//     for (let char of word) {
//       if (vowels.includes(char.toLowerCase())) {
//         onlyVowels += char.toLowerCase();
//       }
//     }
//     result.push(onlyVowels);
//   }

//   return result;
// }

// console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"])); 
// console.log(returnVowel(["Toshkent"]));

// Task 7

// function formatPhoneNumber(numbers) {
//   if (numbers.length !== 10) return "Invalid input";

//   const areaCode = numbers.slice(0, 3).join('');
//   const firstPart = numbers.slice(3, 6).join('');
//   const secondPart = numbers.slice(6).join('');

//   return `(${areaCode}) ${firstPart}-${secondPart}`;
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

// Task 8

// function spelling(word) {
//   let result = [];
//   let current = "";

//   for (let i = 0; i < word.length; i++) {
//     current += word[i];
//     result.push(current);
//   }

//   return result;
// }

// console.log(spelling("bee"));
// console.log(spelling("happy"));
// console.log(spelling("eagerly"));

// Task 9

// function chatroomStatus(users) {
//   const count = users.length;

//   if (count === 0) {
//     return "no one online";
//   } else if (count === 1) {
//     return `${users[0]} online`;
//   } else if (count === 2) {
//     return `${users[0]} and ${users[1]} online`;
//   } else {
//     return `${users[0]}, ${users[1]} and ${count - 2} more online`;
//   }
// }

// console.log(chatroomStatus([])); 
// console.log(chatroomStatus(["paRIE_to"])); 
// console.log(chatroomStatus(["s234f", "mailbox2"])); 
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));

// Task 10

function countTrue(arr) {
  let count = 0;

  for (let val of arr) {
    if (val === true) {
      count++;
    }
  }

  return count;
}
console.log(countTrue([true, false, false, true, false])); 
console.log(countTrue([false, false, false, false])); 
console.log(countTrue([])); 
