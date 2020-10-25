function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
- This code will log 'debugging' because debugIt()
calls the function by that name. Inside this function,
logger() is invoked. Inside logger(), there is a need for
a variable named status. It was defined on line 2 to 
'debugging', so it is used. All of these functions and 
variables are accessible where needed because any variables
declared in an outer scope are available in the inner scope. This is all due to lexical scoping rules. 
*/
