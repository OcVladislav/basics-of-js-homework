/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

// Your code here.

const drawTriangle = (n, symbol) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += symbol;
    console.log(str);
  }
};

drawTriangle(7, "#");
