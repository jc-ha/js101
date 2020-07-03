# easy1-1

  Problem
input: one positive/negative/zero integer
output: boolean, true if absolute value is odd

assume valid integer
what is absolute value? a magnitude, either positive or zero

determine if the positive value of the argument is an odd 
number, and if yes, return true, and if no, return false

  Examples
I: 2, O: false
I: 3, O: true
I: 0, O: false

  Data Structure
a number is provided

  Algorithm
1. determine if integer is positive or negative; if negative, turn 
it into a positive
2. take integer and check if remainder of number/2 does not equal 0
  1. if does not equal 0, return true
  2. if does equal 0, return false

# easy1-2

  Problem
input:
output: log all odd numbers between 1-99, including ends
log on separate lines
start counting from 1 to 99 and log any odd number

  Examples
O: 1, 3, 5, 7, 9

  Data Structure
Just counting up in increments

  Algorithm
1. Set i = 1 and check that it is less than 100
2. If yes, go on, if no, stop
  1. Check if i is an odd number
  2. If yes, go on, if no, increment i and go back to loop
    1. Log i, increment i, go back to loop

  Further Exploration
Ask for input on limits of numbers
Save those inputs and use them as arg for function
Negative integers?

# easy1-4

  Problem
input: length, width of room in meters
output: logs to console area of room in sq m and sq ft
1 sq m == 10.7639 sq ft
User will provide inputs and those inputs will be used to calculate
area in sq m first and then that will be converted to sq ft and then
both will be logged to the console
  Examples
width = 7 m, length = 10 m 
area = 70 m
Do not let user enter invalid number like 0 m for either variables
  Data Structure
User will be asked a question to input, so the values will come in
as strings, will need to coerce them to numbers
  Algorithm
Ask user for inputs for length and width
Validate both values
Coerce string values to numbers
AreaM = length * width
AreaFt = AreaM * 10.7639
Log both values
  Further Exploration
Run code to determine which measurement the inputs are in

# easy1-5

  Problem
inputs: bill amount, tip rate in percentage
outputs: log tip amount, total amount 
tip rate will be entered as percentage, must convert it to decimal
get the inputs and calculate the tip and then add it to the bill 
amount and log tip and total
cannot receive negative numbers or non-numeric values
  Examples
bill = 55, tip = 20
tip = 11, total = 66
bill = 10, tip = 0
tip = 0, total = 10
  Data Structure
Numbers received, do a validation even though problems assumes
  Algorithm
Ask for inputs and assign them to variables
Calculate the decimal of the tip rate
Calculate the tip and assign it to variable
Add tip to bill amount and log both

# easy1-7

  Problem
inputs: strings of different length
output: one string with shorter str sandwiching longer str
determine the longer of two str

# easy1-8

  Problem
input: year above 0
output: boolean
leap year if:
  evenly divisible by 4 AND NOT evenly divisible by 100
    ||
  evenly divisible by 100 AND 400 -- if it is divisible by 400, 
  then it is divisible by 100
  Examples
2000 
  Data Structure
Numbers

# easy1-9

  Problem
input: year above 0
output: boolean
different leap year standards - differentiate between before 1752
and 1752

# easy1-10

  Problem
input: number
output: sum
compute sum of all multiples of 3 and 5 between 1 and number,
inclusive of 1 and number
  Examples
20
  Data Structure
Numbers
  Algorithm
Count up to number and check for multiples of 3 or 5 on the way up
Add those numbers to a total as you count up

# easy1-11

  Problem
input: string
output: ASCII string value, which is the sum of the ASCII values
of every character in the strin
use charCodeAt() to determine ASCII value of character
  Examples
'hello' - sum of the values of the five characters
  Data Structure
strings
  Algorithm
Loop through the string and determine the ASCII value and add them 
to a total
