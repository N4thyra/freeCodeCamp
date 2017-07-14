// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Boolean Objects
// Array.prototype.filter()

// 1. Solution
// function bouncer(arr) {
//   return arr.filter(item => item)
// }

// 2. Solution
function bouncer(arr) {
  return arr.filter(function(item) {
      if(item != false | undefined | 0 | "" | null) {
		      return item;
	    }
  });
}

bouncer([7, "ate", "", false, 9]);
