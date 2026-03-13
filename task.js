//Task 1
// Create a script that displays numbers from **1 to 10** on one line separated by a dash **(-)**.
// There should be **no dash at the beginning or end**.
document.write("Task 1");
document.write('<br>');
let result="";
for(let i=1; i<= 10 ; i++){
   result +=i;
   if(i<10){
    result +='-'
   }
}
document.write(result);
document.write('<br>');
//Task 2 
//Create a script using a for loop to add all integers between 0 and 30 and display the total.
document.write('Task 2');
document.write('<br>');
let sum =0;
for(let i=0; i<=30;i++){
sum +=i;
}
document.write(sum);
document.write('<br>');
//Task 3
// Write a program that prints all even numbers from 1 to 50 using a loop.
document.write('Task 3');
document.write('<br>');
for(let i=1; i<=50;i++){
    if(i%2===0){
        document.write(` ${i} `);
    }
}
document.write('<br>');
//Task 4
//Write a program that prints numbers from 10 down to 1 using a loop.
document.write('Task 4');
document.write('<br>');
for(let i=10 ; i>0;i--){
     document.write(` ${i} `);
}
document.write('<br>');
//Task 5
//Create a script to generate the following pattern using nested for loops.
document.write('Task 5');
document.write('<br>');

//code
document.write('<br>');

//Task 6
//Create a script to generate the following pattern using nested for loops.
document.write('Task 6');
document.write('<br>');

//code
document.write('<br>');
//Task 7
//Create a script to generate the following pattern using nested for loops.
document.write('Task 7');
document.write('<br>');

//code
document.write('<br>');
//Task 8
//Write a program to calculate the factorial of a number using a for loop.
document.write('Task 8');
document.write('<br>');
let factorial =1;
let input = 5;
for(let i=1;i<= input;i++){
    factorial *= i;
}
document.write(factorial);
document.write('<br>');
//Task 9
//The Fibonacci sequence starts with 0 and 1, and each next number is the sum of the previous two numbers.
document.write('Task 9');
document.write('<br>');
let num1 = 0;
let num2 = 1;
let temp;
document.writeln(num1);
for (let i = 0; i < 10; i++) {
  document.writeln(num2);
  temp = num2;
  num2 = num1 + num2;
  num1 = temp;
}
document.write('<br>');

//Task 10
//Write a program that counts the number of "c" characters in the following text:
document.write('Task 10');
document.write('<br>');
let text ="Orange Coding School";
let count =0;
for(let i=0 ;i<text.length;i++){
    if(text[i].toLowerCase() == "c"){
        count++;
    }
}
document.write(count);
document.write('<br>');
//Task 11
//Write a program that prints the multiplication table from 1 to 5 using nested loops.
document.write('Task 11');
document.write('<br>');
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        let result = j * i;
        document.write(`${j } * ${i} = ${result} <br> `)
    }
}
document.write('<br>');
//Task 12
//Write a program to generate and display the Floyd Triangle.
document.write('Task 12');
document.write('<br>');
let num = 1;
let row =5
for(let i =1; i<= row ; i++){
    for(let j = 1; j <=i ; j++){
        document.write(num + " "); 
        num++;
    }
    document.write('<br>');

}
document.write('<br>');
//Task 13
//Write a program that prints all numbers between 1 and 100 that are divisible by 7.
document.write('Task 13');
document.write('<br>');
for(let i=1;i<=100;i++){
    if(i%7==0){
          document.write(` ${i} `);
    }
}
document.write("<br>");
//Task 14
//Write a program that prints the sum of all odd numbers between 1 and 100 using a loop.
document.write('Task 14');
document.write('<br>');
let total =0;
for(let i = 1; i<=100 ; i++){
    if(i% 2 !== 0){
        total +=i;
    }
}
document.write(total);
document.write('<br>');
//Task 15
//Write a program that prints the square of numbers from 1 to 10 using a loop.
document.write('Task 15');
document.write('<br>');
let square = 1;
for (let index = 1; index <=10; index++) {
   square = Math.pow(index , 2);
   document.write(`${square} -  `)
    
}
document.write('<br>');
//Task 16
//Write a program that prints numbers from 1 to 30, but:
// - print **"Fizz"** for multiples of 3
// - print **"Buzz"** for multiples of 5
// - print **"FizzBuzz"** for multiples of both
document.write('Task 16');
document.write('<br>');
for(let i = 1 ; i<=30;i++){
    if(i % 3==0 && i%5==0 )
    {
         document.writeln(` FizzBuzz  `);
         continue;
    }
    if(i%3==0){
        document.writeln(` Fizz  `);
        continue;
    }if(i%5==0){
        document.writeln(` Buzz  `);
        continue;
    }
    document.writeln(` ${i} `);
}
document.write('<br>');
//Task 17
//Write a program that prints the following pattern using nested loops.
document.write('Task 17');
document.write('<br>');
for(let i =0; i<5;i++){
    for(let j =0 ; j<=i ;j++){
        document.write("*");
       
    }
     document.write(`<br>`);
}
  document.write(`<br>`);
  //Task 18
//Write a program that prints the following pattern using nested loops.
document.write('Task 18');
document.write('<br>');
for(let i =0; i<=4;i++){
    for(let j =4 ; j>=i ;j--){
        document.write("*")
       
    }
     document.write(`<br>`)
}

  document.write(`<br>`);
 //Task 19
//Write a program that prints the following number pattern using nested loops.
document.write('Task 19');
document.write('<br>');
for(let i =1; i<=5;i++){
    for(let j =1 ; j<=i ;j++){
        document.write(`${j}`); 
    }
     document.write(`<br>`);
}

  document.write(`<br>`);
   //Task 20
