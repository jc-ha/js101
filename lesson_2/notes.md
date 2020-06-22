* Assignment: Calculator Bonus 1

Problem
ask user if they'd like to run another calculation
input: y/n
output: another run of code
just need to be able to repeat the code again if they answer y
Example
y
Data Structure
Just a string y or n
Algorithm
use a loop with a that checks if answer is y and keeps running 
affirmative 
make functions out of much of the code to keep while simple

* Assignment: Mortgage Calculator

Problem
inputs: loan amount, APR in percents, loan duration in years
output: monthly mortgage payment in dollars and cents
calculate proper floats for percents
calculate monthly interest rate = interest/12
calcuate duration of months from years
use parseFloat to convert percentage rates to numbers
Examples
p = 200000
apr = 4%
durationYears = 30
monthly mortgage payment = 954.83
Data Structures
Strings are provided as answers to readline-sync question
Convert to numbers using parseFloat
Algorithm
1. Ask for inputs
2. Calculate intermediary values
3. Enter those inputs into calculation
  1. If interest is 0, just do loan divided by months
  2. If interest is normal, 
4. Output m
let m = p * (j / (1 - Math.pow((1 + j), (-n)))); // monthly payment





















