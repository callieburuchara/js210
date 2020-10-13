// Can we insert data into an array at a negative index?
//
// Yes, we can do this since all arrays are objects in JavaScript. You will learn more about this in the next lesson, but for now, try these statements on the digits array you used above and examine the return values.

digits[-1] = -42;
nthElementOf(digits, -1);
digits[-1];
digits['-1'];    // Note that we are using a string here

//There is a slight nuance here: the added element becomes part of the "array object," but it isn't properly one of the array elements. The digits.length property, for instance, remains unchanged.