//Write a program that prints the following number pattern using nested loops.
document.write('Task 20');
document.write('<br>');
for(let i =1; i<=5;i++){
    for(let j =1 ; j<=i ;j++){
        document.write(`${i}`); 
    }
     document.write(`<br>`);
}

  document.write(`<br>`);
     //Task 21
// Write a program that prints numbers between 1 and 200 whose digit sum equals 5.
document.write('Task 21');
document.write('<br>');
for(let i =1; i<=200;i++){
   let digits = i.toString().split('');
 let sum =0;
 for(let digit of digits){
    sum +=Number(digit);
 }
   if(sum == 5){
    document.write(i);
    document.write(`<br>`)

   }
}

  document.write(`<br>`);
//Task 22
// Write a program that prints numbers between 1 and 100 where the first digit is greater than the last digit.
document.write('Task 22');
document.write('<br>');
for(let i =1; i<=100;i++){
    let digits = i.toString().split('');
    let firstDigit = Number(digits[0]);
    let lastDigit = Number(digits[digits.length -1]);
    if(digits.length > 1){
         if( firstDigit >  lastDigit){
       document.write(i + "   ");
    }
    }
   

}

    document.write(`<br>`);
//Task 23
//Write a program that prints numbers from 1 to 100 whose digits are the same.
document.write('Task 23');
document.write('<br>');
for(let i =1; i<=100;i++){
    let digits = i.toString().split('');
    let firstDigit = Number(digits[0]);
    let lastDigit = Number(digits[digits.length -1]);
    if(digits.length > 1){
         if( firstDigit == lastDigit){
        document.write(i);  
    document.write(`<br>`)
    }
    }
}
document.write(`<br>`);
// Task 24
// Write a program that prints numbers from 1 to 300 that are divisible by the product of their digits.
document.write('Task 24');
document.write('<br>');
for(let i=1; i<=300 ; i++){
     let digits = i.toString().split('');
     let product =1;
     for(let digit of digits){
         product *= Number(digit)
     }
     if(product !== 0 && i % product ==0){
  document.write(i + " ");
     }
  
}
document.write('<br>');
// Task 25
// Write a program that prints numbers between 1 and 100 where the digit sum equals the digit product
document.write('Task 25');
document.write('<br>');

for(let i=1; i<=300 ; i++){
     let digits = i.toString().split('');
     let product =1;
     let sum = 0;
     for(let digit of digits){
         product *= Number(digit);
         sum +=Number(digit);
     }
     if(product == sum && i> 9){
  document.write(i + " ");
  console.log(`${i} -> Sum: ${sum}, Product: ${product}`);
     }
  
}
document.write('<br>');
// Task 26
// Write a program that prints numbers between 1 and 500 where the reverse of the number is also divisible by 3.
document.write('Task 26');
document.write('<br>');
for(let i=1; i<=500 ; i++){
   let array =  i.toString().split('');
     let reverse =array.reverse();
  
    
    let reversedNumber = Number(reverse.join(''));
    
    
     if(i % 3 ==0 && reversedNumber % 3==0){
       
     document.write(i + " ");
     }
     
  
}
document.write('<br>');
// Task 27
// Write a program that prints numbers between 1 and 200 where the difference between digits equals 2.
document.write('Task 27');
document.write('<br>');
for(let i=1; i<=200 ; i++){
 let digits =  i.toString().split('');
 let first = Number(digits[0]);
let second = Number(digits[digits.length-1]);
if (Math.abs(first - second) === 2) {
            document.write(i + " ");
            
        }
  
     
}
document.write('<br>');
// Task 28
//Write a program that prints numbers between 1 and 500 whose digits are in ascending order..
document.write('Task 28');
document.write('<br>');
for(let i=1; i<=500 ; i++){
 let digits =  i.toString().split('');
 let isAscending = true;
 for(let j =1; j< digits.length ;j++){
    if(Number(digits[j] ) < Number(digits[j-1])){
        isAscending =false;
        break;
    }
 }
  if(isAscending ){
    document.write(i + " ");
  }
     
}
document.write('<br>');
// Task 29
//Write a program that prints numbers between 1 and 500 whose digits are in desending order..
document.write('Task 29');
document.write('<br>');
for(let i=1; i<=500 ; i++){
 let digits =  i.toString().split('');
 let isDescending = true;
 for(let j =1 ; j< digits.length ;j++){
    if(Number(digits[j] ) > Number(digits[j-1])){
        isDescending =false;
        break;
    }
 }
  if(isDescending ){
    document.write(i + " ");
  }
     
}
document.write('<br>');
// Task 30
//Write a program that prints numbers between 1 and 300 where the last digit equals the sum of the other digits.
document.write('Task 30');
document.write('<br>');

for(let i =1; i<=300; i++){
    let digits =  i.toString().split('');
    let lastDigit = 0;
    let sumoftow =0;
    if(digits.length > 1){
         lastDigit = Number(digits.pop());
    }
    for(let d of digits){
        sumoftow +=Number(d);
    }
    if(sumoftow == lastDigit){
document.write(i + " ");
    }
 }


document.write('<br>');
// Task 31
//Write a program that prints numbers between 1 and 200 where the sum of digits is greater than 10.
document.write('Task 31');
document.write('<br>');

for(let i =1; i<=300; i++){
    let digits =  i.toString().split(''); 
    let sumOfDigits =0;
    for(let j =0; j< digits.length ;j++){
        sumOfDigits += Number(digits[j]);
    }
    if(sumOfDigits > 10){
document.write(i + " ");
    }
 }


document.write('<br>');
// Task 32
//Write a program that prints numbers between 1 and 500 whose digit sum is a prime number.
document.write('Task 32');
document.write('<br>');


