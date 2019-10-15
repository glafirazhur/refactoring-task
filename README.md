# Code refactoring 
To see the solution please checkout to the **refactoring** branch
`git checkout refactoring` 

## Work description
1. ESLint was added for the code style checking (airbnb config).
2. The Index HTML was changed:
    - added the HTML5 doctype    
    - removed all the scripts except the price-calculator.js script connection
    - the form was added to fill the data for the calculation. Also, the base styles for the form were added
3. price-calculator.js was changed
    - the code was changed by the ESLint and ES2015+ standards requirements 
    - the calculation algorithm was changed (unreadable switch and repeating actions were removed, no extra checks)
    - the calc button click now takes the data from the form and calls the **calculatePrice** calc function
    - The try...catch statement moved to the calc button click event

## Additional work
1. Add a fields validation
2. Add a better styled interface for the project :)
3. Separate the development process from the production
4. Run the tests from the console (npm), not from the external html file
5. Improve the test coverage
