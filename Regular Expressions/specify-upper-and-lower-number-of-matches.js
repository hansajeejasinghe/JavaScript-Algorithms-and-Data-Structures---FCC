let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

//Remember to use \s after Oh{3,6} to include a white space, followed by no to pass all test cases.