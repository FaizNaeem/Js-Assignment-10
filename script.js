// 1st Assignment Loops And Array[]
// var arr =[[],[],[]];
// arr.push([]);
// arr[0]="1";
// arr[1]="2";
// arr[2]="3";
// arr[3]="4";
// console.log(arr)
// 2nd Assignment Loops And Array[]
// var myMatrix = [[0,1,2,3 ], [1, 0, 1,2], [2, 1, 0,1]];

// // var c= myMatrix.split(" ");
// console.log(myMatrix)
// 3rd Assignment Loops And Array[]
// for(var i=0; i<=10; i++ ){
// document.write(i)
// }
// 4th Assignment Loops And Array[]
// var table= prompt("enter table num")
// var leng= prompt("enter length")
// for(var i=1; i<=leng; i++)
// {
//     document.write(table+" " +"*" +" "+[i]+"="+ " "+ table*[i]+"<br>" )
// }
// 5th Assignment Loops And Array[]
// var fruits = ["apple", "banana", "mango", "orange","strwberry"]
// var b= fruits.indexOf(prompt("apple banana mango orange strwberry"))
// document.write("index num is:"+b)
// 6th  Assignment 
// var counting = '';
// for (var i = 1; i <= 15; i++) {
//   counting += i + ', ';
// }
// console.log('Counting: ' + counting);
// let reverseCounting = '';
// for (var i = 10; i >= 1; i--) {
//   reverseCounting += i + ', ';
// }
// console.log('Reverse counting: ' + reverseCounting);
// var even = '';
// for (var i = 0; i <= 20; i+=2) {
//   even += i + ', ';
// }
// console.log('Even: ' + even);
// var odd = '';
// for (var i = 1; i <= 19; i+=2) {
//   odd += i + ', ';
// }
// console.log('Odd: ' + odd);
// var series = '';
// for (var i = 2; i <= 20; i+=2) {
//   series += i + 'k, ';
// }
// console.log('Series: ' + series);
// 7th assignment
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter the item you want to search:").toLowerCase();

// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(userInput + " is found in the list at index " + A.indexOf(userInput));
// } else {
//   alert(userInput + " is not found in the list.");
// }
// 8th assignment
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// console.log("The largest number in the array is: " + largest);
// 9th assinment
// let b = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < b.length; i++) {
//   if (b[i] < smallest) {
//     smallest = b[i];
//   }
// }

// console.log("The smallest number in the array is: " + smallest);
// 10th assignment
for(var i=0; i<=20; i++){
    document.write(i*5)
}