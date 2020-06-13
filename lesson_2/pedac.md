# Understand the Problem
- read problem carefully, don’t miss details
- identify inputs and outputs, make the requirements explicit and identify implicit requirements
- answer clarifying questions
- develop a mental model like a summary of the entire problem, the what and not the how yet

# Examples/Test Cases
-come up with actual examples that validate our understanding and confirm we are going in the right direction
-also provide edge cases, like if iterating over numbers, the edge cases may be the ends of the range of numbers, typical edge cases involve negatives or zero

# Data Structure
determine what data structure you can work with to convert input to output
the data structure chosen will influence algorithm used, so Data Structure and Algorithm are often paired together

# Algorithm
series of instructions that transform input to output, enough detail and readily converted to code but not actual code
if it was in a programming language, you lose flexibility during implementation, programming languages often provide multiple ways to achieve something, so making implementation choices too soon is not ideal
also not uncommon to change the algorithm once coding starts, don’t feel constrained
test algorithm manually to test cases
is this where we write pseudocode? 

# Code with Intent
implement solution in programming language
don’t be alarmed if you have to circle back to algorithm


# Pseudocode practice
1) a function that returns the sum of two numbers

Get inputs of two numbers
Set first to num1 and second to num2
Return the sum of num1 and num2

START

GET two numbers
SET num1 = first number
SET num2 = second number

PRINT num1 + num2

END

2) a function that takes an array of strings, and returns a string that is all those strings concatenated together

Get a collection of strings
Save a variable with empty string
Iterate through the collection one by one
  Take each value in collection and add it to the earlier declared variable
Return the saved variable that is no longer an empty string

START

Given an array of strings

SET str = ''
WHILE iterator <= length of array
  str = add string elements in array to str variable

PRINT str

END

3) a function that takes an array of integers, and returns a new array with every other element

Get a collection of integers
Determine how many integers are in collection
Recognize that each integer has a numerical index position
Declare a variable newArr that is assigned an empty array
Iterate over elements in the array
  Check the index of each element
  If index number is not odd, then move that element into newArr
Return newArr
