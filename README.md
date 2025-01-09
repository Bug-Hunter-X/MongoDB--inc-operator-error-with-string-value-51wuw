# MongoDB $inc operator error with string value

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator.  The error arises from using a string value instead of a numeric value for incrementing a field.

## Bug Description
The `$inc` operator is used to increment a numeric field in a MongoDB document.  If a string value is provided instead of an integer or a floating-point number, the operation might fail or produce unexpected results. 

## How to Reproduce
1. Clone this repository.
2. Install MongoDB and connect to a running instance.
3. Run `bug.js` to see the error. 
4. Run `bugSolution.js` to see the correct usage.

## Solution
Always use numeric values (integer, float) with the `$inc` operator.  Using strings will cause issues. Refer to `bugSolution.js` for the correct implementation.