let x = 5;
let y = 10;
function secureEval(hack_string){
  // 0 risk eval calculator
  const hackerMsg = 'Sorry u can not hack my systems';
  const whiteList = ['',' ', 'x', 'y','+','*','/','-'];
  let x_length = 0;
  let y_length = 0;
  for (let i=0; i<hack_string.length; i++){  
    if (hack_string[i] === 'x'){
       x_length += 1;
    }
    if (hack_string[i] === 'y'){
       y_length += 1;
    }
    
    if (x_length > 1 || y_length > 1 || !whiteList.includes(hack_string[i])){
      return hackerMsg;
      break;
    }
  }
  return eval(hack_string);
}

document.getElementById("demo").innerHTML = secureEval('x * y');
