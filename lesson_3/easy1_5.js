/* What will the following code output?

console.log(false == '0');
console.log(false === '0');

The following code outputs:

console.log(false == '0')
- This outputs 'true' because it uses the loose equality operator, = . 
That operator automatically converts 'false' to a number 0, which then makes
0 = 0, which is true.

console.log(false === '0');
- This outputs 'false' because it uses the strict equality operator. Which
means if the argument 'false' is not a number , JavaScript
doesn't automatically converert 'false' into a number; and therefore it returns
'false'.







*/