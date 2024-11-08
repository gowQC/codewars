function decipher(code) {
    let result = ""; // result string to be returned
    let sum = 0;
    
    for (let i=0;i<code[0].length;i++) { // all strings share same length according to prompt
      for(let k=0; k<code.length; k++) { // iterates through each string found in array
        if (code[k].charAt(i) === ' ') continue; // if space char, continue with iteration (or add 0 if you wish)
        else { // if an actual letter, get value from char and add to sum
          sum += (code[k].charCodeAt(i) - 96);
        }
      }
      if (sum/code.length < 1) { // makes sure fromCharCode method returns an empty space to be added to result 
        result += String.fromCharCode(32);
      }
      else { // gets char average. +96 is to account for the fact that characters are lowercase 
        result += String.fromCharCode((sum/code.length)+96);
      }
      sum = 0;
    }
    return result;
}

// https://www.codewars.com/kata/671bd5419ea261fbb8d0a0ca